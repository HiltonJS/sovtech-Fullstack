import { gql } from 'apollo-server';

import { IResolvers } from './generated/graphql';
import { Context } from './index';

/*
 * TYPE DEFS
 */

export const typeDefs = gql`
  type Joke {
    categories: [String]
    created_at: String!
    id: ID!
    updated_at: String!
    url: String
    icon_url: String
    value: String!
  }
  type Query {
    joke(category: String!): Joke!
    categories: [String]
  }
`;

/*
 * HELPERS
 */

const getJokesAPI = (context: Context) => context.dataSources.jokesAPI;

/*
 * RESOLVERS
 */

export const resolvers: IResolvers = {
  Query: {
    joke: (_, args, ctx) => getJokesAPI(ctx).getJoke(args),
    categories: (_, __, ctx) => getJokesAPI(ctx).getCategories()
  }
};
