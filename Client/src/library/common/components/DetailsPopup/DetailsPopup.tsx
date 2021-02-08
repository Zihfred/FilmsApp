import React from "react";
import Popup from "../Popup/Popup";
import styled from "styled-components";
import { Button } from "@material-ui/core";

type DetailsPopupProps = {
    onClose?: () => void;
    visible: boolean
    film: any
};

const DetailsPopup = ({ onClose, visible,film }: DetailsPopupProps) => {

    if (!visible) return null;
  return (
    <Popup >
        <Wrapper>
            <div style={{textAlign: "center"}}>Details</div>
            <ItemWrapper> <div>Title: {film.title}</div></ItemWrapper>
            <ItemWrapper> <div>Format: {film.format}</div></ItemWrapper>
            <ItemWrapper><div>Release: {film.release}</div></ItemWrapper>
            <StyledButton
                variant="contained"
                color="secondary"
                onClick={onClose}
                style={{width: "100%"}}
            >
                Close
            </StyledButton>
        </Wrapper>

    </Popup>
  );
};

const ItemWrapper = styled.div`
padding: 8px 0px;
`

const Wrapper = styled.div`
padding: 16px;
  width: 300px;
`
const StyledButton = styled(Button)`
width: 100%;
  margin: 10px 0;
`

export default DetailsPopup;
