import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders(headers) {
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTodos: builder.query({
        query(userId = 2) {
          return `/users/${userId}/todos`;
        },
      }),
      fetchUsers: builder.query({
        query() {
          return "/users";
        },
      }),
    };
  },
});

export const { useFetchTodosQuery, useFetchUsersQuery } = apiSlice;
