import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../index';
export declare type Maybe<T> = T | null;
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Joke = {
    __typename?: 'Joke';
    id: Scalars['String'];
    joke: Scalars['String'];
    categories?: Maybe<Array<Scalars['String']>>;
    created_at: Scalars['String'];
    url: Scalars['String'];
    icon_url: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    joke: Joke;
    categories?: Maybe<Array<Scalars['String']>>;
};
export declare type QueryJokeArgs = {
    category: Scalars['String'];
};
export declare type QueryRandomJokesArgs = {
    limit: Scalars['Int'];
    categories?: Maybe<Array<Scalars['String']>>;
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    Query: ResolverTypeWrapper<{}>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Joke: ResolverTypeWrapper<Joke>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    Query: {};
    Int: Scalars['Int'];
    Joke: Joke;
    String: Scalars['String'];
    Boolean: Scalars['Boolean'];
};
export declare type JokeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Joke'] = ResolversParentTypes['Joke']> = {
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    joke?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    categories?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    joke?: Resolver<ResolversTypes['Joke'], ParentType, ContextType, RequireFields<QueryJokeArgs, 'category'>>;
    randomJokes?: Resolver<Maybe<Array<ResolversTypes['Joke']>>, ParentType, ContextType, RequireFields<QueryRandomJokesArgs, 'limit'>>;
    jokesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    categories?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
};
export declare type Resolvers<ContextType = Context> = {
    Joke?: JokeResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export declare type IResolvers<ContextType = Context> = Resolvers<ContextType>;
