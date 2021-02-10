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
  onSubmit: (data: FilmType) => void;
};

function validateYear(year: number | string, start: number | string, end: number | string) : boolean
{
  return  year <= end && year>= start
}

const AddFilmPopup = ({ visible, onClose, onSubmit }: AddFilmPopupProps) => {
  const [filmAttr, setFilmAttr] = useState({
    title: "",
    release: "",
    format: "",
    stars: [],
  });

  const [releaseTouched, setReleaseTouched] = useState(false)



  const handleChangeFilmAttr = (type: string, value: any) => {
    setFilmAttr({ ...filmAttr, [type]: value });
    if(type === "release"){
      setReleaseTouched(true)
    }
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


  const yearError = validateYear(filmAttr.release, 1850,2020)
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
            helperText={!yearError && releaseTouched && "1850-2020"}
            error={!yearError && releaseTouched}
            value={filmAttr.release}
            onChange={(e: React.ChangeEvent<any>) =>
              handleChangeFilmAttr(e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </InputWrapper>
        <InputWrapper>
          <FormControl variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Format</InputLabel>
            <Select
                name={"format"}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={filmAttr.format}
                onChange={(e: React.ChangeEvent<any>) =>
                    handleChangeFilmAttr(e.target.name, e.target.value)
                }
                // onChange={handleChange}
                label="Age"
            >
              <MenuItem value={"DVD"}>DVD</MenuItem>
              <MenuItem value={"VHS"}>VHS</MenuItem>
              <MenuItem value={"Blu-Ray"}>Blu-Ray</MenuItem>
            </Select>
          </FormControl>
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
                  filmAttr.stars?.length && yearError
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
