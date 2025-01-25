const dataApiIntegratsiyasi = [
    {
        id: 1,
        title: "REST API Asoslari",
        description: "REST API bilan ishlashning asosiy usullari va printsiplari",
        examples: [
            {
                name: "Fetch API bilan ishlash",
                code: `// Ma'lumotlarni olish (GET)
async function getMahsulotlar() {
    try {
        const response = await fetch('https://api.example.com/mahsulotlar', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        
        if (!response.ok) {
            throw new Error('Tarmoq xatosi: ' + response.status);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Xatolik:', error);
        throw error;
    }
}

// Ma'lumotlarni yuborish (POST)
async function yangiMahsulotQoshish(mahsulot) {
    try {
        const response = await fetch('https://api.example.com/mahsulotlar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(mahsulot)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Xatolik:', error);
        throw error;
    }
}`,
                explanation: "Fetch API yordamida REST so'rovlarini yuborish",
                result: "Backend bilan ma'lumot almashish"
            }
        ]
    },
    {
        id: 2,
        title: "Axios bilan ishlash",
        description: "Axios kutubxonasi yordamida API so'rovlarini yuborish",
        examples: [
            {
                name: "Axios instance va interceptors",
                code: `// API konfiguratsiyasi
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = \`Bearer \${token}\`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    response => response.data,
    error => {
        if (error.response.status === 401) {
            // Token eskirgan - qayta login qilish
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// API methodlari
export const userAPI = {
    async getProfile() {
        return await api.get('/profile');
    },
    
    async updateProfile(data) {
        return await api.put('/profile', data);
    },
    
    async login(credentials) {
        const response = await api.post('/login', credentials);
        localStorage.setItem('token', response.token);
        return response;
    }
};`,
                explanation: "Axios bilan API so'rovlarini sozlash va yuborish",
                result: "Konfiguratsiya qilingan API klienti"
            }
        ]
    },
    {
        id: 3,
        title: "GraphQL Asoslari",
        description: "GraphQL so'rovlari va Apollo Client bilan ishlash",
        examples: [
            {
                name: "Apollo Client sozlash",
                code: `// Apollo Client sozlash
import { 
    ApolloClient, 
    InMemoryCache, 
    createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.example.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? \`Bearer \${token}\` : "",
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

// GraphQL so'rovlar
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_USERS = gql\`
    query GetUsers {
        users {
            id
            name
            email
            posts {
                id
                title
            }
        }
    }
\`;

const ADD_POST = gql\`
    mutation AddPost($title: String!, $content: String!) {
        createPost(title: $title, content: $content) {
            id
            title
            content
        }
    }
\`;

// Komponentda ishlatish
function UserList() {
    const { loading, error, data } = useQuery(GET_USERS);
    const [addPost] = useMutation(ADD_POST);

    if (loading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xatolik: {error.message}</p>;

    return (
        <div>
            {data.users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <button onClick={() => addPost({
                        variables: {
                            title: "Yangi post",
                            content: "Post matni"
                        }
                    })}>
                        Post qo'shish
                    </button>
                </div>
            ))}
        </div>
    );
}`,
                explanation: "Apollo Client va GraphQL so'rovlarini sozlash",
                result: "GraphQL orqali ma'lumotlarni boshqarish"
            }
        ]
    },
    {
        id: 4,
        title: "WebSocket va Real-time Updates",
        description: "Real vaqt rejimida ma'lumotlar almashish",
        examples: [
            {
                name: "WebSocket klienti",
                code: `// WebSocket class
class ChatWebSocket {
    constructor(url) {
        this.url = url;
        this.ws = null;
        this.listeners = new Map();
    }

    connect() {
        this.ws = new WebSocket(this.url);

        this.ws.onopen = () => {
            console.log('WebSocket ulanish o\\'rnatildi');
            this.emit('connect', null);
        };

        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.emit('message', message);
        };

        this.ws.onclose = () => {
            console.log('WebSocket ulanish uzildi');
            this.emit('disconnect', null);
            // Qayta ulanishni sinab ko'rish
            setTimeout(() => this.connect(), 5000);
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket xatosi:', error);
            this.emit('error', error);
        };
    }

    send(message) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        }
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        const callbacks = this.listeners.get(event) || [];
        callbacks.forEach(callback => callback(data));
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// Ishlatish
const chat = new ChatWebSocket('wss://api.example.com/chat');

chat.on('connect', () => {
    console.log('Chat ga ulandi');
});

chat.on('message', (message) => {
    console.log('Yangi xabar:', message);
});

chat.on('disconnect', () => {
    console.log('Chat dan uzildi');
});

// Xabar yuborish
chat.send({
    type: 'message',
    content: 'Salom, dunyo!',
    userId: 123
});`,
                explanation: "WebSocket orqali real vaqtda ma'lumot almashish",
                result: "Real vaqtli chat tizimi"
            }
        ]
    }
];

export default dataApiIntegratsiyasi;