import { gql } from "@apollo/client";

export const LIST_COUNTRY = gql`
  query Countries {
    countries {
      id
      name
      emoji
      continent {
        id
        name
      }
      code
    }
  }
`;
