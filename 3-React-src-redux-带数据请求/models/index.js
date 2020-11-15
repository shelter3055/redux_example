import { createStore, applyMiddleware } from "redux";
//两个中间件
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
