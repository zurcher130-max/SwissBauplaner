# Swiss Bauplaner

Responsiver Website-Entwurf für Architekturleistungen. HTML, CSS und JavaScript ohne externe Laufzeitabhängigkeiten. Die Architekturillustration ist ein lokal erstelltes SVG, kein Referenzprojekt oder Foto eines realen Gebäudes.

## Lokal starten

Node.js 20 oder neuer. Keine Installation von Paketen nötig.

```sh
npm start
```

Der Server läuft auf Port 3000; alternativ `PORT=3001 npm start`. Prüfung: `npm run check` und `npm test`.

## Vor Veröffentlichung

Die Architekturleistungsseite https://swiss-bauplaner.ch/Architekturleistungen/ wurde am 15.10.2026 erfolgreich abgerufen. Die sechs dort genannten Leistungsbereiche wurden übernommen und sprachlich verdichtet: strategische Planung, Vorstudien, Projektierung, Ausschreibung, Realisierung und Beratung. Die weiteren Marketingtexte sind Gestaltungsvorschläge. Firmenname und Kontaktdaten wurden vom Auftraggeber bereitgestellt und stimmen mit der Originalseite überein. Weitere Originalseiten (z. B. Brandschutzplanung, Referenzen, Impressum) sind noch nicht übertragen. Rechtliche Anbieterangaben und Datenschutzhinweise vor Veröffentlichung prüfen und ergänzen. Es werden keine Anfragen erfasst und keine externen Ressourcen geladen. Der Kontaktbereich bietet direkte E-Mail- und Telefonlinks.

Für statisches Hosting nur `index.html`, `styles.css`, `app.js` und `assets/` veröffentlichen. `server.mjs` ist ein lokaler Entwicklungsserver.
