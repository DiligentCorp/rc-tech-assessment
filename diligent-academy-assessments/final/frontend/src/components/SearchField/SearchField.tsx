import React, { Dispatch, SetStateAction } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function SearchField({ searchValue, setSearchValue}: Props) {
  return (
    <TextField
      type='search'
      value={searchValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}    
      InputProps={{
        startAdornment: <InputAdornment position="start">{<SearchIcon />}</InputAdornment>,
        type: 'text',
        placeholder: 'Search by',
      }}
    />
  )
}

