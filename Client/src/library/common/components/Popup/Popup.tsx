import { Dialog } from '@material-ui/core';
import React from 'react';

type PopupProps = {
    onClose?: () => void
    children?: any
}

const Popup = ({onClose, children} : PopupProps) => {
    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true} maxWidth={"xs"}>
            {children}
        </Dialog>
    );
};

export default Popup;
