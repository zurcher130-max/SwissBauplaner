import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { server } from './server.mjs';
let base;
before(async () => { await new Promise(resolve => server.listen(0, '127.0.0.1', resolve)); base = `http://127.0.0.1:${server.address().port}`; });
after(() => new Promise(resolve => server.close(resolve)));
test('Homepage liefert vollständige Navigation und die bestätigten Kontaktdaten', async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const target of [...html.matchAll(/href="#([^"]+)"/g)]) assert.ok(html.includes(`id="${target[1]}"`), `Ziel ${target[1]} fehlt`);
  for (const content of ['swiss Bauplaner AG', 'Weiacherstrasse 58', '8422 Pfungen', 'mailto:info@swiss-bauplaner.ch', 'tel:+41523156000']) assert.ok(html.includes(content));
});
test('Alle eingebundenen lokalen Ressourcen sind erreichbar', async () => {
  const html = await (await fetch(base)).text();
  for (const match of html.matchAll(/(?:src|href)="(\/[^\"]+)"/g)) {
    const response = await fetch(base + match[1]);
    assert.equal(response.status, 200, match[1]);
    assert.ok((await response.text()).length > 0);
  }
});
test('Server gibt keine Projektdateien oder unbekannten Pfade aus', async () => {
  for (const pathname of ['/package.json', '/server.mjs', '/.git/config', '/nicht-vorhanden', '/%2e%2e%2fpackage.json']) assert.equal((await fetch(base + pathname)).status, 404, pathname);
});
