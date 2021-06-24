import * as types from "../types/covid19Data";

const initialState = {
  ids: [],
  data: [],
  world: {},
  startDate: "",
  lastDate: "",
  isLoading: true,
  currentCountryId: "",
  currentCountryDate: "",
  currentWorldDate: "",
  chartDateRanges: {
    country: {
      startDate: "",
      endDate: "",
    },
    world: {
      startDate: "",
      endDate: "",
    },
  },
  message: {
    content: "",
    type: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.GET_ALL_DATA:
      return {
        ...state,
        startDate: action.payload.startDate,
        lastDate: action.payload.lastDate,
        ids: action.payload.data.ids,
        data: action.payload.data.entities,
        world: action.payload.data.world,
      };
    case types.SET_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountryId: action.payload.id,
      };
    case types.SET_CURRENT_COUNTRY_DATE:
      return {
        ...state,
        currentCountryDate: action.payload,
      };
    case types.SET_CURRENT_WORLD_DATE:
      return {
        ...state,
        currentWorldDate: action.payload,
      };
    case types.ERROR:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default reducer;
