import React, { useEffect, useState } from 'react';
import { useQuery, gql } from './use-query-light';
import { QueryServerProvider } from './server-context';

const serverUrl = 'https://countries.trevorblades.com/';
const query = gql`
  query {
    countries {
      name
    }
  }
`;

export const Preview = () => {
  return (
    <QueryServerProvider value={serverUrl}>
      <CountriesGql />
    </QueryServerProvider>
  );
};

const CountriesGql = () => {
  const { loading, data, error } = useQuery(query);

  if (error) return <div>Error! {error.toString()}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <div>
      <div>Data:</div>
      <br />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
