type Counter = { [key: string]: number };
type ModeResult = { mode: number; count: number };

/**
 * Get the average value for a numeric array.
 *
 * @param {number[]} numbers
 * @returns {number}
 */
function getAverage(numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + n) / numbers.length;
}

/**
 * Calculate the mean value for the given set of numbers.
 *
 * @see https://en.wikipedia.org/wiki/Arithmetic_mean
 * @export
 * @param {number[]} data
 * @returns {number}
 */
export function calculateMean(data: number[]): number {
  return getAverage(data);
}

/**
 * Calculate the median value for the given set of numbers.
 *
 * @see https://en.wikipedia.org/wiki/Median
 * @export
 * @param {number[]} data
 * @returns {number}
 */
export function calculateMedian(data: number[]): number {
  if (!data.length) return 0;

  const sorted = data.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  let median: number = sorted[middle];

  if (sorted.length % 2 === 0) {
    median = (median + sorted[middle - 1]) / 2;
  }

  return median;
}

/**
 * Calculate the standard deviation for the given set of numbers.
 *
 * @see https://en.wikipedia.org/wiki/Standard_deviation
 * @export
 * @param {number[]} data
 * @returns {number}
 */
export function calculateStdDeviation(data: number[]): number {
  const avg = getAverage(data);

  const deviations = data.map(n => Math.pow(n - avg, 2));
  const variance = getAverage(deviations);

  return Math.sqrt(variance);
}

/**
 * Calculate the mode for the given set of numbers.
 *
 * @see https://en.wikipedia.org/wiki/Mode_(statistics)
 * @export
 * @param {number[]} data
 * @returns {number}
 */
export function calculateMode(data: number[]): number {
  // get the number of occurrences for each number in the set.
  const counter = data.reduce<Counter>((agg, n) => {
    agg[n] = (agg[n] ?? 0) + n;
    return agg;
  }, {});

  // holder for the final result.
  let result: ModeResult | undefined;

  // find the number with the highest frequency of occurrences.
  Object.keys(counter).forEach(k => {
    const n = Number(k);

    const current: ModeResult = {
      mode: n,
      count: counter[k],
    };

    if (!result) {
      result = current;
      return;
    }

    // initialize result by capturing the first value.
    if (!result) {
      const n = Number(k);
      result = { mode: n, count: counter[n] };
      return;
    }

    // compare current to previous best and replace if better.
    if (current.count > result.count) {
      result = current;
    }
  });

  return result !== undefined ? result.mode : 0;
}
