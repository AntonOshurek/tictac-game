class CheckWinService {
  #winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], // Горизонтальные
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // Вертикальные
    [1, 5, 9],
    [3, 5, 7], // Диагонали
  ];

  private checkWinner(userResult: number[]) {
    return this.#winningConditions.some((condition) => {
      const [a, b, c] = condition;
      return userResult.includes(a) && userResult.includes(b) && userResult.includes(c);
    });
  }

  getWinner(userOne: number[], userTwo: number[]): number | null {
    const user1Winner = this.checkWinner(userOne);
    const user2Winner = this.checkWinner(userTwo);

    if (user1Winner) {
      return 1;
    } else if (user2Winner) {
      return 2;
    } else {
      return null;
    }
  }
}

const checkWinService = new CheckWinService();

export default checkWinService;
