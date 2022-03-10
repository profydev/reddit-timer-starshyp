import React from 'react';
import { useParams } from 'react-router-dom';
//  prettier-ignore

const Search = () => {
  const params = useParams();

  return (
    <>
      <h1>{`Search results for: ${params.term}`}</h1>
      <input type="text" placeholder="Search..." defaultValue={params.term} />
    </>
  );
};

export default Search;
