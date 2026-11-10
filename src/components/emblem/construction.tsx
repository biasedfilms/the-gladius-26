import { EMBLEM_HEIGHT, EMBLEM_WIDTH, GEAR_CENTER } from "./geometry";

type ConstructionProps = {
  className?: string;
  circleClassName?: string;
};

const PITCH_RADIUS = 1074;

/**
 * The circle a draughtsman would set a compass to before drawing this gear,
 * centred on the measured centre of the artwork. It runs outside the teeth and
 * never touches the mark. `pathLength` lets CSS draw it as a fraction of a turn.
 */
export function PitchCircle({ className = "", circleClassName = "" }: ConstructionProps) {
  const { x, y } = GEAR_CENTER;
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${EMBLEM_WIDTH} ${EMBLEM_HEIGHT}`}
      className={`pointer-events-none absolute inset-0 size-full overflow-visible ${className}`}
    >
      <circle
        cx={x}
        cy={y}
        r={PITCH_RADIUS}
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        transform={`rotate(-90 ${x} ${y})`}
        className={circleClassName}
      />
    </svg>
  );
}
