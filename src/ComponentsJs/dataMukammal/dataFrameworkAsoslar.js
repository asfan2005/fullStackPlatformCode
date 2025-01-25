const dataFrameworkAsoslar = [
    {
        id: 1,
        title: "React Asoslari",
        description: "React frameworkining asosiy tushunchalari va ishlash printsiplari",
        examples: [
            {
                name: "Komponent yaratish",
                code: `// TodoItem.js
import React from 'react';

const TodoItem = ({ task, onComplete, onDelete }) => {
    return (
        <div className="todo-item">
            <span className={task.completed ? 'completed' : ''}>
                {task.text}
            </span>
            <button onClick={() => onComplete(task.id)}>
                ✓
            </button>
            <button onClick={() => onDelete(task.id)}>
                ❌
            </button>
        </div>
    );
};

// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, {
                id: Date.now(),
                text: input,
                completed: false
            }]);
            setInput('');
        }
    };

    const completeTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id 
                ? {...task, completed: !task.completed}
                : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="todo-list">
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Yangi vazifa"
            />
            <button onClick={addTask}>Qo'shish</button>
            
            {tasks.map(task => (
                <TodoItem 
                    key={task.id}
                    task={task}
                    onComplete={completeTask}
                    onDelete={deleteTask}
                />
            ))}
        </div>
    );
}`,
                explanation: "React hooks va props yordamida Todo ro'yxati yaratish",
                result: "To'liq ishlayotgan Todo ilovasi"
            }
        ]
    },
    {
        id: 2,
        title: "Vue.js Asoslari",
        description: "Vue.js frameworkining asosiy tushunchalari va ishlash printsiplari",
        examples: [
            {
                name: "Vue komponenti yaratish",
                code: `<!-- Survey.vue -->
<template>
    <div class="survey">
        <h2>{{ title }}</h2>
        <div v-for="(question, index) in questions" :key="index">
            <p>{{ question.text }}</p>
            <div class="options">
                <label v-for="option in question.options" :key="option">
                    <input 
                        type="radio" 
                        :name="'question' + index"
                        :value="option"
                        v-model="answers[index]"
                    >
                    {{ option }}
                </label>
            </div>
        </div>
        <button @click="submitSurvey">Yuborish</button>
        
        <div v-if="submitted" class="results">
            <h3>Natijalar:</h3>
            <ul>
                <li v-for="(answer, index) in answers" :key="index">
                    {{ questions[index].text }}: {{ answer }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Dasturlash haqida so'rovnoma",
            questions: [
                {
                    text: "Qaysi dasturlash tilini afzal ko'rasiz?",
                    options: ["JavaScript", "Python", "Java", "C++"]
                },
                {
                    text: "Qaysi framework sizga ko'proq yoqadi?",
                    options: ["React", "Vue", "Angular", "Svelte"]
                }
            ],
            answers: [],
            submitted: false
        }
    },
    methods: {
        submitSurvey() {
            if (this.answers.length === this.questions.length) {
                this.submitted = true;
            } else {
                alert("Iltimos, barcha savollarga javob bering!");
            }
        }
    }
}
</script>`,
                explanation: "Vue.js da so'rovnoma komponenti yaratish",
                result: "Interaktiv so'rovnoma ilovasi"
            }
        ]
    },
    {
        id: 3,
        title: "Virtual DOM",
        description: "Virtual DOM tushunchasi va ishlash printsiplari",
        examples: [
            {
                name: "Virtual DOM misoli",
                code: `// VirtualDOM misoli
class VirtualDOM {
    static createElement(type, props, ...children) {
        return {
            type,
            props: props || {},
            children: children.flat()
        };
    }

    static render(virtualNode, realDOMParent) {
        if (typeof virtualNode === 'string') {
            realDOMParent.appendChild(
                document.createTextNode(virtualNode)
            );
            return;
        }

        const element = document.createElement(virtualNode.type);

        // Props ni qo'shish
        Object.entries(virtualNode.props).forEach(([name, value]) => {
            if (name.startsWith('on')) {
                // Event listener
                element.addEventListener(
                    name.substring(2).toLowerCase(),
                    value
                );
            } else {
                // Oddiy atribut
                element.setAttribute(name, value);
            }
        });

        // Bolalarni rekursiv render qilish
        virtualNode.children.forEach(child => 
            this.render(child, element)
        );

        realDOMParent.appendChild(element);
    }
}

// Ishlatish misoli
const app = VirtualDOM.createElement(
    'div',
    { class: 'container' },
    VirtualDOM.createElement(
        'h1',
        { style: 'color: blue' },
        'Salom, Virtual DOM!'
    ),
    VirtualDOM.createElement(
        'button',
        { 
            onClick: () => alert('Bosildi!'),
            class: 'btn' 
        },
        'Meni bos'
    )
);

// DOM ga render qilish
VirtualDOM.render(app, document.getElementById('root'));`,
                explanation: "Virtual DOM ning sodda implementatsiyasi",
                result: "Virtual DOM orqali yaratilgan interaktiv UI"
            }
        ]
    },
    {
        id: 4,
        title: "State Management",
        description: "Holatlarni boshqarish va Redux/Vuex asoslari",
        examples: [
            {
                name: "Redux store yaratish",
                code: `// actions.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// reducer.js
const initialState = {
    todos: []
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload.text,
                    completed: false
                }]
            };
            
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
            
        default:
            return state;
    }
}

// store.js
import { createStore } from 'redux';
import { todoReducer } from './reducer';

const store = createStore(todoReducer);
export default store;`,
                explanation: "Redux orqali holatlarni boshqarish",
                result: "Markazlashgan holat boshqaruvi"
            }
        ]
    },
    {
        id: 5,
        title: "Komponentlar Arxitekturasi",
        description: "Komponentlarni to'g'ri tashkil etish va arxitektura prinsiplari",
        examples: [
            {
                name: "Atomic Design",
                code: `// atoms/Button.js
const Button = ({ onClick, children }) => (
    <button 
        className="primary-button"
        onClick={onClick}
    >
        {children}
    </button>
);

// molecules/SearchBar.js
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    
    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Qidirish..."
            />
            <Button onClick={() => onSearch(query)}>
                Qidirish
            </Button>
        </div>
    );
};

// organisms/Header.js
const Header = () => {
    const handleSearch = (query) => {
        // Qidiruv logikasi
    };
    
    return (
        <header className="main-header">
            <Logo />
            <Navigation />
            <SearchBar onSearch={handleSearch} />
            <UserMenu />
        </header>
    );
};

// templates/PageTemplate.js
const PageTemplate = ({ children }) => (
    <div className="page-template">
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);

// pages/HomePage.js
const HomePage = () => (
    <PageTemplate>
        <HeroBanner />
        <FeaturedProducts />
        <Newsletter />
    </PageTemplate>
);`,
                explanation: "Atomic Design metodologiyasi bo'yicha komponentlarni tashkil etish",
                result: "Qayta ishlatiluvchi va tartibli komponentlar tizimi"
            }
        ]
    }
];

export default dataFrameworkAsoslar;