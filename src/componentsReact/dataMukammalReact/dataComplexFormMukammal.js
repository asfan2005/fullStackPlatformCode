const dataComplexFormMukammal = [
    {
        id: 1,
        title: "Formik with Yup Validation",
        code: `
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, 'Juda qisqa')
        .max(50, 'Juda uzun')
        .required('Majburiy maydon'),
    email: Yup.string()
        .email('Noto'g'ri email format')
        .required('Majburiy maydon'),
    password: Yup.string()
        .min(8, 'Kamida 8 ta belgi')
        .required('Majburiy maydon'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Parollar mos kelmadi')
        .required('Majburiy maydon')
});

// Complex Form Component
function RegistrationForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="form">
                    <div>
                        <Field name="firstName" placeholder="Ismingiz" />
                        {errors.firstName && touched.firstName && (
                            <div className="error">{errors.firstName}</div>
                        )}
                    </div>

                    <div>
                        <Field name="email" type="email" placeholder="Email" />
                        {errors.email && touched.email && (
                            <div className="error">{errors.email}</div>
                        )}
                    </div>

                    <div>
                        <Field name="password" type="password" placeholder="Parol" />
                        {errors.password && touched.password && (
                            <div className="error">{errors.password}</div>
                        )}
                    </div>

                    <div>
                        <Field name="confirmPassword" type="password" placeholder="Parolni tasdiqlang" />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <div className="error">{errors.confirmPassword}</div>
                        )}
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Ro'yxatdan o'tish
                    </button>
                </Form>
            )}
        </Formik>
    );
}`,
        description: "Formik va Yup yordamida murakkab formalarni yaratish va validatsiya qilish",
        result: `{
    "demo": "https://codesandbox.io/s/formik-yup-demo",
    "output": {
        "success": true,
        "formData": {
            "firstName": "John",
            "email": "john@example.com",
            "password": "********",
            "confirmPassword": "********"
        }
    }
}`
    },
    {
        id: 2,
        title: "Dynamic Form Fields",
        code: `
import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

function DynamicForm() {
    const initialValues = {
        users: [{ name: '', email: '' }]
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <FieldArray name="users">
                        {({ push, remove }) => (
                            <div>
                                {values.users.map((user, index) => (
                                    <div key={index}>
                                        <Field
                                            name={\`users.\${index}.name\`}
                                            placeholder="Ism"
                                        />
                                        <Field
                                            name={\`users.\${index}.email\`}
                                            placeholder="Email"
                                        />
                                        <button type="button" onClick={() => remove(index)}>
                                            O'chirish
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => push({ name: '', email: '' })}
                                >
                                    Yangi maydon qo'shish
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit">Yuborish</button>
                </Form>
            )}
        </Formik>
    );
}`,
        description: "Dinamik form maydonlarini yaratish va boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/dynamic-form-demo",
    "output": {
        "users": [
            { "name": "John", "email": "john@example.com" },
            { "name": "Jane", "email": "jane@example.com" }
        ]
    }
}`
    },
    {
        id: 3,
        title: "Multi-Step Form",
        code: `
import React, { useState } from 'react';
import { Formik, Form } from 'formik';

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const initialValues = {
        // Shaxsiy ma'lumotlar
        firstName: '',
        lastName: '',
        email: '',
        // Manzil ma'lumotlari
        address: '',
        city: '',
        country: '',
        // To'lov ma'lumotlari
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    };

    const renderStep = (values, handleChange) => {
        switch(step) {
            case 1:
                return (
                    <div>
                        <h3>Shaxsiy ma'lumotlar</h3>
                        <input
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            placeholder="Ism"
                        />
                        <input
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            placeholder="Familiya"
                        />
                        <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3>Manzil</h3>
                        <input
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            placeholder="Manzil"
                        />
                        <input
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            placeholder="Shahar"
                        />
                        <input
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            placeholder="Davlat"
                        />
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3>To'lov ma'lumotlari</h3>
                        <input
                            name="cardNumber"
                            value={values.cardNumber}
                            onChange={handleChange}
                            placeholder="Karta raqami"
                        />
                        <input
                            name="expiryDate"
                            value={values.expiryDate}
                            onChange={handleChange}
                            placeholder="Amal qilish muddati"
                        />
                        <input
                            name="cvv"
                            value={values.cvv}
                            onChange={handleChange}
                            placeholder="CVV"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {renderStep(values, handleChange)}
                    
                    <div>
                        {step > 1 && (
                            <button type="button" onClick={() => setStep(step - 1)}>
                                Orqaga
                            </button>
                        )}
                        {step < totalSteps ? (
                            <button type="button" onClick={() => setStep(step + 1)}>
                                Keyingisi
                            </button>
                        ) : (
                            <button type="submit">Yuborish</button>
                        )}
                    </div>
                </form>
            )}
        </Formik>
    );
}`,
        description: "Ko'p qadamli formalarni yaratish va boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/multi-step-form-demo",
    "output": {
        "step1": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@example.com"
        },
        "step2": {
            "address": "123 Main St",
            "city": "New York",
            "country": "USA"
        },
        "step3": {
            "cardNumber": "****-****-****-1234",
            "expiryDate": "12/24",
            "cvv": "***"
        }
    }
}`
    }
];

export default dataComplexFormMukammal;