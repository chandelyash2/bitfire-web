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
  creditGivenToUser?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AdminRole>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type AdminAuthInput = {
  creditLimit: Scalars['Int']['input'];
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

export type AdminPayload = {
  __typename?: 'AdminPayload';
  admin?: Maybe<Admin>;
  error?: Maybe<ErrorType>;
};

export enum AdminRole {
  Admin = 'admin',
  Superadmin = 'superadmin'
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
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminChangePassword?: Maybe<AdminPayload>;
  authAdmin?: Maybe<AdminAuthPayload>;
  authLogin?: Maybe<AuthPayload>;
  changePassword?: Maybe<AuthPayload>;
  deleteAdmin?: Maybe<AdminPayload>;
  deleteUser?: Maybe<AuthPayload>;
  registerAdmin?: Maybe<AdminAuthPayload>;
  registerUser?: Maybe<AuthPayload>;
  updateUser?: Maybe<AuthPayload>;
};


export type MutationAdminChangePasswordArgs = {
  input?: InputMaybe<ChangePasswordInput>;
};


export type MutationAuthAdminArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationAuthLoginArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
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


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAdmins?: Maybe<Array<Maybe<Admin>>>;
  getUsers?: Maybe<UsersPayload>;
  me?: Maybe<AdminPayload>;
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
  availableCredit?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
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

export type AuthAdminMutationVariables = Exact<{
  input?: InputMaybe<AuthInput>;
}>;


export type AuthAdminMutation = { __typename?: 'Mutation', authAdmin?: { __typename?: 'AdminAuthPayload', token?: string | null, admin?: { __typename?: 'Admin', _id: string, parentId?: string | null, name: string, userName: string, phone?: string | null, password?: string | null, role?: AdminRole | null, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type AdminChangePasswordMutationVariables = Exact<{
  input?: InputMaybe<ChangePasswordInput>;
}>;


export type AdminChangePasswordMutation = { __typename?: 'Mutation', adminChangePassword?: { __typename?: 'AdminPayload', admin?: { __typename?: 'Admin', _id: string, name: string } | null, error?: { __typename?: 'ErrorType', code: string, message: string } | null } | null };

export type DeleteAdminMutationVariables = Exact<{
  deleteAdminId: Scalars['ID']['input'];
}>;


export type DeleteAdminMutation = { __typename?: 'Mutation', deleteAdmin?: { __typename?: 'AdminPayload', admin?: { __typename?: 'Admin', _id: string, parentId?: string | null, name: string, userName: string } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', phone?: string | null, userName: string, _id: string } | null, error?: { __typename?: 'ErrorType', code: string, message: string } | null } | null };

export type RegisterAdminMutationVariables = Exact<{
  input?: InputMaybe<AdminAuthInput>;
}>;


export type RegisterAdminMutation = { __typename?: 'Mutation', registerAdmin?: { __typename?: 'AdminAuthPayload', error?: { __typename?: 'ErrorType', code: string, message: string } | null, admin?: { __typename?: 'Admin', _id: string, name: string, role?: AdminRole | null } | null } | null };

export type RegisterUserMutationVariables = Exact<{
  input?: InputMaybe<SignUpInput>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, status?: boolean | null, role?: string | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type GetAdminsQueryVariables = Exact<{
  input?: InputMaybe<GetAdminInput>;
}>;


export type GetAdminsQuery = { __typename?: 'Query', getAdmins?: Array<{ __typename?: 'Admin', _id: string, parentId?: string | null, name: string, userName: string, phone?: string | null, password?: string | null, role?: AdminRole | null, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null } | null> | null };

export type GetUsersQueryVariables = Exact<{
  input?: InputMaybe<UsersInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: { __typename?: 'UsersPayload', user?: Array<{ __typename?: 'User', _id: string, name: string, userName: string, phone?: string | null, password?: string | null, status?: boolean | null, role?: string | null, availableCredit?: number | null, creditLimit?: number | null } | null> | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'AdminPayload', admin?: { __typename?: 'Admin', _id: string, parentId?: string | null, name: string, userName: string, phone?: string | null, password?: string | null, role?: AdminRole | null, status?: boolean | null, creditLimit?: number | null, availableCredit?: number | null, creditGivenToAgent?: number | null, creditDistributedByAgent?: number | null, creditGivenToUser?: number | null } | null, error?: { __typename?: 'ErrorType', message: string, code: string } | null } | null };


export const AuthAdminDocument = gql`
    mutation AuthAdmin($input: AuthInput) {
  authAdmin(input: $input) {
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
    token
    error {
      message
      code
    }
  }
}
    `;
export type AuthAdminMutationFn = Apollo.MutationFunction<AuthAdminMutation, AuthAdminMutationVariables>;

/**
 * __useAuthAdminMutation__
 *
 * To run a mutation, you first call `useAuthAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authAdminMutation, { data, loading, error }] = useAuthAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthAdminMutation(baseOptions?: Apollo.MutationHookOptions<AuthAdminMutation, AuthAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthAdminMutation, AuthAdminMutationVariables>(AuthAdminDocument, options);
      }
export type AuthAdminMutationHookResult = ReturnType<typeof useAuthAdminMutation>;
export type AuthAdminMutationResult = Apollo.MutationResult<AuthAdminMutation>;
export type AuthAdminMutationOptions = Apollo.BaseMutationOptions<AuthAdminMutation, AuthAdminMutationVariables>;
export const AdminChangePasswordDocument = gql`
    mutation AdminChangePassword($input: ChangePasswordInput) {
  adminChangePassword(input: $input) {
    admin {
      _id
      name
    }
    error {
      code
      message
    }
  }
}
    `;
export type AdminChangePasswordMutationFn = Apollo.MutationFunction<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>;

/**
 * __useAdminChangePasswordMutation__
 *
 * To run a mutation, you first call `useAdminChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminChangePasswordMutation, { data, loading, error }] = useAdminChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>(AdminChangePasswordDocument, options);
      }
export type AdminChangePasswordMutationHookResult = ReturnType<typeof useAdminChangePasswordMutation>;
export type AdminChangePasswordMutationResult = Apollo.MutationResult<AdminChangePasswordMutation>;
export type AdminChangePasswordMutationOptions = Apollo.BaseMutationOptions<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>;
export const DeleteAdminDocument = gql`
    mutation DeleteAdmin($deleteAdminId: ID!) {
  deleteAdmin(id: $deleteAdminId) {
    admin {
      _id
      parentId
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
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    token
    user {
      phone
      userName
      _id
    }
    error {
      code
      message
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
export const RegisterAdminDocument = gql`
    mutation RegisterAdmin($input: AdminAuthInput) {
  registerAdmin(input: $input) {
    error {
      code
      message
    }
    admin {
      _id
      name
      role
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
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: SignUpInput) {
  registerUser(input: $input) {
    token
    user {
      _id
      name
      userName
      phone
      password
      status
      role
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
export const GetAdminsDocument = gql`
    query GetAdmins($input: GetAdminInput) {
  getAdmins(input: $input) {
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
export const GetUsersDocument = gql`
    query GetUsers($input: UsersInput) {
  getUsers(input: $input) {
    user {
      _id
      name
      userName
      phone
      password
      status
      role
      availableCredit
      creditLimit
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
      creditGivenToAgent
      creditDistributedByAgent
      creditGivenToUser
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