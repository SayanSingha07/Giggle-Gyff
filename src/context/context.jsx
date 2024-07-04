import { Children, createContext, useContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const context = createContext();
const DataProvider = ({ children }) => {
  const [gifs, setfifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("gifs");
  const [Favourate, setFevourate] = useState([]);
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  return (
    <context.Provider
      value={{
        gf,
        gifs,
        setfifs,
        searchTerm,
        setSearchTerm,
        Favourate,
        setFevourate,
      }}
      >
          {Children.map(children, childComponent => {
              return childComponent
          })}
    </context.Provider>
  );
};

export const useGifstate = () => {
  return useContext(context);
};
export default DataProvider;
