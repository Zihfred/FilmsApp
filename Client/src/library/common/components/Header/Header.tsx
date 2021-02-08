import React from "react";
import styled from "styled-components";

type HeaderProps = {
  onAddClick: () => void
  onImport: () => void
}

const Header = ({onAddClick,onImport} : HeaderProps) => {
  const MenuItems = [
    {
      title: "Создать",
      onClick: () => onAddClick(),
    },
    {
      title: "Импортировать",
      onClick: () => onImport(),
    },
  ];

  return (
    <Wrapper>
      {MenuItems.map((menuItem) => (
        <MenuItem key={menuItem.title} onClick={menuItem.onClick}>{menuItem.title}</MenuItem>
      ))}
    </Wrapper>
  );
};

const MenuItem = styled.div`
  color: white;
  padding: 16px;
  cursor: pointer;
  font-weight: 700;
  user-select: none;
  &:hover {
    background-color: #d9063e;

    border-radius: 5px;
  }
`;
const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  gap: 10px;
`;

export default Header;
