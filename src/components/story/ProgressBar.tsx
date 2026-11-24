import { EditableText, SharedMedia } from "@/components/shared-editor";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const chapters = [{
  id: "heute",
  label: "00 Heute"
}, {
  id: "fall",
  label: "01 Der Fall"
}, {
  id: "kontext",
  label: "02 Kontext"
}, {
  id: "thema",
  label: "03 Thema"
}, {
  id: "aspekt",
  label: "04 Mein Aspekt"
}, {
  id: "gegenwart",
  label: "05 Gegenwart"
}, {
  id: "werkstatt",
  label: "Werkstatt"
}, {
  id: "quellen",
  label: "Quellen"
}] as const;
export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>(chapters[0].id);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setShown(window.scrollY > window.innerHeight * 0.6);
      let current: string = chapters[0].id;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = c.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const activeIndex = chapters.findIndex(c => c.id === active);
  const label = chapters[activeIndex]?.label ?? "";
  return <nav aria-label="Kapitel" className={cn("fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md transition-transform duration-500", shown ? "translate-y-0" : "-translate-y-full focus-within:translate-y-0")}>
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4 px-6 py-3">
        <a href="#heute" className="font-display text-base italic"><EditableText id="src_components_story_ProgressBar_tsx_2009" value={"Der nasse Fisch"} /></a>
        <span className="kicker text-coral-ink" aria-live="polite">
          <EditableText id="src_components_story_ProgressBar_tsx_2127" value={label} />
        </span>
      </div>
      <div className="mx-auto flex max-w-xl gap-1 px-6 pb-2">
        {chapters.map((c, i) => <a key={c.id} href={`#${c.id}`} aria-label={c.label} aria-current={i === activeIndex ? "step" : undefined} className={cn("h-1 flex-1 rounded-full transition-colors duration-300", i < activeIndex ? "bg-forest" : i === activeIndex ? "bg-coral" : "bg-border")} />)}
      </div>
      <div className="h-px bg-coral" style={{
      width: `${progress * 100}%`
    }} />
    </nav>;
}
