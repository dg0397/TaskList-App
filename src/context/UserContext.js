import React from 'react'
import {ApolloClient,ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri : 'https://api.8base.com/ckf8ipjig000507l0cuvycpxo',
    cache : new InMemoryCache()
})

export function UserApolloContextProvider({children}){
    return(
        <ApolloProvider client = {client}>
            {children}
        </ApolloProvider>
    )
}

export default client