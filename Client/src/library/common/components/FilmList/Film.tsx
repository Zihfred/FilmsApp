import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, {useState} from "react";
import styled from "styled-components";
import FilmType from "../../Types/FilmType";
import ConfirmDeleteFilm from "../ConfirmDeleteFilm/ConfirmDeleteFilm";
import popups from "../../constants/Popups";

type FilmProps = {
  film: FilmType;
    onRemove: (id: any) => void
    onOpenDetails: (film: FilmType) => void
};

const Film = ({ film, onRemove,onOpenDetails }: FilmProps) => {
    const [activePopup, setActivePopup] = useState("")


    const handleClosePopup = () => {
        setActivePopup("")
    }


    const handleRemoveClick = () => setActivePopup(popups.delete)

  return (
    <Wrapper>
        <ConfirmDeleteFilm visible={activePopup === popups.delete} onClose={handleClosePopup} onSubmit={()=>onRemove(film.id)} />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {film.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>onOpenDetails(film)}>Details</Button>
        <Button size="small" onClick={handleRemoveClick}>Remove</Button>
      </CardActions>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  margin-bottom: 16px;
  color: white;
  width: calc(25% - 10px);
`;

export default Film;
