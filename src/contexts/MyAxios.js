import axios from "axios";

//saját myAxios példány létrehozása és konfigurálása

export const myAxios = axios.create({
    baseURL : 'http://fakestoreapi.com',
});