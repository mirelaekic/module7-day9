import { useEffect, useState } from "react";
import { Service } from "../../types/Service";
import { Data } from "../../types/Data";
import Artist from "./Artist"

export interface Datas {
  data: Data[];
}
const useGetArtistService = () => {
  const [data, setData] = useState<Service<Datas>>({
    status: "loading",
  });
  useEffect(() => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "af41582910msh71bc72ea9534f3cp19e1b8jsnbe395ac299a8",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => setData({ status: "loaded", payload: response }))
      .catch((error) => setData({ status: "error", error }));
  }, []);
  return data
};

export default useGetArtistService;
