import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;
