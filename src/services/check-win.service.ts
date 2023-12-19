//types
import type { IFieldsType, winnerValueType } from '../types';
//variables
import { PlayersNames, REMIS_WINNER } from '../variables/variables';

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

  getWinner(playerCross: number[], playerZero: number[], fields: IFieldsType): winnerValueType {
    const userCrossWinner = this.checkWinner(playerCross);
    const userZeroWinner = this.checkWinner(playerZero);

    const allFieldsIsChecked = Object.values(fields).every((field) => field.isChecked);

    if (userCrossWinner) {
      return PlayersNames.CROSS;
    } else if (userZeroWinner) {
      return PlayersNames.ZERO;
    } else if (allFieldsIsChecked) {
      return REMIS_WINNER;
    } else {
      return null;
    }
  }
}

const checkWinService = new CheckWinService();

export default checkWinService;
