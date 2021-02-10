import React, { useEffect, useState } from "react";
import FilmList from "../../library/common/components/FilmList/FilmList";

import API from "../../library/api";
import Filter from "../../library/common/components/Filter/Filter";
import FilmType from "../../library/common/Types/FilmType";
import AddFilmPopup from "../../library/common/components/AddFilmPopup/AddFilmPopup";
import popups from "../../library/common/constants/Popups";
import Header from "../../library/common/components/Header/Header";
import ImportFilmPopup from "../../library/common/components/ImportFilmPopup/ImportFilmPopup";
import DetailsPopup from "../../library/common/components/DetailsPopup/DetailsPopup";
import ConfirmDeleteFilm from "../../library/common/components/ConfirmDeleteFilm/ConfirmDeleteFilm";

const Main = () => {
  const [films, setFilms] = useState([]);
  const [filters, setFilters] = useState({
    order: "desc",
    title: "",
    star: "",
  });
  const [activePopup, setActivePopup] = useState("");
  const [detailsData, setDetailsData] = useState({});

  const handleOpenDetails = (film: FilmType) => {
    setDetailsData(film);
    setActivePopup(popups.details)
  };

  const handleClearFilters = () => {
    setFilters({
      order: "desc",
      title: "",
      star: "",
    });
  };

  const handleChangeFilter = (type: string, value: string) => {
    setFilters({ ...filters, [type]: value });
  };

  const fetchFilms = () => {
    API.filmService.getFilms().then(({ data }) => setFilms(data));
  };

  const handleImportFilms = async (films: any) => {
    const filmsBlob = await toBase64(films[0]);
    API.filmService.importFilms({ films: filmsBlob }).then(()=>setFilms([]))
  };

  const handleAddFilm = (newFilm: FilmType) => {
    API.filmService
      .addFilm({ data: newFilm })
      .then(({ data }) => setFilms([...films].concat(data)));
  };

  const handleRemoveFilm = (id: string) => {
    API.filmService
      .removeFilm({ id })
      .then(() =>
        setFilms([...films].filter((film: FilmType) => film.id !== id))
      );
  };

  const handleClosePopup = () => {
    setActivePopup("");
    setDetailsData({})
  };
  useEffect(() => {
    fetchFilms();
  }, []);

  const displayedFilms = films
    .sort((a: FilmType, b: FilmType) => {
      if (filters.order === "desc") {
        return a.title.localeCompare(b.title);
      } else return b.title.localeCompare(a.title);
    })
    .filter((film: FilmType) => film.title.includes(filters.title))
    .filter((film: FilmType) => {
      if (filters.star === "") return true;
      return film.stars.includes(filters.star);
    });
  return (
    <>
        <DetailsPopup visible={activePopup === popups.details} film={detailsData} onClose={handleClosePopup} />
      <ImportFilmPopup
        visible={activePopup === popups.import}
        onClose={handleClosePopup}
        onSubmit={handleImportFilms}
      />
      <AddFilmPopup
        visible={activePopup === popups.add}
        onClose={handleClosePopup}
        onSubmit={handleAddFilm}
      />
      <Header
        onAddClick={() => setActivePopup(popups.add)}
        onImport={() => setActivePopup(popups.import)}
      />
      <Filter
        onClear={handleClearFilters}
        order={filters.order}
        title={filters.title}
        star={filters.star}
        onChangeFilter={handleChangeFilter}
        titleList={Array.from(new Set(films.map((film: FilmType) => film.title)))}
        starsList={
          films?.length &&
          Array.from(new Set(films.map((film: FilmType) => film.stars).flat(1)))
        }
      />
      <FilmList
        films={displayedFilms}
        onRemove={handleRemoveFilm}
        onOpenDetails={handleOpenDetails}
      />
    </>
  );
};

const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default Main;
