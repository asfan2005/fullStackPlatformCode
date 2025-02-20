const dataReduxToolkitMukammal = [
    {
        id: 1,
        title: "Redux Toolkit Store Setup",
        code: `
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './services/posts';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);`,
        description: "Redux Toolkit store va middleware sozlamalari",
        result: `{
    "feature": "Store Configuration",
    "concepts": [
        "Store Setup",
        "Middleware",
        "Reducer Configuration",
        "RTK Query Integration"
    ]
}`
    },
    {
        id: 2,
        title: "RTK Query API Slice",
        code: `
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.example.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', \`Bearer \${token}\`);
      }
      return headers;
    },
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Post'],
    }),
    getPostById: builder.query({
      query: (id) => \`posts/\${id}\`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: \`posts/\${id}\`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useUpdatePostMutation,
} = postsApi;`,
        description: "RTK Query API slice va endpoints yaratish",
        result: `{
    "feature": "API Integration",
    "concepts": [
        "API Slice",
        "Endpoints",
        "Cache Invalidation",
        "Auto-Generated Hooks"
    ]
}`
    },
    {
        id: 3,
        title: "Redux Slice with Thunks",
        code: `
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().users;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    return response.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: {},
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    userUpdated(state, action) {
      const { id, ...changes } = action.payload;
      state.entities[id] = { ...state.entities[id], ...changes };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        if (
          state.loading === 'pending' &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.loading = 'idle';
          state.entities[action.payload.id] = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        if (
          state.loading === 'pending' &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});`,
        description: "Redux Toolkit slice va async thunklar",
        result: `{
    "feature": "State Management",
    "concepts": [
        "Async Thunks",
        "State Slices",
        "Loading States",
        "Error Handling"
    ]
}`
    },
    {
        id: 4,
        title: "Advanced RTK Query Transformations",
        code: `
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => 'items',
      transformResponse: (response) => {
        return response.map(item => ({
          ...item,
          formattedDate: new Date(item.date).toLocaleDateString()
        }));
      },
      transformErrorResponse: (response) => {
        return {
          status: response.status,
          message: response.data?.message || 'Error occurred'
        };
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
  }),
});`,
        description: "RTK Query ma'lumotlarni qayta ishlash",
        result: `{
    "feature": "Data Transformation",
    "concepts": [
        "Response Transform",
        "Error Handling",
        "Cache Management",
        "Query Arguments"
    ]
}`
    },
    {
        id: 5,
        title: "Redux Toolkit Middleware",
        code: `
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { logout, setCredentials } from './authSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    authApi.endpoints.login.matchFulfilled,
    authApi.endpoints.refresh.matchFulfilled
  ),
  effect: async (action, listenerApi) => {
    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token);
      listenerApi.dispatch(setCredentials(action.payload));
    }
  },
});

listenerMiddleware.startListening({
  actionCreator: logout,
  effect: async (action, listenerApi) => {
    localStorage.removeItem('token');
    listenerApi.dispatch(authApi.util.resetApiState());
  },
});`,
        description: "Redux Toolkit middleware va listener",
        result: `{
    "feature": "Middleware",
    "concepts": [
        "Listener Middleware",
        "Action Matching",
        "Side Effects",
        "State Management"
    ]
}`
    },
    {
        id: 6,
        title: "Redux Toolkit CRUD Operations",
        code: `
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for CRUD operations
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.example.com/products');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/add',
  async (product, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.example.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    sortProducts: (state) => {
      state.items.sort((a, b) => a.price - b.price);
    },
    filterProducts: (state, action) => {
      state.items = state.items.filter(item => 
        item.category === action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});`,
        description: "Redux Toolkit CRUD operatsiyalari va state boshqaruvi",
        result: `{
    "feature": "CRUD Operations",
    "concepts": [
        "Async Operations",
        "State Management",
        "Error Handling",
        "Data Sorting/Filtering"
    ]
}`
    },
    {
        id: 7,
        title: "Redux Toolkit with TypeScript",
        code: `
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
  filter: 'all' | 'completed' | 'active';
  loading: boolean;
}

const initialState: TodoState = {
  items: [],
  filter: 'all',
  loading: false
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.items.push(action.payload);
      },
      prepare: (text: string) => ({
        payload: {
          id: Date.now(),
          text,
          completed: false
        }
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<TodoState['filter']>) => {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;`,
        description: "Redux Toolkit TypeScript bilan ishlatish",
        result: `{
    "feature": "TypeScript Integration",
    "concepts": [
        "Type Safety",
        "Interfaces",
        "Action Types",
        "State Types"
    ]
}`
    }
];

export default dataReduxToolkitMukammal;