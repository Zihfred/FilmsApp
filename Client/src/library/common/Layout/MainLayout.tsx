import React from 'react';
import Container from "@material-ui/core/Container";
import Header from "../components/Header/Header";


type MainLayoutProps = {
    children: JSX.Element
}

const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <Container maxWidth={"md"}>
            {children}
        </Container>
    );
};

export default MainLayout;
