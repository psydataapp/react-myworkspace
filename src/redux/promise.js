const initialState = [];

const promise = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROMISE_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_PROMISE_SUCCEEDED":
      return state.filter((promise) => promise.id !== action.payload);
    case "MODIFY_PROMISE_SUCCEEDED":
      return state.map((promise) =>
        promise.id === action.payload.id ? { ...action.payload } : promise
      );
    case "FETCH_PROMISELIST_SUCCEEDED":
      return [...action.payload];
    default:
      return state;
  }
};
export default promise;
