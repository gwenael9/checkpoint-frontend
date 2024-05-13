import { gql } from "@apollo/client";

export const LIST_CONTINENT = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;
