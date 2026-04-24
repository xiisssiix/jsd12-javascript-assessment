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

  print() {
    const displayString = this.field.map(row => row.join('')).join('\n');
    console.log(displayString);
  }
  runGame() {
    let playing = true;
    while (playing) {
      this.print(); 
      this.askQuestion();
      
      if (!this.isInBounds()) { 
        console.log("เดินออกนอกเกม คุณแพ้แล้ว");
        playing = false;
        break;
      } else if (this.isHole()) { 
        console.log("ตกหลุม Game Over ครับ");
        playing = false;
        break;
      } else if (this.isHat()) { 
        console.log("ยินดีด้วยครับ คุณเจอหมวกแล้ว!");
        playing = false;
        break;
      }
      
      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

  askQuestion() {
    const answer = prompt('Where to? (W, S, A, D): ').toUpperCase();
    switch (answer) {
      case 'W': this.locationY -= 1; break; 
      case 'S': this.locationY += 1; break; 
      case 'A': this.locationX -= 1; break; 
      case 'D': this.locationX += 1; break; 
      default:
        console.log("Enter W, S, A, or D");
        this.askQuestion();
        break;
    }
  }

  isInBounds() {
    return (
      this.locationY >= 0 &&
      this.locationX >= 0 &&
      this.locationY < this.field.length &&
      this.locationX < this.field[0].length
    );
  }
 isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }

  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }

}
