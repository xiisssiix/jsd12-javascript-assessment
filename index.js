import PromptSync from "prompt-sync";
const prompt = PromptSync();

const hat = "🎓";
const hole = "🕳️";
const fieldCharacter = "🔳";
const pathCharacter = "🏃";

class Field {
  constructor(field) {
    this.field = field;
    this.locationX = 0; 
    this.locationY = 0; 
    this.field[0][0] = pathCharacter; 
  }
}