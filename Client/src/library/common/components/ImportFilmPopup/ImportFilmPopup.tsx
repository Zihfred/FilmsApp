import React, { useState } from "react";
import Popup from "../Popup/Popup";
import styled from "styled-components";
import { DropzoneArea } from "material-ui-dropzone";
import {Button} from "@material-ui/core";

type ImportFilmPopupProps = {
  onClose: () => void;
  onSubmit: (file : any) => void;
  visible: boolean

};

const ImportFilmPopup = ({ onClose,onSubmit, visible }: ImportFilmPopupProps) => {
  const [files, setFiles] = useState([]);

  const handleSubmit = () => {
      onSubmit(files)
  }

  const handleUploadFile = (files: any) => setFiles(files);
    if (!visible) return null;
  return (
    <Popup onClose={onClose}>
      <Wrapper>
        <Drop>
          <DropzoneArea onChange={handleUploadFile} />
        </Drop>
          <ButtonsWrapper>
              <StyledButton
                  variant="contained"
                  color="secondary"
                  onClick={onClose}
              >
                  Cancel
              </StyledButton>
              <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={() => {
                      handleSubmit()
                      onClose()
                  }}
              >
                  Add
              </StyledButton>
          </ButtonsWrapper>
      </Wrapper>
    </Popup>
  );
};

const Wrapper = styled.div`
  padding: 16px;
`;

const Drop = styled.div`
  margin-bottom: 16px;
`;


const ButtonsWrapper = styled.div`
  padding: 16px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  width: 50%;
`;

export default ImportFilmPopup;
