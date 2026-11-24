import { EditableText, SharedMedia } from "@/components/shared-editor";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Verbatim quote from the novel. Page = page of the e-book PDF
 * (Piper, München 2020). Quotes keep the original spelling (ß).
 */
export function NovelQuote({
  children,
  page,
  context,
  dark
}: {
  children: ReactNode;
  page: number;
  context?: ReactNode;
  dark?: boolean;
}) {
  return <blockquote className={cn("border-l-2 pl-5", dark ? "border-coral-bright" : "border-coral")}>
      <p className="font-display text-[1.45rem] leading-snug italic"><EditableText id="src_components_story_NovelQuote_tsx_548" value={"\xAB"} /><EditableText id="src_components_story_NovelQuote_tsx_549" value={children} /><EditableText id="src_components_story_NovelQuote_tsx_559" value={"\xBB"} /></p>
      <footer className={cn("mt-3 text-xs leading-relaxed", dark ? "text-forest-muted" : "text-muted-foreground")}>
        {context ? <span className="block"><EditableText id="src_components_story_NovelQuote_tsx_724" value={context} /></span> : null}<EditableText id="src_components_story_NovelQuote_tsx_748" value={"Kutscher: "} /><em><EditableText id="src_components_story_NovelQuote_tsx_771" value={"Der nasse Fisch"} /></em><EditableText id="src_components_story_NovelQuote_tsx_791" value={", E-Book Piper 2020, S. "} />{page}
      </footer>
    </blockquote>;
}
