import { EditableText, SharedMedia } from "@/components/shared-editor";
import { OriginalMedia } from "./OriginalMedia";
import { AudioLines, Camera, FileText, Map, Play, Quote, Video, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export type PlaceholderKind = "Foto" | "Video" | "Atmo-Ton" | "Karte" | "Zitat" | "Historische Quelle" | "Text";
const icons: Record<PlaceholderKind, LucideIcon> = {
  Foto: Camera,
  Video: Video,
  "Atmo-Ton": AudioLines,
  Karte: Map,
  Zitat: Quote,
  "Historische Quelle": FileText,
  Text: FileText
};

/** Coral tag that marks something as unfinished. */
export function PlaceholderTag({
  kind,
  id,
  dark
}: {
  kind: PlaceholderKind | string;
  id?: string | undefined;
  dark?: boolean | undefined;
}) {
  return <span className={cn("kicker inline-flex items-center gap-1.5 rounded-sm px-1.5 py-0.5", dark ? "bg-coral-bright text-forest-deep" : "bg-coral text-accent-foreground")}><EditableText id="src_components_story_Placeholder_tsx_920" value={"Platzhalter \xB7 "} /><EditableText id="src_components_story_Placeholder_tsx_941" value={kind} />
      <EditableText id="src_components_story_Placeholder_tsx_954" value={id ? <span className="opacity-80">· {id}</span> : null} />
    </span>;
}

/** Inline text the learner still has to fill in. */
export function Fill({
  children
}: {
  children: ReactNode;
}) {
  return <span className="fill-in"><EditableText id="src_components_story_Placeholder_tsx_1182" value={"["} /><EditableText id="src_components_story_Placeholder_tsx_1183" value={children} /><EditableText id="src_components_story_Placeholder_tsx_1193" value={"]"} /></span>;
}

/** Inline note: claim needs a page reference / source before submission. */
export function Check({
  children = "Beleg ergänzen",
  dark
}: {
  children?: ReactNode;
  dark?: boolean;
}) {
  return <span className={cn("kicker ml-1 inline-block translate-y-[-2px] rounded-sm border border-dashed px-1 py-px text-[0.6rem]", dark ? "border-coral-bright text-coral-bright" : "border-coral text-coral-ink")}>
      <EditableText id="src_components_story_Placeholder_tsx_1618" value={children} />
    </span>;
}

/** Marks a text passage as an AI draft that the learner still has to rework. */
export function Proposal({
  dark
}: {
  dark?: boolean;
}) {
  return <Check dark={dark ?? false}><EditableText id="src_components_story_Placeholder_tsx_1825" value={"KI-Vorschlag \xB7 \xFCberarbeiten"} /></Check>;
}

/** Inline link from a claim to the labelled historical source that supports it. */
export function Ref({
  to,
  dark
}: {
  to: string;
  dark?: boolean;
}) {
  return <a href={`#quelle-${to.toLowerCase()}`} className={cn("kicker ml-1 inline-block translate-y-[-2px] rounded-sm px-1 py-px text-[0.6rem] underline underline-offset-2", dark ? "text-coral-bright decoration-coral-bright" : "text-forest decoration-coral")} aria-label={`Beleg: historische Quelle ${to}`}><EditableText id="src_components_story_Placeholder_tsx_2334" value={"\u2192 "} /><EditableText id="src_components_story_Placeholder_tsx_2343" value={to} />
    </a>;
}

/** Recording plan for the learner's own Berlin material. */
export type Shot = {
  /** Concrete place in Berlin. */
  place: string;
  /** Why this place – link to novel or history. */
  why: string;
  /** Suggested file name. */
  file: string;
  /** Technical brief: length, framing, sound. */
  tech: string;
};
function ShotProtocol({
  shot,
  kind,
  dark
}: {
  shot: Shot;
  kind: PlaceholderKind;
  dark?: boolean;
}) {
  const muted = dark ? "text-forest-muted" : "text-muted-foreground";
  const rows: [string, ReactNode][] = [["Datei", <code key="f" className="text-[0.7rem]">{shot.file}</code>], ["Technik", shot.tech], ["Aufnahmedatum", <Fill key="d"><EditableText id="src_components_story_Placeholder_tsx_3027" value={"TT.MM.JJJJ, Uhrzeit"} /></Fill>], ["Personen", <Fill key="p"><EditableText id="src_components_story_Placeholder_tsx_3083" value={"keine erkennbar \xB7 oder: Einwilligung von \u2026 liegt vor"} /></Fill>]];
  if (kind === "Video") rows.push(["Untertitel", <Fill key="u"><EditableText id="src_components_story_Placeholder_tsx_3209" value={"Datei "} /><EditableText id="src_components_story_Placeholder_tsx_3215" value={shot.file.replace(/\.\w+$/, ".vtt")} /></Fill>]);
  if (kind === "Foto" || kind === "Karte") rows.push(["Alternativtext", <Fill key="a"><EditableText id="src_components_story_Placeholder_tsx_3349" value={"Was ist zu sehen? 1\u20132 S\xE4tze"} /></Fill>]);
  if (kind === "Atmo-Ton") rows.push(["Textfassung", <Fill key="t"><EditableText id="src_components_story_Placeholder_tsx_3454" value={"Ger\xE4usche in Worten, siehe unten"} /></Fill>]);
  return <div className={cn("mt-3 border-l-2 pl-3 text-xs leading-relaxed", dark ? "border-coral-bright" : "border-coral")}>
      <p>
        <span className={cn("font-semibold", dark ? "text-forest-foreground" : "text-foreground")}><EditableText id="src_components_story_Placeholder_tsx_3731" value={"Ort: "} /></span>
        <EditableText id="src_components_story_Placeholder_tsx_3752" value={shot.place} />
      </p>
      <p className={muted}>
        <span className={cn("font-semibold", dark ? "text-forest-foreground" : "text-foreground")}><EditableText id="src_components_story_Placeholder_tsx_3903" value={"Warum hier? "} /></span>
        <EditableText id="src_components_story_Placeholder_tsx_3931" value={shot.why} />
      </p>
      <details className="group mt-2">
        <summary className={cn("kicker cursor-pointer text-[0.65rem]", dark ? "text-coral-bright" : "text-coral-ink")}><EditableText id="src_components_story_Placeholder_tsx_4111" value={"Aufnahmeprotokoll"} /></summary>
        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
          {rows.map(([k, v]) => <div key={k} className="contents">
              <dt className={muted}><EditableText id="src_components_story_Placeholder_tsx_4334" value={k} /></dt>
              <dd><EditableText id="src_components_story_Placeholder_tsx_4361" value={v} /></dd>
            </div>)}
        </dl>
        <p className={cn("mt-2", muted)}><EditableText id="src_components_story_Placeholder_tsx_4446" value={"Heutiger Ort \u2013 keine historische Rekonstruktion."} /></p>
      </details>
    </div>;
}
function MediaTask({
  task,
  dark
}: {
  task: string;
  dark?: boolean;
}) {
  return <p className={cn("mt-2 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
      <span className={cn("kicker mr-1.5 text-[0.62rem]", dark ? "text-coral-bright" : "text-coral-ink")}><EditableText id="src_components_story_Placeholder_tsx_4830" value={"Was das Medium zeigt"} /></span>
      <EditableText id="src_components_story_Placeholder_tsx_4880" value={task} />
    </p>;
}
export function MediaPlaceholder({
  kind,
  id,
  title,
  hint,
  ratio = "4 / 5",
  dark = false,
  className,
  caption,
  alignTop = false,
  task,
  shot
}: {
  kind: PlaceholderKind;
  id: string;
  title: string;
  hint?: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
  caption?: ReactNode;
  alignTop?: boolean;
  /** What this medium adds that the text does not say. */
  task?: string;
  /** Recording plan for own material. */
  shot?: Shot;
}) {
  const Icon = icons[kind];
  return <figure className={cn("w-full", className)}>
      <OriginalMedia id={id} title={title} kind={kind === "Video" ? "video" : "img"}><div className={cn("relative flex w-full flex-col items-center gap-3 rounded-sm px-6 text-center", alignTop ? "justify-start pt-20" : "justify-center", dark ? "placeholder-surface-dark text-forest-foreground" : "placeholder-surface text-foreground")} style={{
        aspectRatio: ratio
      }} role="img" aria-label={`Platzhalter ${kind}: ${title}`}>
        <div className="absolute left-3 top-3">
          <PlaceholderTag kind={kind} id={id} dark={dark} />
        </div>
        <Icon className={cn("size-7", dark ? "text-coral-bright" : "text-coral")} strokeWidth={1.5} />
        <p className="font-display max-w-[22ch] text-lg leading-snug"><EditableText id="src_components_story_Placeholder_tsx_6195" value={title} /></p>
        {hint ? <p className={cn("max-w-[34ch] text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
            <EditableText id="src_components_story_Placeholder_tsx_6348" value={hint} />
          </p> : null}
      </div></OriginalMedia>
      <figcaption className={cn("mt-2 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
        <EditableText id="src_components_story_Placeholder_tsx_6535" value={caption ?? <>
            <Fill>Bildlegende</Fill> ·{" "}
            {shot ? <>
                Eigene Aufnahme, <Fill>Datum</Fill>
              </> : <>
                Nachweis: <Fill>Urheber:in, Datum, Ort, Lizenz</Fill>
              </>}
          </>} />
        <EditableText id="src_components_story_Placeholder_tsx_6804" value={task ? <MediaTask task={task} dark={dark} /> : null} />
        <EditableText id="src_components_story_Placeholder_tsx_6866" value={shot ? <ShotProtocol shot={shot} kind={kind} dark={dark} /> : null} />
      </figcaption>
    </figure>;
}

/** Atmo sound placeholder – visually a player, functionally inert until a file is added. */
export function AtmoPlaceholder({
  id,
  title,
  hint,
  dark,
  task,
  shot
}: {
  id: string;
  title: string;
  hint: string;
  dark?: boolean;
  task?: string;
  shot?: Shot;
}) {
  return <div>
      <OriginalMedia id={id} title={title} kind="audio"><div className={cn("flex items-center gap-4 rounded-sm px-4 py-4", dark ? "placeholder-surface-dark text-forest-foreground" : "placeholder-surface")}>
        <span aria-hidden className={cn("flex size-11 shrink-0 items-center justify-center rounded-full border border-dashed", dark ? "border-coral-bright text-coral-bright" : "border-coral text-coral")}>
          <Play className="size-4 translate-x-px" />
        </span>
        <div className="min-w-0">
          <PlaceholderTag kind="Atmo-Ton" id={id} dark={dark} />
          <p className="mt-1.5 text-sm font-medium leading-snug"><EditableText id="src_components_story_Placeholder_tsx_7913" value={title} /></p>
          <p className={cn("text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}><EditableText id="src_components_story_Placeholder_tsx_8034" value={hint} /></p>
        </div>
      </div></OriginalMedia>
      <details className={cn("mt-2 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
        <summary className={cn("kicker cursor-pointer text-[0.65rem]", dark ? "text-coral-bright" : "text-coral-ink")}><EditableText id="src_components_story_Placeholder_tsx_8325" value={"Textfassung des Tons"} /></summary>
        <p className="mt-1.5">
          <Fill><EditableText id="src_components_story_Placeholder_tsx_8423" value={"Was ist zu h\xF6ren? z. B. \xABWasser schl\xE4gt an die Ufermauer, ein Velo klingelt, Stimmen auf Englisch\xBB"} /></Fill>
        </p>
      </details>
      {task ? <MediaTask task={task} dark={dark ?? false} /> : null}
      {shot ? <ShotProtocol shot={shot} kind="Atmo-Ton" dark={dark ?? false} /> : null}
    </div>;
}

/** Quote placeholder: never invent quotes – the learner inserts them from the novel. */
export function QuotePlaceholder({
  id,
  hint,
  dark
}: {
  id: string;
  hint: string;
  dark?: boolean;
}) {
  return <blockquote className={cn("rounded-sm px-5 py-6", dark ? "placeholder-surface-dark text-forest-foreground" : "placeholder-surface")}>
      <PlaceholderTag kind="Zitat" id={id} dark={dark} />
      <p className="font-display mt-4 text-2xl leading-snug italic opacity-70"><EditableText id="src_components_story_Placeholder_tsx_9214" value={"\xABZitat aus dem Roman hier einf\xFCgen.\xBB"} /></p>
      <p className={cn("mt-3 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}><EditableText id="src_components_story_Placeholder_tsx_9381" value={hint} /></p>
      <footer className="mt-3 text-xs"><EditableText id="src_components_story_Placeholder_tsx_9431" value={"Kutscher: Der nasse Fisch, E-Book Piper 2020, S. "} /><Fill><EditableText id="src_components_story_Placeholder_tsx_9495" value={"Seite"} /></Fill>
      </footer>
    </blockquote>;
}

/** A labelled historical source with full metadata and source criticism. */
export function SourceFigure({
  id,
  type,
  title,
  why,
  suggestion,
  supports,
  ratio = "4 / 3"
}: {
  id: string;
  type: string;
  title: string;
  why: string;
  suggestion: string;
  /** Which claim in the story this source backs up. */
  supports?: string;
  ratio?: string;
}) {
  const meta = ["Urheber:in", "Titel", "Jahr", "Institution / Archiv", "Signatur oder URL", "Abrufdatum", "Lizenz / Nutzungsrecht"];
  const critique: [string, string][] = [["Autorenschaft", "Wer hat die Quelle gemacht – und in wessen Auftrag?"], ["Entstehungszeit", "Wann genau – vor, während oder nach dem Ereignis?"], ["Absicht", "Wen wollte sie überzeugen, informieren, mobilisieren?"], ["Grenzen", "Was zeigt sie nicht? Was ist unsicher?"]];
  return <figure id={`quelle-${id.toLowerCase()}`} className="w-full scroll-mt-24 border-t-2 border-forest pt-3">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <span className="kicker text-forest"><EditableText id="src_components_story_Placeholder_tsx_10594" value={"Historische Quelle "} /><EditableText id="src_components_story_Placeholder_tsx_10613" value={id} /></span>
        <span className="kicker text-muted-foreground"><EditableText id="src_components_story_Placeholder_tsx_10680" value={type} /></span>
      </div>
      <OriginalMedia id={id} title={title} kind="document"><div className="placeholder-surface relative flex w-full flex-col items-center justify-center gap-2 rounded-sm px-6 text-center" style={{
        aspectRatio: ratio
      }} role="img" aria-label={`Platzhalter historische Quelle ${id}: ${title}`}>
        <div className="absolute left-3 top-3">
          <PlaceholderTag kind="Historische Quelle" id={id} />
        </div>
        <FileText className="size-7 text-coral" strokeWidth={1.5} />
        <p className="font-display max-w-[24ch] text-lg leading-snug"><EditableText id="src_components_story_Placeholder_tsx_11279" value={title} /></p>
        <p className="max-w-[34ch] text-xs leading-relaxed text-muted-foreground"><EditableText id="src_components_story_Placeholder_tsx_11373" value={suggestion} /></p>
      </div></OriginalMedia>
      <figcaption className="mt-3 space-y-3 text-xs leading-relaxed">
        <p>
          <EditableText id="src_components_story_Placeholder_tsx_11511" value={meta.map((m, i) => <span key={m}>
              {i > 0 ? " · " : null}
              <Fill>{m}</Fill>
            </span>)} />
        </p>
        <EditableText id="src_components_story_Placeholder_tsx_11657" value={supports ? <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Belegt: </span>
            {supports}
          </p> : null} />
        <p className="border-l-2 border-coral pl-3 text-muted-foreground">
          <span className="font-semibold text-foreground"><EditableText id="src_components_story_Placeholder_tsx_11962" value={"Warum diese Quelle? "} /></span>
          <EditableText id="src_components_story_Placeholder_tsx_12000" value={why} />
        </p>
        <div>
          <p className="kicker text-[0.65rem] text-forest"><EditableText id="src_components_story_Placeholder_tsx_12092" value={"Quellenkritik"} /></p>
          <dl className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
            {critique.map(([k, q]) => <div key={k} className="contents">
                <dt className="font-medium"><EditableText id="src_components_story_Placeholder_tsx_12305" value={k} /></dt>
                <dd className="text-muted-foreground">
                  <EditableText id="src_components_story_Placeholder_tsx_12387" value={q} /> <Fill><EditableText id="src_components_story_Placeholder_tsx_12397" value={"Antwort"} /></Fill>
                </dd>
              </div>)}
          </dl>
        </div>
      </figcaption>
    </figure>;
}
