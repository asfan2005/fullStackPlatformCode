const dataReactQueryMukammal = [
    {
        id: 1,
        title: "Basic Query Example",
        code: `
import { useQuery } from 'react-query';

function TodoList() {
  const { data, isLoading, error } = useQuery('todos', async () => {
    const response = await fetch('https://api.example.com/todos');
    return response.json();
  });

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error.message;

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}`,
        description: "React Query bilan asosiy ma'lumotlarni olish",
        result: `{
    "feature": "Basic Query",
    "concepts": [
        "useQuery Hook",
        "Loading State",
        "Error Handling",
        "Data Fetching"
    ]
}`
    },
    {
        id: 2,
        title: "Mutation Example",
        code: `
import { useMutation, useQueryClient } from 'react-query';

function AddTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    newTodo => {
      return fetch('https://api.example.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo)
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      }
    }
  );

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      mutation.mutate({ title: 'New Todo' });
    }}>
      <button type="submit">Add Todo</button>
    </form>
  );
}`,
        description: "React Query bilan ma'lumotlarni o'zgartirish (mutation)",
        result: `{
    "feature": "Mutations",
    "concepts": [
        "useMutation Hook",
        "Query Invalidation",
        "Optimistic Updates",
        "Server State Updates"
    ]
}`
    },
    {
        id: 3,
        title: "Infinite Query",
        code: `
import { useInfiniteQuery } from 'react-query';

function InfiniteList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    'infinite-todos',
    async ({ pageParam = 0 }) => {
      const response = await fetch(
        \`https://api.example.com/todos?page=\${pageParam}\`
      );
      return response.json();
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage
    }
  );

  return (
    <div>
      {data.pages.map((group, i) => (
        <div key={i}>
          {group.items.map(item => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </div>
  );
}`,
        description: "Cheksiz skroll uchun React Query",
        result: `{
    "feature": "Infinite Queries",
    "concepts": [
        "Pagination",
        "Infinite Scroll",
        "Dynamic Loading",
        "Page Management"
    ]
}`
    },
    {
        id: 4,
        title: "Parallel Queries",
        code: `
import { useQueries } from 'react-query';

function ParallelQueries({ userIds }) {
  const userQueries = useQueries(
    userIds.map(id => {
      return {
        queryKey: ['user', id],
        queryFn: async () => {
          const response = await fetch(
            \`https://api.example.com/users/\${id}\`
          );
          return response.json();
        }
      };
    })
  );

  return (
    <div>
      {userQueries.map(({ data, isLoading }, i) => (
        <div key={i}>
          {isLoading ? 'Loading...' : data.name}
        </div>
      ))}
    </div>
  );
}`,
        description: "Parallel queries bilan bir vaqtda ko'p so'rovlar yuborish",
        result: `{
    "feature": "Parallel Queries",
    "concepts": [
        "Multiple Queries",
        "Concurrent Fetching",
        "Data Dependencies",
        "Performance Optimization"
    ]
}`
    },
    {
        id: 5,
        title: "Query with Polling",
        code: `
function PollingComponent() {
  const { data, isLoading } = useQuery(
    'polling-data',
    async () => {
      const response = await fetch('https://api.example.com/live-data');
      return response.json();
    },
    {
      refetchInterval: 1000, // Poll every second
      refetchIntervalInBackground: true
    }
  );

  if (isLoading) return 'Loading...';

  return <div>Live Data: {data.value}</div>;
}`,
        description: "Real-time ma'lumotlar uchun polling",
        result: `{
    "feature": "Polling",
    "concepts": [
        "Auto Refetching",
        "Real-time Updates",
        "Background Updates",
        "Interval Management"
    ]
}`
    },
    {
        id: 6,
        title: "Dependent Queries",
        code: `
function DependentQueries() {
  const { data: user } = useQuery(
    'user',
    async () => {
      const response = await fetch('https://api.example.com/user');
      return response.json();
    }
  );

  const { data: projects } = useQuery(
    ['projects', user?.id],
    async () => {
      const response = await fetch(
        \`https://api.example.com/projects/\${user.id}\`
      );
      return response.json();
    },
    {
      enabled: !!user?.id
    }
  );

  return (
    <div>
      <h2>User: {user?.name}</h2>
      <h3>Projects:</h3>
      {projects?.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}`,
        description: "Bog'liq so'rovlarni boshqarish",
        result: `{
    "feature": "Dependent Queries",
    "concepts": [
        "Query Dependencies",
        "Conditional Fetching",
        "Data Relationships",
        "Query Enabling"
    ]
}`
    },
    {
        id: 7,
        title: "Query with Prefetching",
        code: `
import { useQueryClient } from 'react-query';

function PrefetchingExample() {
  const queryClient = useQueryClient();

  const prefetchTodo = async (id) => {
    await queryClient.prefetchQuery(
      ['todo', id],
      async () => {
        const response = await fetch(
          \`https://api.example.com/todos/\${id}\`
        );
        return response.json();
      }
    );
  };

  return (
    <div>
      <button
        onMouseEnter={() => prefetchTodo(1)}
      >
        Hover to Prefetch Todo #1
      </button>
    </div>
  );
}`,
        description: "Ma'lumotlarni oldindan yuklash",
        result: `{
    "feature": "Prefetching",
    "concepts": [
        "Cache Management",
        "Performance Optimization",
        "User Experience",
        "Data Preloading"
    ]
}`
    },
    {
        id: 8,
        title: "Optimistic Updates",
        code: `
function OptimisticTodoList() {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery('todos', fetchTodos);

  const mutation = useMutation(
    updateTodo => {
      return fetch(\`https://api.example.com/todos/\${updateTodo.id}\`, {
        method: 'PUT',
        body: JSON.stringify(updateTodo)
      });
    },
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries('todos');
        const previousTodos = queryClient.getQueryData('todos');
        queryClient.setQueryData('todos', old => {
          return old.map(todo => 
            todo.id === newTodo.id ? newTodo : todo
          );
        });
        return { previousTodos };
      },
      onError: (err, newTodo, context) => {
        queryClient.setQueryData('todos', context.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      }
    }
  );
}`,
        description: "Optimistik yangilashlarni qo'llash",
        result: `{
    "feature": "Optimistic Updates",
    "concepts": [
        "Instant Updates",
        "Rollback Handling",
        "Error Recovery",
        "User Experience"
    ]
}`
    },
    {
        id: 9,
        title: "Query Suspense",
        code: `
import { Suspense } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

function TodoList() {
  const { data } = useQuery('todos', fetchTodos);
  
  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="Loading...">
        <TodoList />
      </Suspense>
    </QueryClientProvider>
  );
}`,
        description: "React Suspense bilan React Query integratsiyasi",
        result: `{
    "feature": "Query Suspense",
    "concepts": [
        "Suspense Integration",
        "Loading States",
        "Component Boundaries",
        "Error Handling"
    ]
}`
    },
    {
        id: 10,
        title: "Query Retries",
        code: `
function RetryExample() {
  const { data, isError, error } = useQuery(
    'retryData',
    async () => {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json();
    },
    {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      onError: error => {
        console.log('Error occurred:', error);
      }
    }
  );

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{data?.message}</div>;
}`,
        description: "Xatoliklar yuz berganda qayta urinishlarni boshqarish",
        result: `{
    "feature": "Query Retries",
    "concepts": [
        "Error Handling",
        "Retry Logic",
        "Network Resilience",
        "Exponential Backoff"
    ]
}`
    }
];

export default dataReactQueryMukammal;