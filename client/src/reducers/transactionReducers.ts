import {
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTION,
  GET_TRANSACTION_ERROR,
} from "../constants/transactionConstant";

export const createTransactionReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        loading: false,
        transaction: action.payload,
      };

    case ADD_TRANSACTION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getTransactionReducer = (
  state = {},
  action: any
) => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        loading: false,
        transactions: action.payload,
      };

    case GET_TRANSACTION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
