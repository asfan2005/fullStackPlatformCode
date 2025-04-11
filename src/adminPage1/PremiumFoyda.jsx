import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

const PremiumFoyda = () => {
  const [premiumUsers, setPremiumUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchPremiumUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.infinity-school.uz/api/payment-page/all');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setPremiumUsers(data.data.payments);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPremiumUsers();
  }, []);

  const filteredUsers = premiumUsers.filter(user => 
    user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.telegram_username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone_number?.includes(searchTerm)
  );

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const closeUserDetails = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
  return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
          <p className="font-bold">Xatolik</p>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Qayta yuklash
          </button>
        </div>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Premium Foydalanuvchilar
          </h1>
          <p className="text-gray-600 mb-6">
            Barcha premium a'zolar ro'yxati va ularning ma'lumotlari
          </p>

          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Foydalanuvchini qidirish..."
              className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Jami To'lovlar</h3>
              <p className="text-3xl font-bold">{premiumUsers.length}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Tasdiqlangan</h3>
              <p className="text-3xl font-bold">
                {premiumUsers.filter(user => user.status === 'completed').length}
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Bugungi To'lovlar</h3>
              <p className="text-3xl font-bold">
                {premiumUsers.filter(user => 
                  new Date(user.created_at).toDateString() === new Date().toDateString()
                ).length}
              </p>
            </div>
          </div>

          {/* Users Table/Grid */}
          {!isMobile ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Foydalanuvchi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To'lov
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sana
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amal
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium">
                              {user.full_name?.split(' ').map(name => name[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.full_name}</div>
                            <div className="text-sm text-gray-500">{user.telegram_username}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium
                          ${user.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'}`}>
                          {user.status === 'completed' ? 'Tasdiqlangan' : 'Kutilmoqda'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.plan_price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.formatted_created_at}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => handleUserSelect(user)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Ko'rish
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Mobile View - Cards
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="bg-white rounded-xl shadow-md p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {user.full_name?.split(' ').map(name => name[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{user.full_name}</div>
                        <div className="text-sm text-gray-500">{user.telegram_username}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                      ${user.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'}`}>
                      {user.status === 'completed' ? 'Tasdiqlangan' : 'Kutilmoqda'}
                    </span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">To'lov:</span> {user.plan_price}
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Sana:</span> {user.formatted_created_at}
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <button 
                      onClick={() => handleUserSelect(user)}
                      className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-100"
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-start justify-start p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full transform transition-all mt-[120px] ml-[400px] animate-modal-slide">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-t-2xl p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center shadow-inner transform hover:scale-105 transition-transform duration-200">
                    <span className="text-2xl font-bold text-white">
                      {selectedUser.full_name?.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{selectedUser.full_name}</h2>
                    <div className="flex items-center mt-1 text-blue-100">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <p className="font-medium">{selectedUser.telegram_username}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={closeUserDetails}
                  className="text-white hover:text-gray-200 transition-colors duration-200 transform hover:scale-110 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body with enhanced styling */}
            <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto bg-gradient-to-b from-white to-gray-50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Basic Info */}
                <div className="space-y-4">
                  {/* Transaction Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Tranzaksiya ID
                    </h3>
                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                      <p className="font-mono text-sm text-gray-800">{selectedUser.transaction_id}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Status</h3>
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedUser.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedUser.status === 'completed' ? (
                          <>
                            <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Tasdiqlangan
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Kutilmoqda
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Course Details */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Kurs ma'lumotlari
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Kurs nomi</p>
                        <p className="font-medium text-gray-900">{selectedUser.plan_name}</p>
                      </div>
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Dars vaqti</p>
                        <p className="font-medium text-gray-900">{selectedUser.course_time_slot}</p>
                      </div>
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Dars kunlari</p>
                        <p className="font-medium text-gray-900">{selectedUser.course_days}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact & Payment */}
                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Aloqa ma'lumotlari
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white bg-opacity-50 rounded-lg p-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-gray-900">{selectedUser.phone_number}</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-100">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      To'lov ma'lumotlari
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <p className="text-sm text-gray-500">To'lov miqdori</p>
                        <p className="font-medium text-gray-900">{selectedUser.plan_price}</p>
                      </div>
                      <div className="bg-white bg-opacity-50 rounded-lg p-3">
                        <p className="text-sm text-gray-500">To'lov sanasi</p>
                        <p className="font-medium text-gray-900">{selectedUser.formatted_payment_date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dates Timeline */}
              <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Muhim sanalar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-500">Ro'yxatdan o'tish</p>
                    <p className="font-medium text-gray-900">{selectedUser.formatted_created_at}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-500">Kurs boshlanishi</p>
                    <p className="font-medium text-gray-900">{selectedUser.formatted_course_start_date}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-500">Oxirgi yangilanish</p>
                    <p className="font-medium text-gray-900">{new Date(selectedUser.updated_at).toLocaleString('uz-UZ')}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeUserDetails}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumFoyda;