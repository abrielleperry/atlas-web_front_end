class studentHogwarts {
  constructor() {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
      privateScore += points;
    };

    this.setName = (newName) => {
      name = newName;
    };

    this.rewardStudent = () => { // add point
      changeScoreBy(1);
    };

    this.penalizeStudent = () => { // deduct point
      changeScoreBy(-1);
    };

    this.getScore = () => {
      return `${name}: ${privateScore}`; // return name and score
    };
  }
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
