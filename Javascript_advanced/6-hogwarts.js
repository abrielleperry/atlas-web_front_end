class studentHogwarts {
  constructor() {
    var privateScore = 0;
    var name = null;

    const changeScoreBy = (points) => {
      privateScore += points;
    };

    this.setName = (newName) => {
      name = newName;
    };

    this.rewardStudent = () => {
      changeScoreBy(1);
    };

    this.penalizeStudent = () => {
      changeScoreBy(-1);
    };

    this.getScore = () => {
      return `${name}: ${privateScore}`;
    };
  }
}
