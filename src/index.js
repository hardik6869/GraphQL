import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://checklist-practice.hasura.app/v1/graphql",
});

client
  .query({
    query: gql`
      query getTodos {
        todos {
          done
          id
          title
        }
      }
    `,
  })
  .then((data) => console.log(data));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
