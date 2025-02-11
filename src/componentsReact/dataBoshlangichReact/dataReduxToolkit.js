const dataReduxToolkit = [
    {
        id: 1,
        title: "Redux Toolkit To'liq Qo'llanma",
        level: "O'rta",
        description: "Redux Toolkit - zamonaviy Redux development uchun rasmiy toolset. Redux Toolkit yordamida Redux applicationlarni tez va samarali yaratish mumkin.",
        image: "https://dropinblog.net/34256781/files/featured/learn-redux-toolkit-for-state-management-in-react.png",
        mainTopics: {
            introduction: {
                title: "Redux Toolkit Asoslari",
                points: [
                    "Redux Toolkit nima va nima uchun kerak",
                    "Redux Toolkit'ning afzalliklari va kamchiliklari",
                    "createSlice va configureStore bilan ishlash",
                    "RTK Query va API integratsiyasi",
                    "Redux Toolkit TypeScript qo'llab-quvvatlash",
                    "Middleware va Enhancement'lar",
                    "Performance optimizatsiyasi",
                    "Redux DevTools bilan ishlash",
                    "Testing strategiyalari",
                    "Best practices va patterns",
                    "Migration guides",
                    "Error handling"
                ]
            },
            coreConcepts: {
                title: "Asosiy Tushunchalar",
                concepts: [
                    {
                        name: "CreateSlice",
                        description: "Redux Toolkit'ning eng muhim funksiyasi",
                        example: `
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle',
        error: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncIncrement.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(asyncIncrement.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value += action.payload;
            });
    }
});`
                    },
                    {
                        name: "CreateAsyncThunk",
                        description: "Asinxron operatsiyalarni boshqarish",
                        example: `
// features/users/usersSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://api.example.com/users');
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        entities: [],
        loading: false,
        error: null
    },
    reducers: {
        addUser: (state, action) => {
            state.entities.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.entities = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});`
                    },
                    {
                        name: "Oddiy Counter",
                        description: "Eng sodda Redux Toolkit misoli",
                        example: `
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer`
                    },
                    {
                        name: "Todo List",
                        description: "Oddiy todo list ilovasi",
                        example: `
// todoSlice.js
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})`
                    },
                    {
                        name: "Shopping Cart",
                        description: "Oddiy savat ilovasi",
                        example: `
// cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      state.total += action.payload.price
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.total -= state.items[index].price
        state.items.splice(index, 1)
      }
    }
  }
})`
                    }
                ]
            },
            advanced_features: {
                title: "Ilg'or Xususiyatlar",
                features: [
                    {
                        name: "Redux Middleware",
                        description: "Custom middleware yaratish",
                        example: `
// middleware/loggingMiddleware.js
const loggingMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    let result = next(action);
    console.log('Next State:', store.getState());
    return result;
};

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import loggingMiddleware from './middleware/loggingMiddleware';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggingMiddleware)
});`
                    },
                    {
                        name: "Selectors",
                        description: "Memoized selektorlar yaratish",
                        example: `
// features/shop/selectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectShop = state => state.shop;

export const selectItems = createSelector(
    [selectShop],
    shop => shop.items
);

export const selectTotalPrice = createSelector(
    [selectItems],
    items => items.reduce((total, item) => total + item.price, 0)
);

export const selectDiscountedItems = createSelector(
    [selectItems],
    items => items.filter(item => item.discount > 0)
);`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    "State normalization",
                    "Immutable update patterns",
                    "Error handling strategies",
                    "Performance optimization",
                    "TypeScript integration",
                    "Testing approaches",
                    "Code organization",
                    "Middleware usage",
                    "Side effects management",
                    "State persistence",
                    "Code splitting",
                    "DevTools configuration"
                ],
                examples: [
                    {
                        name: "State Normalization",
                        code: `
// features/entities/normalizedSlice.js
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const usersAdapter = createEntityAdapter()

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    userAdded: usersAdapter.addOne,
    usersReceived: usersAdapter.setAll
  }
})`
                    },
                    {
                        name: "Immutable Update Patterns",
                        code: `
// features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoUpdated(state, action) {
      const { id, title, completed } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if (existingTodo) {
        existingTodo.title = title
        existingTodo.completed = completed
      }
    }
  }
})`
                    },
                    {
                        name: "Error Handling Strategies",
                        code: `
// features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/posts')
      if (!response.ok) throw new Error('Server error!')
      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)`
                    },
                    {
                        name: "Performance Optimization",
                        code: `
// features/shop/selectors.js
import { createSelector } from '@reduxjs/toolkit'

const selectItems = state => state.shop.items
const selectFilters = state => state.shop.filters

export const selectFilteredItems = createSelector(
  [selectItems, selectFilters],
  (items, filters) => {
    return items.filter(item => 
      item.price >= filters.minPrice && 
      item.price <= filters.maxPrice
    )
  }
)`
                    },
                    {
                        name: "TypeScript Integration",
                        code: `
// features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})`
                    },
                    {
                        name: "Testing Approaches",
                        code: `
// features/counter/counterSlice.test.js
import counterReducer, { increment, decrement } from './counterSlice'

describe('counter reducer', () => {
  const initialState = { value: 0 }

  test('should handle increment', () => {
    expect(
      counterReducer(initialState, increment())
    ).toEqual({ value: 1 })
  })

  test('should handle decrement', () => {
    expect(
      counterReducer(initialState, decrement())
    ).toEqual({ value: -1 })
  })
})`
                    },
                    {
                        name: "Code Organization",
                        code: `
// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})`
                    },
                    {
                        name: "Middleware Usage",
                        code: `
// middleware/logger.js
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import loggerMiddleware from './middleware/logger'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
})`
                    },
                    {
                        name: "Side Effects Management",
                        code: `
// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    // Side effect: save token
    localStorage.setItem('token', data.token)
    return data
  }
)`
                    },
                    {
                        name: "State Persistence",
                        code: `
// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})`
                    },
                    {
                        name: "Code Splitting",
                        code: `
// features/dynamicFeature.js
import { createSlice } from '@reduxjs/toolkit'

const dynamicSlice = createSlice({
  name: 'dynamicFeature',
  initialState: {},
  reducers: {}
})

// store/index.js
export const injectReducer = (store, reducerName, reducer) => {
  store.reducerManager.add(reducerName, reducer)
  return store
}`
                    },
                    {
                        name: "DevTools Configuration",
                        code: `
// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'MyApp',
    trace: true,
    traceLimit: 25,
    actionsDenylist: ['FORM_UPDATE'],
    actionsAllowlist: ['AUTH_', 'API_'],
    maxAge: 50
  }
})`
                    }
                ]
            }
        }
    }
];

export default dataReduxToolkit;