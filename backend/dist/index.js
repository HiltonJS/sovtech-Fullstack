"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const provider_1 = require("./provider");
const resolver_1 = require("./resolver");
/*
 * DATA SOURCES
 */
const dataSources = () => {
    return {
        jokesAPI: new provider_1.JokesAPI()
    };
};
/*
 * SERVER
 */
const server = new apollo_server_1.ApolloServer({
    cors: {
        origin: '*',
        credentials: true
    },
    typeDefs: resolver_1.typeDefs,
    // @ts-ignore (FIXME: should be casted to default Resolvers type?)
    resolvers: resolver_1.resolvers,
    dataSources
});
server.listen().then(({ url }) => {
    console.log(`  Server ready at ${url}`); // tslint:disable-line no-console
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBNkM7QUFFN0MseUNBQXNDO0FBQ3RDLHlDQUFpRDtBQWNqRDs7R0FFRztBQUdILE1BQU0sV0FBVyxHQUFHLEdBQTJCLEVBQUU7SUFDL0MsT0FBTztRQUNMLFFBQVEsRUFBRSxJQUFJLG1CQUFRLEVBQUU7S0FDekIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUtGOztHQUVHO0FBRUgsTUFBTSxNQUFNLEdBQUcsSUFBSSw0QkFBWSxDQUFDO0lBQzlCLElBQUksRUFBRTtRQUNOLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLElBQUk7S0FBQztJQUNsQixRQUFRLEVBQVIsbUJBQVE7SUFDUixrRUFBa0U7SUFDbEUsU0FBUyxFQUFULG9CQUFTO0lBQ1QsV0FBVztDQUNaLENBQUMsQ0FBQztBQUtILE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztBQUM1RSxDQUFDLENBQUMsQ0FBQyJ9