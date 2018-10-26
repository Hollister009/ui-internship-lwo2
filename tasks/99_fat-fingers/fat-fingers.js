export const fatFingers = (text) => {
  let capsPressed = false;
  let misspelled = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === 'a') {
      capsPressed = !capsPressed;
      continue;
    }
    if (capsPressed) {
      misspelled += text[i].toUpperCase();
    } else {
      misspelled += text[i];
    }
  }
  return misspelled;
};
