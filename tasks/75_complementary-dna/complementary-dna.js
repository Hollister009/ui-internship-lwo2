export const DNAStrand = (DNA) => {
  let otherDNA = '';
  for (let i = 0; i < DNA.length; i++) {
    switch (DNA[i]) {
      case 'A':
        otherDNA += 'T';
        break;
      case 'T':
        otherDNA += 'A';
        break;
      case 'C':
        otherDNA += 'G';
        break;
      case 'G':
        otherDNA += 'C';
        break;
    }
  }
  return otherDNA;
};
