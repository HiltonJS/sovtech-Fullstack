"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
/*
 * TYPE DEFS
 */
exports.typeDefs = apollo_server_1.gql `
type Joke {
  categories:[String]
  created_at: String!
  id:ID!
  updated_at:String!
  url:String
  icon_url:String     
  value: String!
}
type Query {
  joke(category:String!):Joke!
    categories:[String]
   
  }

`;
/*
 * HELPERS
 */
const getJokesAPI = (context) => context.dataSources.jokesAPI;
/*
 * RESOLVERS
 */
exports.resolvers = {
    Query: {
        joke: (_, args, ctx) => getJokesAPI(ctx).getJoke(args),
        categories: (_, __, ctx) => getJokesAPI(ctx).getCategories()
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBb0M7QUFLcEM7O0dBRUc7QUFFVSxRQUFBLFFBQVEsR0FBRyxtQkFBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0IxQixDQUFDO0FBRUY7O0dBRUc7QUFFSCxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0FBRXZFOztHQUVHO0FBRVUsUUFBQSxTQUFTLEdBQWU7SUFDbkMsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RELFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFO0tBQzdEO0NBQ0YsQ0FBQyJ9