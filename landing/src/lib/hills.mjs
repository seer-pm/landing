// Geometry for the belief hills: the brand's stacked-curve motif drawn from market data.
// Each outcome owns one column and one hill whose height is its probability. Hills return to the
// baseline between columns, so unordered answers never read as a continuous curve.

/**
 * @param {(number | null)[]} probabilities one value per column, in [0, 1]; null draws nothing
 * @param {{ width: number, height: number, inset?: number }} frame inset keeps the tallest hill
 *   and the stroke inside the viewBox
 * @returns {(string | null)[]} one path per column
 */
export function hillPaths(probabilities, { width, height, inset = 8 }) {
  const column = width / probabilities.length;
  const base = height - inset;
  const usable = height - inset * 2;
  return probabilities.map((probability, index) => {
    if (probability === null) return null;
    const left = index * column + column * 0.06;
    const right = (index + 1) * column - column * 0.06;
    const middle = (left + right) / 2;
    const half = (right - left) / 2;
    const top = base - Math.max(probability, 0) * usable;
    // Control points at 45% of the half-width give the soft shoulders of the brand curves.
    const pull = half * 0.45;
    return [
      `M${left.toFixed(1)} ${base}`,
      `C${(left + pull).toFixed(1)} ${base} ${(middle - pull).toFixed(1)} ${top.toFixed(1)} ${middle.toFixed(1)} ${top.toFixed(1)}`,
      `C${(middle + pull).toFixed(1)} ${top.toFixed(1)} ${(right - pull).toFixed(1)} ${base} ${right.toFixed(1)} ${base}`,
    ].join(" ");
  });
}
