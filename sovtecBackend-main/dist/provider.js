"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
/*
 * DATA SOURCE
 */
class JokesAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io';
    }
    async getJoke(args) {
        const result = await this.get(`jokes/random?category=${args.category}`);
        return result;
    }
    async getCategories() {
        const result = await this.get(`/jokes/categories`);
        return result;
    }
}
exports.JokesAPI = JokesAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBd0Q7QUFHeEQ7O0dBRUc7QUFFSCxNQUFhLFFBQVMsU0FBUSx1Q0FBYztJQUMxQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQztJQUM5QyxDQUFDO0lBSU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFtQjtRQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxLQUFLLENBQUMsYUFBYTtRQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFsQkQsNEJBa0JDIn0=