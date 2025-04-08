

const triangle = require('../triangle.js');

test("triangleType should return 'Equilateral' for equal sides", () => {
  expect(triangle(5, 5, 5)).toBe('Equilateral');
}
);
test("triangleType should return 'Isosceles' for two equal sides", () => {
  expect(triangle(5, 5, 3)).toBe('Isosceles');
}
);
test("triangleType should return 'Scalene' for all sides different", () => {
  expect(triangle(5, 4, 3)).toBe('Scalene');
}
);
test("triangleType should return 'Invalid' for negative sides", () => {
  expect(triangle(-5, 4, 3)).toBe('Invalid');
}
);
test("triangleType should return 'Invalid' for zero sides", () => {
  expect(triangle(0, 4, 3)).toBe('Invalid');
}
);
test("triangleType sghould return 'Invalid' for charachter values", () => {
  expect(triangle('a', 'b', 'c')).toBe('Invalid');
}
);
