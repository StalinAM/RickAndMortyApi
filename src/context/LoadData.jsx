import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export function ApiContextProvider(props) {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  async function loadData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    setInfo(data.info);
  }
  useEffect(() => {
    loadData(url);
  }, []);

  const nextPage = () => {
    loadData(info.next);
  };
  const prevPage = () => {
    loadData(info.prev);
  };
  return (
    <ApiContext.Provider value={{ characters, info, nextPage, prevPage }}>
      {props.children}
    </ApiContext.Provider>
  );
}
