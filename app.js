//Steps invloved in creating the following
//1 Deposit some money
//2 Determine number of lines to bet on
//3 Collect the bet amount
//4 Spin the slot machine
//5 Check if the user won
//6 Give the user their winnings
//7 play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const getLines = () => {
  while (true) {
    const Lines = prompt("Enter the number of lines to bet on[1-3]: ");
    const numberOfLines = parseFloat(Lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of Lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, Lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / Lines) {
      console.log("Invalid Bet, try again");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
const numlines = getLines();
const bet = getBet(balance, numlines);
