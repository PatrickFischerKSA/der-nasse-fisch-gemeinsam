# Der nasse Fisch – Berlin 1929 · gemeinsam

Eigenständige Scrollstory zu Volker Kutschers Roman, übernommen aus dem freigegebenen Lovable-Projekt `a8b7f3c3-5865-51c0-8355-d832f47fafb9`.

**Website:** https://patrickfischerksa.github.io/der-nasse-fisch-gemeinsam/

## Gemeinsam bearbeiten

Mit dem separat geteilten Bearbeitungslink können alle Mitwirkenden markierte Texte anklicken und ändern. Alle sehen dieselbe gespeicherte Fassung. Der Ansichtslink ist öffentlich; der Bearbeitungslink erlaubt Änderungen und sollte nur an Mitwirkende gehen.

Dateien lassen sich direkt an den vorgesehenen Medienfenstern hochladen. Für V1 steht im Einstieg ein echtes Video-Fenster zur Verfügung; T1/T2 nehmen eigene Tonaufnahmen entgegen, F1–F3 eigene Fotos und K1 eine Karte als Bild. Q1–Q4 können Bilder oder PDF-Dokumente aufnehmen. Bilder, Videos und Ton sind zusätzlich im oberen Medienmanager verfügbar. Captions werden direkt beim Medium eingetragen und online gespeichert. Bildformat, Alternativtext und Einpassen können pro Originalbild geändert werden. Weitere Quellen-, Aufnahme- und Transkriptangaben bleiben in der Scrollstory editierbar.

Bilder bis 15 MB: JPG, PNG, WebP, GIF, AVIF. Video/Ton/PDF bis 60 MB: MP4, WebM, MOV, OGG, MP3, WAV, M4A, FLAC, PDF. Dateien und ihre öffentlichen Links sind Bestandteil des gemeinsam sichtbaren Projekts.

Änderungen speichern automatisch. Vor dem Schliessen auf **Online gespeichert** oder **Gemeinsame Version · aktuell** warten. Verschiedene Felder werden zusammengeführt; bei Änderungen am selben Feld erscheint eine Konfliktauswahl. Im Versionsverlauf sind die letzten 50 vorherigen Fassungen auswählbar.

## Seiten, Vorlagen und Navigation

Unter **Projekt verwalten** lassen sich Unterseiten erstellen, umbenennen, sortieren, duplizieren und entfernen. Neue Seiten erscheinen automatisch im Menü. Die Vorlagen **Artikel**, **Bild mit Text**, **Galerie** und **Vorstellungsplakat** liefern eigene, editierbare Bausteine; eine leere Seite ist ebenfalls möglich. Die Vorschau zeigt die aktuelle Darstellung.

Unter **Navigation** lassen sich Menünamen, Reihenfolge, Seitenziele und externe bzw. Abschnittslinks verwalten. Ausgeblendete Menüpunkte verstecken keine Seite vor ihrem Direktlink. Seiten verwenden feste `?page=<id>`-Links, die beim Umbenennen gültig bleiben.

Die eigenen Startseiteninhalte können vor, nach oder anstelle der ursprünglichen Story stehen. Originalabschnitte lassen sich unter **Startseite umbauen** sortieren und ausblenden. Ausblenden löscht deren Inhalt nicht. Captions gehören in „Caption / Bildunterschrift“, sichtbare längere Beschreibungen in Textbausteine; Alternativtexte sind für Barrierefreiheit gedacht.

## Entwicklung

Node.js ab 22.12:

```sh
npm ci
npm run dev
npm test
npm run build
```

- `src/Article.tsx` und `src/components/story/`: übernommene Scrollstory
- `src/components/story/OriginalMedia.tsx`: gemeinsame Original-Medienfenster
- `src/components/shared-editor.tsx`, `src/lib/`: Textbearbeitung, Speicherung und Konfliktabgleich
- `src/components/site-manager.tsx`: Seiten, Vorlagen und Navigation
- `reference/`: exportierte Originaldateien und bewusst portierte Zwischenstände

Die einmaligen Konverter in `scripts/` überschreiben Ausgabedateien und sind keine normalen Build-Schritte. Nach manuellen Kapiteländerungen nicht unbedacht erneut ausführen. Stabile Text-, Seiten- und Medien-IDs beibehalten. GitHub Actions prüft und veröffentlicht `main` auf GitHub Pages.

## Vollständig getrennte Infrastruktur

- Repository: `PatrickFischerKSA/der-nasse-fisch-gemeinsam`
- Worker: `https://der-nasse-fisch-gemeinsam.patrick-fischer.workers.dev`
- Ausschliesslich eigener R2-Bucket: `der-nasse-fisch-medien`
- Eigener zufälliger Bearbeitungsschlüssel; nur dessen SHA-256-Hash wird als `EDIT_TOKEN_HASH` im Worker hinterlegt

Keine Schlüssel, Datenbanken, Mediendateien oder Speicherbindungen der drei früheren Projekte werden verwendet. R2 speichert den gemeinsamen Stand, frühere Versionen und UUID-Medien. Bedingte ETag-Schreibzugriffe verhindern stilles Überschreiben paralleler Fassungen. Verlauf und Schreibzugriffe benötigen den eigenen Bearbeitungsschlüssel. Der Worker-Quellcode enthält keinen Schlüssel.

Backend-Deployment durch den angemeldeten Eigentümer: `npx wrangler deploy`. Den bestehenden Secret beim Aktualisieren beibehalten. Ein absichtlicher Secret-Wechsel macht alte Bearbeitungslinks ungültig. Kein KI-Konto und kein Abonnement wird an Mitwirkende weitergegeben.

Die Originaltexte, Quellenangaben und ausdrücklich offenen Belegfelder sind übernommen, nicht fachlich neu verifiziert. Das zusätzliche Werkstatt-Kapitel verwendet die im Original vorhandene Fakt/Fiktion-Komponente. Original-Uploads waren noch unvollständig und wurden durch die eigene Speicheranbindung ersetzt. Keine Bindung an die ursprüngliche Lovable-Cloud besteht; spätere Änderungen synchronisieren nicht automatisch zwischen Lovable und GitHub. Für eigene Medien Rechte, Quellen, Untertitel und Transkripte ergänzen.
