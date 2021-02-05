import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryJokeArgs } from './generated/graphql';

/*
 * DATA SOURCE
 */

export class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io';
  }

  public async getJoke(args: QueryJokeArgs) {
    const result = await this.get(`jokes/random?category=${args.category}`);

    return result;
  }

  public async getCategories() {
    const result = await this.get(`/jokes/categories`);
    return result;
  }
}
