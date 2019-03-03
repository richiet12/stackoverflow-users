export default (imagePath, size) => {
  return imagePath.replace('s=128', `s=${size}`);
};
