// convert stackoverflow reputation into number of stars

const highestReputation = 1088779;
const numberOfStarts = 5;

export default reputation => {
  if (!Number.isInteger(reputation)) {
    return 0;
  }
  return (reputation / highestReputation) * numberOfStarts;
};
