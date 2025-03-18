import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PremiumStatistika() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [stats, setStats] = useState({
    totalPayments: 0,
    totalRevenue: 0,
    completedPayments: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/payment-page/all');
        if (!response.ok) {
          throw new Error('Server error');
        }
        const result = await response.json();
        
        if (result.success && result.data) {
          setPayments(result.data.payments || []);
          setPagination(result.data.pagination || null);
          calculateStats(result.data.payments || []);
        } else {
          throw new Error(result.message || 'Ma\'lumotlarni olishda xatolik');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateStats = (data) => {
    const completed = data.filter(p => p.status === 'completed');
    const totalAmount = completed.reduce((sum, p) => {
      const amount = parseInt(p.plan_price.replace(/[^\d]/g, '')) || 0;
      return sum + amount;
    }, 0);

    setStats({
      totalPayments: data.length,
      totalRevenue: totalAmount,
      completedPayments: completed.length
    });
  };

  const prepareMonthlyData = () => {
    const monthlyData = {};
    payments.forEach(payment => {
      const date = new Date(payment.created_at);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      
      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          name: new Date(date.getFullYear(), date.getMonth(), 1)
            .toLocaleDateString('uz-UZ', { month: 'long' }),
          amount: 0,
          count: 0
        };
      }
      
      if (payment.status === 'completed') {
        const amount = parseInt(payment.plan_price.replace(/[^\d]/g, '')) || 0;
        monthlyData[monthKey].amount += amount;
        monthlyData[monthKey].count += 1;
      }
    });

    return Object.values(monthlyData);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-purple-500"></div>
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
            className="w-full rounded-lg bg-purple-500 py-2 px-4 font-bold text-white transition hover:bg-purple-600"
          >
            Qayta yuklash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Premium To'lovlar Statistikasi
          </h1>
          <p className="mt-2 text-gray-600">To'lovlar va daromadlar haqida ma'lumot</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Total Payments Card */}
          <div className="rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-6 text-white shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Jami to'lovlar</h2>
                <p className="text-2xl font-bold">{stats.totalPayments}</p>
              </div>
            </div>
          </div>

          {/* Total Revenue Card */}
          <div className="rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 text-white shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Jami daromad</h2>
                <p className="text-2xl font-bold">{(stats.totalRevenue / 1000).toFixed(0)}k so'm</p>
              </div>
            </div>
          </div>

          {/* Completed Payments Card */}
          <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Yakunlangan to'lovlar</h2>
                <p className="text-2xl font-bold">{stats.completedPayments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Oylik daromad</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={prepareMonthlyData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${(value / 1000).toFixed(0)}k so'm`} />
                <Legend />
                <Bar dataKey="amount" name="Daromad" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payments Table */}
        <div className="rounded-xl bg-white shadow-lg">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800">To'lovlar ro'yxati</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">F.I.O</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Telegram</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Dars vaqti</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Dars kunlari</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Summa</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {payment.transaction_id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {payment.full_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {payment.telegram_username}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {payment.course_time_slot}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {payment.course_days}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {payment.plan_price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        payment.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status === 'completed' ? 'Yakunlangan' : 'Jarayonda'}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {payment.formatted_created_at}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {pagination && (
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  disabled={!pagination.hasPrevPage}
                  className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                    pagination.hasPrevPage ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-400'
                  }`}
                >
                  Oldingi
                </button>
                <button
                  disabled={!pagination.hasNextPage}
                  className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                    pagination.hasNextPage ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-400'
                  }`}
                >
                  Keyingi
                </button>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Jami <span className="font-medium">{pagination.totalCount}</span> ta yozuv
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    Sahifa {pagination.currentPage} / {pagination.totalPages}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PremiumStatistika;