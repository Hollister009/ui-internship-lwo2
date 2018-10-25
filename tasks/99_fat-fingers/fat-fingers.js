export const fatFingers = (text) => {
  let capsPressed = false;
  let misspeled = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === 'a') {
      capsPressed = !capsPressed;
      continue;
    }
    if (capsPressed) {
      misspeled += text[i].toUpperCase();
    } else {
      misspeled += text[i];
    }
  }
  return misspeled;
};
