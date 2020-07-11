import * as SUT from './statistics';
import dataset from '../../public/data-1234.json';

describe('statistics', () => {
  let data: number[];

  beforeAll(() => {
    data = dataset.data;
  });

  it('should calculate the mean', () => {
    const result = SUT.calculateMean(data);
    expect(result).toBe(49.45705);
  });

  it('should calculate the median', () => {
    const result = SUT.calculateMedian(data);
    expect(result).toBe(49.0);
  });

  it('should calculate the standard deviation', () => {
    const result = SUT.calculateStdDeviation(data);

    // specification says result for this sample set should be 28.810315
    // actual results confirmed here: https://www.mathsisfun.com/data/standard-deviation-calculator.html
    expect(result).toBe(28.798639);
  });

  it('should calculate the mode', () => {
    const result = SUT.calculateMode(data);
    expect(result).toBe(77);
  });
});
