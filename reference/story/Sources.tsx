import type { ReactNode } from "react";
import { Fill, PlaceholderTag } from "./Placeholder";
import { Reveal } from "./Reveal";

function Group({ letter, title, note, children }: { letter: string; title: string; note?: ReactNode; children: ReactNode }) {
  return (
    <Reveal>
      <div className="border-t border-border py-8">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-coral-ink">{letter}</span>
          <h3 className="kicker text-forest">{title}</h3>
        </div>
        {note ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
        <ol className="mt-5 space-y-4 text-[0.95rem] leading-relaxed">{children}</ol>
      </div>
    </Reveal>
  );
}

function Entry({ children }: { children: ReactNode }) {
  return <li className="pl-4 -indent-4">{children}</li>;
}

function MediaRow({ id, what, where }: { id: string; what: string; where: string }) {
  return (
    <li className="grid grid-cols-[3.25rem_1fr] gap-x-3 text-sm">
      <span className="kicker pt-0.5 text-coral-ink">{id}</span>
      <span>
        <span className="font-medium">{what}</span>
        <span className="text-muted-foreground"> · {where}</span>
        <br />
        <span className="text-xs">
          <Fill>Urheber:in</Fill> · <Fill>Aufnahmedatum / Ort</Fill> · <Fill>Lizenz bzw. «eigene Aufnahme»</Fill>
        </span>
      </span>
    </li>
  );
}

export function Sources() {
  return (
    <section id="quellen" className="bg-paper-deep px-6 pt-24 pb-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="kicker text-coral-ink">Anhang</p>
          <h2 className="font-display mt-4 text-5xl leading-none font-medium">Quellen</h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-foreground/80">
            Alle Angaben zur Handlung stützen sich auf den Roman. Historische Aussagen sind vor der Abgabe mit
            mindestens einer Fachquelle zu belegen. Felder mit <Fill>Klammern</Fill> und Kästchen mit dem Etikett{" "}
            <PlaceholderTag kind="…" /> sind noch offen.
          </p>
        </Reveal>

        <Group letter="A" title="Primärtext">
          <Entry>
            Kutscher, Volker: <em>Der nasse Fisch. Gereon Raths erster Fall.</em> Köln: Kiepenheuer &amp; Witsch 2007.
          </Entry>
          <Entry>
            Verwendete Ausgabe: Kutscher, Volker: <em>Der nasse Fisch.</em> Die Gereon-Rath-Romane 1. E-Book. München:
            Piper 2020. Alle Seitenangaben in dieser Story beziehen sich auf die Seiten dieser E-Book-Datei; in einer
            gedruckten Ausgabe weichen sie ab.
          </Entry>
          <Entry>
            Zitierte Stellen: S. 9 (Motto), 82, 83, 85, 133, 270, 345. Zitate in originaler Schreibweise.
          </Entry>
        </Group>

        <Group letter="B" title="Adaptionen">
          <Entry>
            <em>Babylon Berlin.</em> Fernsehserie, Deutschland, ab 2017. Regie: Tom Tykwer, Achim von Borries, Hendrik
            Handloegten. Frei nach den Romanen von Volker Kutscher.
          </Entry>
          <Entry>
            Jysch, Arne: <em>Der nasse Fisch.</em> Graphic Novel nach dem Roman von Volker Kutscher. Hamburg: Carlsen
            2017. ISBN 978-3-551-78248-9.
          </Entry>
        </Group>

        <Group
          letter="C"
          title="Fachliteratur zur Weimarer Republik"
          note="Vorschläge – nur aufführen, was du tatsächlich gelesen hast. Auflage und Seiten ergänzen."
        >
          <Entry>
            Peukert, Detlev J. K.: <em>Die Weimarer Republik. Krisenjahre der Klassischen Moderne.</em> Frankfurt a. M.:
            Suhrkamp 1987. <Fill>Seiten</Fill>
          </Entry>
          <Entry>
            Kolb, Eberhard; Schumann, Dirk: <em>Die Weimarer Republik.</em> Oldenbourg Grundriss der Geschichte, Bd. 16.
            München: Oldenbourg. <Fill>Auflage, Jahr, Seiten</Fill>
          </Entry>
          <Entry>
            Büttner, Ursula: <em>Weimar. Die überforderte Republik 1918–1933.</em> Stuttgart: Klett-Cotta 2008.{" "}
            <Fill>Seiten</Fill>
          </Entry>
        </Group>

        <Group letter="D" title="Zeitgenössische Werke (1920er)">
          <Entry>
            Döblin, Alfred: <em>Berlin Alexanderplatz. Die Geschichte vom Franz Biberkopf.</em> Berlin: S. Fischer 1929.
          </Entry>
          <Entry>
            Ruttmann, Walter (Regie): <em>Berlin. Die Sinfonie der Großstadt.</em> Dokumentarfilm, Deutschland 1927.
          </Entry>
        </Group>

        <Group
          letter="E"
          title="Online-Quellen"
          note="Lexika nur als Einstieg. Jede Online-Quelle braucht ein Abrufdatum."
        >
          <Entry>
            Wikipedia: «Der nasse Fisch. Gereon Raths erster Fall».{" "}
            <a
              className="break-all text-forest underline decoration-coral underline-offset-2"
              href="https://de.wikipedia.org/wiki/Der_nasse_Fisch._Gereon_Raths_erster_Fall"
              target="_blank"
              rel="noreferrer"
            >
              de.wikipedia.org/wiki/Der_nasse_Fisch._Gereon_Raths_erster_Fall
            </a>{" "}
            · abgerufen am <Fill>Datum</Fill>
          </Entry>
          <Entry>
            Kellerhoff, Sven-Felix: «Blut und Buddha – die aufregenden Zwanziger». In: <em>Die Welt</em>, 25.08.2007.{" "}
            <a
              className="break-all text-forest underline decoration-coral underline-offset-2"
              href="https://www.welt.de/kultur/literarischewelt/article1128190/Krimi-Blut-und-Buddha-die-aufregenden-Zwanziger.html"
              target="_blank"
              rel="noreferrer"
            >
              welt.de/kultur/literarischewelt/article1128190
            </a>{" "}
            · abgerufen am <Fill>Datum</Fill>
          </Entry>
          <Entry>
            Bundeszentrale für politische Bildung (bpb): Beitrag zur Weimarer Republik · <Fill>Titel, URL, Abrufdatum</Fill>
          </Entry>
          <Entry>
            Deutsches Historisches Museum, LeMO – Lebendiges Museum Online: Beitrag zum «Blutmai» 1929 ·{" "}
            <Fill>Titel, URL, Abrufdatum</Fill>
          </Entry>
        </Group>

        <Group letter="F" title="Historische Quellen in dieser Story" note="Jede Quelle mit vollständiger Legende wie im Text.">
          {["Q1 · Plakat oder Flugblatt der Weimarer Zeit", "Q2 · Foto oder Zeitungsseite zum Blutmai 1929", "Q3 · Stadtansicht Berlin um 1929", "Q4 · Quelle zu deinem Aspekt"].map(
            (q) => (
              <Entry key={q}>
                <span className="font-medium">{q}</span>
                <br />
                <span className="text-sm">
                  <Fill>Titel</Fill> · <Fill>Urheber:in</Fill> · <Fill>Datum</Fill> · <Fill>Archiv / Signatur</Fill> ·{" "}
                  <Fill>Lizenz</Fill>
                </span>
              </Entry>
            ),
          )}
        </Group>

        <Group
          letter="G"
          title="Foto-, Video- und Tonnachweise"
          note="Derzeit enthält diese Seite keine fremden Bilder, Videos oder Töne. Alle Medienflächen sind Platzhalter."
        >
          <MediaRow id="V1" what="Video: Kanal heute" where="Einstieg" />
          <MediaRow id="T1" what="Atmo-Ton: Wasser / Stadt heute" where="Einstieg" />
          <MediaRow id="F1" what="Foto: deine Romanausgabe" where="Kapitel 1" />
          <MediaRow id="K1" what="Karte: Schauplätze" where="Kapitel 1" />
          <MediaRow id="V2" what="Video: Grossstadt heute" where="Kapitel 2" />
          <MediaRow id="T2" what="Atmo-Ton: Verkehr / Strasse" where="Kapitel 2" />
          <MediaRow id="F2" what="Foto: zu deinem Aspekt" where="Kapitel 4" />
          <MediaRow id="F3" what="Foto: dein Gegenwartsbild" where="Kapitel 5" />
        </Group>

        <Group letter="H" title="Transparenz">
          <Entry>
            Hilfsmittel (z. B. Rechtschreibprüfung, KI-Werkzeuge) und wofür sie genutzt wurden: <Fill>ergänzen</Fill>
          </Entry>
          <Entry>
            Autor:in: <Fill>Name</Fill> · Klasse: <Fill>Klasse</Fill> · Lehrperson: <Fill>Name</Fill> · Stand:{" "}
            <Fill>Datum</Fill>
          </Entry>
        </Group>
      </div>
    </section>
  );
}
