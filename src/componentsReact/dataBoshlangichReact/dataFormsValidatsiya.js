const dataFormsValidatsiya = [
    {
        id: 1,
        title: "React Forms va Validatsiya",
        level: "Boshlang'ich",
        description: "React da formalar bilan ishlash va validatsiya qilishning to'liq qo'llanmasi",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070",
        mainTopics: {
            introduction: {
                title: "React Forms Asoslari",
                points: [
                    "Controlled va Uncontrolled komponentlar",
                    "Form elementlari bilan ishlash",
                    "Form validatsiya turlari",
                    "Real vaqt validatsiyasi",
                    "Form ma'lumotlarini yuborish"
                ]
            },
            formTypes: {
                title: "Asosiy Form Turlari",
                types: [
                    {
                        name: "Controlled Forms",
                        description: "React state orqali boshqariladigan formalar",
                        example: `
const [formData, setFormData] = useState({
    username: '',
    email: ''
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};`
                    },
                    {
                        name: "Uncontrolled Forms",
                        description: "DOM orqali boshqariladigan formalar",
                        example: `
const formRef = useRef();

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    console.log(data.get('username'));
};`
                    }
                ]
            },
            validationMethods: {
                title: "Validatsiya Usullari",
                methods: [
                    {
                        name: "Built-in HTML5 Validation",
                        description: "HTML5 attributlari orqali validatsiya",
                        example: `
<input 
    type="email" 
    required 
    minLength={3} 
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>`
                    },
                    {
                        name: "Custom Validation",
                        description: "JavaScript orqali maxsus validatsiya",
                        example: `
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};`
                    },
                    {
                        name: "Form Library Validation",
                        description: "Kutubxonalar yordamida validatsiya",
                        example: `
const { register, handleSubmit, errors } = useForm();

<input {...register("email", { 
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
})} />`
                    },
                    {
                        name: "Simple Validation",
                        description: "Oddiy validatsiya usuli",
                        example: `
const [error, setError] = useState('');
const [input, setInput] = useState('');

const validateInput = (value) => {
    if (value.length < 3) {
        setError("Kamida 3 ta belgi kiriting");
        return false;
    }
    setError('');
    return true;
};

const handleChange = (e) => {
    setInput(e.target.value);
    validateInput(e.target.value);
};`
                    }
                ]
            },
            popularLibraries: {
                title: "Mashhur Form Kutubxonalar",
                libraries: [
                    {
                        name: "React Hook Form",
                        description: "Yuqori samarali form boshqaruvi kutubxonasi",
                        installation: "npm install react-hook-form",
                        features: [
                            "Minimal re-renderlar",
                            "Yengil va tez",
                            "Built-in validatsiya",
                            "Sxema validatsiyasi",
                            "TypeScript qo'llab-quvvatlash"
                        ],
                        example: `
import { useForm } from 'react-hook-form';

function LoginForm() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { 
                required: "Email majburiy",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Noto'g'ri email format"
                }
            })} />
            {errors.email && <span>{errors.email.message}</span>}
            
            <button type="submit">Yuborish</button>
        </form>
    );
}`
                    },
                    {
                        name: "Formik",
                        description: "Keng qamrovli form boshqaruvi kutubxonasi",
                        installation: "npm install formik yup",
                        features: [
                            "Form state boshqaruvi",
                            "Validatsiya",
                            "Error handling",
                            "Form submission",
                            "Yup integratsiyasi"
                        ],
                        example: `
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Noto'g'ri email format")
        .required("Email majburiy"),
    password: Yup.string()
        .min(6, "Minimum 6 ta belgi")
        .required("Parol majburiy")
});

function LoginForm() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="email" type="email" />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                    
                    <Field name="password" type="password" />
                    {errors.password && touched.password && <div>{errors.password}</div>}
                    
                    <button type="submit">Kirish</button>
                </Form>
            )}
        </Formik>
    );
}`
                    }
                ]
            }
        },
        practicalExamples: {
            title: "Amaliy Misollar",
            examples: [
                {
                    name: "Ro'yxatdan O'tish Formasi",
                    code: `
import { useForm } from 'react-hook-form';

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password");

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register("username", {
                required: "Username majburiy",
                minLength: {
                    value: 3,
                    message: "Minimum 3 ta belgi"
                }
            })} />
            {errors.username && <span>{errors.username.message}</span>}

            <input {...register("email", {
                required: "Email majburiy",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Noto'g'ri email format"
                }
            })} />
            {errors.email && <span>{errors.email.message}</span>}

            <input type="password" {...register("password", {
                required: "Parol majburiy",
                minLength: {
                    value: 6,
                    message: "Minimum 6 ta belgi"
                }
            })} />
            {errors.password && <span>{errors.password.message}</span>}

            <input type="password" {...register("confirmPassword", {
                required: "Parolni tasdiqlang",
                validate: value => value === password || "Parollar mos kelmadi"
            })} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

            <button type="submit">Ro'yxatdan o'tish</button>
        </form>
    );
}`
                },
                {
                    name: "Oddiy Login Formasi",
                    code: `
function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.username) {
            newErrors.username = "Username kiritilishi shart";
        }
        
        if (!formData.password) {
            newErrors.password = "Parol kiritilishi shart";
        } else if (formData.password.length < 6) {
            newErrors.password = "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form yuborildi:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                {errors.username && <span>{errors.username}</span>}
            </div>

            <div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Parol"
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <button type="submit">Kirish</button>
        </form>
    );
}`
                }
            ]
        },
        bestPractices: {
            title: "Eng Yaxshi Amaliyotlar",
            practices: [
                "Real vaqt validatsiyasi qo'llash",
                "Xatoliklarni aniq ko'rsatish",
                "Form yuborishdan oldin validatsiya",
                "Loading holatlarini ko'rsatish",
                "Xavfsizlik choralarini qo'llash",
                "Foydalanuvchi tajribasini yaxshilash",
                "Formani reset qilish imkoniyatini berish",
                "Ma'lumotlarni local storage da saqlash",
                "Form elementlarini to'g'ri guruhlash",
                "Klaviatura bilan boshqarish imkoniyati",
                "Form yuborilgandan keyin foydalanuvchiga xabar berish"
            ]
        }
    }
];

export default dataFormsValidatsiya;