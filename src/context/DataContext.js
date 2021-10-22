import { createContext, useState } from "react";

export const MusicContext = createContext()

export const DataProvider = ({ children }) => {
  const [music, setMusic] = useState([])
  // const [artist, setArtist] = useState()

  return (
    <MusicContext.Provider
      value={{
        music,
        setMusic,
        // artist,
        // setArtist
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}