import { SignalCellularNullSharp } from "@material-ui/icons";

const initialState = [];

const promise = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROMISE":
      return [{ ...action.payload }, ...state];
    case "REMOVE_PROMISE":
      return state.filter((promise) => promise.id !== action.payload);
    case "SAVE_PROMISE":
      return state.map((promise) =>
        promise.id === action.payload.id ? { ...action.payload } : promise
      );
    default:
      return state;
  }
};
export default promise;
