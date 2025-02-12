
const dataServerStateOrta = [
    {
        id: 1,
        title: "React Server State Management",
        description: "React ilovalarida server state boshqaruvi bo'yicha to'liq qo'llanma",
        image: "https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg",
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