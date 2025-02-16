const dataReactFormsOrta = [
    {
        id: 1,
        title: "React Forms",
        description: "React-da formalarni yaratish va boshqarish usullari",
        image: "https://i.ytimg.com/vi/H63Pd_lXkeQ/maxresdefault.jpg",
        mainTopics: {
            introduction: {
                title: "React Forms Asoslari",
                points: [
                    "Controlled vs Uncontrolled Components",
                    "Form validatsiyasi",
                    "Form state boshqaruvi",
                    "Form submission",
                    "React Hook Form",
                    "Formik kutubxonasi"
                ],
                examples: [
                    {
                        title: "Controlled Form",
                        description: "React-da controlled form yaratish",
                        code: `
import React, { useState } from 'react';

function ControlledForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    );
}`
                    },
                    {
                        title: "Form Validation",
                        description: "Formada validatsiya qo'llash",
                        code: `
function ValidatedForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email) {
            newErrors.email = 'Email kiritish shart';
        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
            newErrors.email = 'Email formati noto'g'ri';
        }
        
        if (!formData.password) {
            newErrors.password = 'Parol kiritish shart';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Parol kamida 6 ta belgidan iborat bo'lishi kerak';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };
}`
                    },
                    {
                        title: "Dynamic Form Fields",
                        description: "Dinamik form maydonlarini yaratish",
                        code: `
import React, { useState } from 'react';

function DynamicForm() {
    const [fields, setFields] = useState([{ value: '' }]);

    const handleAddField = () => {
        setFields([...fields, { value: '' }]);
    };

    const handleRemoveField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    const handleChange = (index, value) => {
        const newFields = fields.map((field, i) => {
            if (i === index) return { value };
            return field;
        });
        setFields(newFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted values:', fields);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={field.value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder={\`Field \${index + 1}\`}
                    />
                    <button type="button" onClick={() => handleRemoveField(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddField}>
                Add Field
            </button>
            <button type="submit">Submit</button>
        </form>
    );
}`
                    },
                    {
                        title: "File Upload Form",
                        description: "Fayllarni yuklash formasi",
                        code: `
import React, { useState } from 'react';

function FileUploadForm() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Fayl preview uchun
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            // API ga yuborish
            const response = await fetch('your-upload-url', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log('Upload success:', data);
        } catch (error) {
            console.error('Upload error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
            />
            {preview && (
                <div>
                    <h4>Preview:</h4>
                    <img src={preview} alt="Preview" style={{ maxWidth: '200px' }} />
                </div>
            )}
            <button type="submit" disabled={!file}>
                Upload
            </button>
        </form>
    );
}`
                    },
                    {
                        title: "Multi-Step Form",
                        description: "Ko'p qadamli forma yaratish",
                        code: `
import React, { useState } from 'react';

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personalInfo: {
            name: '',
            email: ''
        },
        address: {
            street: '',
            city: '',
            country: ''
        },
        payment: {
            cardNumber: '',
            expiry: ''
        }
    });

    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Final form data:', formData);
    };

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div>
                        <h3>Personal Information</h3>
                        <input
                            type="text"
                            value={formData.personalInfo.name}
                            onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            value={formData.personalInfo.email}
                            onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
                            placeholder="Email"
                        />
                        <button onClick={nextStep}>Next</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3>Address</h3>
                        <input
                            type="text"
                            value={formData.address.street}
                            onChange={(e) => handleChange('address', 'street', e.target.value)}
                            placeholder="Street"
                        />
                        <input
                            type="text"
                            value={formData.address.city}
                            onChange={(e) => handleChange('address', 'city', e.target.value)}
                            placeholder="City"
                        />
                        <input
                            type="text"
                            value={formData.address.country}
                            onChange={(e) => handleChange('address', 'country', e.target.value)}
                            placeholder="Country"
                        />
                        <button onClick={prevStep}>Back</button>
                        <button onClick={nextStep}>Next</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3>Payment Details</h3>
                        <input
                            type="text"
                            value={formData.payment.cardNumber}
                            onChange={(e) => handleChange('payment', 'cardNumber', e.target.value)}
                            placeholder="Card Number"
                        />
                        <input
                            type="text"
                            value={formData.payment.expiry}
                            onChange={(e) => handleChange('payment', 'expiry', e.target.value)}
                            placeholder="Expiry Date"
                        />
                        <button onClick={prevStep}>Back</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderStep()}
        </form>
    );
}`
                    }
                ]
            },
            advancedTopics: {
                title: "Murakkab Form Boshqaruvi",
                components: [
                    {
                        name: "React Hook Form",
                        description: "React Hook Form kutubxonasi bilan ishlash",
                        code: `
import { useForm } from 'react-hook-form';

function HookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('username', { 
                    required: 'Username kiritish shart',
                    minLength: {
                        value: 3,
                        message: 'Kamida 3 ta belgi'
                    }
                })}
            />
            {errors.username && <p>{errors.username.message}</p>}
            
            <input
                {...register('email', {
                    required: 'Email kiritish shart',
                    pattern: {
                        value: /\\S+@\\S+\\.\\S+/,
                        message: 'Email formati noto'g'ri'
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            
            <button type="submit">Submit</button>
        </form>
    );
}`
                    },
                    {
                        name: "Formik Bilan Ishlash",
                        description: "Formik kutubxonasidan foydalanish",
                        code: `
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('Ism kiritish shart'),
    email: Yup.string()
        .email('Email formati noto'g'ri')
        .required('Email kiritish shart'),
    password: Yup.string()
        .min(6, 'Kamida 6 ta belgi')
        .required('Parol kiritish shart')
});

function FormikForm() {
    return (
        <Formik
            initialValues={{ firstName: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form data:', values);
            }}
        >
            <Form>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" component="div" />

                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" />

                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Form Optimizatsiyasi",
                        tips: [
                            "Controlled componentlarni to'g'ri ishlatish",
                            "Form state'ni optimallash",
                            "Validatsiya logikasini ajratish",
                            "Error handling'ni to'g'ri tashkil etish"
                        ]
                    },
                    {
                        name: "Form UX",
                        tips: [
                            "Real-time validatsiya",
                            "Form loading holatlarini ko'rsatish",
                            "Xato xabarlarni aniq ko'rsatish",
                            "Form reset va clear funksionalligini qo'shish"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Hook Form Documentation",
                        url: "https://react-hook-form.com/"
                    },
                    {
                        name: "Formik Documentation",
                        url: "https://formik.org/"
                    },
                    {
                        name: "Yup Validation",
                        url: "https://github.com/jquense/yup"
                    }
                ]
            }
        }
    }
];

export default dataReactFormsOrta;