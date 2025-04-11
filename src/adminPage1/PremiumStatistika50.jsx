import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function PremiumStatistika50() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalPayments: 0,
    totalRevenue: 0,
    completedPayments: 0,
    averagePayment: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.infinity-school.uz/api/payments/all');
        if (!response.ok) {
          throw new Error('Server error');
        }
        const result = await response.json();
        
        // Debug uchun
        console.log('API Response:', result);
        console.log('Payments:', result.payments);
        
        if (result.success && result.payments) {
          const premium50Payments = result.payments.filter(payment => 
            payment.plan_price && payment.plan_price.includes('50,000')
          );
          
          // Debug uchun
          console.log('Filtered Payments:', premium50Payments);
          
          setPayments(premium50Payments);
          calculateStats(premium50Payments);
        } else {
          throw new Error('Ma\'lumotlarni olishda xatolik');
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
      completedPayments: completed.length,
      averagePayment: completed.length ? Math.round(totalAmount / completed.length) : 0
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

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  const pieData = [
    { name: 'Completed', value: stats.completedPayments },
    { name: 'Pending', value: stats.totalPayments - stats.completedPayments }
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-indigo-500"></div>
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
            className="w-full rounded-lg bg-indigo-500 py-2 px-4 font-bold text-white transition hover:bg-indigo-600"
          >
            Qayta yuklash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Premium 50k To'lovlar Statistikasi
          </h1>
          <p className="mt-2 text-gray-600">50,000 so'mlik premium to'lovlar statistikasi</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Payments Card */}
          <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Jami to'lovlar</h2>
                <p className="text-2xl font-bold text-white">{stats.totalPayments}</p>
              </div>
            </div>
          </div>

          {/* Total Revenue Card */}
          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Jami daromad</h2>
                <p className="text-2xl font-bold text-white">{(stats.totalRevenue / 1000).toFixed(0)}k so'm</p>
              </div>
            </div>
          </div>

          {/* Average Payment Card */}
          <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">O'rtacha to'lov</h2>
                <p className="text-2xl font-bold text-white">{(stats.averagePayment / 1000).toFixed(0)}k so'm</p>
              </div>
            </div>
          </div>

          {/* Completed Payments Card */}
          <div className="rounded-xl bg-gradient-to-br from-teal-500 to-green-600 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Yakunlangan to'lovlar</h2>
                <p className="text-2xl font-bold text-white">{stats.completedPayments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Monthly Revenue Chart */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Oylik daromad</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={prepareMonthlyData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${(value / 1000).toFixed(0)}k so'm`} />
                  <Legend />
                  <Bar dataKey="amount" name="Daromad" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Status Distribution Chart */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-gray-800">To'lovlar statusi</h2>
            <div className="h-[300px]">
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
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800">50,000 so'mlik to'lovlar ({payments.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">F.I.O</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Telegram</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Telefon</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Karta raqami</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Karta egasi</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Summa</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Sana</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Kvitansiya</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {payments.length > 0 ? (
                  payments.map((payment) => (
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
                        {payment.phone_number}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {payment.card_number}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {payment.card_owner}
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
                        {payment.formattedDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {payment.receipt_image_url && (
                          <a 
                            href={`https://api.infinity-school.uz${payment.receipt_image_url}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
                          >
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ko'rish
                          </a>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-6 py-4 text-center text-sm text-gray-500">
                      Ma'lumotlar topilmadi
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Kvitansiyalar section */}
          <div className="mt-8 border-t border-gray-200 px-6 py-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">To'lov kvitansiyalari</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {payments.map(payment => (
                payment.receipt_image_url && (
                  <div key={payment.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="relative pb-[56.25%]">
                      <a 
                        href={`https://api.infinity-school.uz${payment.receipt_image_url}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          src={`https://api.infinity-school.uz${payment.receipt_image_url}`}
                          alt={`${payment.full_name} tomonidan to'lov kvitansiyasi`}
                          className="absolute inset-0 h-full w-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/300x200?text=Rasm+topilmadi";
                          }}
                        />
                      </a>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {payment.full_name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {payment.formattedDate}
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-xs font-medium text-gray-900">
                          {payment.plan_price}
                        </p>
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          payment.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {payment.status === 'completed' ? 'Yakunlangan' : 'Jarayonda'}
                        </span>
                      </div>
                    </div>
    </div>
  )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumStatistika50;