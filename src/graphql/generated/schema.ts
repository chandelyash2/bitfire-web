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
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type AdminAuthInput = {
  creditLimit: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type AdminAuthPayload = {
  __typename?: 'AdminAuthPayload';
  admin?: Maybe<Admin>;
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type AdminListInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  authAdmin?: Maybe<AdminAuthPayload>;
  authLogin?: Maybe<AuthPayload>;
  authSuperAdmin?: Maybe<SuperAdminPayload>;
  changePassword?: Maybe<UserPayload>;
  changeSuperAdminPassword?: Maybe<SuperAdminPayload>;
  deleteAdmin?: Maybe<AdminPayload>;
  deleteUser?: Maybe<UserPayload>;
  registerAdmin?: Maybe<AdminAuthPayload>;
  registerSuperAdmin?: Maybe<SuperAdminPayload>;
  registerUser?: Maybe<AuthPayload>;
  updateUser?: Maybe<UserPayload>;
};


export type MutationAuthAdminArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationAuthLoginArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationAuthSuperAdminArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangeSuperAdminPasswordArgs = {
  input?: InputMaybe<ChangePasswordInput>;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterAdminArgs = {
  input?: InputMaybe<AdminAuthInput>;
};


export type MutationRegisterSuperAdminArgs = {
  input?: InputMaybe<SuperAdminSignupInput>;
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAdmins?: Maybe<AdminListPayload>;
  getUsers?: Maybe<UsersPayload>;
  me: UserPayload;
  meSuperAdmin?: Maybe<SuperAdminPayload>;
};


export type QueryGetAdminsArgs = {
  input?: InputMaybe<AdminListInput>;
};


export type QueryGetUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

export type SignUpInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type SuperAdmin = {
  __typename?: 'SuperAdmin';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  creditDistributedByAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToAgent?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type SuperAdminPayload = {
  __typename?: 'SuperAdminPayload';
  error?: Maybe<ErrorType>;
  superAdmin?: Maybe<SuperAdmin>;
  token?: Maybe<Scalars['String']['output']>;
};

export type SuperAdminSignupInput = {
  creditLimit: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type UpdateUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type UsersInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  error?: Maybe<ErrorType>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type AuthSuperAdminMutationVariables = Exact<{
  input?: InputMaybe<AuthInput>;
}>;


export type AuthSuperAdminMutation = { __typename?: 'Mutation', authSuperAdmin?: { __typename?: 'SuperAdminPayload', token?: string | null, superAdmin?: { __typename?: 'SuperAdmin', _id: string, name: string, userName: string, password?: string | null, role?: string | null, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null, creditGivenToAgent?: number | null, creditDistributedByAgent?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'UserPayload', user?: { __typename?: 'User', userName: string, status?: boolean | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type DeleteAdminMutationVariables = Exact<{
  deleteAdminId: Scalars['ID']['input'];
}>;


export type DeleteAdminMutation = { __typename?: 'Mutation', deleteAdmin?: { __typename?: 'AdminPayload', admin?: { __typename?: 'Admin', _id: string, name: string, userName: string } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type RegisterAdminMutationVariables = Exact<{
  input?: InputMaybe<AdminAuthInput>;
}>;


export type RegisterAdminMutation = { __typename?: 'Mutation', registerAdmin?: { __typename?: 'AdminAuthPayload', token?: string | null, admin?: { __typename?: 'Admin', _id: string, parentId?: string | null, name: string, userName: string } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type GetAdminsQueryVariables = Exact<{
  input?: InputMaybe<AdminListInput>;
}>;


export type GetAdminsQuery = { __typename?: 'Query', getAdmins?: { __typename?: 'AdminListPayload', admin?: Array<{ __typename?: 'Admin', _id: string, parentId?: string | null, name: string, userName: string, phone?: string | null, password?: string | null, role?: string | null, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null } | null> | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type MeSuperAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeSuperAdminQuery = { __typename?: 'Query', meSuperAdmin?: { __typename?: 'SuperAdminPayload', superAdmin?: { __typename?: 'SuperAdmin', _id: string, name: string, userName: string, password?: string | null, role?: string | null, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null, creditGivenToAgent?: number | null, creditDistributedByAgent?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };


export const AuthSuperAdminDocument = gql`
    mutation AuthSuperAdmin($input: AuthInput) {
  authSuperAdmin(input: $input) {
    token
    superAdmin {
      _id
      name
      userName
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
export type AuthSuperAdminMutationFn = Apollo.MutationFunction<AuthSuperAdminMutation, AuthSuperAdminMutationVariables>;

/**
 * __useAuthSuperAdminMutation__
 *
 * To run a mutation, you first call `useAuthSuperAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSuperAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSuperAdminMutation, { data, loading, error }] = useAuthSuperAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthSuperAdminMutation(baseOptions?: Apollo.MutationHookOptions<AuthSuperAdminMutation, AuthSuperAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthSuperAdminMutation, AuthSuperAdminMutationVariables>(AuthSuperAdminDocument, options);
      }
export type AuthSuperAdminMutationHookResult = ReturnType<typeof useAuthSuperAdminMutation>;
export type AuthSuperAdminMutationResult = Apollo.MutationResult<AuthSuperAdminMutation>;
export type AuthSuperAdminMutationOptions = Apollo.BaseMutationOptions<AuthSuperAdminMutation, AuthSuperAdminMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    user {
      userName
      status
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
export const DeleteAdminDocument = gql`
    mutation DeleteAdmin($deleteAdminId: ID!) {
  deleteAdmin(id: $deleteAdminId) {
    admin {
      _id
      name
      userName
    }
    error {
      message
      code
    }
  }
}
    `;
export type DeleteAdminMutationFn = Apollo.MutationFunction<DeleteAdminMutation, DeleteAdminMutationVariables>;

/**
 * __useDeleteAdminMutation__
 *
 * To run a mutation, you first call `useDeleteAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdminMutation, { data, loading, error }] = useDeleteAdminMutation({
 *   variables: {
 *      deleteAdminId: // value for 'deleteAdminId'
 *   },
 * });
 */
export function useDeleteAdminMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdminMutation, DeleteAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdminMutation, DeleteAdminMutationVariables>(DeleteAdminDocument, options);
      }
export type DeleteAdminMutationHookResult = ReturnType<typeof useDeleteAdminMutation>;
export type DeleteAdminMutationResult = Apollo.MutationResult<DeleteAdminMutation>;
export type DeleteAdminMutationOptions = Apollo.BaseMutationOptions<DeleteAdminMutation, DeleteAdminMutationVariables>;
export const RegisterAdminDocument = gql`
    mutation RegisterAdmin($input: AdminAuthInput) {
  registerAdmin(input: $input) {
    admin {
      _id
      parentId
      name
      userName
    }
    token
    error {
      message
      code
    }
  }
}
    `;
export type RegisterAdminMutationFn = Apollo.MutationFunction<RegisterAdminMutation, RegisterAdminMutationVariables>;

/**
 * __useRegisterAdminMutation__
 *
 * To run a mutation, you first call `useRegisterAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAdminMutation, { data, loading, error }] = useRegisterAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterAdminMutation(baseOptions?: Apollo.MutationHookOptions<RegisterAdminMutation, RegisterAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterAdminMutation, RegisterAdminMutationVariables>(RegisterAdminDocument, options);
      }
export type RegisterAdminMutationHookResult = ReturnType<typeof useRegisterAdminMutation>;
export type RegisterAdminMutationResult = Apollo.MutationResult<RegisterAdminMutation>;
export type RegisterAdminMutationOptions = Apollo.BaseMutationOptions<RegisterAdminMutation, RegisterAdminMutationVariables>;
export const GetAdminsDocument = gql`
    query GetAdmins($input: AdminListInput) {
  getAdmins(input: $input) {
    admin {
      _id
      parentId
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
export const MeSuperAdminDocument = gql`
    query MeSuperAdmin {
  meSuperAdmin {
    superAdmin {
      _id
      name
      userName
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
 * __useMeSuperAdminQuery__
 *
 * To run a query within a React component, call `useMeSuperAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeSuperAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeSuperAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeSuperAdminQuery(baseOptions?: Apollo.QueryHookOptions<MeSuperAdminQuery, MeSuperAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeSuperAdminQuery, MeSuperAdminQueryVariables>(MeSuperAdminDocument, options);
      }
export function useMeSuperAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeSuperAdminQuery, MeSuperAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeSuperAdminQuery, MeSuperAdminQueryVariables>(MeSuperAdminDocument, options);
        }
export type MeSuperAdminQueryHookResult = ReturnType<typeof useMeSuperAdminQuery>;
export type MeSuperAdminLazyQueryHookResult = ReturnType<typeof useMeSuperAdminLazyQuery>;
export type MeSuperAdminQueryResult = Apollo.QueryResult<MeSuperAdminQuery, MeSuperAdminQueryVariables>;