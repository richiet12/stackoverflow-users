// convert stackoverflow reputation into number of stars

// As of 4/3/2019 the number 1 user has a reputation of 1088779
// and the number 20 user has a reputation of 585187
// For purely visual purposes we will allocate the following stars for reputation
// >1000000 5 stars
//  >800000 4 stars
//  >600000 3 stars
//  >400000 2 stars
//  >200000 1 stars

export default reputation => {
  if (!Number.isInteger(reputation)) {
    return 0;
  }

  if (reputation > 1000000) {
    return 5;
  }
  if (reputation > 800000) {
    return 4;
  }
  if (reputation > 600000) {
    return 3;
  }
  if (reputation > 400000) {
    return 2;
  }
  if (reputation > 200000) {
    return 1;
  }
  return 0;
};
