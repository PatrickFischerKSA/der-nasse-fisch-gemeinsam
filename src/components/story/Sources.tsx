import { EditableText, SharedMedia } from "@/components/shared-editor";
import type { ReactNode } from "react";
import { Fill, PlaceholderTag } from "./Placeholder";
import { Reveal } from "./Reveal";
function Group({
  letter,
  title,
  note,
  children
}: {
  letter: string;
  title: string;
  note?: ReactNode;
  children: ReactNode;
}) {
  return <Reveal>
      <div className="border-t border-border py-8">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-coral-ink"><EditableText id="src_components_story_Sources_tsx_449" value={letter} /></span>
          <h3 className="kicker text-forest"><EditableText id="src_components_story_Sources_tsx_510" value={title} /></h3>
        </div>
        {note ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground"><EditableText id="src_components_story_Sources_tsx_620" value={note} /></p> : null}
        <ol className="mt-5 space-y-4 text-[0.95rem] leading-relaxed">{children}</ol>
      </div>
    </Reveal>;
}
function Entry({
  children
}: {
  children: ReactNode;
}) {
  return <li className="pl-4 -indent-4"><EditableText id="src_components_story_Sources_tsx_856" value={children} /></li>;
}
function MediaRow({
  id,
  what,
  where
}: {
  id: string;
  what: string;
  where: string;
}) {
  return <li className="grid grid-cols-[3.25rem_1fr] gap-x-3 text-sm">
      <span className="kicker pt-0.5 text-coral-ink"><EditableText id="src_components_story_Sources_tsx_1092" value={id} /></span>
      <span>
        <span className="font-medium"><EditableText id="src_components_story_Sources_tsx_1155" value={what} /></span>
        <span className="text-muted-foreground"><EditableText id="src_components_story_Sources_tsx_1217" value={" \xB7 "} /><EditableText id="src_components_story_Sources_tsx_1220" value={where} /></span>
        <br />
        <span className="text-xs">
          <Fill><EditableText id="src_components_story_Sources_tsx_1301" value={"Urheber:in"} /></Fill><EditableText id="src_components_story_Sources_tsx_1318" value={" \xB7 "} /><Fill><EditableText id="src_components_story_Sources_tsx_1327" value={"Aufnahmedatum / Ort"} /></Fill><EditableText id="src_components_story_Sources_tsx_1353" value={" \xB7 "} /><Fill><EditableText id="src_components_story_Sources_tsx_1362" value={"Lizenz bzw. \xABeigene Aufnahme\xBB"} /></Fill>
        </span>
      </span>
    </li>;
}
export function Sources() {
  return <section id="quellen" className="bg-paper-deep px-6 pt-24 pb-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="kicker text-coral-ink"><EditableText id="src_components_story_Sources_tsx_1661" value={"Anhang"} /></p>
          <h2 className="font-display mt-4 text-5xl leading-none font-medium"><EditableText id="src_components_story_Sources_tsx_1750" value={"Quellen"} /></h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-foreground/80"><EditableText id="src_components_story_Sources_tsx_1843" value={"Alle Angaben zur Handlung st\xFCtzen sich auf den Roman. Historische Aussagen sind vor der Abgabe mit mindestens einer Fachquelle zu belegen. Felder mit "} /><Fill><EditableText id="src_components_story_Sources_tsx_2024" value={"Klammern"} /></Fill><EditableText id="src_components_story_Sources_tsx_2039" value={" und K\xE4stchen mit dem Etikett"} /><EditableText id="src_components_story_Sources_tsx_2068" value={" "} />
            <PlaceholderTag kind="…" /><EditableText id="src_components_story_Sources_tsx_2113" value={" sind noch offen."} /></p>
        </Reveal>

        <Group letter="A" title="Primärtext">
          <Entry><EditableText id="src_components_story_Sources_tsx_2228" value={"Kutscher, Volker: "} /><em><EditableText id="src_components_story_Sources_tsx_2263" value={"Der nasse Fisch. Gereon Raths erster Fall."} /></em><EditableText id="src_components_story_Sources_tsx_2310" value={" K\xF6ln: Kiepenheuer & Witsch 2007."} /></Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_2384" value={"Verwendete Ausgabe: Kutscher, Volker: "} /><em><EditableText id="src_components_story_Sources_tsx_2439" value={"Der nasse Fisch."} /></em><EditableText id="src_components_story_Sources_tsx_2460" value={" Die Gereon-Rath-Romane 1. E-Book. M\xFCnchen: Piper 2020. Alle Seitenangaben in dieser Story beziehen sich auf die Seiten dieser E-Book-Datei; in einer gedruckten Ausgabe weichen sie ab."} /></Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_2705" value={"Zitierte Stellen: S. 9 (Motto), 82, 83, 85, 133, 270, 345. Zitate in originaler Schreibweise."} /></Entry>
        </Group>

        <Group letter="B" title="Adaptionen">
          <Entry>
            <em><EditableText id="src_components_story_Sources_tsx_2929" value={"Babylon Berlin."} /></em><EditableText id="src_components_story_Sources_tsx_2949" value={" Fernsehserie, Deutschland, ab 2017. Regie: Tom Tykwer, Achim von Borries, Hendrik Handloegten. Frei nach den Romanen von Volker Kutscher."} /></Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_3136" value={"Jysch, Arne: "} /><em><EditableText id="src_components_story_Sources_tsx_3166" value={"Der nasse Fisch."} /></em><EditableText id="src_components_story_Sources_tsx_3187" value={" Graphic Novel nach dem Roman von Volker Kutscher. Hamburg: Carlsen 2017. ISBN 978-3-551-78248-9."} /></Entry>
        </Group>

        <Group letter="C" title="Fachliteratur zur Weimarer Republik" note="Vorschläge – nur aufführen, was du tatsächlich gelesen hast. Auflage und Seiten ergänzen.">
          <Entry><EditableText id="src_components_story_Sources_tsx_3558" value={"Peukert, Detlev J. K.: "} /><em><EditableText id="src_components_story_Sources_tsx_3598" value={"Die Weimarer Republik. Krisenjahre der Klassischen Moderne."} /></em><EditableText id="src_components_story_Sources_tsx_3662" value={" Frankfurt a. M.: Suhrkamp 1987. "} /><Fill><EditableText id="src_components_story_Sources_tsx_3713" value={"Seiten"} /></Fill>
          </Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_3763" value={"Kolb, Eberhard; Schumann, Dirk: "} /><em><EditableText id="src_components_story_Sources_tsx_3812" value={"Die Weimarer Republik."} /></em><EditableText id="src_components_story_Sources_tsx_3839" value={" Oldenbourg Grundriss der Geschichte, Bd. 16. M\xFCnchen: Oldenbourg. "} /><Fill><EditableText id="src_components_story_Sources_tsx_3924" value={"Auflage, Jahr, Seiten"} /></Fill>
          </Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_3989" value={"B\xFCttner, Ursula: "} /><em><EditableText id="src_components_story_Sources_tsx_4023" value={"Weimar. Die \xFCberforderte Republik 1918\u20131933."} /></em><EditableText id="src_components_story_Sources_tsx_4072" value={" Stuttgart: Klett-Cotta 2008."} />{" "}
            <Fill><EditableText id="src_components_story_Sources_tsx_4125" value={"Seiten"} /></Fill>
          </Entry>
        </Group>

        <Group letter="D" title="Zeitgenössische Werke (1920er)">
          <Entry><EditableText id="src_components_story_Sources_tsx_4259" value={"D\xF6blin, Alfred: "} /><em><EditableText id="src_components_story_Sources_tsx_4292" value={"Berlin Alexanderplatz. Die Geschichte vom Franz Biberkopf."} /></em><EditableText id="src_components_story_Sources_tsx_4355" value={" Berlin: S. Fischer 1929."} /></Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_4417" value={"Ruttmann, Walter (Regie): "} /><em><EditableText id="src_components_story_Sources_tsx_4460" value={"Berlin. Die Sinfonie der Gro\xDFstadt."} /></em><EditableText id="src_components_story_Sources_tsx_4500" value={" Dokumentarfilm, Deutschland 1927."} /></Entry>
        </Group>

        <Group letter="E" title="Online-Quellen" note="Lexika nur als Einstieg. Jede Online-Quelle braucht ein Abrufdatum.">
          <Entry><EditableText id="src_components_story_Sources_tsx_4753" value={"Wikipedia: \xABDer nasse Fisch. Gereon Raths erster Fall\xBB."} />{" "}
            <a className="break-all text-forest underline decoration-coral underline-offset-2" href="https://de.wikipedia.org/wiki/Der_nasse_Fisch._Gereon_Raths_erster_Fall" target="_blank" rel="noreferrer"><EditableText id="src_components_story_Sources_tsx_5103" value={"de.wikipedia.org/wiki/Der_nasse_Fisch._Gereon_Raths_erster_Fall"} /></a>{" "}<EditableText id="src_components_story_Sources_tsx_5203" value={"\xB7 abgerufen am "} /><Fill><EditableText id="src_components_story_Sources_tsx_5237" value={"Datum"} /></Fill>
          </Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_5286" value={"Kellerhoff, Sven-Felix: \xABBlut und Buddha \u2013 die aufregenden Zwanziger\xBB. In: "} /><em><EditableText id="src_components_story_Sources_tsx_5378" value={"Die Welt"} /></em><EditableText id="src_components_story_Sources_tsx_5391" value={", 25.08.2007."} />{" "}
            <a className="break-all text-forest underline decoration-coral underline-offset-2" href="https://www.welt.de/kultur/literarischewelt/article1128190/Krimi-Blut-und-Buddha-die-aufregenden-Zwanziger.html" target="_blank" rel="noreferrer"><EditableText id="src_components_story_Sources_tsx_5726" value={"welt.de/kultur/literarischewelt/article1128190"} /></a>{" "}<EditableText id="src_components_story_Sources_tsx_5809" value={"\xB7 abgerufen am "} /><Fill><EditableText id="src_components_story_Sources_tsx_5843" value={"Datum"} /></Fill>
          </Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_5892" value={"Bundeszentrale f\xFCr politische Bildung (bpb): Beitrag zur Weimarer Republik \xB7 "} /><Fill><EditableText id="src_components_story_Sources_tsx_5988" value={"Titel, URL, Abrufdatum"} /></Fill>
          </Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_6054" value={"Deutsches Historisches Museum, LeMO \u2013 Lebendiges Museum Online: Beitrag zum \xABBlutmai\xBB 1929 \xB7"} />{" "}
            <Fill><EditableText id="src_components_story_Sources_tsx_6183" value={"Titel, URL, Abrufdatum"} /></Fill>
          </Entry>
        </Group>

        <Group letter="F" title="Historische Quellen in dieser Story" note="Jede Quelle mit vollständiger Legende wie im Text.">
          {["Q1 · Plakat oder Flugblatt der Weimarer Zeit", "Q2 · Foto oder Zeitungsseite zum Blutmai 1929", "Q3 · Stadtansicht Berlin um 1929", "Q4 · Quelle zu deinem Aspekt"].map(q => <Entry key={q}>
                <span className="font-medium"><EditableText id="src_components_story_Sources_tsx_6658" value={q} /></span>
                <br />
                <span className="text-sm">
                  <Fill><EditableText id="src_components_story_Sources_tsx_6759" value={"Titel"} /></Fill><EditableText id="src_components_story_Sources_tsx_6771" value={" \xB7 "} /><Fill><EditableText id="src_components_story_Sources_tsx_6780" value={"Urheber:in"} /></Fill><EditableText id="src_components_story_Sources_tsx_6797" value={" \xB7 "} /><Fill><EditableText id="src_components_story_Sources_tsx_6806" value={"Datum"} /></Fill><EditableText id="src_components_story_Sources_tsx_6818" value={" \xB7 "} /><Fill><EditableText id="src_components_story_Sources_tsx_6827" value={"Archiv / Signatur"} /></Fill><EditableText id="src_components_story_Sources_tsx_6851" value={" \xB7"} /><EditableText id="src_components_story_Sources_tsx_6853" value={" "} />
                  <Fill><EditableText id="src_components_story_Sources_tsx_6883" value={"Lizenz"} /></Fill>
                </span>
              </Entry>)}
        </Group>

        <Group letter="G" title="Foto-, Video- und Tonnachweise" note="Derzeit enthält diese Seite keine fremden Bilder, Videos oder Töne. Alle Medienflächen sind Platzhalter.">
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
          <Entry><EditableText id="src_components_story_Sources_tsx_7930" value={"Hilfsmittel (z. B. Rechtschreibpr\xFCfung, KI-Werkzeuge) und wof\xFCr sie genutzt wurden: "} /><Fill><EditableText id="src_components_story_Sources_tsx_8033" value={"erg\xE4nzen"} /></Fill>
          </Entry>
          <Entry><EditableText id="src_components_story_Sources_tsx_8085" value={"Autor:in: "} /><Fill><EditableText id="src_components_story_Sources_tsx_8114" value={"Name"} /></Fill><EditableText id="src_components_story_Sources_tsx_8125" value={" \xB7 Klasse: "} /><Fill><EditableText id="src_components_story_Sources_tsx_8142" value={"Klasse"} /></Fill><EditableText id="src_components_story_Sources_tsx_8155" value={" \xB7 Lehrperson: "} /><Fill><EditableText id="src_components_story_Sources_tsx_8176" value={"Name"} /></Fill><EditableText id="src_components_story_Sources_tsx_8187" value={" \xB7 Stand:"} />{" "}
            <Fill><EditableText id="src_components_story_Sources_tsx_8220" value={"Datum"} /></Fill>
          </Entry>
        </Group>
      </div>
    </section>;
}
