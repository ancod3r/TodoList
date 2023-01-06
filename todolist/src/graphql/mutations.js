import { gql } from '@apollo/client'

export const ADD_MSG = gql`
mutation msgCreate($jobtodo: String!){
  msgCreate(jobtodo:$jobtodo){
    jobtodo
  }
}
`

export const UPDATE_MSG = gql`
mutation msgUpdate($id: Int!, $jobtodo: String!){
  msgUpdate(id:$id, jobtodo:$jobtodo){
    toggle,
    message,
    error
  }
}
`

export const DELETE_MSG = gql`
mutation msgDelete($id: Int!){
  msgDelete(id:$id){
    toggle,
    message
  }
}
`

export const TOGGLE_MSG = gql`
mutation msgToggle($id: Int!, $toggle: Int!){
  msgToggle(id:$id, toggle:$toggle){
    id,
    toggle
  }
}
`
