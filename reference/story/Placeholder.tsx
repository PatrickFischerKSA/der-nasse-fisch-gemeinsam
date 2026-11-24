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
  Text: FileText,
};

/** Coral tag that marks something as unfinished. */
export function PlaceholderTag({ kind, id, dark }: { kind: PlaceholderKind | string; id?: string | undefined; dark?: boolean | undefined }) {
  return (
    <span
      className={cn(
        "kicker inline-flex items-center gap-1.5 rounded-sm px-1.5 py-0.5",
        dark ? "bg-coral-bright text-forest-deep" : "bg-coral text-accent-foreground",
      )}
    >
      Platzhalter · {kind}
      {id ? <span className="opacity-80">· {id}</span> : null}
    </span>
  );
}

/** Inline text the learner still has to fill in. */
export function Fill({ children }: { children: ReactNode }) {
  return <span className="fill-in">[{children}]</span>;
}

/** Inline note: claim needs a page reference / source before submission. */
export function Check({ children = "Beleg ergänzen", dark }: { children?: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "kicker ml-1 inline-block translate-y-[-2px] rounded-sm border border-dashed px-1 py-px text-[0.6rem]",
        dark ? "border-coral-bright text-coral-bright" : "border-coral text-coral-ink",
      )}
    >
      {children}
    </span>
  );
}

/** Marks a text passage as an AI draft that the learner still has to rework. */
export function Proposal({ dark }: { dark?: boolean }) {
  return <Check dark={dark ?? false}>KI-Vorschlag · überarbeiten</Check>;
}

