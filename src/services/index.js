import {gql} from "@apollo/client"

export const REGISTER_USER = gql`
    mutation RegisterUser($email : String! , $username : String! , $password : String! ) {
        __typename # Placeholder value
        userCreate(data : {email : $email , username : $username , password : $password}){
            id
        }
    }
`