import { EditableText, SharedMedia } from "@/components/shared-editor";
import type { ReactNode } from "react";
import { Fill, Proposal, Ref } from "./Placeholder";
import { Reveal } from "./Reveal";
function Row({
  label,
  children,
  strong
}: {
  label: string;
  children: ReactNode;
  strong?: boolean;
}) {
  return <Reveal>
      <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-4 text-sm leading-relaxed">
        <p className={strong ? "kicker pt-0.5 text-coral-ink" : "kicker pt-0.5 text-forest"}><EditableText id="src_components_story_Comparison_tsx_458" value={label} /></p>
        <div>{children}</div>
      </div>
    </Reveal>;
}

/**
 * Comparison built around one named mechanism – with similarities,
 * differences and the limits of the comparison spelled out.
 */
export function Comparison() {
  return <div className="border-t-2 border-forest">
      <Row label="Mechanismus" strong>
        <p className="font-medium"><EditableText id="src_components_story_Comparison_tsx_835" value={"Eine Institution verliert Vertrauen \u2013 und will es mit einem schnellen, sichtbaren Erfolg zur\xFCckgewinnen."} /><Proposal />
        </p>
        <p className="mt-1 text-muted-foreground">
          <Fill><EditableText id="src_components_story_Comparison_tsx_1054" value={"Mechanismus in deinen eigenen Worten"} /></Fill>
        </p>
      </Row>
      <Row label="1929 · Roman"><EditableText id="src_components_story_Comparison_tsx_1156" value={"Nach der Kritik am Polizeieinsatz im Mai soll ein rasch gel\xF6ster Mordfall zeigen, \xABdass die Polizei weiterhin das Heft in der Hand halte\xBB (S. 229)."} /></Row>
      <Row label="1929 · Geschichte"><EditableText id="src_components_story_Comparison_tsx_1371" value={"Der Polizeieinsatz am 1. Mai 1929 wird \xF6ffentlich kritisiert. "} /><Ref to="Q2" /><EditableText id="src_components_story_Comparison_tsx_1457" value={" "} />
        <Fill><EditableText id="src_components_story_Comparison_tsx_1477" value={"Eine belegte Reaktion, z. B. aus Presse oder Parlament, mit Quelle"} /></Fill>
      </Row>
      <Row label="Heute">
        <Fill><EditableText id="src_components_story_Comparison_tsx_1604" value={"Ein klar benannter Fall von heute: Wer, wo, wann? Mit Quelle und Datum"} /></Fill>
      </Row>
      <Row label="Gemeinsam">
        <Fill><EditableText id="src_components_story_Comparison_tsx_1739" value={"Was funktioniert in beiden F\xE4llen gleich?"} /></Fill>
      </Row>
      <Row label="Anders">
        <Fill><EditableText id="src_components_story_Comparison_tsx_1842" value={"Mindestens ein klarer Unterschied \u2013 z. B. Rechtslage, Kontrolle der Polizei, Medien"} /></Fill>
      </Row>
      <Row label="Grenzen" strong>
        <p>
          <Fill><EditableText id="src_components_story_Comparison_tsx_2009" value={"Wo hinkt der Vergleich? Was l\xE4sst sich von 1929 nicht auf heute \xFCbertragen \u2013 und warum?"} /></Fill>
        </p>
        <p className="mt-1 text-xs text-muted-foreground"><EditableText id="src_components_story_Comparison_tsx_2175" value={"Der Romanteil ist Fiktion: Er zeigt, wie Kutscher die Lage deutet, nicht, was 1929 im Pr\xE4sidium gesagt wurde."} /></p>
      </Row>
    </div>;
}
