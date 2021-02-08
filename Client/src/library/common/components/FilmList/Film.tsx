import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import FilmType from "../../Types/FilmType";

type FilmProps = {
  film: FilmType;
    onRemove: (id: any) => void
    onOpenDetails: (film: FilmType) => void
};

const Film = ({ film, onRemove,onOpenDetails }: FilmProps) => {
  return (
    <Wrapper>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {film.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>onOpenDetails(film)}>Details</Button>
        <Button size="small" onClick={()=>onRemove(film.id)}>Remove</Button>
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
