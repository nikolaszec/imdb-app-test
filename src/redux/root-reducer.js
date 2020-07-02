import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import searchReducer from "./search/search.reducer";
import moviesReducer from "./movies/movies.reducer";
import authReducer from "./auth/auth.reducer";

let reducerDefault = combineReducers({
  user: userReducer,
  search: searchReducer,
  movies: moviesReducer,
  auth: authReducer,
});

let rootReducer = null;

const isClient = typeof window !== "undefined";

if (isClient) {
  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "user"],
  };

  rootReducer = persistReducer(persistConfig, reducerDefault);
} else {
  rootReducer = reducerDefault;
}

export default rootReducer;
