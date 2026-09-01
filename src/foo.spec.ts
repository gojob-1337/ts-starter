import { foo } from './foo';

describe('foo', () => {
  it("returns 'bar'", () => {
    expect(foo()).toBe('bar');
  });
});
