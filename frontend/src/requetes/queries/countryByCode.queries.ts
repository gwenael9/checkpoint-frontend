import { gql } from "@apollo/client";

export const COUNTRY_BY_CODE = gql`
  query Country($code: String!) {
    country(code: $code) {
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
