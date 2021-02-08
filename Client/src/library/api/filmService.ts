import axios from "./../../main/axios";
import FilmType from "../common/Types/FilmType";

export default {
  getFilms: async () => {
    try {
      const result = await axios.get(`api/films`);
      return result;
    } catch (error) {
      throw error;
    }
  },
  addFilm: async ({data}: {data: FilmType}) => {
    try {
      // @ts-ignore
      const result = await axios.post(`api/films`, data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  removeFilm: async ({id} : {id: string}) => {
    try {
      // @ts-ignore
      const result = await axios.delete(`api/films/${id}`, );
      return result;
    } catch (error) {
      throw error;
    }
  },
  importFilms: async ({films} : { films: any}) => {
    let data = new FormData()
    data.append("films", films)
    try {
      // @ts-ignore
      const result = await axios.post(`api/films/import`, data );
      return result;
    } catch (error) {
      throw error;
    }
  },
};
