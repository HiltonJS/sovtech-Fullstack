import { HttpLink } from "apollo-link-http";

const link = new HttpLink({
  uri: "https://cux8i.sse.codesandbox.io/graphql"
});

export default link;