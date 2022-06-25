let initialState = {
  balance: 0,
  debt: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "WITHDRAW":
      return {
        ...state,
        balance:
          state.balance - action.payload >= 0 // check if the current balance - 1000 >= 0
            ? state.balance - action.payload // subtract normally as the outcome will be a positive number
            : 0, // restrict the balance from reaching a negative value by making the balance zero, and below we are updating the debt by adding the extra withdrawl amount that would have been a negative to the debt
        debt:
          state.balance - action.payload < 0 // check if the current balance - 1000 is less than 0
            ? Math.abs(state.balance - action.payload) + state.debt // convert the negative number outcome to positive and add it to the current debt
            : state.debt, // else, keep the debt amount as it was
      };
    case "TAKE_LOAN":
      return {
        ...state,
        balance: state.balance + action.payload,
        debt: state.debt + action.payload,
      };
    case "PAY_LOAN":
      return {
        ...state,
        balance: state.balance - state.debt,
        debt: 0,
      };
    default:
      return state;
  }
};

export default reducer;
