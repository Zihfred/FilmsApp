import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";
import React, { useState } from "react";
import Popup from "../Popup/Popup";
import styled from "styled-components";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import FilmType from "../../Types/FilmType";

type AddFilmPopupProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

function validateYear(year: number | string, start: number | string, end: number | string) : boolean
{
  return  year <= end && year>= start
}

const AddFilmPopup = ({ visible, onClose, onSubmit }: AddFilmPopupProps) => {
  if(!visible) return null
  return (
    <Popup>
      <Wrapper>
        <Title>Are you sure...?</Title>
        <ButtonsWrapper>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={onClose}
          >
            NO
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            YES
          </StyledButton>
        </ButtonsWrapper>
      </Wrapper>
    </Popup>
  );
};

const ButtonsWrapper = styled.div`
  padding: 16px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 800;
`;

export default AddFilmPopup;
