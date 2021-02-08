import TextField from "@material-ui/core/TextField";
import ChipInput from "material-ui-chip-input";
import React, { useState } from "react";
import Popup from "../Popup/Popup";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import FilmType from "../../Types/FilmType";

type AddFilmPopupProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: FilmType) => void;
};

const AddFilmPopup = ({ visible, onClose, onSubmit }: AddFilmPopupProps) => {
  const [filmAttr, setFilmAttr] = useState({
    title: "",
    release: "",
    format: "",
    stars: [],
  });
  const handleChangeFilmAttr = (type: string, value: any) => {
    setFilmAttr({ ...filmAttr, [type]: value });
  };
  if (!visible) return null;

  const handleClosePopup = () => {
    setFilmAttr({
      title: "",
      release: "",
      format: "",
      stars: [],
    });
    onClose();
  };

  return (
    <Popup>
      <Wrapper>
        <InputWrapper>
          <TextField
            fullWidth
            name={"title"}
            onChange={(e: React.ChangeEvent<any>) =>
              handleChangeFilmAttr(e.target.name, e.target.value)
            }
            label="Title"
            value={filmAttr.title}
            variant="outlined"
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            label="Release"
            name={"release"}
            value={filmAttr.release}
            onChange={(e: React.ChangeEvent<any>) =>
              handleChangeFilmAttr(e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            label="Format"
            value={filmAttr.format}
            name={"format"}
            onChange={(e: React.ChangeEvent<any>) =>
              handleChangeFilmAttr(e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </InputWrapper>
        <InputWrapper>
          <ChipInput
            onChange={(chips: Array<string>) =>
              handleChangeFilmAttr("stars", chips)
            }
            defaultValue={filmAttr.stars}
            fullWidth
            variant="outlined"
            placeholder={"Add star and press enter..."}
          />
        </InputWrapper>
        <ButtonsWrapper>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleClosePopup}
          >
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => {
              onSubmit(filmAttr);
              onClose();
              setFilmAttr({
                title: "",
                release: "",
                format: "",
                stars: [],
              });
            }}
            disabled={
              !Boolean(
                Object.values(filmAttr).every((attr) => attr) &&
                  filmAttr.stars?.length
              )
            }
          >
            Add
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
const InputWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export default AddFilmPopup;
