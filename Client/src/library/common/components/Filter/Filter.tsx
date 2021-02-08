import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


type FilterProps = {
  order: string
  starsList: Array<string> | 0;
  titleList: Array<string> | 0;
  onChangeFilter: (type: string, value: string) => void;
  onClear: () => void
    title: string
    star: string
};

const Filter = ({ starsList, titleList,onChangeFilter, order ,onClear, title, star}: FilterProps) => {
  const handleChangeOrder = () => {
    if (order === "asc") {
      onChangeFilter("order", "desc")
    } else {
      onChangeFilter("order", "asc")
    }
  };

  const handleChangeSearchTitle = (e: any, option: any) => {
    onChangeFilter("title", option)
  };

  const handleChangeSearchStar = (e: any, option: any) => {
    onChangeFilter("star", option)
  };

  return (
    <Wrapper>
      <Order onClick={handleChangeOrder}>
        Order:{order === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </Order>
      <Autocomplete
          disableClearable={true}
        options={titleList || []}
        getOptionLabel={(option: string) => option}
        style={{ width: 300 }}
          value={title}
        onChange={handleChangeSearchTitle}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by title..."
            variant="outlined"
            name={"search"}
          />
        )}
      />
      <Autocomplete
          disableClearable={true}
        options={starsList || []}
        getOptionLabel={(option: string) => option}
        style={{ width: 300 }}
          value={star}
        onChange={handleChangeSearchStar}
        renderInput={(params) => (
          <TextField {...params} label="Search by star..." variant="outlined" />
        )}
      />
      <ClearButton onClick={onClear}>Clear All</ClearButton>
    </Wrapper>
  );
};

const Order = styled.div`
  display: flex;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);;
`;

const ClearButton = styled.div`
  color: #d9063e;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  //&:hover{
  // transform: scale(1.2); 
  //}
`

const Wrapper = styled.div`
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: white;
  padding: 16px;
  border-radius: 5px;
`;

export default Filter;
