import { EditableText, SharedMedia } from "@/components/shared-editor";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
export type Layer = "Im Roman" | "Historisch" | "Heute" | "Deutung" | "Dein Teil";

/** One scroll station = one thought. */
export function Station({
  num,
  layer,
  title,
  children,
  media,
  dark = false,
  className
}: {
  num: string;
  layer: Layer;
  title: ReactNode;
  children?: ReactNode;
  media?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return <section className={cn("flex min-h-[88svh] flex-col justify-center px-6 py-20", dark && "bg-forest-deep text-forest-foreground", className)}>
      <div className="mx-auto w-full max-w-xl">
        <Reveal>
          <div className={cn("flex items-center gap-3", dark ? "text-forest-muted" : "text-muted-foreground")}>
            <span className={cn("kicker", dark ? "text-coral-bright" : "text-coral-ink")}><EditableText id="src_components_story_Station_tsx_950" value={num} /></span>
            <span className={cn("h-px w-8", dark ? "bg-forest-muted/40" : "bg-border")} />
            <span className="kicker"><EditableText id="src_components_story_Station_tsx_1091" value={layer} /></span>
          </div>
          <h3 className="font-display mt-5 text-[2.15rem] leading-[1.06] font-medium text-balance sm:text-5xl">
            <EditableText id="src_components_story_Station_tsx_1247" value={title} />
          </h3>
        </Reveal>
        {children ? <Reveal delay={120}>
            <div className={cn("mt-6 space-y-4 text-[1.0625rem] leading-relaxed", dark ? "text-forest-foreground/85" : "text-foreground/85")}>
              {children}
            </div>
          </Reveal> : null}
        {media ? <Reveal delay={220}>
            <div className="mt-10 space-y-6">{media}</div>
          </Reveal> : null}
      </div>
    </section>;
}

/** Full-bleed chapter opener in deep green. */
export function ChapterOpener({
  id,
  num,
  label,
  title,
  lede,
  children
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  lede: ReactNode;
  children?: ReactNode;
}) {
  return <header id={id} data-chapter={id} data-chapter-label={`${num} ${label}`} className="relative flex min-h-[100svh] scroll-mt-0 flex-col justify-end overflow-hidden bg-forest-deep px-6 pt-24 pb-16 text-forest-foreground">
      <span aria-hidden className="font-display pointer-events-none absolute -top-6 -right-4 text-[14rem] leading-none font-light text-forest/70 select-none sm:text-[20rem]">
        <EditableText id="src_components_story_Station_tsx_2545" value={num} />
      </span>
      <div className="relative mx-auto w-full max-w-xl">
        <Reveal>
          <p className="kicker text-coral-bright"><EditableText id="src_components_story_Station_tsx_2689" value={"Kapitel "} /><EditableText id="src_components_story_Station_tsx_2710" value={num} /><EditableText id="src_components_story_Station_tsx_2715" value={" \xB7 "} /><EditableText id="src_components_story_Station_tsx_2718" value={label} />
          </p>
          <h2 className="font-display mt-5 text-5xl leading-[1.02] font-medium text-balance sm:text-6xl"><EditableText id="src_components_story_Station_tsx_2846" value={title} /></h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-forest-foreground/80"><EditableText id="src_components_story_Station_tsx_2999" value={lede} /></p>
        </Reveal>
        {children ? <Reveal delay={250}>
            <div className="mt-8">{children}</div>
          </Reveal> : null}
      </div>
    </header>;
}

/** Wrapper that groups stations under a chapter for progress tracking. */
export function Chapter({
  id,
  children
}: {
  id: string;
  children: ReactNode;
}) {
  return <div data-chapter-group={id}>{children}</div>;
}
