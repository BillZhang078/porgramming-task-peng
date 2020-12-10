const testTracker = require('./TempTracker');

test('properly output the highest temperature', () => {
  expect(testTracker.getMaxTemp()).toBe(87);
});

test('properly output the lowest temperature', () => {
  expect(testTracker.getMinTemp()).toBe(-45);
});

test('properly output the Average temperature', () => {
  expect(testTracker.getMeanTemp()).toBe(26.89);
});
