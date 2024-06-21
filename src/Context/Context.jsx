import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const appContext = createContext();

const getFavFromStorage = () => {
  const localData = localStorage.getItem("dentists");
  return localData ? JSON.parse(localData) : [];
};
const addFavToStorage = (favorites) => {
  localStorage.setItem("dentists", JSON.stringify(favorites));
};

const initialValue = {
  dentists: [],
  theme: "light",
  favorites: getFavFromStorage(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        dentists: action.dentists,
      };
    case "change-theme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "add-favorite":
      // valida diferente si existe el dentista en favoritos
      const dentist = state.favorites.filter(
        (item) => item.id == action.dentist.id
      );
      if (dentist == null || dentist.length == 0) {
        state.favorites.push(action.dentist);
        addFavToStorage(state.favorites);
      }
      return {
        ...state,
        favorites: state.favorites,
      };
    default:
      break;
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "update", dentists: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export { Context, appContext };
