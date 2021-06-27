import { sum } from '../calculate';

test("it should sum 1+1", () => {
  const result = sum(1, 1);
  
  expect(result).toBe(2);
});
