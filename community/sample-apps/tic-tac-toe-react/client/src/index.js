import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

console.log(process.env);
const GRAPHQL_ENGINE_URL = process.env.REACT_APP_GRAPHQL_ENGINE_URL || `${window.location.host}/v1alpha1/graphql`;

const link = new WebSocketLink({
  uri: `ws://${GRAPHQL_ENGINE_URL}`,
  options: {
    reconnect: true
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root')
);

