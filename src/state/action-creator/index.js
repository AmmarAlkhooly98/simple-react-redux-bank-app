export const depositMoney = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

export const withdrawMoney = (amount) => {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
};

export const takeLoan = (amount) => {
  return {
    type: "TAKE_LOAN",
    payload: parseInt(amount),
  };
};

export const payAllLoan = () => {
  console.log("hi from action ");
  return {
    type: "PAY_LOAN",
  };
};
