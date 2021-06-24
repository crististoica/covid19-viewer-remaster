import * as types from "../types/covid19Data";
import * as api from "../api";

export const getAllData = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOADING, payload: true });

    const { data } = await api.getAllData();
    const dates = Object.keys(data.entities["Romania"].covid19Data);
    const lastDate = dates[dates.length - 1];
    dispatch({
      type: types.GET_ALL_DATA,
      payload: { data, startDate: dates[0], lastDate },
    });

    dispatch({
      type: types.SET_CURRENT_COUNTRY_DATE,
      payload: lastDate,
    });
    dispatch({
      type: types.SET_CURRENT_WORLD_DATE,
      payload: lastDate,
    });
    dispatch({
      type: types.SET_CURRENT_COUNTRY,
      payload: { id: "Romania" },
    });

    dispatch({ type: types.LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: types.ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const setCurrentCountry = (id) => async (dispatch) => {
  dispatch({ type: types.SET_CURRENT_COUNTRY, payload: { id } });
};

export const setCurrentCountryDate = (date) => (dispatch) => {
  dispatch({ type: types.SET_CURRENT_COUNTRY_DATE, payload: date });
};

export const setCurrentWorldDate = (date) => (dispatch) => {
  dispatch({ type: types.SET_CURRENT_WORLD_DATE, payload: date });
};