/** Inline link from a claim to the labelled historical source that supports it. */
export function Ref({ to, dark }: { to: string; dark?: boolean }) {
  return (
    <a
      href={`#quelle-${to.toLowerCase()}`}
      className={cn(
        "kicker ml-1 inline-block translate-y-[-2px] rounded-sm px-1 py-px text-[0.6rem] underline underline-offset-2",
        dark ? "text-coral-bright decoration-coral-bright" : "text-forest decoration-coral",
      )}
      aria-label={`Beleg: historische Quelle ${to}`}
    >
      → {to}
    </a>
  );
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

function ShotProtocol({ shot, kind, dark }: { shot: Shot; kind: PlaceholderKind; dark?: boolean }) {
  const muted = dark ? "text-forest-muted" : "text-muted-foreground";
  const rows: [string, ReactNode][] = [
    ["Datei", <code key="f" className="text-[0.7rem]">{shot.file}</code>],
    ["Technik", shot.tech],
    ["Aufnahmedatum", <Fill key="d">TT.MM.JJJJ, Uhrzeit</Fill>],
    ["Personen", <Fill key="p">keine erkennbar · oder: Einwilligung von … liegt vor</Fill>],
  ];
  if (kind === "Video") rows.push(["Untertitel", <Fill key="u">Datei {shot.file.replace(/\.\w+$/, ".vtt")}</Fill>]);
  if (kind === "Foto" || kind === "Karte") rows.push(["Alternativtext", <Fill key="a">Was ist zu sehen? 1–2 Sätze</Fill>]);
  if (kind === "Atmo-Ton") rows.push(["Textfassung", <Fill key="t">Geräusche in Worten, siehe unten</Fill>]);

  return (
    <div className={cn("mt-3 border-l-2 pl-3 text-xs leading-relaxed", dark ? "border-coral-bright" : "border-coral")}>
      <p>
        <span className={cn("font-semibold", dark ? "text-forest-foreground" : "text-foreground")}>Ort: </span>
        {shot.place}
      </p>
      <p className={muted}>
        <span className={cn("font-semibold", dark ? "text-forest-foreground" : "text-foreground")}>Warum hier? </span>
        {shot.why}
      </p>
      <details className="group mt-2">
        <summary className={cn("kicker cursor-pointer text-[0.65rem]", dark ? "text-coral-bright" : "text-coral-ink")}>
          Aufnahmeprotokoll
        </summary>
        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
          {rows.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className={muted}>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className={cn("mt-2", muted)}>Heutiger Ort – keine historische Rekonstruktion.</p>
      </details>
    </div>
  );
}

function MediaTask({ task, dark }: { task: string; dark?: boolean }) {
  return (
    <p className={cn("mt-2 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
      <span className={cn("kicker mr-1.5 text-[0.62rem]", dark ? "text-coral-bright" : "text-coral-ink")}>
        Was das Medium zeigt
      </span>
      {task}
    </p>
  );
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
  shot,
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
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative flex w-full flex-col items-center gap-3 rounded-sm px-6 text-center",
          alignTop ? "justify-start pt-20" : "justify-center",
          dark ? "placeholder-surface-dark text-forest-foreground" : "placeholder-surface text-foreground",
        )}
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={`Platzhalter ${kind}: ${title}`}
      >
        <div className="absolute left-3 top-3">
          <PlaceholderTag kind={kind} id={id} dark={dark} />
        </div>
        <Icon className={cn("size-7", dark ? "text-coral-bright" : "text-coral")} strokeWidth={1.5} />
        <p className="font-display max-w-[22ch] text-lg leading-snug">{title}</p>
        {hint ? (
          <p className={cn("max-w-[34ch] text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
            {hint}
          </p>
        ) : null}
      </div>
      <figcaption
        className={cn("mt-2 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}
      >
        {caption ?? (
          <>
            <Fill>Bildlegende</Fill> ·{" "}
            {shot ? (
              <>
                Eigene Aufnahme, <Fill>Datum</Fill>
              </>
            ) : (
              <>
                Nachweis: <Fill>Urheber:in, Datum, Ort, Lizenz</Fill>
              </>
            )}
          </>
        )}
        {task ? <MediaTask task={task} dark={dark} /> : null}
        {shot ? <ShotProtocol shot={shot} kind={kind} dark={dark} /> : null}
      </figcaption>
    </figure>
  );
}

/** Atmo sound placeholder – visually a player, functionally inert until a file is added. */
export function AtmoPlaceholder({
  id,
  title,
  hint,
  dark,
  task,
  shot,
}: {
  id: string;
  title: string;
  hint: string;
  dark?: boolean;
  task?: string;
  shot?: Shot;
}) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-4 rounded-sm px-4 py-4",
          dark ? "placeholder-surface-dark text-forest-foreground" : "placeholder-surface",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-full border border-dashed",
            dark ? "border-coral-bright text-coral-bright" : "border-coral text-coral",
          )}
        >
          <Play className="size-4 translate-x-px" />
        </span>
        <div className="min-w-0">
          <PlaceholderTag kind="Atmo-Ton" id={id} dark={dark} />
          <p className="mt-1.5 text-sm font-medium leading-snug">{title}</p>
          <p className={cn("text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>{hint}</p>
        </div>
      </div>
      <details className={cn("mt-2 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
        <summary className={cn("kicker cursor-pointer text-[0.65rem]", dark ? "text-coral-bright" : "text-coral-ink")}>
          Textfassung des Tons
        </summary>
        <p className="mt-1.5">
          <Fill>Was ist zu hören? z. B. «Wasser schlägt an die Ufermauer, ein Velo klingelt, Stimmen auf Englisch»</Fill>
        </p>
      </details>
      {task ? <MediaTask task={task} dark={dark ?? false} /> : null}
      {shot ? <ShotProtocol shot={shot} kind="Atmo-Ton" dark={dark ?? false} /> : null}
    </div>
  );
}

/** Quote placeholder: never invent quotes – the learner inserts them from the novel. */
export function QuotePlaceholder({ id, hint, dark }: { id: string; hint: string; dark?: boolean }) {
  return (
    <blockquote
      className={cn("rounded-sm px-5 py-6", dark ? "placeholder-surface-dark text-forest-foreground" : "placeholder-surface")}
    >
      <PlaceholderTag kind="Zitat" id={id} dark={dark} />
      <p className="font-display mt-4 text-2xl leading-snug italic opacity-70">
        «Zitat aus dem Roman hier einfügen.»
      </p>
      <p className={cn("mt-3 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>{hint}</p>
      <footer className="mt-3 text-xs">
        Kutscher: Der nasse Fisch, E-Book Piper 2020, S. <Fill>Seite</Fill>
      </footer>
    </blockquote>
  );
}

/** A labelled historical source with full metadata and source criticism. */
export function SourceFigure({
  id,
  type,
  title,
  why,
  suggestion,
  supports,
  ratio = "4 / 3",
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
  const critique: [string, string][] = [
    ["Autorenschaft", "Wer hat die Quelle gemacht – und in wessen Auftrag?"],
    ["Entstehungszeit", "Wann genau – vor, während oder nach dem Ereignis?"],
    ["Absicht", "Wen wollte sie überzeugen, informieren, mobilisieren?"],
    ["Grenzen", "Was zeigt sie nicht? Was ist unsicher?"],
  ];
  return (
    <figure id={`quelle-${id.toLowerCase()}`} className="w-full scroll-mt-24 border-t-2 border-forest pt-3">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <span className="kicker text-forest">Historische Quelle {id}</span>
        <span className="kicker text-muted-foreground">{type}</span>
      </div>
      <div
        className="placeholder-surface relative flex w-full flex-col items-center justify-center gap-2 rounded-sm px-6 text-center"
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={`Platzhalter historische Quelle ${id}: ${title}`}
      >
        <div className="absolute left-3 top-3">
          <PlaceholderTag kind="Historische Quelle" id={id} />
        </div>
        <FileText className="size-7 text-coral" strokeWidth={1.5} />
        <p className="font-display max-w-[24ch] text-lg leading-snug">{title}</p>
        <p className="max-w-[34ch] text-xs leading-relaxed text-muted-foreground">{suggestion}</p>
      </div>
      <figcaption className="mt-3 space-y-3 text-xs leading-relaxed">
        <p>
          {meta.map((m, i) => (
            <span key={m}>
              {i > 0 ? " · " : null}
              <Fill>{m}</Fill>
            </span>
          ))}
        </p>
        {supports ? (
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Belegt: </span>
            {supports}
          </p>
        ) : null}
        <p className="border-l-2 border-coral pl-3 text-muted-foreground">
          <span className="font-semibold text-foreground">Warum diese Quelle? </span>
          {why}
        </p>
        <div>
          <p className="kicker text-[0.65rem] text-forest">Quellenkritik</p>
          <dl className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
            {critique.map(([k, q]) => (
              <div key={k} className="contents">
                <dt className="font-medium">{k}</dt>
                <dd className="text-muted-foreground">
                  {q} <Fill>Antwort</Fill>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </figcaption>
    </figure>
  );
}
