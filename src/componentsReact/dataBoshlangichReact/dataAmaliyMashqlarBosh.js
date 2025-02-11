const dataAmaliyMashqlarBosh = [
    {
        id: 1,
        title: "Todo List Application",
        level: "Boshlang'ich",
        description: "To'liq funksional Todo List ilovasi",
        image: "https://react-todo-example.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "React va JSX asoslari",
                    "Componentlar arxitekturasi",
                    "Props va State boshqaruvi",
                    "Hooks (useState, useEffect)",
                    "Forms va Events",
                    "LocalStorage bilan ishlash",
                    "Context API",
                    "Styled-components"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Todo Component",
                        description: "Asosiy todo komponenti",
                        code: `
import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoContext } from '../context/TodoContext';

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            <div className="todo-container">
                <h1>Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoContext.Provider>
    );
};`
                    }
                ],
                features: [
                    "CRUD operatsiyalari",
                    "LocalStorage integratsiyasi",
                    "Context API orqali state management",
                    "Responsive dizayn",
                    "Form validatsiya"
                ]
            }
        }
    },
    {
        id: 2,
        title: "E-commerce Dashboard",
        level: "Boshlang'ich",
        description: "Redux Toolkit va API integratsiyasi bilan e-commerce dashboard",
        image: "https://react-shop-dashboard.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "Redux Toolkit setup",
                    "API integratsiya",
                    "React Router",
                    "Protected Routes",
                    "Authentication",
                    "Data fetching va caching",
                    "Error handling",
                    "Loading states"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Products Slice",
                        description: "Redux Toolkit products slice",
                        code: `
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://api.example.com/products');
        return response.data;
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
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
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
                state.error = action.error.message;
            });
    }
});

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;`
                    },
                    {
                        name: "Protected Route",
                        description: "Xavfsizlik uchun Protected Route komponenti",
                        code: `
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {
    const auth = useSelector(state => state.auth);
    const location = useLocation();

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};`
                    }
                ],
                features: [
                    "Redux Toolkit state management",
                    "REST API integratsiyasi",
                    "Authentication/Authorization",
                    "CRUD operatsiyalari",
                    "Real-time ma'lumotlar yangilanishi",
                    "Error handling va loading states",
                    "Responsive dizayn"
                ]
            }
        }
    },
    {
        id: 3,
        title: "Weather Application",
        level: "Boshlang'ich",
        description: "OpenWeather API bilan ob-havo ilovasi",
        image: "https://react-weather-app.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "API bilan ishlash",
                    "Custom Hooks",
                    "Environmental Variables",
                    "Async/Await",
                    "Error Handling",
                    "Loading States",
                    "Geolocation API",
                    "Responsive Design"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Weather Hook",
                        description: "Ob-havo ma'lumotlarini olish uchun custom hook",
                        code: `
import { useState, useEffect } from 'react';

export const useWeather = (city) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${process.env.REACT_APP_WEATHER_API_KEY}&units=metric\`
                );
                if (!response.ok) throw new Error('Ob-havo ma\'lumotlarini olishda xatolik');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (city) fetchWeather();
    }, [city]);

    return { data, loading, error };
};`
                    }
                ],
                features: [
                    "Real-time ob-havo ma'lumotlari",
                    "Geolocation qo'llab-quvvatlash",
                    "5 kunlik prognoz",
                    "Responsive dizayn",
                    "Error handling"
                ]
            }
        }
    },
    {
        id: 4,
        title: "Chat Application",
        level: "Boshlang'ich",
        description: "Firebase Real-time Database bilan chat ilovasi",
        image: "https://react-chat-app.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "Firebase setup",
                    "Real-time Database",
                    "Authentication",
                    "File Upload",
                    "Custom Hooks",
                    "Chat UI Components",
                    "Notifications",
                    "Online Status"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Chat Room",
                        description: "Real-time chat xonasi komponenti",
                        code: `
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

export const ChatRoom = ({ roomId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        const q = query(
            collection(db, 'rooms', roomId, 'messages'),
            orderBy('timestamp')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(newMessages);
        });

        return () => unsubscribe();
    }, [roomId]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            await addDoc(collection(db, 'rooms', roomId, 'messages'), {
                text: newMessage,
                timestamp: serverTimestamp(),
                userId: user.uid,
                userName: user.displayName
            });
            setNewMessage('');
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
        }
    };

    return (
        <div className="chat-room">
            <div className="messages">
                {messages.map(msg => (
                    <div 
                        key={msg.id} 
                        className={\`message \${msg.userId === user.uid ? 'own' : ''}\`}
                    >
                        <span className="user">{msg.userName}</span>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Xabar yozing..."
                />
                <button type="submit">Yuborish</button>
            </form>
        </div>
    );
};`
                    }
                ],
                features: [
                    "Real-time messaging",
                    "User authentication",
                    "File sharing",
                    "Online status",
                    "Message notifications",
                    "Chat rooms",
                    "User profiles"
                ]
            }
        }
    },
    {
        id: 5,
        title: "Note Taking App",
        level: "Boshlang'ich",
        description: "Markdown qo'llab-quvvatlash bilan eslatmalar ilovasi",
        image: "https://react-notes-app.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "React Markdown",
                    "LocalStorage",
                    "Categories",
                    "Search & Filter",
                    "Dark Mode",
                    "Keyboard Shortcuts",
                    "Export/Import",
                    "Tags System"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Note Editor",
                        description: "Markdown editor komponenti",
                        code: `
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNotes } from '../hooks/useNotes';

export const NoteEditor = ({ noteId }) => {
    const [content, setContent] = useState('');
    const [preview, setPreview] = useState(false);
    const { updateNote, getNote } = useNotes();

    useEffect(() => {
        if (noteId) {
            const note = getNote(noteId);
            if (note) setContent(note.content);
        }
    }, [noteId]);

    const handleSave = async () => {
        try {
            await updateNote(noteId, {
                content,
                lastModified: new Date().toISOString()
            });
        } catch (error) {
            console.error('Saqlashda xatolik:', error);
        }
    };

    return (
        <div className="note-editor">
            <div className="toolbar">
                <button onClick={() => setPreview(!preview)}>
                    {preview ? 'Tahrirlash' : 'Ko\'rish'}
                </button>
                <button onClick={handleSave}>Saqlash</button>
            </div>
            
            {preview ? (
                <div className="preview">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            ) : (
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Markdown formatida yozing..."
                />
            )}
        </div>
    );
};`
                    }
                ],
                features: [
                    "Markdown qo'llab-quvvatlash",
                    "Real-time preview",
                    "Categories va tags",
                    "Search va filter",
                    "Dark mode",
                    "Import/Export",
                    "Auto-save"
                ]
            }
        }
    },
    {
        id: 6,
        title: "Movie Search Application",
        level: "Boshlang'ich",
        description: "TMDB API bilan film qidirish ilovasi",
        image: "https://react-movie-search.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "TMDB API integratsiyasi",
                    "Infinite Scroll",
                    "Debounced Search",
                    "Image Lazy Loading",
                    "Movie Details Modal",
                    "Favorite Movies",
                    "Responsive Grid Layout",
                    "Movie Categories"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Movie Search",
                        description: "Film qidirish komponenti",
                        code: `
import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const searchMovies = useCallback(
        debounce(async (searchQuery) => {
            if (!searchQuery) return;
            try {
                setLoading(true);
                const response = await fetch(
                    \`https://api.themoviedb.org/3/search/movie?api_key=\${process.env.REACT_APP_TMDB_KEY}&query=\${searchQuery}&page=\${page}\`
                );
                const data = await response.json();
                setMovies(prev => page === 1 ? data.results : [...prev, ...data.results]);
            } catch (error) {
                console.error('Qidirishda xatolik:', error);
            } finally {
                setLoading(false);
            }
        }, 500),
        [page]
    );

    useEffect(() => {
        if (query) searchMovies(query);
    }, [query, page, searchMovies]);

    return (
        <div className="movie-search">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Film nomini kiriting..."
            />
            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img 
                            src={\`https://image.tmdb.org/t/p/w500\${movie.poster_path}\`}
                            alt={movie.title}
                            loading="lazy"
                        />
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </div>
                ))}
            </div>
            {loading && <div className="loader">Yuklanmoqda...</div>}
        </div>
    );
};`
                    }
                ],
                features: [
                    "Real-time qidiruv",
                    "Infinite scroll",
                    "Rasm lazy loading",
                    "Film ma'lumotlari",
                    "Sevimli filmlar",
                    "Kategoriyalar bo'yicha filtrlash"
                ]
            }
        }
    },
    {
        id: 7,
        title: "Social Media Dashboard",
        level: "Boshlang'ich",
        description: "Social media statistikalarini kuzatish uchun dashboard",
        image: "https://react-social-dashboard.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "Chart.js integratsiyasi",
                    "Real-time Updates",
                    "Data Visualization",
                    "Filtering & Sorting",
                    "Date Range Picker",
                    "Export Data",
                    "Responsive Tables",
                    "Custom Theme"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "Analytics Chart",
                        description: "Statistika grafigi komponenti",
                        code: `
import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const AnalyticsChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Followers',
                data: data.followers,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Engagement',
                data: data.engagement,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Social Media Analytics'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="analytics-chart">
            <Line data={chartData} options={options} />
        </div>
    );
};`
                    }
                ],
                features: [
                    "Interaktiv grafiklar",
                    "Real-time yangilanishlar",
                    "Ma'lumotlarni eksport qilish",
                    "Vaqt oralig'ini tanlash",
                    "Responsive dizayn"
                ]
            }
        }
    },
    {
        id: 8,
        title: "File Management System",
        level: "Boshlang'ich",
        description: "Fayl tizimini boshqarish ilovasi",
        image: "https://react-file-manager.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "Drag and Drop",
                    "File Upload",
                    "Folder Structure",
                    "File Preview",
                    "Search & Filter",
                    "File Sharing",
                    "Access Control",
                    "File Operations"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "FileUploader",
                        description: "Fayl yuklash komponenti",
                        code: `
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const FileUploader = ({ onUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            formData.append('files', file);
        });
        
        onUpload(formData);
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc', '.docx']
        }
    });

    return (
        <div 
            {...getRootProps()} 
            className={\`dropzone \${isDragActive ? 'active' : ''}\`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Fayllarni bu yerga tashlang...</p>
            ) : (
                <p>Fayllarni yuklash uchun bosing yoki bu yerga tashlang</p>
            )}
        </div>
    );
};`
                    }
                ],
                features: [
                    "Drag and Drop yuklash",
                    "Fayl preview",
                    "Folder tuzilmasi",
                    "Fayl ulashish",
                    "Ruxsatlar boshqaruvi"
                ]
            }
        }
    },
    {
        id: 9,
        title: "Quiz Application",
        level: "Boshlang'ich",
        description: "Interaktiv test topshirish ilovasi",
        image: "https://react-quiz-app.com/preview.png",
        mainTopics: {
            introduction: {
                title: "Loyiha Tuzilishi",
                points: [
                    "Quiz Logic",
                    "Timer Integration",
                    "Score Tracking",
                    "Progress Bar",
                    "Results Analysis",
                    "Category Selection",
                    "Difficulty Levels",
                    "Leaderboard"
                ]
            },
            codeExamples: {
                title: "Asosiy Kod Namunalari",
                components: [
                    {
                        name: "QuizQuestion",
                        description: "Test savoli komponenti",
                        code: `
import React, { useState, useEffect } from 'react';

export const QuizQuestion = ({ question, onAnswer, timeLimit }) => {
    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        if (timeLeft === 0) {
            onAnswer(null);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onAnswer]);

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
        onAnswer(answer);
    };

    return (
        <div className="quiz-question">
            <div className="timer">Vaqt: {timeLeft} soniya</div>
            <h3>{question.text}</h3>
            <div className="answers">
                {question.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(answer)}
                        className={\`answer \${selectedAnswer === answer ? 'selected' : ''}\`}
                        disabled={selectedAnswer !== null}
                    >
                        {answer}
                    </button>
                ))}
            </div>
            <div className="progress-bar">
                <div 
                    className="progress" 
                    style={{ width: \`\${(timeLeft / timeLimit) * 100}%\` }}
                />
            </div>
        </div>
    );
};`
                    }
                ],
                features: [
                    "Vaqt chegarasi",
                    "Ball hisoblash",
                    "Natijalar tahlili",
                    "Kategoriyalar",
                    "Qiyinlik darajalari",
                    "Yutuqlar jadvali"
                ]
            }
        }
    }
];

export default dataAmaliyMashqlarBosh;