import { gql } from "@apollo/client";

export const CREATE_CONTINENT = gql`
  mutation AddContinent($data: NewContinentInput!) {
    addContinent(data: $data) {
      id
      name
    }
  }
`;
