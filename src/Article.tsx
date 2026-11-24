import { EditableText, SharedMedia } from "@/components/shared-editor";
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
          <MediaPlaceholder kind="Video" id="V1" dark alignTop ratio="16 / 9" className="w-full" title="Eigenes Video: ein Kanal in der Stadt, heute" hint="10–15 Sekunden, Querformat oder Hochformat, ohne erkennbare Personen. Ideal: Landwehrkanal Berlin – oder ein Fluss/Kanal in deiner Stadt." caption={<span className="sr-only"><EditableText id="src_Article_tsx_1526" value={"Video-Platzhalter"} /></span>} />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-transparent" />
        <div className="relative mt-auto px-6 pb-14">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <p className="kicker text-coral-bright"><EditableText id="src_Article_tsx_1906" value={"Heute"} /></p>
              <h1 className="font-display mt-4 text-[2.6rem] leading-[1.04] font-medium text-balance"><EditableText id="src_Article_tsx_2018" value={"Der Landwehrkanal: Ein Kanal mitten in Berlin. Ausflugsboote, Velos, Menschen am Ufer."} /></h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8">
                <AtmoPlaceholder id="T1" dark title="Atmo: Wasser und Stadt, heute" hint="20–40 s eigene Aufnahme am Wasser. Startet erst nach Tippen." />
              </div>
            </Reveal>
            <a href="#auftakt" className="scroll-cue mt-10 inline-flex items-center gap-2 text-sm text-forest-muted" aria-label="Weiter scrollen">
              <ArrowDown className="size-4" /><EditableText id="src_Article_tsx_2625" value={" Scrollen"} /></a>
          </div>
        </div>
      </section></HomeSection>

      <HomeSection id="original-2" label="Auftakt im Roman"><div id="auftakt">
        <Station num="00" layer="Im Roman" title={<><EditableText id="src_Article_tsx_2847" value={"An diesem Wasser beginnt 1929 ein Kriminalfall."} /></>} media={<NovelQuote page={82} context="Bergung am Tempelhofer Ufer, nachts, nahe dem U-Bahnhof Möckernbrücke."><EditableText id="src_Article_tsx_3009" value={"Das Auto hing am Haken des Bergungskrans wie ein zu gro\xDF geratener Fisch."} /></NovelQuote>}>
          <p><EditableText id="src_Article_tsx_3139" value={"In Volker Kutschers Roman zieht ein Kran ein Auto aus dem Landwehrkanal. Am Steuer sitzt ein Toter, schwer misshandelt. Niemand weiss, wer er ist."} /></p>
        </Station>

        <Station num="00" layer="Historisch" title={<><EditableText id="src_Article_tsx_3400" value={"Das Wasser kennt auch echte politische Morde."} /></>}>
          <p><EditableText id="src_Article_tsx_3464" value={"Im Januar 1919 warfen Freikorps-Soldaten die Leiche der ermordeten Sozialistin Rosa Luxemburg in denselben Kanal. Die Weimarer Republik war da noch keinen Monat alt."} /><Check />
          </p>
        </Station>
      </div></HomeSection>

      {/* Title block */}
      <HomeSection id="original-3" label="Titelseite"><section className="flex min-h-[100svh] flex-col justify-center border-y border-border px-6 py-24">
        <div className="mx-auto w-full max-w-xl">
          <Reveal>
            <p className="kicker text-coral-ink"><EditableText id="src_Article_tsx_4037" value={"Eine Scrollstory"} /></p>
            <h2 className="font-display mt-6 text-[4.25rem] leading-[0.92] font-medium tracking-tight sm:text-8xl"><EditableText id="src_Article_tsx_4173" value={"Der"} /><br /><EditableText id="src_Article_tsx_4212" value={"nasse"} /><br />
              <span className="italic text-forest"><EditableText id="src_Article_tsx_4305" value={"Fisch"} /></span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-[32ch] text-lg leading-relaxed text-foreground/85"><EditableText id="src_Article_tsx_4475" value={"\xDCber Volker Kutschers Kriminalroman von 2007 \u2013 \xFCber eine Stadt im Ausnahmezustand und die Frage, was davon heute bleibt."} /></p>
            <p className="mt-6 text-sm text-muted-foreground"><EditableText id="src_Article_tsx_4704" value={"Von Mascha, Anessa & Ladina \xB7 S4d\xA0"} /></p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-12 border-l-2 border-coral pl-4 text-sm leading-relaxed text-muted-foreground">
            </div>
          </Reveal>
        </div>
      </section></HomeSection>

      {/* ───────── 01 · Der Fall ───────── */}
      <HomeSection id="original-4" label="Der Fall"><Chapter id="fall">
        <ChapterOpener id="fall" num="01" label="Der Fall" title={<><EditableText id="src_Article_tsx_5211" value={"Ein Toter ohne Namen."} /></>} lede="Berlin, Frühjahr 1929. Ein Kommissar aus Köln sucht seine Chance – und findet einen Fall, der zu gross für ihn ist.">
          <ol className="border-t border-forest-muted/30 text-sm">
            {[["I", "Der Tote im Landwehrkanal", "28. April – 10. Mai 1929"], ["II", "Inspektion A", "11. – 21. Mai 1929"], ["III", "Die ganze Wahrheit", "22. Mai – 21. Juni 1929"]].map(([n, t, d]) => <li key={n} className="grid grid-cols-[2rem_1fr] border-b border-forest-muted/30 py-3">
                <span className="font-display text-coral-bright"><EditableText id="src_Article_tsx_5782" value={n} /></span>
                <span>
                  <EditableText id="src_Article_tsx_5834" value={t} />
                  <span className="block text-xs text-forest-muted"><EditableText id="src_Article_tsx_5906" value={d} /></span>
                </span>
              </li>)}
          </ol>
          <p className="mt-3 text-xs text-forest-muted"><EditableText id="src_Article_tsx_6035" value={"Die drei Teile des Romans."} /></p>
        </ChapterOpener>

        <Station num="1.1" layer="Im Roman" title={<><EditableText id="src_Article_tsx_6145" value={"Gereon Rath kommt nach Berlin, weil er in K\xF6ln nicht bleiben kann."} /></>} media={<MediaPlaceholder kind="Foto" id="F1" title="Eigenes Foto: deine Ausgabe des Romans" hint="Zum Beispiel auf dem Pult, mit Notizzetteln. Cover nur selbst fotografieren. Covermotiv laut Impressum der Piper-Ausgabe: Eva Besnyö/MAI." />}>
          <p><EditableText id="src_Article_tsx_6471" value={"In K\xF6ln hat der Kriminalkommissar im Dienst einen Mann erschossen \u2013 den Sohn eines einflussreichen Zeitungsverlegers. \xDCber die Beziehungen seines Vaters wird Rath nach Berlin versetzt."} /></p>
        </Station>

        <Station num="1.2" layer="Im Roman" title={<><EditableText id="src_Article_tsx_6769" value={"Er will zur Mordkommission \u2013 und landet bei der Sitte."} /></>}>
          <p><EditableText id="src_Article_tsx_6842" value={"Im Polizeipr\xE4sidium am Alexanderplatz, der \xABRoten Burg\xBB, arbeitet Rath unter Bruno Wolter bei der Sittenpolizei: Razzien, Nachtclubs, Pornografie. Sein Ziel ist die Mordinspektion von Ernst Gennat."} /></p>
          <p className="text-sm text-muted-foreground"><EditableText id="src_Article_tsx_7135" value={"Gennat ist keine Romanfigur: Den Kriminalisten gab es wirklich. "} /><Check><EditableText id="src_Article_tsx_7219" value={"Beleg zu Gennat erg\xE4nzen"} /></Check>
          </p>
        </Station>

        <Station num="1.3" layer="Im Roman" title={<><EditableText id="src_Article_tsx_7340" value={"Ein Toter im Landwehrkanal ist seine Chance."} /></>}>
          <p><EditableText id="src_Article_tsx_7403" value={"Die Ermittlungen der Mordkommission stocken. Rath schaltet sich ein \u2013 ohne Auftrag und ohne seine Vorgesetzten zu informieren."} /></p>
        </Station>

        <Station num="1.4" layer="Im Roman" title={<><EditableText id="src_Article_tsx_7643" value={"Die Spur f\xFChrt zu Gold, Waffen und Exilrussen."} /></>}>
          <p><EditableText id="src_Article_tsx_7708" value={"Militante russische Emigranten wollen mit geschmuggeltem Gold Waffen kaufen. Auch Berliner Ringvereine \u2013 die organisierte Unterwelt \u2013 sind hinter dem Gold her."} /></p>
        </Station>

        <Station num="1.5" layer="Im Roman" title={<><EditableText id="src_Article_tsx_7981" value={"Bald hat der Ermittler selbst etwas zu verbergen."} /></>} media={<NovelQuote page={345} context="Rath zieht Bilanz nach einer Woche."><EditableText id="src_Article_tsx_8111" value={"Einen Unterweltboss aufgeschreckt, die russische Kolonie in Berlin gegen sich aufgebracht und des Nachts heimlich eine Leiche verschwinden lassen."} /></NovelQuote>}>
          <p><EditableText id="src_Article_tsx_8328" value={"Bei einem Handgemenge l\xF6st sich ein Schuss aus Raths Waffe, ein Mann stirbt. Rath versucht, den Vorfall zu vertuschen. Ab hier ermittelt er gegen andere \u2013 und versteckt sich selbst."} /></p>
        </Station>

        <Station num="1.6" layer="Im Roman" title={<><EditableText id="src_Article_tsx_8623" value={"Ein \xABnasser Fisch\xBB ist ein Fall, der nie gel\xF6st wird."} /></>} media={<>
            <NovelQuote page={270} context="Charlotte Ritter im Gespräch mit Rath. Danach heisst es: «So nannten sie in der Burg die ungelösten Fälle.»"><EditableText id="src_Article_tsx_8844" value={"Gl\xFCcklicherweise haben wir unter Gennat nicht allzu viele nasse Fische."} /></NovelQuote>
            <MediaPlaceholder kind="Karte" id="K1" ratio="1 / 1" title="Karte: Schauplätze im Berlin von 1929" hint="Markieren: Polizeipräsidium Alexanderplatz · Landwehrkanal · Wedding · Neukölln. Eigene Karte (z. B. OpenStreetMap, Lizenz ODbL nennen) oder historischer Stadtplan mit Nachweis." caption={<><EditableText id="src_Article_tsx_9264" value={"Karte: "} /><Fill><EditableText id="src_Article_tsx_9296" value={"Kartengrundlage, Lizenz"} /></Fill><EditableText id="src_Article_tsx_9326" value={" \xB7 Bearbeitung: "} /><Fill><EditableText id="src_Article_tsx_9348" value={"Dein Name"} /></Fill>
                </>} />
            </>}>
          <p><EditableText id="src_Article_tsx_9420" value={"Der Titel stammt aus dem Jargon der Berliner Kripo im Roman. Die Frage dahinter: Welche F\xE4lle in dieser Stadt bleiben ungel\xF6st \u2013 und wer hat ein Interesse daran?"} /></p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 02 · Kontext ───────── */}
      <HomeSection id="original-5" label="Historischer Kontext"><Chapter id="kontext">
        <ChapterOpener id="kontext" num="02" label="Kontext" title={<><EditableText id="src_Article_tsx_9877" value={"Eine Demokratie unter Druck."} /></>} lede="Weimarer Republik · politische Gewalt · moderne Grossstadt. Drei Schichten, auf denen der Roman gebaut ist." />

        <Station num="2.1" layer="Historisch" title={<><EditableText id="src_Article_tsx_10084" value={"1929 ist die Republik zehn Jahre alt \u2013 und hat Feinde auf beiden Seiten."} /></>} media={<SourceFigure id="Q1" type="Plakat / Flugblatt" title="Politisches Plakat der Weimarer Zeit" suggestion="Zum Beispiel ein Wahlplakat der KPD oder der NSDAP. Seriöse Archive: Bundesarchiv, Deutsches Historisches Museum." why="Zeigt, mit welcher Sprache und welchen Bildern gegen die Republik geworben wurde." />}>
          <p><EditableText id="src_Article_tsx_10494" value={"Die Weimarer Republik entstand nach Kriegsniederlage und Revolution 1918/19. Kommunisten von links und Nationalisten von rechts \u2013 darunter die NSDAP \u2013 wollen sie abschaffen."} /></p>
          <p><EditableText id="src_Article_tsx_10721" value={"Ende Oktober 1929 bricht die New Yorker B\xF6rse ein. Es ist der Beginn der Weltwirtschaftskrise."} /></p>
        </Station>

        <Station num="2.2" layer="Historisch" dark title={<><EditableText id="src_Article_tsx_10900" value={"Am 1. Mai 1929 schiesst die Polizei in Berliner Arbeiterviertel."} /></>}>
          <p><EditableText id="src_Article_tsx_10983" value={"Polizeipr\xE4sident Karl Z\xF6rgiebel (SPD) hatte Demonstrationen unter freiem Himmel verboten. Die KPD rief trotzdem zum 1. Mai auf. In Wedding und Neuk\xF6lln eskaliert die Lage \xFCber mehrere Tage. Mehr als 30 Menschen sterben, viele davon Unbeteiligte."} /><span className="kicker ml-1 inline-block rounded-sm border border-dashed border-coral-bright px-1 py-px text-[0.6rem] text-coral-bright"><EditableText id="src_Article_tsx_11416" value={"Zahl belegen"} /></span>
          </p>
          <p><EditableText id="src_Article_tsx_11492" value={"Der Roman l\xE4sst Rath mitten in diesen \xABBlutmai\xBB geraten."} /></p>
        </Station>

        <Station num="2.3" layer="Historisch" title={<><EditableText id="src_Article_tsx_11628" value={"Gewalt ist in Weimar kein Ausnahmefall, sondern eine Methode."} /></>} media={<SourceFigure id="Q2" type="Foto / Zeitung" title="Quelle zum Blutmai 1929" suggestion="Zeitgenössisches Foto aus Wedding oder Neukölln, oder eine Zeitungsseite vom Mai 1929." why="Macht sichtbar, wie nah die Romanhandlung an realen Ereignissen liegt." />}>
          <p><EditableText id="src_Article_tsx_11972" value={"Parteien unterhalten bewaffnete Verb\xE4nde, etwa die SA der NSDAP oder den Roten Frontk\xE4mpferbund der KPD. Politische Morde wie jene an Rosa Luxemburg (1919) oder Aussenminister Walther Rathenau (1922) ersch\xFCttern das Land."} /></p>
        </Station>

        <Station num="2.4" layer="Historisch" title={<><EditableText id="src_Article_tsx_12321" value={"Berlin ist laut, schnell und elektrisch."} /></>} media={<>
              <MediaPlaceholder kind="Video" id="V2" ratio="9 / 16" title="Eigenes Video: Grossstadt heute" hint="8–12 s: Verkehr, Leuchtreklame, Menschenmenge. Gegenschnitt zu 1929." />
              <AtmoPlaceholder id="T2" title="Atmo: Strasse, Verkehr, Stimmen" hint="Eigene Aufnahme, 20–30 s." />
              <NovelQuote page={9} context="Motto des Romans, dort Walther Rathenau zugeschrieben."><EditableText id="src_Article_tsx_12778" value={"Spree-Athen ist tot, und Spree-Chicago w\xE4chst heran."} /></NovelQuote>
            </>}>
          <p><EditableText id="src_Article_tsx_12907" value={"Mit rund vier Millionen Menschen ist Berlin eine der gr\xF6ssten St\xE4dte der Welt. Kinos, Variet\xE9s, Nachtclubs, Verkehr. 1927 entsteht der Film \xABBerlin. Die Sinfonie der Gro\xDFstadt\xBB, 1929 erscheint D\xF6blins Roman \xABBerlin Alexanderplatz\xBB."} /><Check><EditableText id="src_Article_tsx_13195" value={"Einwohnerzahl belegen"} /></Check>
          </p>
        </Station>

        <Station num="2.5" layer="Deutung" title={<><EditableText id="src_Article_tsx_13312" value={"Die moderne Stadt ist B\xFChne und Versteck zugleich."} /></>} media={<SourceFigure id="Q3" type="Foto / Stadtplan" title="Berlin um 1929: Alexanderplatz oder Stadtplan" suggestion="Historische Fotografie oder ein Stadtplan von etwa 1929, mit Archivnachweis." why="Verortet den Roman im realen Stadtraum." />}>
          <p><EditableText id="src_Article_tsx_13628" value={"Im Roman f\xFChren die Spuren durch Nachtleben, Hinterh\xF6fe und Amtsstuben. Wer in der Menge verschwinden will, kann das hier \u2013 auch der Ermittler selbst."} /></p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 03 · Thema ───────── */}
      <HomeSection id="original-6" label="Zentrales Thema"><Chapter id="thema">
        <ChapterOpener id="thema" num="03" label="Zentrales Thema" title={<><EditableText id="src_Article_tsx_14071" value={"Wer sch\xFCtzt die Ordnung \u2013 und vor wem?"} /></>} lede="Der Roman fragt, was Recht und Moral wert sind, wenn selbst die Hüter der Ordnung Grenzen überschreiten." />

        <Station num="3.1" layer="Im Roman" title={<><EditableText id="src_Article_tsx_14283" value={"Rath bricht Regeln, um ans Ziel zu kommen."} /></>} media={<NovelQuote page={133} context="Rath beschliesst, sein Wissen über den Toten für sich zu behalten."><EditableText id="src_Article_tsx_14437" value={"Darauf kam es doch an im Leben. Die Chancen sehen und sie ergreifen."} /></NovelQuote>}>
          <p><EditableText id="src_Article_tsx_14562" value={"Er ermittelt ohne Auftrag, beh\xE4lt Wissen f\xFCr sich und vertuscht eine eigene Tat. Er ist kein Held, sondern ein Ehrgeiziger mit Gewissen \u2013 manchmal."} /></p>
        </Station>

        <Station num="3.2" layer="Im Roman" title={<><EditableText id="src_Article_tsx_14823" value={"Ordnung schaffen ist nicht dasselbe wie die Wahrheit finden."} /></>} media={<NovelQuote page={83} context="Gedanken von Oberkommissar Böhm am Fundort im Landwehrkanal."><EditableText id="src_Article_tsx_14988" value={"Diesen Preu\xDFen war es immer noch wichtiger, am Tatort erst einmal Ordnung zu schaffen, statt Spuren zu sichern."} /></NovelQuote>}>
          <p><EditableText id="src_Article_tsx_15170" value={"Schon am ersten Fundort prallen zwei Arten von Polizei aufeinander: die alte, die auf Ruhe und Gehorsam setzt, und die moderne, die Beweise sucht."} /></p>
        </Station>

        <Station num="3.3" layer="Im Roman" title={<><EditableText id="src_Article_tsx_15430" value={"Je tiefer Rath gr\xE4bt, desto weniger traut er der eigenen Beh\xF6rde."} /></>}>
          <p><EditableText id="src_Article_tsx_15514" value={"Der Fall zeigt eine Polizei, in der nicht alle dieselben Ziele verfolgen. Halte fest, an welcher Stelle Rath das zum ersten Mal merkt."} /><Check><EditableText id="src_Article_tsx_15693" value={"Textstelle + Seite"} /></Check>
          </p>
        </Station>

        <Station num="3.4" layer="Deutung" dark title={<><EditableText id="src_Article_tsx_15812" value={"Eine Demokratie braucht Institutionen, denen man trauen kann."} /></>} media={<QuotePlaceholder id="Z2" dark hint="Eine Stelle, die deine These stützt – oder ihr widerspricht." />}>
          <p>
            <span className="kicker mr-2 text-coral-bright"><EditableText id="src_Article_tsx_16063" value={"These"} /></span><EditableText id="src_Article_tsx_16075" value={"Kutscher zeigt im Kleinen, was die Republik im Grossen schw\xE4cht: Wenn Polizei und Staat nicht verl\xE4sslich nach Regeln handeln, verliert die Ordnung ihre Glaubw\xFCrdigkeit."} /></p>
          <p className="text-sm text-forest-muted"><EditableText id="src_Article_tsx_16336" value={"Diese These ist ein Vorschlag. Pr\xFCfe, sch\xE4rfe oder ersetze sie."} /></p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 04 · Mein Aspekt ───────── */}
      <HomeSection id="original-7" label="Mein Aspekt"><Chapter id="aspekt">
        <ChapterOpener id="aspekt" num="04" label="Mein Aspekt" title={<Fill><EditableText id="src_Article_tsx_16660" value={"Titel deines Aspekts"} /></Fill>} lede="Dieses Kapitel gestaltest du selbst. Unten steht ein Beispiel als Gerüst – ersetze es oder passe es an.">
          <PlaceholderTag kind="Eigenes Kapitel" dark />
        </ChapterOpener>

        <Station num="4.1" layer="Dein Teil" title={<><EditableText id="src_Article_tsx_16938" value={"Beispiel: Charlotte Ritter und die \xABneue Frau\xBB."} /></>} media={<NovelQuote page={85} context="Oberkommissar Böhm zu Charlotte Ritter am Fundort."><EditableText id="src_Article_tsx_17080" value={"Zeigen Sie dem Mann hier erst mal, wie man Spuren sichert."} /></NovelQuote>}>
          <p><EditableText id="src_Article_tsx_17195" value={"Charlotte \xABCharly\xBB Ritter ist Stenotypistin bei der Mordkommission \u2013 und sichert am Fundort die Spuren. Sie will studieren und vielleicht Polizeibeamtin werden (S. 270)."} /></p>
          <p className="text-sm text-muted-foreground"><EditableText id="src_Article_tsx_17460" value={"Andere m\xF6gliche Aspekte: Raths Kriegsvergangenheit \xB7 die Ringvereine \xB7 Presse und \xD6ffentlichkeit \xB7 Vom Buch zur Serie."} /></p>
        </Station>

        <Station num="4.2" layer="Historisch" title={<><EditableText id="src_Article_tsx_17694" value={"Frauen d\xFCrfen seit 1918 w\xE4hlen \u2013 und dr\xE4ngen in neue Berufe."} /></>} media={<SourceFigure id="Q4" type="Quelle zum Aspekt" title="Historische Quelle zu deinem Aspekt" suggestion="Beim Beispiel: Foto, Zeitschrift oder Werbung der 1920er, die das Bild der «neuen Frau» zeigt." why="Verbindet die Romanfigur mit der historischen Wirklichkeit." />}>
          <p><EditableText id="src_Article_tsx_18049" value={"Die \xABneue Frau\xBB der 1920er ist berufst\xE4tig, st\xE4dtisch, selbstbewusst \u2013 zumindest als Leitbild. Wie viel davon Wirklichkeit war, ist eine gute Frage f\xFCr deine Recherche."} /><Check><EditableText id="src_Article_tsx_18262" value={"Fachquelle erg\xE4nzen"} /></Check>
          </p>
        </Station>

        <Station num="4.3" layer="Dein Teil" title={<Fill><EditableText id="src_Article_tsx_18383" value={"Deine Kernaussage in einem Satz"} /></Fill>} media={<MediaPlaceholder kind="Foto" id="F2" ratio="3 / 4" title="Eigenes Foto zu deinem Aspekt" hint="Ein Bild, das deinen Gedanken in die Gegenwart holt." />}>
          <p>
            <Fill><EditableText id="src_Article_tsx_18617" value={"Zwei bis drei S\xE4tze Begr\xFCndung mit Textstelle (Seite) und historischer Quelle"} /></Fill>
          </p>
        </Station>
      </Chapter></HomeSection>

      {/* ───────── 05 · Gegenwart ───────── */}
      <HomeSection id="original-8" label="Gegenwart"><Chapter id="gegenwart">
        <ChapterOpener id="gegenwart" num="05" label="Gegenwart" title={<><EditableText id="src_Article_tsx_18969" value={"Was hat 1929 mit uns zu tun?"} /></>} lede="Fast hundert Jahre später ist Weimar populär wie nie. Das ist kein Zufall – und keine einfache Gleichung." />

        <Station num="5.1" layer="Heute" title={<><EditableText id="src_Article_tsx_19169" value={"Weimar ist Popkultur geworden."} /></>}>
          <p><EditableText id="src_Article_tsx_19218" value={"Aus dem Roman wurde ab 2017 die Fernsehserie \xABBabylon Berlin\xBB. Es gibt eine Graphic Novel von Arne Jysch und ein H\xF6rspiel. Ein Krimi \xFCber 1929 erreicht ein Massenpublikum."} /></p>
          <p>
            <Fill><EditableText id="src_Article_tsx_19462" value={"Warum gerade jetzt? Deine Vermutung in einem Satz"} /></Fill>
          </p>
        </Station>

        <Station num="5.2" layer="Deutung" title={<><EditableText id="src_Article_tsx_19606" value={"Vergleiche mit Weimar helfen nur, wenn man die Unterschiede benennt."} /></>} media={<Comparison />}>
          <p><EditableText id="src_Article_tsx_19716" value={"Stelle Damals und Heute nebeneinander. Belege jedes eigene Beispiel mit einer Quelle und einem Datum."} /></p>
        </Station>

        <Station num="5.3" layer="Heute" title={<><EditableText id="src_Article_tsx_19892" value={"Der Roman ist zu Ende. Die Frage nicht."} /></>} media={<MediaPlaceholder kind="Foto" id="F3" ratio="4 / 5" title="Eigenes Bild: zurück am Wasser, heute" hint="Schliesst den Kreis zum Einstieg. Gleicher Ort, anderer Blick." />}>
          <p>
            <Fill><EditableText id="src_Article_tsx_20148" value={"Dein Fazit: Was nimmst du aus dem Roman f\xFCr die Gegenwart mit? H\xF6chstens drei S\xE4tze."} /></Fill>
          </p>
        </Station>
      </Chapter></HomeSection>

      <HomeSection id="original-9" label="Werkstatt"><section id="werkstatt" className="mx-auto w-full max-w-xl px-6 py-20"><h2 className="font-display text-4xl"><EditableText id="src_Article_tsx_20468" value={"Werkstatt: Roman und Geschichte"} /></h2><p className="my-6"><EditableText id="src_Article_tsx_20524" value={"Diese \xDCbersicht trennt Romanfiguren und Handlung von historischen Angaben. Erg\xE4nzen Sie die ausgewiesenen Fachquellen."} /></p><FactFiction /><p className="mt-8"><EditableText id="src_Article_tsx_20681" value={"Mit dem Bearbeitungslink k\xF6nnen Sie markierte Texte \xE4ndern und in den Medienfenstern Dateien hochladen. Captions und Quellen werden zusammen mit dem Projekt online gespeichert. Unter \u201EProjekt verwalten\u201C k\xF6nnen Sie weitere Seiten und Vorlagen erg\xE4nzen."} /></p></section></HomeSection>
      <HomeSection id="original-10" label="Quellen"><Sources /></HomeSection>

      <HomeSection id="original-11" label="Fusszeile"><footer className="bg-forest-deep px-6 py-10 text-forest-muted">
        <div className="mx-auto flex max-w-xl items-center justify-between text-xs">
          <span className="font-display text-base italic text-forest-foreground"><EditableText id="src_Article_tsx_21325" value={"Der nasse Fisch"} /></span>
          <a href="#heute" className="underline decoration-coral-bright underline-offset-4"><EditableText id="src_Article_tsx_21440" value={"Zur\xFCck zum Anfang"} /></a>
        </div>
      </footer></HomeSection>
    </HomeSections></main>;
}
