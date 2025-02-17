import React from "react";
import { motion } from "framer-motion";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Ism kiritish majburiy";
    if (!formData.lastName) newErrors.lastName = "Familiya kiritish majburiy";
    if (!formData.email) newErrors.email = "Email kiritish majburiy";
    if (!formData.password) newErrors.password = "Parol kiritish majburiy";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parollar mos kelmadi";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  if (!isOpen) return null;
  const handleLoginClick = () => {
    onClose();
    onLoginClick(); // Call the onLoginClick function from props
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title with enhanced styling */}
        <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Ro'yxatdan o'tish
        </h2>

        {/* Enhanced subtitle */}
        <p className="text-center text-gray-600 mb-6 text-sm">
          "FullStack Platform Practice" da yangi hisob yarating
        </p>

        {/* Social Buttons with enhanced styling */}
        <div className="flex gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-3 bg-black text-white font-semibold py-4 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            Google
          </motion.button>
        </div>

        {/* Enhanced divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 text-base font-medium">yoki</span>
          </div>
        </div>

        {/* Form with enhanced styling */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div whileTap={{ scale: 0.995 }} className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ismingiz"
              className={`w-full p-3 border-2 ${
                errors.firstName ? 'border-red-500' : 'border-gray-200'
              } rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-200 pl-12 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            <svg
              className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </motion.div>

          <motion.div whileTap={{ scale: 0.995 }} className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Familiyangiz"
              className={`w-full p-3 border-2 ${
                errors.lastName ? 'border-red-500' : 'border-gray-200'
              } rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-200 pl-12 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            <svg
              className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </motion.div>

          <motion.div whileTap={{ scale: 0.995 }} className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Elektron pochta"
              className={`w-full p-3 border-2 ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-200 pl-12 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            <svg
              className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.div>

          <motion.div whileTap={{ scale: 0.995 }} className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Parol"
              className={`w-full p-3 border-2 ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              } rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-200 pl-12 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            <svg
              className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </motion.div>

          <motion.div whileTap={{ scale: 0.995 }} className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Parolni tasdiqlang"
              className={`w-full p-3 border-2 ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
              } rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-200 pl-12 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            <svg
              className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Ro'yxatdan o'tish
          </motion.button>
        </form>

        {/* Enhanced login link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Akkountingiz bormi?{" "}
          <a
            onClick={handleLoginClick}
            className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer hover:underline"
          >
            Kirish
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default RegisterModal;
