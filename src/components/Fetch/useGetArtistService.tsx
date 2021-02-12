import { useEffect, useState } from "react";
import { Service } from "../../types/Service";
import {  SearchResponse, Song } from "../../types/types";
import Artist from "./Artist"

export interface ServiceState {
  status:string;
  data: Song[];
  error?:Error
}


const useGetArtistService = () => {
  const [data, setData] = useState<ServiceState>({
    status: "loading",
    data:[]
  });
  const [query,setQuery] = useState("Rihanna")
  useEffect(() => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "af41582910msh71bc72ea9534f3cp19e1b8jsnbe395ac299a8",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then(({data}:SearchResponse) => setData({status:"loaded",data}) )
      .catch((error) => setData({ status: "error", error,data:[] }));
  }, []);
  return data
};

export default useGetArtistService;
