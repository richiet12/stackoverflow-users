// Convert stack overflow reputation into number of stars

// As of 4/3/2019 the number 1 user has a reputation of 1088779
// and the number 20 user has a reputation of 585187
// For purely visual purposes we will allocate the following stars for reputation
// >1000000 5 stars
//  >800000 4 stars
//  >600000 3 stars
//  >400000 2 stars
//  >200000 1 stars

export const chunk = 200000;

export default reputation => {
  if (!Number.isInteger(reputation)) {
    return 0;
  }

  return reputation / chunk;
};
