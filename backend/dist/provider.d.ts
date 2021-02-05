import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryJokeArgs } from './generated/graphql';
export declare class JokesAPI extends RESTDataSource {
    constructor();
    getJoke(args: QueryJokeArgs): Promise<any>;
    getCategories(): Promise<any>;
}
