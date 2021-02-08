import React from "react";
import FilmType from "../../Types/FilmType";
import Film from "./Film";
import styled from "styled-components";

type FilmListProps = {
  films: Array<FilmType>;
  onRemove: (id : string) => void
  onOpenDetails: (film: FilmType) => void
};

const FilmList = ({ films, onRemove,onOpenDetails }: FilmListProps) => {
  if (!films?.length) return null;
  return (
    <Wrapper>
      <Title>Films:</Title>
      {films.map((film) => (
        <Film key={film.id} film={film} onRemove={onRemove} onOpenDetails={onOpenDetails} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  gap: 10px;
  padding-top: 16px;
`
const Title = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
`

export default FilmList;
