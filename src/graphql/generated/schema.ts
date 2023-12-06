import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export enum AccountStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED'
}

export type AuthInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin?: Maybe<AuthPayload>;
  changePassword?: Maybe<AuthPayload>;
  deleteUser?: Maybe<AuthPayload>;
  registerUser?: Maybe<AuthPayload>;
  updateUser?: Maybe<AuthPayload>;
};


export type MutationAuthLoginArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<AuthPayload>;
  getUsers?: Maybe<UsersPayload>;
  me?: Maybe<AuthPayload>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

export type SignUpInput = {
  creditLimit: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
  status?: InputMaybe<AccountStatus>;
  userName: Scalars['String']['input'];
};

export type UpdateUserInput = {
  bettingStatus?: InputMaybe<Scalars['Boolean']['input']>;
  creditLimit?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transferStatus?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  bettingStatus?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  creditDistributedByAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToUser?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  loginStep?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transferStatus?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UsersInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  error?: Maybe<ErrorType>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type AuthLoginMutationVariables = Exact<{
  input?: InputMaybe<AuthInput>;
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', authLogin?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, role?: string | null, availableCredit?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'AuthPayload', error?: { __typename?: 'ErrorType', message: string, code: string } | null, user?: { __typename?: 'User', _id: string, userName: string } | null } | null };

export type RegisterUserMutationVariables = Exact<{
  input?: InputMaybe<SignUpInput>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, userName: string, password?: string | null, status?: string | null, role?: string | null, availableCredit?: number | null, creditLimit?: number | null, transferStatus?: boolean | null, bettingStatus?: boolean | null, loginStep?: boolean | null, createdAt?: any | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  input?: InputMaybe<UpdateUserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'AuthPayload', error?: { __typename?: 'ErrorType', message: string, code: string } | null, user?: { __typename?: 'User', _id: string, userName: string } | null } | null };

export type GetUserQueryVariables = Exact<{
  getUserId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'AuthPayload', token?: string | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null, user?: { __typename?: 'User', _id: string, userName: string, password?: string | null, status?: string | null, role?: string | null, availableCredit?: number | null, creditLimit?: number | null, creditGivenToAgent?: number | null, creditDistributedByAgent?: number | null, creditGivenToUser?: number | null, transferStatus?: boolean | null, bettingStatus?: boolean | null, loginStep?: boolean | null, createdAt?: any | null } | null } | null };

export type GetUsersQueryVariables = Exact<{
  input?: InputMaybe<UsersInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: { __typename?: 'UsersPayload', user?: Array<{ __typename?: 'User', _id: string, userName: string, password?: string | null, status?: string | null, role?: string | null, availableCredit?: number | null, creditLimit?: number | null, creditGivenToAgent?: number | null, creditDistributedByAgent?: number | null, creditGivenToUser?: number | null, transferStatus?: boolean | null, bettingStatus?: boolean | null, loginStep?: boolean | null, createdAt?: any | null } | null> | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, availableCredit?: number | null, bettingStatus?: boolean | null, createdAt?: any | null, creditLimit?: number | null, loginStep?: boolean | null, password?: string | null, role?: string | null, status?: string | null, transferStatus?: boolean | null, userName: string, creditGivenToAgent?: number | null, creditGivenToUser?: number | null, creditDistributedByAgent?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };


export const AuthLoginDocument = gql`
    mutation AuthLogin($input: AuthInput) {
  authLogin(input: $input) {
    user {
      _id
      role
      availableCredit
    }
    token
    error {
      message
      code
    }
  }
}
    `;
export type AuthLoginMutationFn = Apollo.MutationFunction<AuthLoginMutation, AuthLoginMutationVariables>;

/**
 * __useAuthLoginMutation__
 *
 * To run a mutation, you first call `useAuthLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthLoginMutation(baseOptions?: Apollo.MutationHookOptions<AuthLoginMutation, AuthLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, options);
      }
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = Apollo.MutationResult<AuthLoginMutation>;
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<AuthLoginMutation, AuthLoginMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    error {
      message
      code
    }
    user {
      _id
      userName
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: SignUpInput) {
  registerUser(input: $input) {
    token
    user {
      _id
      userName
      password
      status
      role
      availableCredit
      creditLimit
      transferStatus
      bettingStatus
      loginStep
      createdAt
    }
    error {
      message
      code
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput) {
  updateUser(input: $input) {
    error {
      message
      code
    }
    user {
      _id
      userName
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($getUserId: ID) {
  getUser(id: $getUserId) {
    token
    error {
      message
      code
    }
    user {
      _id
      userName
      password
      status
      role
      availableCredit
      creditLimit
      creditGivenToAgent
      creditDistributedByAgent
      creditGivenToUser
      transferStatus
      bettingStatus
      loginStep
      createdAt
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      getUserId: // value for 'getUserId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($input: UsersInput) {
  getUsers(input: $input) {
    user {
      _id
      userName
      password
      status
      role
      availableCredit
      creditLimit
      creditGivenToAgent
      creditDistributedByAgent
      creditGivenToUser
      transferStatus
      bettingStatus
      loginStep
      createdAt
    }
    error {
      message
      code
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user {
      _id
      availableCredit
      bettingStatus
      createdAt
      creditLimit
      loginStep
      password
      role
      status
      transferStatus
      userName
      creditGivenToAgent
      creditGivenToUser
      creditDistributedByAgent
    }
    error {
      message
      code
    }
    token
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;