import type { ReactNode } from "react";
import { Fill, Proposal, Ref } from "./Placeholder";
import { Reveal } from "./Reveal";

function Row({ label, children, strong }: { label: string; children: ReactNode; strong?: boolean }) {
  return (
    <Reveal>
      <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-4 text-sm leading-relaxed">
        <p className={strong ? "kicker pt-0.5 text-coral-ink" : "kicker pt-0.5 text-forest"}>{label}</p>
        <div>{children}</div>
      </div>
    </Reveal>
  );
}

/**
 * Comparison built around one named mechanism – with similarities,
 * differences and the limits of the comparison spelled out.
 */
export function Comparison() {
  return (
    <div className="border-t-2 border-forest">
      <Row label="Mechanismus" strong>
        <p className="font-medium">
          Eine Institution verliert Vertrauen – und will es mit einem schnellen, sichtbaren Erfolg zurückgewinnen.
          <Proposal />
        </p>
        <p className="mt-1 text-muted-foreground">
          <Fill>Mechanismus in deinen eigenen Worten</Fill>
        </p>
      </Row>
      <Row label="1929 · Roman">
        Nach der Kritik am Polizeieinsatz im Mai soll ein rasch gelöster Mordfall zeigen, «dass die Polizei weiterhin
        das Heft in der Hand halte» (S. 229).
      </Row>
      <Row label="1929 · Geschichte">
        Der Polizeieinsatz am 1. Mai 1929 wird öffentlich kritisiert. <Ref to="Q2" />{" "}
        <Fill>Eine belegte Reaktion, z. B. aus Presse oder Parlament, mit Quelle</Fill>
      </Row>
      <Row label="Heute">
        <Fill>Ein klar benannter Fall von heute: Wer, wo, wann? Mit Quelle und Datum</Fill>
      </Row>
      <Row label="Gemeinsam">
        <Fill>Was funktioniert in beiden Fällen gleich?</Fill>
      </Row>
      <Row label="Anders">
        <Fill>Mindestens ein klarer Unterschied – z. B. Rechtslage, Kontrolle der Polizei, Medien</Fill>
      </Row>
      <Row label="Grenzen" strong>
        <p>
          <Fill>Wo hinkt der Vergleich? Was lässt sich von 1929 nicht auf heute übertragen – und warum?</Fill>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Der Romanteil ist Fiktion: Er zeigt, wie Kutscher die Lage deutet, nicht, was 1929 im Präsidium gesagt
          wurde.
        </p>
      </Row>
    </div>
  );
}
