// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "CLEAR":
//       return initialState;

//     default:
//       return state;
//   }
// };

// export default reducer;

import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoreducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);
