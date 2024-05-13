import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String'];
};

export type NewCountryInput = {
  code: Scalars['String'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String'];
  name: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String'];
};

export type CreateContinentMutationVariables = Exact<{
  data: NewContinentInput;
}>;


export type CreateContinentMutation = { __typename?: 'Mutation', addContinent: { __typename?: 'Continent', id: number, name: string } };

export type CreateCountryMutationVariables = Exact<{
  data: NewCountryInput;
}>;


export type CreateCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };

export type GetContinentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', id: number, name: string }> };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', emoji: string, name: string, id: number, code: string }> };

export type GetCountryByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetCountryByCodeQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };


export const CreateContinentDocument = gql`
    mutation CreateContinent($data: NewContinentInput!) {
  addContinent(data: $data) {
    id
    name
  }
}
    `;
export type CreateContinentMutationFn = Apollo.MutationFunction<CreateContinentMutation, CreateContinentMutationVariables>;

/**
 * __useCreateContinentMutation__
 *
 * To run a mutation, you first call `useCreateContinentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContinentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContinentMutation, { data, loading, error }] = useCreateContinentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateContinentMutation(baseOptions?: Apollo.MutationHookOptions<CreateContinentMutation, CreateContinentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContinentMutation, CreateContinentMutationVariables>(CreateContinentDocument, options);
      }
export type CreateContinentMutationHookResult = ReturnType<typeof useCreateContinentMutation>;
export type CreateContinentMutationResult = Apollo.MutationResult<CreateContinentMutation>;
export type CreateContinentMutationOptions = Apollo.BaseMutationOptions<CreateContinentMutation, CreateContinentMutationVariables>;
export const CreateCountryDocument = gql`
    mutation CreateCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}
    `;
export type CreateCountryMutationFn = Apollo.MutationFunction<CreateCountryMutation, CreateCountryMutationVariables>;

/**
 * __useCreateCountryMutation__
 *
 * To run a mutation, you first call `useCreateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCountryMutation, { data, loading, error }] = useCreateCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCountryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCountryMutation, CreateCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCountryMutation, CreateCountryMutationVariables>(CreateCountryDocument, options);
      }
export type CreateCountryMutationHookResult = ReturnType<typeof useCreateCountryMutation>;
export type CreateCountryMutationResult = Apollo.MutationResult<CreateCountryMutation>;
export type CreateCountryMutationOptions = Apollo.BaseMutationOptions<CreateCountryMutation, CreateCountryMutationVariables>;
export const GetContinentDocument = gql`
    query getContinent {
  continents {
    id
    name
  }
}
    `;

/**
 * __useGetContinentQuery__
 *
 * To run a query within a React component, call `useGetContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentQuery(baseOptions?: Apollo.QueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
      }
export function useGetContinentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
        }
export type GetContinentQueryHookResult = ReturnType<typeof useGetContinentQuery>;
export type GetContinentLazyQueryHookResult = ReturnType<typeof useGetContinentLazyQuery>;
export type GetContinentQueryResult = Apollo.QueryResult<GetContinentQuery, GetContinentQueryVariables>;
export const GetCountriesDocument = gql`
    query getCountries {
  countries {
    emoji
    name
    id
    code
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetCountryByCodeDocument = gql`
    query GetCountryByCode($code: String!) {
  country(code: $code) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}
    `;

/**
 * __useGetCountryByCodeQuery__
 *
 * To run a query within a React component, call `useGetCountryByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryByCodeQuery(baseOptions: Apollo.QueryHookOptions<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>(GetCountryByCodeDocument, options);
      }
export function useGetCountryByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>(GetCountryByCodeDocument, options);
        }
export type GetCountryByCodeQueryHookResult = ReturnType<typeof useGetCountryByCodeQuery>;
export type GetCountryByCodeLazyQueryHookResult = ReturnType<typeof useGetCountryByCodeLazyQuery>;
export type GetCountryByCodeQueryResult = Apollo.QueryResult<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>;