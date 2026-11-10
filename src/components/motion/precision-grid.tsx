import { OnView } from "./on-view";

/**
 * The page's own twelve columns, drawn. These are the columns the text is set on,
 * not a texture: the lines land exactly where the layout does, top to bottom, once.
 */
export function PrecisionGrid() {
  return (
    <OnView aria-hidden="true" className="absolute inset-0 -z-10" amount={0.05}>
      <div data-reveal="drop" className="precision-grid" />
    </OnView>
  );
}
