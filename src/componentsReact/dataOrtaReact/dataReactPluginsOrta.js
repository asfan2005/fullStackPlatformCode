const dataReactPluginsOrta = [
    {
        id: 1,
        title: "React Plugins va Kutubxonalar",
        description: "React ilovalarida eng ko'p ishlatiladigan va foydali plaginlar haqida to'liq ma'lumot",
        image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
        mainTopics: {
            introduction: {
                title: "React Plugins Asoslari",
                points: [
                    "Plugin tushunchasi",
                    "NPM va Yarn package manager",
                    "Dependencies boshqaruvi",
                    "Plugin tanlash mezonlari",
                    "Plugin o'rnatish va sozlash",
                    "Bundle size optimization"
                ],
                examples: [
                    {
                        title: "Plugin O'rnatish",
                        description: "Pluginlarni o'rnatish va import qilish",
                        code: `
// NPM orqali o'rnatish
npm install react-router-dom

// Yarn orqali o'rnatish
yarn add react-router-dom

// Importlar
import { BrowserRouter, Route, Switch } from 'react-router-dom';`
                    }
                ]
            },
            popularPlugins: {
                title: "Mashhur React Pluginlar",
                categories: [
                    {
                        name: "Routing",
                        plugins: [
                            {
                                name: "React Router",
                                description: "SPA routingni boshqarish uchun",
                                code: `
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/users/:id" component={UserProfile} />
            </Switch>
        </BrowserRouter>
    );
}`
                            }
                        ]
                    },
                    {
                        name: "State Management",
                        plugins: [
                            {
                                name: "Redux Toolkit",
                                description: "Global state boshqaruvi",
                                code: `
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});`
                            }
                        ]
                    },
                    {
                        name: "Form Handling",
                        plugins: [
                            {
                                name: "Formik",
                                description: "Formlarni boshqarish uchun",
                                code: `
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .required('Required'),
});

const LoginForm = () => (
    <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={ValidationSchema}
        onSubmit={values => console.log(values)}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="email" type="email" />
                <Field name="password" type="password" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);`
                            }
                        ]
                    }
                ]
            },
            uiComponents: {
                title: "UI Komponentlar",
                libraries: [
                    {
                        name: "Material-UI",
                        description: "Material Design komponentlari",
                        code: `
import { Button, TextField } from '@mui/material';

function MaterialExample() {
    return (
        <div>
            <TextField label="Username" variant="outlined" />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </div>
    );
}`
                    },
                    {
                        name: "Chakra UI",
                        description: "Modern va accessible UI komponentlar",
                        code: `
import { Box, Button, Input } from '@chakra-ui/react';

function ChakraExample() {
    return (
        <Box>
            <Input placeholder="Enter username" />
            <Button colorScheme="blue">
                Submit
            </Button>
        </Box>
    );
}`
                    }
                ]
            },
            utilityPlugins: {
                title: "Utility Pluginlar",
                plugins: [
                    {
                        name: "Axios",
                        description: "HTTP so'rovlarni yuborish",
                        code: `
import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://api.example.com/data');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
};`
                    },
                    {
                        name: "Day.js",
                        description: "Sana va vaqt bilan ishlash",
                        code: `
import dayjs from 'dayjs';

const formatDate = (date) => {
    return dayjs(date).format('DD/MM/YYYY');
};`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Plugin Tanlash",
                        tips: [
                            "Community va GitHub stars",
                            "Bundle size va performance",
                            "Documentation sifati",
                            "Maintenance va updates"
                        ]
                    },
                    {
                        name: "Security",
                        tips: [
                            "Dependencies audit",
                            "Version management",
                            "Security updates",
                            "Code scanning"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "NPM Trends",
                        url: "https://www.npmtrends.com/"
                    },
                    {
                        name: "React Awesome",
                        url: "https://github.com/enaqx/awesome-react"
                    },
                    {
                        name: "Bundle Phobia",
                        url: "https://bundlephobia.com/"
                    }
                ]
            }
        }
    }
];

export default dataReactPluginsOrta;