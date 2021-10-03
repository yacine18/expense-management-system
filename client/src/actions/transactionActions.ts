import axios from "axios";
import {
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTION,
  GET_TRANSACTION_ERROR,
} from "../constants/transactionConstant";

export const addTransaction =
  (label: any, amount: any) => async (dispatch: any, getState: any) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await axios.post(
        "/api/transactions",
        { label, amount },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({
        type: ADD_TRANSACTION,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_TRANSACTION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTransactions = () => async (dispatch: any, getState: any) => {
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const {data} = await axios.get('/api/transactions', {
      headers:{
        Authorization: `Bearer ${userInfo.token}`
      }
    })

    dispatch({
      type: GET_TRANSACTION,
      payload:data
    })
  } catch (error:any) {
    dispatch({
      type: GET_TRANSACTION_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
