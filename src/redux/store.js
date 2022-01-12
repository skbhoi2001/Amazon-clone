import { applyMiddleware, createStore } from "redux"
import reducer from "./product/reducer"

const networkRequestMiddleWare = store => next => action => {
  if (typeof action === "function") {
    const func = action
    return func(store.dispatch, store.getState)
  } else {
    return next(action)
  }
}

export const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(networkRequestMiddleWare)
)
