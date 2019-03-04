import replaceImageSize from './replaceImageSize';

describe('replaceImageSize', () => {
  describe('Given an image path and a size', () => {
    it('should return the image path with the new size', () => {
      const imagePath =
        'https://www.gravatar.com/avatar/2343ae368d3241278581ce6c87f62a25?s=128&d=identicon&r=PG';

      const newImagePath = replaceImageSize(imagePath, 500);

      expect(newImagePath).toBe(
        'https://www.gravatar.com/avatar/2343ae368d3241278581ce6c87f62a25?s=500&d=identicon&r=PG'
      );
    });
  });
});
