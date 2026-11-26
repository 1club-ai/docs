/*
 * The interactive example under "What a pause does to the next charge" on
 * sales/memberships.mdx: a weekly plan charged every Monday, paused for a number
 * of days. It follows the rule in the 1club repo (PrismaMembershipService.pause
 * and resume): the next charge moves by the days paused.
 *
 * Colours are inline and see-through: Mintlify ships only the Tailwind colour
 * classes its own pages use, and these read in light and dark mode.
 */
export const PauseCalculator = () => {
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const WEEKDAYS = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
  const PAID = "rgba(16,185,129,";
  const PAUSED = "rgba(245,158,11,";
  const NEXT = "rgba(14,165,233,";
  const GREY = "rgba(127,127,127,";
  const [start, setStart] = useState(1);
  const [pauseDays, setPauseDays] = useState(7);
  const [fee, setFee] = useState(0);

  const back = start + pauseDays;
  const nextCharge = 7 + pauseDays;
  const feeDays = [];
  if (fee > 0) for (let d = start; d < back; d += 7) feeDays.push(d);
  const weeks = Math.max(4, Math.ceil((nextCharge + 7) / 7));
  const label = (i) => `${DAYS[i % 7]}, week ${Math.floor(i / 7) + 1}`;
  const tone = (c) =>
    c
      ? { background: `${c}0.14)`, borderColor: `${c}0.45)` }
      : { borderColor: `${GREY}0.25)` };
  const swatch = (c) => ({
    background: `${c}0.45)`,
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: 3,
    marginRight: 4,
    verticalAlign: "middle",
  });

  const cells = [];
  for (let i = 0; i < weeks * 7; i++) {
    let colour = null;
    if (i < start || (i >= back && i < nextCharge)) colour = PAID;
    else if (i < back) colour = PAUSED;
    else if (i < nextCharge + 7) colour = NEXT;
    const tags = [];
    if (i === 0 || i === nextCharge) tags.push("99 charged");
    if (i === start) tags.push("Paused");
    if (i === back) tags.push("Back");
    if (feeDays.includes(i)) tags.push(`${fee} fee`);
    cells.push(
      <div
        key={i}
        className="flex flex-col gap-0.5 rounded-md border p-1 text-xs"
        style={{ minHeight: 56, ...tone(colour) }}
      >
        {tags.map((t) => (
          <span
            key={t}
            className="self-start rounded border px-1"
            style={{
              fontSize: 11,
              borderColor: `${GREY}0.35)`,
              background: `${GREY}0.10)`,
            }}
          >
            {t}
          </span>
        ))}
      </div>,
    );
  }

  const field = "w-full rounded-md border bg-transparent px-2 py-1 text-sm";
  const fieldStyle = { borderColor: `${GREY}0.35)` };
  const stat = (name, value) => (
    <div
      className="rounded-lg px-3 py-2"
      style={{ background: `${GREY}0.10)` }}
    >
      <div className="text-xs opacity-70">{name}</div>
      <div className="text-base font-medium">{value}</div>
    </div>
  );

  return (
    <div
      className="not-prose my-6 rounded-xl border p-4"
      style={{ borderColor: `${GREY}0.25)` }}
    >
      <div className="grid grid-cols-3 gap-3">
        <label className="text-xs opacity-80">
          Pause starts
          <select
            className={field}
            style={fieldStyle}
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
          >
            {DAYS.map((d, i) => (
              <option key={d} value={i}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs opacity-80">
          Pause days
          <input
            className={field}
            style={fieldStyle}
            type="number"
            min="1"
            max="56"
            value={pauseDays}
            onChange={(e) =>
              setPauseDays(
                Math.min(56, Math.max(1, Number(e.target.value) || 1)),
              )
            }
          />
        </label>
        <label className="text-xs opacity-80">
          Pause fee per week
          <input
            className={field}
            style={fieldStyle}
            type="number"
            min="0"
            value={fee}
            onChange={(e) => setFee(Math.max(0, Number(e.target.value) || 0))}
          />
        </label>
      </div>

      <div className="my-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stat("Next charge", label(nextCharge))}
        {stat("Billed on", WEEKDAYS[nextCharge % 7])}
        {stat("Paid days used", `${start + (nextCharge - back)} of 7`)}
        {stat("Pause fees", feeDays.length * fee)}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-xs opacity-70">
            {d}
          </div>
        ))}
        {cells}
      </div>

      <div className="mt-3 flex flex-wrap gap-4 text-xs opacity-80">
        <span>
          <span style={swatch(PAID)} />
          Paid for by the first charge
        </span>
        <span>
          <span style={swatch(PAUSED)} />
          Paused, no access
        </span>
        <span>
          <span style={swatch(NEXT)} />
          Next paid week
        </span>
      </div>

      <p className="mt-3 text-sm">
        The next charge moves {pauseDays} {pauseDays === 1 ? "day" : "days"},
        from Monday of week 2 to {label(nextCharge)}.{" "}
        {nextCharge % 7 === 0
          ? "Whole weeks keep the member on Mondays."
          : `From now on the member is billed on ${WEEKDAYS[nextCharge % 7]}.`}
      </p>
    </div>
  );
};
