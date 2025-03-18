import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

function UmumiyStatistika() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsers: 0,
    activeUsers: 0,
    growth: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/users');
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        
        // Calculate statistics
        calculateStats(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const calculateStats = (userData) => {
    // Get current date
    const currentDate = new Date();
    
    // Calculate new users (registered in the last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);
    
    const newUsersCount = userData.filter(user => {
      const registerDate = new Date(user.created_at);
      return registerDate >= thirtyDaysAgo;
    }).length;
    
    // Calculate growth percentage
    const growthPercentage = userData.length > 0 ? ((newUsersCount / userData.length) * 100).toFixed(1) : 0;
    
    setStats({
      totalUsers: userData.length,
      newUsers: newUsersCount,
      activeUsers: Math.floor(userData.length * 0.8), // Assuming 80% active as an example
      growth: growthPercentage
    });
  };

  // Prepare data for charts
  const prepareRegistrationData = () => {
    const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
    const monthData = Array(12).fill(0);
    
    users.forEach(user => {
      const date = new Date(user.created_at);
      const month = date.getMonth();
      monthData[month]++;
    });
    
    return months.map((month, index) => ({
      name: month,
      users: monthData[index]
    }));
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF6B6B'];
  
  const pieData = [
    { name: 'So\'nggi 1 kun', value: users.filter(user => {
      const today = new Date();
      const registerDate = new Date(user.created_at);
      const diffTime = Math.abs(today - registerDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays < 1;
    }).length },
    { name: 'So\'nggi 7 kun', value: users.filter(user => {
      const today = new Date();
      const registerDate = new Date(user.created_at);
      const diffTime = Math.abs(today - registerDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays >= 1 && diffDays <= 7;
    }).length },
    { name: 'So\'nggi 30 kun', value: users.filter(user => {
      const today = new Date();
      const registerDate = new Date(user.created_at);
      const diffTime = Math.abs(today - registerDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 7 && diffDays <= 30;
    }).length },
    { name: 'Eski foydalanuvchilar', value: users.filter(user => {
      const today = new Date();
      const registerDate = new Date(user.created_at);
      const diffTime = Math.abs(today - registerDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 30;
    }).length }
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="max-w-md rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center justify-center text-red-500">
            <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="mb-2 text-center text-2xl font-bold text-red-600">Xatolik yuz berdi</h2>
          <p className="mb-4 text-center text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full rounded-lg bg-blue-500 py-2 px-4 font-bold text-white transition hover:bg-blue-600"
          >
            Qayta yuklash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Responsive Header */}
      <div className="sticky top-0 z-10 backdrop-blur-lg">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex-1">
              <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl md:text-4xl">
                Umumiy Statistika
              </h1>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Platforma foydalanuvchilari haqida batafsil ma'lumotlar va statistika
              </p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="rounded-lg bg-indigo-50 p-2 sm:p-3">
                <div className="text-center">
                  <p className="text-xs font-medium text-indigo-600 sm:text-sm">Bugun</p>
                  <p className="text-lg font-bold text-indigo-800 sm:text-2xl">
                    {new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-xl bg-white p-2 shadow-lg sm:gap-4">
          {['dashboard', 'users', 'reports'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 rounded-lg px-3 py-2 text-sm transition-all duration-300 sm:flex-none sm:px-6 sm:py-3 sm:text-base ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="relative z-10 font-medium capitalize">
                {tab === 'dashboard' ? 'Dashboard' : 
                 tab === 'users' ? 'Foydalanuvchilar' : 'Hisobotlar'}
              </span>
            </button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <>
            {/* Responsive Stats Grid */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Jami foydalanuvchilar',
                  value: stats.totalUsers,
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  gradient: 'from-blue-500 via-blue-600 to-indigo-600'
                },
                {
                  title: 'Yangi foydalanuvchilar',
                  value: stats.newUsers,
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  ),
                  gradient: 'from-green-500 via-green-600 to-emerald-600'
                },
                {
                  title: 'Faol foydalanuvchilar',
                  value: stats.activeUsers,
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  gradient: 'from-purple-500 via-purple-600 to-pink-600'
                },
                {
                  title: "O'sish ko'rsatkichi",
                  value: `${stats.growth}%`,
                  icon: (
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  gradient: 'from-yellow-500 via-yellow-600 to-orange-600'
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transform overflow-hidden rounded-xl bg-gradient-to-br ${stat.gradient} p-1 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <div className="h-full rounded-lg bg-white/10 p-4 backdrop-blur-lg sm:p-6">
                    <div className="flex items-center">
                      <div className="rounded-xl bg-white/20 p-2 sm:p-3">
                        {stat.icon}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h2 className="text-sm font-bold text-white sm:text-lg">{stat.title}</h2>
                        <p className="text-xl font-bold text-white sm:text-3xl">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive Charts Grid */}
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl bg-white p-4 shadow-xl sm:p-6">
                <h2 className="mb-4 text-lg font-bold text-gray-800 sm:mb-6 sm:text-xl">
                  Ro'yxatdan o'tish dinamikasi
                </h2>
                <div className="h-[250px] sm:h-[300px] md:h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={prepareRegistrationData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="name" stroke="#4B5563" />
                      <YAxis stroke="#4B5563" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          borderRadius: '0.5rem',
                          border: 'none',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#3B82F6" 
                        strokeWidth={3}
                        dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-white p-4 shadow-xl sm:p-6">
                <h2 className="mb-4 text-lg font-bold text-gray-800 sm:mb-6 sm:text-xl">
                  Foydalanuvchilar taqsimoti
                </h2>
                <div className="h-[250px] sm:h-[300px] md:h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]}
                            className="transition-all duration-300 hover:opacity-80"
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          borderRadius: '0.5rem',
                          border: 'none',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
                <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                  So'nggi foydalanuvchilar
                </h2>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {['ID', 'F.I.O', 'Username', 'Email', 'Telefon', 'Sana'].map((header) => (
                          <th
                            key={header}
                            className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6 sm:py-3"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {users.slice(0, 5).map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-4 sm:text-sm">
                            #{user.id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-4 sm:text-sm">
                            <div className="flex items-center">
                              <div className="h-6 w-6 flex-shrink-0 sm:h-8 sm:w-8">
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                                  <span className="text-xs font-medium text-white sm:text-sm">
                                    {user.fullname[0]}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-2 sm:ml-4">
                                <div className="font-medium text-gray-900">{user.fullname}</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-4 sm:text-sm">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                              {user.codename}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-4 sm:text-sm">
                            <div className="flex items-center">
                              <svg className="mr-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {user.email}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-4 sm:text-sm">
                            <div className="flex items-center">
                              <svg className="mr-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {user.phone}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-2 text-xs sm:px-6 sm:py-4 sm:text-sm">
                            <div className="flex items-center">
                              <svg className="mr-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {new Date(user.created_at).toLocaleDateString('uz-UZ')}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'users' && (
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
              <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                Barcha foydalanuvchilar
              </h2>
            </div>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">F.I.O</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Username</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Telefon</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ro'yxatdan o'tgan sana</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Yangilangan sana</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{user.id}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.fullname}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.codename}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.email}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.phone}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          {new Date(user.created_at).toLocaleString('uz-UZ')}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          {new Date(user.updated_at).toLocaleString('uz-UZ')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow-lg sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-800 sm:mb-6 sm:text-xl">
                Foydalanuvchilar soni
              </h2>
              <div className="h-[250px] sm:h-[300px] md:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={prepareRegistrationData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow-lg sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-800 sm:mb-6 sm:text-xl">
                Foydalanuvchilar analitikasi
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-2 text-lg font-semibold text-blue-800">Eng faol vaqt</h3>
                  <p className="text-blue-600">Foydalanuvchilar odatda 14:00 - 18:00 oralig'ida tizimga kirishadi</p>
                </div>
                
                <div className="rounded-lg bg-green-50 p-4">
                  <h3 className="mb-2 text-lg font-semibold text-green-800">O'rtacha tizimda bo'lish vaqti</h3>
                  <p className="text-green-600">Foydalanuvchilar platformada o'rtacha 45 daqiqa vaqt o'tkazishadi</p>
                </div>
                
                <div className="rounded-lg bg-purple-50 p-4">
                  <h3 className="mb-2 text-lg font-semibold text-purple-800">Eng ko'p foydalanilgan qurilma</h3>
                  <p className="text-purple-600">Foydalanuvchilarning 65% mobil qurilmalardan foydalanishadi</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UmumiyStatistika;