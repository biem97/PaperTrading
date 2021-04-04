import { gql } from "@apollo/client";

// Fragments
import UserInfoFragment from "../fragments/UserInfoFragment";

const REGISTER_USER = gql`
  ${UserInfoFragment}
  mutation REGISTER_USER($input: RegisterInput!) {
    registerUser(input: $input) {
      ...UserInfoFragment
    }
  }
`;

export default REGISTER_USER;
