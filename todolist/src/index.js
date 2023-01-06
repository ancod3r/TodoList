import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Todoapp from './components/todoapp'
import ParticleBackground from './components/particle-background'
import './css/todoapp.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <Todoapp />
    <ParticleBackground />
  </ApolloProvider>
)
