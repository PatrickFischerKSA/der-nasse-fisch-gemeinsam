import { HomeSections, HomeSection } from "@/components/site-manager";
import { FactFiction } from "@/components/story/FactFiction";
import { ArrowDown } from "lucide-react";
import { ProgressBar } from "@/components/story/ProgressBar";
import { Reveal } from "@/components/story/Reveal";
import { Chapter, ChapterOpener, Station } from "@/components/story/Station";
import { AtmoPlaceholder, Check, Fill, MediaPlaceholder, PlaceholderTag, QuotePlaceholder, SourceFigure } from "@/components/story/Placeholder";
import { Comparison } from "@/components/story/Comparison";
import { NovelQuote } from "@/components/story/NovelQuote";
import { Sources } from "@/components/story/Sources";
export default function Story() {
  return <main className="overflow-x-clip"><HomeSections>
      <HomeSection id="original-0" label="Kapitelnavigation"><ProgressBar /></HomeSection>

      {/* ───────── 00 · Gegenwartsmoment ───────── */}
      <HomeSection id="original-1" label="Heute \u2013 Landwehrkanal"><section id="heute" data-chapter="heute" className="relative flex min-h-[100svh] flex-col bg-forest-deep text-forest-foreground">
        <div className="relative mx-auto w-full max-w-xl px-6 pt-16">
          <MediaPlaceholder kind="Video" id="V1" dark alignTop ratio="16 / 9" className="w-full" title="Eigenes Video: ein Kanal in der Stadt, heute" hint="10–15 Sekunden, Querformat oder Hochformat, ohne erkennbare Personen. Ideal: Landwehrkanal Berlin – oder ein Fluss/Kanal in deiner Stadt." caption={<span className="sr-only">Video-Platzhalter</span>} />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-transparent" />
        <div className="relative mt-auto px-6 pb-14">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <p className="kicker text-coral-bright">Heute</p>
              <h1 className="font-display mt-4 text-[2.6rem] leading-[1.04] font-medium text-balance">
                Der Landwehrkanal: Ein Kanal mitten in Berlin. Ausflugsboote, Velos, Menschen am Ufer.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8">
                <AtmoPlaceholder id="T1" dark title="Atmo: Wasser und Stadt, heute" hint="20–40 s eigene Aufnahme am Wasser. Startet erst nach Tippen." />
              </div>
            </Reveal>
            <a href="#auftakt" className="scroll-cue mt-10 inline-flex items-center gap-2 text-sm text-forest-muted" aria-label="Weiter scrollen">
              <ArrowDown className="size-4" /> Scrollen
            </a>
          </div>
        </div>
      </section></HomeSection>

      <HomeSection id="original-2" label="Auftakt im Roman"><div id="auftakt">
        <Station num="00" layer="Im Roman" title={<>An diesem Wasser beginnt 1929 ein Kriminalfall.</>} media={<NovelQuote page={82} context="Bergung am Tempelhofer Ufer, nachts, nahe dem U-Bahnhof Möckernbrücke.">
              Das Auto hing am Haken des Bergungskrans wie ein zu groß geratener Fisch.
            </NovelQuote>}>
          <p>
            In Volker Kutschers Roman zieht ein Kran ein Auto aus dem Landwehrkanal. Am Steuer sitzt ein Toter, schwer
            misshandelt. Niemand weiss, wer er ist.
          </p>
        </Station>

        <Station num="00" layer="Historisch" title={<>Das Wasser kennt auch echte politische Morde.</>}>
          <p>
            Im Januar 1919 warfen Freikorps-Soldaten die Leiche der ermordeten Sozialistin Rosa Luxemburg in denselben
            Kanal. Die Weimarer Republik war da noch keinen Monat alt.
            <Check />
          </p>
        </Station>
      </div></HomeSection>

      {/* Title block */}
      <HomeSection id="original-3" label="Titelseite"><section className="flex min-h-[100svh] flex-col justify-center border-y border-border px-6 py-24">
        <div className="mx-auto w-full max-w-xl">
          <Reveal>
            <p className="kicker text-coral-ink">Eine Scrollstory</p>
            <h2 className="font-display mt-6 text-[4.25rem] leading-[0.92] font-medium tracking-tight sm:text-8xl">
              Der
              <br />
              nasse
              <br />
              <span className="italic text-forest">Fisch</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-[32ch] text-lg leading-relaxed text-foreground/85">
              Über Volker Kutschers Kriminalroman von 2007 – über eine Stadt im Ausnahmezustand und die Frage, was davon
              heute bleibt.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Von Mascha, Anessa &amp; Ladina · S4d 
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-12 border-l-2 border-coral pl-4 text-sm leading-relaxed text-muted-foreground">
            </div>
          </Reveal>
        </div>
      </section></HomeSection>

      {/* ───────── 01 · Der Fall ───────── */}
      <HomeSection id="original-4" label="Der Fall"><Chapter id="fall">
        <ChapterOpener id="fall" num="01" label="Der Fall" title={<>Ein Toter ohne Namen.</>} lede="Berlin, Frühjahr 1929. Ein Kommissar aus Köln sucht seine Chance – und findet einen Fall, der zu gross für ihn ist.">
          <ol className="border-t border-forest-muted/30 text-sm">
            {[["I", "Der Tote im Landwehrkanal", "28. April – 10. Mai 1929"], ["II", "Inspektion A", "11. – 21. Mai 1929"], ["III", "Die ganze Wahrheit", "22. Mai – 21. Juni 1929"]].map(([n, t, d]) => <li key={n} className="grid grid-cols-[2rem_1fr] border-b border-forest-muted/30 py-3">
                <span className="font-display text-coral-bright">{n}</span>
                <span>
                  {t}
                  <span className="block text-xs text-forest-muted">{d}</span>
                </span>
              </li>)}
          </ol>
          <p className="mt-3 text-xs text-forest-muted">Die drei Teile des Romans.</p>
        </ChapterOpener>

        <Station num="1.1" layer="Im Roman" title={<>Gereon Rath kommt nach Berlin, weil er in Köln nicht bleiben kann.</>} media={<MediaPlaceholder kind="Foto" id="F1" title="Eigenes Foto: deine Ausgabe des Romans" hint="Zum Beispiel auf dem Pult, mit Notizzetteln. Cover nur selbst fotografieren. Covermotiv laut Impressum der Piper-Ausgabe: Eva Besnyö/MAI." />}>
          <p>
            In Köln hat der Kriminalkommissar im Dienst einen Mann erschossen – den Sohn eines einflussreichen
            Zeitungsverlegers. Über die Beziehungen seines Vaters wird Rath nach Berlin versetzt.
          </p>
        </Station>

        <Station num="1.2" layer="Im Roman" title={<>Er will zur Mordkommission – und landet bei der Sitte.</>}>
          <p>
            Im Polizeipräsidium am Alexanderplatz, der «Roten Burg», arbeitet Rath unter Bruno Wolter bei der
            Sittenpolizei: Razzien, Nachtclubs, Pornografie. Sein Ziel ist die Mordinspektion von Ernst Gennat.
          </p>
          <p className="text-sm text-muted-foreground">
            Gennat ist keine Romanfigur: Den Kriminalisten gab es wirklich. <Check>Beleg zu Gennat ergänzen</Check>
          </p>
        </Station>

        <Station num="1.3" layer="Im Roman" title={<>Ein Toter im Landwehrkanal ist seine Chance.</>}>
          <p>
            Die Ermittlungen der Mordkommission stocken. Rath schaltet sich ein – ohne Auftrag und ohne seine Vorgesetzten
            zu informieren.
          </p>
        </Station>

        <Station num="1.4" layer="Im Roman" title={<>Die Spur führt zu Gold, Waffen und Exilrussen.</>}>
          <p>
            Militante russische Emigranten wollen mit geschmuggeltem Gold Waffen kaufen. Auch Berliner Ringvereine – die
            organisierte Unterwelt – sind hinter dem Gold her.
          </p>
        </Station>

        <Station num="1.5" layer="Im Roman" title={<>Bald hat der Ermittler selbst etwas zu verbergen.</>} media={<NovelQuote page={345} context="Rath zieht Bilanz nach einer Woche.">
              Einen Unterweltboss aufgeschreckt, die russische Kolonie in Berlin gegen sich aufgebracht und des Nachts
              heimlich eine Leiche verschwinden lassen.
            </NovelQuote>}>
          <p>
            Bei einem Handgemenge löst sich ein Schuss aus Raths Waffe, ein Mann stirbt. Rath versucht, den Vorfall zu
            vertuschen. Ab hier ermittelt er gegen andere – und versteckt sich selbst.
          </p>
        </Station>

        <Station num="1.6" layer="Im Roman" title={<>Ein «nasser Fisch» ist ein Fall, der nie gelöst wird.</>} media={<>
            <NovelQuote page={270} context="Charlotte Ritter im Gespräch mit Rath. Danach heisst es: «So nannten sie in der Burg die ungelösten Fälle.»">
              Glücklicherweise haben wir unter Gennat nicht allzu viele nasse Fische.
            </NovelQuote>
            <MediaPlaceholder kind="Karte" id="K1" ratio="1 / 1" title="Karte: Schauplätze im Berlin von 1929" hint="Markieren: Polizeipräsidium Alexanderplatz · Landwehrkanal · Wedding · Neukölln. Eigene Karte (z. B. OpenStreetMap, Lizenz ODbL nennen) oder historischer Stadtplan mit Nachweis." caption={<>
                  Karte: <Fill>Kartengrundlage, Lizenz</Fill> · Bearbeitung: <Fill>Dein Name</Fill>
                </>} />
            </>}>
          <p>
            Der Titel stammt aus dem Jargon der Berliner Kripo im Roman. Die Frage dahinter: Welche Fälle in dieser Stadt
            bleiben ungelöst – und wer hat ein Interesse daran?
          </p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 02 · Kontext ───────── */}
      <HomeSection id="original-5" label="Historischer Kontext"><Chapter id="kontext">
        <ChapterOpener id="kontext" num="02" label="Kontext" title={<>Eine Demokratie unter Druck.</>} lede="Weimarer Republik · politische Gewalt · moderne Grossstadt. Drei Schichten, auf denen der Roman gebaut ist." />

        <Station num="2.1" layer="Historisch" title={<>1929 ist die Republik zehn Jahre alt – und hat Feinde auf beiden Seiten.</>} media={<SourceFigure id="Q1" type="Plakat / Flugblatt" title="Politisches Plakat der Weimarer Zeit" suggestion="Zum Beispiel ein Wahlplakat der KPD oder der NSDAP. Seriöse Archive: Bundesarchiv, Deutsches Historisches Museum." why="Zeigt, mit welcher Sprache und welchen Bildern gegen die Republik geworben wurde." />}>
          <p>
            Die Weimarer Republik entstand nach Kriegsniederlage und Revolution 1918/19. Kommunisten von links und
            Nationalisten von rechts – darunter die NSDAP – wollen sie abschaffen.
          </p>
          <p>Ende Oktober 1929 bricht die New Yorker Börse ein. Es ist der Beginn der Weltwirtschaftskrise.</p>
        </Station>

        <Station num="2.2" layer="Historisch" dark title={<>Am 1. Mai 1929 schiesst die Polizei in Berliner Arbeiterviertel.</>}>
          <p>
            Polizeipräsident Karl Zörgiebel (SPD) hatte Demonstrationen unter freiem Himmel verboten. Die KPD rief
            trotzdem zum 1. Mai auf. In Wedding und Neukölln eskaliert die Lage über mehrere Tage. Mehr als 30 Menschen
            sterben, viele davon Unbeteiligte.
            <span className="kicker ml-1 inline-block rounded-sm border border-dashed border-coral-bright px-1 py-px text-[0.6rem] text-coral-bright">
              Zahl belegen
            </span>
          </p>
          <p>Der Roman lässt Rath mitten in diesen «Blutmai» geraten.</p>
        </Station>

        <Station num="2.3" layer="Historisch" title={<>Gewalt ist in Weimar kein Ausnahmefall, sondern eine Methode.</>} media={<SourceFigure id="Q2" type="Foto / Zeitung" title="Quelle zum Blutmai 1929" suggestion="Zeitgenössisches Foto aus Wedding oder Neukölln, oder eine Zeitungsseite vom Mai 1929." why="Macht sichtbar, wie nah die Romanhandlung an realen Ereignissen liegt." />}>
          <p>
            Parteien unterhalten bewaffnete Verbände, etwa die SA der NSDAP oder den Roten Frontkämpferbund der KPD.
            Politische Morde wie jene an Rosa Luxemburg (1919) oder Aussenminister Walther Rathenau (1922) erschüttern das
            Land.
          </p>
        </Station>

        <Station num="2.4" layer="Historisch" title={<>Berlin ist laut, schnell und elektrisch.</>} media={<>
              <MediaPlaceholder kind="Video" id="V2" ratio="9 / 16" title="Eigenes Video: Grossstadt heute" hint="8–12 s: Verkehr, Leuchtreklame, Menschenmenge. Gegenschnitt zu 1929." />
              <AtmoPlaceholder id="T2" title="Atmo: Strasse, Verkehr, Stimmen" hint="Eigene Aufnahme, 20–30 s." />
              <NovelQuote page={9} context="Motto des Romans, dort Walther Rathenau zugeschrieben.">
                Spree-Athen ist tot, und Spree-Chicago wächst heran.
              </NovelQuote>
            </>}>
          <p>
            Mit rund vier Millionen Menschen ist Berlin eine der grössten Städte der Welt. Kinos, Varietés, Nachtclubs,
            Verkehr. 1927 entsteht der Film «Berlin. Die Sinfonie der Großstadt», 1929 erscheint Döblins Roman «Berlin
            Alexanderplatz».
            <Check>Einwohnerzahl belegen</Check>
          </p>
        </Station>

        <Station num="2.5" layer="Deutung" title={<>Die moderne Stadt ist Bühne und Versteck zugleich.</>} media={<SourceFigure id="Q3" type="Foto / Stadtplan" title="Berlin um 1929: Alexanderplatz oder Stadtplan" suggestion="Historische Fotografie oder ein Stadtplan von etwa 1929, mit Archivnachweis." why="Verortet den Roman im realen Stadtraum." />}>
          <p>
            Im Roman führen die Spuren durch Nachtleben, Hinterhöfe und Amtsstuben. Wer in der Menge verschwinden will,
            kann das hier – auch der Ermittler selbst.
          </p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 03 · Thema ───────── */}
      <HomeSection id="original-6" label="Zentrales Thema"><Chapter id="thema">
        <ChapterOpener id="thema" num="03" label="Zentrales Thema" title={<>Wer schützt die Ordnung – und vor wem?</>} lede="Der Roman fragt, was Recht und Moral wert sind, wenn selbst die Hüter der Ordnung Grenzen überschreiten." />

        <Station num="3.1" layer="Im Roman" title={<>Rath bricht Regeln, um ans Ziel zu kommen.</>} media={<NovelQuote page={133} context="Rath beschliesst, sein Wissen über den Toten für sich zu behalten.">
              Darauf kam es doch an im Leben. Die Chancen sehen und sie ergreifen.
            </NovelQuote>}>
          <p>
            Er ermittelt ohne Auftrag, behält Wissen für sich und vertuscht eine eigene Tat. Er ist kein Held, sondern ein
            Ehrgeiziger mit Gewissen – manchmal.
          </p>
        </Station>

        <Station num="3.2" layer="Im Roman" title={<>Ordnung schaffen ist nicht dasselbe wie die Wahrheit finden.</>} media={<NovelQuote page={83} context="Gedanken von Oberkommissar Böhm am Fundort im Landwehrkanal.">
              Diesen Preußen war es immer noch wichtiger, am Tatort erst einmal Ordnung zu schaffen, statt Spuren zu
              sichern.
            </NovelQuote>}>
          <p>
            Schon am ersten Fundort prallen zwei Arten von Polizei aufeinander: die alte, die auf Ruhe und Gehorsam setzt,
            und die moderne, die Beweise sucht.
          </p>
        </Station>

        <Station num="3.3" layer="Im Roman" title={<>Je tiefer Rath gräbt, desto weniger traut er der eigenen Behörde.</>}>
          <p>
            Der Fall zeigt eine Polizei, in der nicht alle dieselben Ziele verfolgen. Halte fest, an welcher Stelle Rath
            das zum ersten Mal merkt.
            <Check>Textstelle + Seite</Check>
          </p>
        </Station>

        <Station num="3.4" layer="Deutung" dark title={<>Eine Demokratie braucht Institutionen, denen man trauen kann.</>} media={<QuotePlaceholder id="Z2" dark hint="Eine Stelle, die deine These stützt – oder ihr widerspricht." />}>
          <p>
            <span className="kicker mr-2 text-coral-bright">These</span>
            Kutscher zeigt im Kleinen, was die Republik im Grossen schwächt: Wenn Polizei und Staat nicht verlässlich nach
            Regeln handeln, verliert die Ordnung ihre Glaubwürdigkeit.
          </p>
          <p className="text-sm text-forest-muted">Diese These ist ein Vorschlag. Prüfe, schärfe oder ersetze sie.</p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 04 · Mein Aspekt ───────── */}
      <HomeSection id="original-7" label="Mein Aspekt"><Chapter id="aspekt">
        <ChapterOpener id="aspekt" num="04" label="Mein Aspekt" title={<Fill>Titel deines Aspekts</Fill>} lede="Dieses Kapitel gestaltest du selbst. Unten steht ein Beispiel als Gerüst – ersetze es oder passe es an.">
          <PlaceholderTag kind="Eigenes Kapitel" dark />
        </ChapterOpener>

        <Station num="4.1" layer="Dein Teil" title={<>Beispiel: Charlotte Ritter und die «neue Frau».</>} media={<NovelQuote page={85} context="Oberkommissar Böhm zu Charlotte Ritter am Fundort.">
              Zeigen Sie dem Mann hier erst mal, wie man Spuren sichert.
            </NovelQuote>}>
          <p>
            Charlotte «Charly» Ritter ist Stenotypistin bei der Mordkommission – und sichert am Fundort die Spuren. Sie
            will studieren und vielleicht Polizeibeamtin werden (S. 270).
          </p>
          <p className="text-sm text-muted-foreground">
            Andere mögliche Aspekte: Raths Kriegsvergangenheit · die Ringvereine · Presse und Öffentlichkeit · Vom Buch
            zur Serie.
          </p>
        </Station>

        <Station num="4.2" layer="Historisch" title={<>Frauen dürfen seit 1918 wählen – und drängen in neue Berufe.</>} media={<SourceFigure id="Q4" type="Quelle zum Aspekt" title="Historische Quelle zu deinem Aspekt" suggestion="Beim Beispiel: Foto, Zeitschrift oder Werbung der 1920er, die das Bild der «neuen Frau» zeigt." why="Verbindet die Romanfigur mit der historischen Wirklichkeit." />}>
          <p>
            Die «neue Frau» der 1920er ist berufstätig, städtisch, selbstbewusst – zumindest als Leitbild. Wie viel davon
            Wirklichkeit war, ist eine gute Frage für deine Recherche.
            <Check>Fachquelle ergänzen</Check>
          </p>
        </Station>

        <Station num="4.3" layer="Dein Teil" title={<Fill>Deine Kernaussage in einem Satz</Fill>} media={<MediaPlaceholder kind="Foto" id="F2" ratio="3 / 4" title="Eigenes Foto zu deinem Aspekt" hint="Ein Bild, das deinen Gedanken in die Gegenwart holt." />}>
          <p>
            <Fill>Zwei bis drei Sätze Begründung mit Textstelle (Seite) und historischer Quelle</Fill>
          </p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 05 · Gegenwart ───────── */}
      <HomeSection id="original-8" label="Gegenwart"><Chapter id="gegenwart">
        <ChapterOpener id="gegenwart" num="05" label="Gegenwart" title={<>Was hat 1929 mit uns zu tun?</>} lede="Fast hundert Jahre später ist Weimar populär wie nie. Das ist kein Zufall – und keine einfache Gleichung." />

        <Station num="5.1" layer="Heute" title={<>Weimar ist Popkultur geworden.</>}>
          <p>
            Aus dem Roman wurde ab 2017 die Fernsehserie «Babylon Berlin». Es gibt eine Graphic Novel von Arne Jysch und
            ein Hörspiel. Ein Krimi über 1929 erreicht ein Massenpublikum.
          </p>
          <p>
            <Fill>Warum gerade jetzt? Deine Vermutung in einem Satz</Fill>
          </p>
        </Station>

        <Station num="5.2" layer="Deutung" title={<>Vergleiche mit Weimar helfen nur, wenn man die Unterschiede benennt.</>} media={<Comparison />}>
          <p>Stelle Damals und Heute nebeneinander. Belege jedes eigene Beispiel mit einer Quelle und einem Datum.</p>
        </Station>

        <Station num="5.3" layer="Heute" title={<>Der Roman ist zu Ende. Die Frage nicht.</>} media={<MediaPlaceholder kind="Foto" id="F3" ratio="4 / 5" title="Eigenes Bild: zurück am Wasser, heute" hint="Schliesst den Kreis zum Einstieg. Gleicher Ort, anderer Blick." />}>
          <p>
            <Fill>Dein Fazit: Was nimmst du aus dem Roman für die Gegenwart mit? Höchstens drei Sätze.</Fill>
          </p>
        </Station>
      </Chapter></HomeSection>

      <HomeSection id="original-9" label="Werkstatt"><section id="werkstatt" className="mx-auto w-full max-w-xl px-6 py-20"><h2 className="font-display text-4xl">Werkstatt: Roman und Geschichte</h2><p className="my-6">Diese Übersicht trennt Romanfiguren und Handlung von historischen Angaben. Ergänzen Sie die ausgewiesenen Fachquellen.</p><FactFiction /><p className="mt-8">Mit dem Bearbeitungslink können Sie markierte Texte ändern und in den Medienfenstern Dateien hochladen. Captions und Quellen werden zusammen mit dem Projekt online gespeichert. Unter „Projekt verwalten“ können Sie weitere Seiten und Vorlagen ergänzen.</p></section></HomeSection>
      <HomeSection id="original-10" label="Quellen"><Sources /></HomeSection>

      <HomeSection id="original-11" label="Fusszeile"><footer className="bg-forest-deep px-6 py-10 text-forest-muted">
        <div className="mx-auto flex max-w-xl items-center justify-between text-xs">
          <span className="font-display text-base italic text-forest-foreground">Der nasse Fisch</span>
          <a href="#heute" className="underline decoration-coral-bright underline-offset-4">
            Zurück zum Anfang
          </a>
        </div>
      </footer></HomeSection>
    </HomeSections></main>;
}
