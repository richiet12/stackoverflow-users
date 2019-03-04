import starRating from './starRating';

describe('starRating', () => {
  describe('Given a non integer value for reputation', () => {
    const reputation = 'one';
    it('should return 0', () => {
      expect(starRating(reputation)).toBe(0);
    });
  });

  describe('Given a reputation of 200000', () => {
    const reputation = 200000;
    it('should return 1', () => {
      expect(starRating(reputation)).toBe(1);
    });
  });

  describe('Given a reputation of 500000', () => {
    const reputation = 500000;
    it('should return 1', () => {
      expect(starRating(reputation)).toBe(2.5);
    });
  });

  describe('Given a reputation of 1000000', () => {
    const reputation = 1000000;
    it('should return 5', () => {
      expect(starRating(reputation)).toBe(5);
    });
  });
});
