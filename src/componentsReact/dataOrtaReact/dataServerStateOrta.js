const dataServerStateOrta = [
    {
        id: 1,
        title: "React Server State Management",
        description: "React ilovalarida server state boshqaruvi bo'yicha to'liq qo'llanma",
        image: "https://solguruz.com/wp-content/uploads/2023/01/Different-ways-of-State-management-in-React.png",
        mainTopics: {
            introduction: {
                title: "Server State Asoslari",
                points: [
                    "Server State vs Client State",
                    "React Query",
                    "SWR (Stale While Revalidate)",
                    "Cache Management",
                    "Real-time Updates",
                    "Optimistic Updates",
                    "Error Handling",
                    "Loading States"
                ]
            },
            codeExamples: {
                title: "Server State Namunalari",
                components: [
                    {
                        name: "1. React Query Basic",
                        description: "React Query asosiy ishlatilishi",
                        code: `
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

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
}`
                    },
                    {
                        name: "2. SWR Example",
                        description: "SWR bilan data fetching",
                        code: `
import useSWR from 'swr';

function UserProfile({ userId }) {
    const { data, error } = useSWR(
        \`/api/user/\${userId}\`,
        async (url) => {
            const response = await fetch(url);
            return response.json();
        }
    );

    if (error) return <div>Failed to load user</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
        </div>
    );
}`
                    },
                    {
                        name: "3. Mutation with React Query",
                        description: "Ma'lumotlarni yangilash",
                        code: `
import { useMutation, useQueryClient } from 'react-query';

function CreateTodo() {
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
}`
                    },
                    {
                        name: "4. Optimistic Updates",
                        description: "Optimistik yangilashlar",
                        code: `
function TodoList() {
    const queryClient = useQueryClient();
    
    const { data: todos } = useQuery('todos', fetchTodos);
    
    const mutation = useMutation(
        updateTodo => {
            return fetch(\`/api/todos/\${updateTodo.id}\`, {
                method: 'PATCH',
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
            }
        }
    );
}`
                    },
                    {
                        name: "5. Real-time Updates",
                        description: "Real-time ma'lumotlarni yangilash",
                        code: `
import { useQuery, useQueryClient } from 'react-query';
import { useEffect } from 'react';
import io from 'socket.io-client';

function RealTimeData() {
    const queryClient = useQueryClient();
    
    useEffect(() => {
        const socket = io('wss://api.example.com');
        
        socket.on('dataUpdate', (newData) => {
            queryClient.setQueryData('realTimeData', old => ({
                ...old,
                ...newData
            }));
        });
        
        return () => socket.disconnect();
    }, []);
    
    const { data } = useQuery('realTimeData', async () => {
        const response = await fetch('https://api.example.com/data');
        return response.json();
    });

    return <div>{JSON.stringify(data)}</div>;
}`
                    },
                    {
                        name: "6. Automatic Background Updates",
                        description: "Avtomatik orqa fon yangilanishlari",
                        code: `
import { useQuery } from 'react-query';

function AutoUpdateComponent() {
    const { data } = useQuery(
        'backgroundData',
        async () => {
            const response = await fetch('https://api.example.com/data');
            return response.json();
        },
        {
            // Har 10 sekundda yangilanadi
            refetchInterval: 10000,
            // Sahifa fokusda bo'lganda yangilanadi
            refetchOnWindowFocus: true,
            // Internet qayta ulanganda yangilanadi
            refetchOnReconnect: true
        }
    );

    return <div>{JSON.stringify(data)}</div>;
}`
                    },
                    {
                        name: "7. Advanced Cache Management",
                        description: "Keshni kengaytirilgan boshqaruvi",
                        code: `
import { useQuery, useQueryClient } from 'react-query';

function CacheManager() {
    const queryClient = useQueryClient();

    const { data } = useQuery(
        'cachedData',
        async () => {
            const response = await fetch('https://api.example.com/data');
            return response.json();
        },
        {
            staleTime: 5 * 60 * 1000, // 5 daqiqa
            cacheTime: 30 * 60 * 1000, // 30 daqiqa
            onSuccess: (data) => {
                // Muvaffaqiyatli so'rovdan keyin keshni yangilash
                queryClient.setQueryData('cachedData', data);
            }
        }
    );

    const clearCache = () => {
        queryClient.removeQueries('cachedData');
    };

    return (
        <div>
            <button onClick={clearCache}>Clear Cache</button>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
}`
                    },
                    {
                        name: "8. Enhanced Error Handling",
                        description: "Kengaytirilgan xatolarni boshqarish",
                        code: `
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

function ErrorHandlingComponent() {
    const { data, error, isError, refetch } = useQuery(
        'errorData',
        async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                if (!response.ok) {
                    throw new Error(\`Status: \${response.status}\`);
                }
                return response.json();
            } catch (error) {
                throw new Error(\`Network error: \${error.message}\`);
            }
        },
        {
            retry: 3,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            onError: (error) => {
                toast.error(\`Error: \${error.message}\`);
            }
        }
    );

    if (isError) {
        return (
            <div>
                <p>Error: {error.message}</p>
                <button onClick={() => refetch()}>Retry</button>
            </div>
        );
    }

    return <div>{JSON.stringify(data)}</div>;
}`
                    },
                    {
                        name: "9. Infinite Queries",
                        description: "Cheksiz so'rovlar",
                        code: `
import { useInfiniteQuery } from 'react-query';

function InfiniteList() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery(
        'infiniteData',
        async ({ pageParam = 1 }) => {
            const response = await fetch(
                \`https://api.example.com/data?page=\${pageParam}&limit=10\`
            );
            return response.json();
        },
        {
            getNextPageParam: (lastPage, pages) => {
                return lastPage.hasMore ? pages.length + 1 : undefined;
            }
        }
    );

    return (
        <div>
            {data?.pages.map((group, i) => (
                <div key={i}>
                    {group.items.map(item => (
                        <div key={item.id}>{item.name}</div>
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
}`
                    },
                    {
                        name: "10. Parallel Queries",
                        description: "Parallel so'rovlar",
                        code: `
import { useQueries } from 'react-query';

function ParallelQueries({ userIds }) {
    const userQueries = useQueries(
        userIds.map(id => ({
            queryKey: ['user', id],
            queryFn: async () => {
                const response = await fetch(\`https://api.example.com/users/\${id}\`);
                return response.json();
            },
            staleTime: 5 * 60 * 1000
        }))
    );

    const isLoading = userQueries.some(query => query.isLoading);
    const isError = userQueries.some(query => query.isError);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading users</div>;

    return (
        <div>
            {userQueries.map(({ data }, index) => (
                <div key={userIds[index]}>
                    <h3>{data.name}</h3>
                    <p>{data.email}</p>
                </div>
            ))}
        </div>
    );
}`
                    }
                ],
                features: [
                    "Automatic Background Updates",
                    "Cache Management",
                    "Error Handling",
                    "Loading States",
                    "Optimistic Updates",
                    "Real-time Sync",
                    "Infinite Queries",
                    "Parallel Queries"
                ],
                bestPractices: {
                    title: "Server State Best Practices",
                    practices: [
                        {
                            name: "Cache Configuration",
                            description: "Cache sozlamalari",
                            example: `
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            cacheTime: 30 * 60 * 1000,
            retry: 3,
            refetchOnWindowFocus: false
        }
    }
});`
                        },
                        {
                            name: "Error Handling",
                            description: "Xatolarni boshqarish",
                            example: `
const { data, error, isError } = useQuery(
    'data',
    fetchData,
    {
        onError: (error) => {
            console.error('Error fetching data:', error);
        },
        retry: false
    }
);`
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Query Documentation",
                        url: "https://react-query.tanstack.com/"
                    },
                    {
                        name: "SWR Documentation",
                        url: "https://swr.vercel.app/"
                    }
                ]
            }
        }
    }
];

export default dataServerStateOrta;