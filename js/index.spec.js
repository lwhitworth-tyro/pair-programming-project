import { sum } from "./index";

describe('Run tests', function () {
  it('should get sum', function () {
    expect(sum(1, 2)).toEqual(3);
  });
});
