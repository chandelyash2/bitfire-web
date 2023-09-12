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
};

export type Admin = {
  __typename?: 'Admin';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  creditDistributedByAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToAgent?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role: AdminRole;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type AdminListPayload = {
  __typename?: 'AdminListPayload';
  admin?: Maybe<Array<Maybe<Admin>>>;
  error?: Maybe<ErrorType>;
};

export type AdminPayload = {
  __typename?: 'AdminPayload';
  admin?: Maybe<Admin>;
  error?: Maybe<ErrorType>;
};

export enum AdminRole {
  Admin = 'Admin',
  Superadmin = 'Superadmin'
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
  oldPassword: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type GetAdminInput = {
  filter: AdminRole;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin?: Maybe<AuthPayload>;
  changePassword?: Maybe<UserPayload>;
  deleteUser?: Maybe<UserPayload>;
  registerAdmin?: Maybe<AuthPayload>;
  registerUser?: Maybe<AuthPayload>;
  updateUser?: Maybe<UserPayload>;
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


export type MutationRegisterAdminArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAdminAccount?: Maybe<AdminPayload>;
  getAdmins?: Maybe<AdminListPayload>;
  getUsers?: Maybe<UsersPayload>;
  me: UserPayload;
};


export type QueryGetAdminsArgs = {
  input?: InputMaybe<GetAdminInput>;
};


export type QueryGetUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

export type SignUpInput = {
  creditLimit: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  userName: Scalars['String']['input'];
};

export type UpdateUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export enum UserRole {
  Admin = 'Admin',
  Superadmin = 'Superadmin',
  User = 'User'
}

export type UsersInput = {
  filter: UserRole;
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


export type AuthLoginMutation = { __typename?: 'Mutation', authLogin?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, name: string, userName: string, password?: string | null, role: UserRole } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'UserPayload', user?: { __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: UserRole, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'UserPayload', user?: { __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: UserRole } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type RegisterUserMutationVariables = Exact<{
  input?: InputMaybe<SignUpInput>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: UserRole, status?: boolean | null, availableCredit?: number | null, creditLimit?: number | null } | null, error?: { __typename?: 'ErrorType', code: string, message: string } | null } | null };

export type GetAdminsQueryVariables = Exact<{
  input?: InputMaybe<GetAdminInput>;
}>;


export type GetAdminsQuery = { __typename?: 'Query', getAdmins?: { __typename?: 'AdminListPayload', admin?: Array<{ __typename?: 'Admin', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: AdminRole, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null } | null> | null, error?: { __typename?: 'ErrorType', code: string, message: string } | null } | null };

export type GetAdminAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminAccountQuery = { __typename?: 'Query', getAdminAccount?: { __typename?: 'AdminPayload', admin?: { __typename?: 'Admin', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: AdminRole, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null, creditGivenToAgent?: number | null, creditDistributedByAgent?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type GetUsersQueryVariables = Exact<{
  input?: InputMaybe<UsersInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: { __typename?: 'UsersPayload', user?: Array<{ __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: UserRole } | null> | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserPayload', user?: { __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, role: UserRole, availableCredit?: number | null, creditLimit?: number | null, status?: boolean | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } };


export const AuthLoginDocument = gql`
    mutation AuthLogin($input: AuthInput) {
  authLogin(input: $input) {
    token
    user {
      _id
      name
      userName
      password
      role
    }
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
    user {
      _id
      name
      userName
      phone
      password
      role
      status
      creditLimit
      availableCredit
    }
    error {
      message
      code
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
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    user {
      _id
      name
      userName
      phone
      password
      role
    }
    error {
      message
      code
    }
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: SignUpInput) {
  registerUser(input: $input) {
    user {
      _id
      name
      userName
      phone
      password
      role
      status
      availableCredit
      creditLimit
    }
    token
    error {
      code
      message
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
export const GetAdminsDocument = gql`
    query GetAdmins($input: GetAdminInput) {
  getAdmins(input: $input) {
    admin {
      _id
      name
      userName
      phone
      password
      role
      status
      creditLimit
      availableCredit
    }
    error {
      code
      message
    }
  }
}
    `;

/**
 * __useGetAdminsQuery__
 *
 * To run a query within a React component, call `useGetAdminsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAdminsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminsQuery, GetAdminsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminsQuery, GetAdminsQueryVariables>(GetAdminsDocument, options);
      }
export function useGetAdminsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminsQuery, GetAdminsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminsQuery, GetAdminsQueryVariables>(GetAdminsDocument, options);
        }
export type GetAdminsQueryHookResult = ReturnType<typeof useGetAdminsQuery>;
export type GetAdminsLazyQueryHookResult = ReturnType<typeof useGetAdminsLazyQuery>;
export type GetAdminsQueryResult = Apollo.QueryResult<GetAdminsQuery, GetAdminsQueryVariables>;
export const GetAdminAccountDocument = gql`
    query GetAdminAccount {
  getAdminAccount {
    admin {
      _id
      name
      userName
      phone
      password
      role
      status
      creditLimit
      availableCredit
      creditGivenToAgent
      creditDistributedByAgent
    }
    error {
      message
      code
    }
  }
}
    `;

/**
 * __useGetAdminAccountQuery__
 *
 * To run a query within a React component, call `useGetAdminAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminAccountQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminAccountQuery, GetAdminAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminAccountQuery, GetAdminAccountQueryVariables>(GetAdminAccountDocument, options);
      }
export function useGetAdminAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminAccountQuery, GetAdminAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminAccountQuery, GetAdminAccountQueryVariables>(GetAdminAccountDocument, options);
        }
export type GetAdminAccountQueryHookResult = ReturnType<typeof useGetAdminAccountQuery>;
export type GetAdminAccountLazyQueryHookResult = ReturnType<typeof useGetAdminAccountLazyQuery>;
export type GetAdminAccountQueryResult = Apollo.QueryResult<GetAdminAccountQuery, GetAdminAccountQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($input: UsersInput) {
  getUsers(input: $input) {
    user {
      _id
      name
      userName
      phone
      password
      role
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
      name
      userName
      phone
      password
      role
      availableCredit
      creditLimit
      status
    }
    error {
      message
      code
    }
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