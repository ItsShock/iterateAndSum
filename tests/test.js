const iterateAndSum = require('..');

describe('Funkcja iterateAndSum', () => {
  it('powinna zwrócić liczbę', async () => {
    const result = iterateAndSum([1, 1]);

    expect(typeof result).toBe('number');
  });

  it('powinna zwrócić sumę wszystkich elementów tablicy', async () => {
    expect(iterateAndSum([1, 2, 3, 4])).toEqual(10);
    expect(iterateAndSum([1, 1, 1, 1, 1])).toEqual(5);
    expect(iterateAndSum([0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
    expect(iterateAndSum([-10, -10, -10])).toEqual(-30);
  });
});
