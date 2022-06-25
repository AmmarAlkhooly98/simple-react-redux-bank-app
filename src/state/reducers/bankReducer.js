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
        balance: state.balance - action.payload,
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
