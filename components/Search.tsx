import React from 'react';
import styled from '@emotion/styled';

const Search: React.FC = () => {
  const Search = styled.input`
    background: no-repeat url(ic20-search.png) #ffff 20px 50%;
    height: 43px;
    width: 500px;
    border-radius: 40px;
    border: none;
    outline: none;
    padding-left: 40px;
    margin-left: 10px;
  `;

  return (
    <>
      <Search placeholder="Поиск клиента" />
    </>
  );
};

export default Search;
