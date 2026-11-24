import { EditableText, SharedMedia } from "@/components/shared-editor";
import type { ReactNode } from "react";
import { Check } from "./Placeholder";
import { Reveal } from "./Reveal";
type Row = {
  what: string;
  status: "Fiktion" | "Historisch";
  note: ReactNode;
};
const rows: Row[] = [{
  what: "Gereon Rath, Bruno Wolter, Charlotte Ritter",
  status: "Fiktion",
  note: "Romanfiguren"
}, {
  what: "Der Tote im Landwehrkanal, das Gold, der Mord an Jänicke",
  status: "Fiktion",
  note: "Romanhandlung"
}, {
  what: "Polizeipräsident Karl Zörgiebel und sein Demonstrationsverbot",
  status: "Historisch",
  note: <><EditableText id="src_components_story_FactFiction_tsx_557" value={"Im Roman S. 18 "} /><Check><EditableText id="src_components_story_FactFiction_tsx_588" value={"Fachquelle"} /></Check>
      </>
}, {
  what: "Die Toten der Maiunruhen 1929 in Wedding und Neukölln",
  status: "Historisch",
  note: <><EditableText id="src_components_story_FactFiction_tsx_746" value={"Im Roman S. 96, 152 "} /><Check><EditableText id="src_components_story_FactFiction_tsx_782" value={"Zahl belegen"} /></Check>
      </>
}, {
  what: "Ernst Gennat, Leiter der Mordinspektion",
  status: "Historisch",
  note: <Check><EditableText id="src_components_story_FactFiction_tsx_925" value={"Beleg zu Gennat"} /></Check>
}, {
  what: "Das Polizeipräsidium am Alexanderplatz",
  status: "Historisch",
  note: <Check><EditableText id="src_components_story_FactFiction_tsx_1054" value={"Beleg + heutiger Ort"} /></Check>
}, {
  what: "Was Figuren über Zörgiebel denken und sagen",
  status: "Fiktion",
  note: "Kutschers Deutung, kein Beleg"
}];

/** Ledger that separates the novel's fiction from verifiable history. */
export function FactFiction() {
  return <div className="border-t-2 border-forest">
      <div className="grid grid-cols-[1fr_5.5rem] gap-4 border-b border-border py-2">
        <span className="kicker text-forest"><EditableText id="src_components_story_FactFiction_tsx_1520" value={"Im Roman"} /></span>
        <span className="kicker text-forest"><EditableText id="src_components_story_FactFiction_tsx_1581" value={"Status"} /></span>
      </div>
      {rows.map((r, i) => <Reveal key={r.what} delay={i * 60}>
          <div className="grid grid-cols-[1fr_5.5rem] gap-4 border-b border-border py-3 text-sm leading-relaxed">
            <div>
              <p><EditableText id="src_components_story_FactFiction_tsx_1830" value={r.what} /></p>
              <p className="text-xs text-muted-foreground"><EditableText id="src_components_story_FactFiction_tsx_1902" value={r.note} /></p>
            </div>
            <p className={r.status === "Fiktion" ? "kicker pt-1 text-coral-ink" : "kicker pt-1 text-forest"}>
              <EditableText id="src_components_story_FactFiction_tsx_2058" value={r.status} />
            </p>
          </div>
        </Reveal>)}
    </div>;
}
