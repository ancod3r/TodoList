import { gql } from '@apollo/client'

export const GET_MSG_LIST = gql`
query msglist{
  msglist{
    id,
    jobtodo,
    toggle
  }
}
`
