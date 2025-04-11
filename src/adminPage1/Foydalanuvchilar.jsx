import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

const UsersAdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [editForm, setEditForm] = useState({
    fullName: '',
    codeName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.infinity-school.uz/api/users');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm) ||
    user.codename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const closeUserDetails = () => {
    setSelectedUser(null);
  };

  // Delete function
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`https://api.infinity-school.uz/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        // Muvaffaqiyatli o'chirildi
        console.log(data.message);
        // Foydalanuvchilar ro'yxatini yangilash
        window.location.reload();
      } else {
        // Xatolik yuz berdi
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Delete button handler
  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteConfirmModal(true);
  };

  // Confirm delete handler
  const handleConfirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id);
      setDeleteConfirmModal(false);
      setUserToDelete(null);
    }
  };

  // Edit function
  const updateUser = async (userId, userData) => {
    try {
      const response = await fetch(`https://api.infinity-school.uz/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        // Muvaffaqiyatli yangilandi
        console.log(data.message);
        // Foydalanuvchilar ro'yxatini yangilash
        window.location.reload();
      } else {
        // Xatolik yuz berdi
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Edit button handler
  const handleEditClick = (user) => {
    setUserToEdit(user);
    setEditForm({
      fullName: user.fullname,
      codeName: user.codename,
      email: user.email,
      phone: user.phone
    });
    setEditModal(true);
  };

  // Form change handler
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit edit handler
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      updateUser(userToEdit.id, editForm);
      setEditModal(false);
      setUserToEdit(null);
    }
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
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Users Management</h1>
        
        {/* Search and filter */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
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
        </div>

        {/* Desktop View - Table */}
        {!isMobile && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-800 font-medium">
                                {user.fullname.split(' ').map(name => name[0]).join('')}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.fullname}</div>
                              <div className="text-sm text-gray-500">{user.codename}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.email}</div>
                          <div className="text-sm text-gray-500">{user.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDistance(new Date(user.created_at), new Date(), { addSuffix: true })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            onClick={() => handleUserSelect(user)} 
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => handleEditClick(user)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteClick(user)}
                            className="text-red-600 hover:text-red-900 transition-colors duration-200"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                        No users found matching your search criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Mobile View - Cards */}
        {isMobile && (
          <div className="grid grid-cols-1 gap-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-800 font-medium text-lg">
                          {user.fullname.split(' ').map(name => name[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="text-lg font-semibold text-gray-900">{user.fullname}</div>
                        <div className="text-sm text-gray-500">{user.codename}</div>
                      </div>
                      <div className="ml-2 text-sm font-medium text-gray-500">
                        ID: {user.id}
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600">{user.email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm text-gray-600">{user.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-600">
                          {formatDistance(new Date(user.created_at), new Date(), { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-5 flex justify-between border-t pt-4">
                      <button 
                        onClick={() => handleUserSelect(user)} 
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => handleEditClick(user)}
                        className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(user)}
                        className="bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                No users found matching your search criteria
              </div>
            )}
          </div>
        )}

        {/* User count */}
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredUsers.length} of {users.length} users
        </div>

        {/* User detail modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">User Details</h2>
                  <button 
                    onClick={closeUserDetails}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 text-2xl font-medium">
                      {selectedUser.fullname.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{selectedUser.fullname}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Username / Code Name</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{selectedUser.codename}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{selectedUser.email}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{selectedUser.phone}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500">Created</h3>
                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {new Date(selectedUser.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {new Date(selectedUser.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button 
                    onClick={closeUserDetails}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Close
                  </button>
                  <button className="bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Edit User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Foydalanuvchini o'chirish
                </h2>
                
                <p className="text-gray-600 text-center mb-6">
                  Siz rostdan ham <span className="font-semibold">{userToDelete?.fullname}</span> foydalanuvchisini o'chirmoqchimisiz?
                  Bu amalni qaytarib bo'lmaydi.
                </p>
                
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={() => {
                      setDeleteConfirmModal(false);
                      setUserToDelete(null);
                    }}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Bekor qilish
                  </button>
                  <button 
                    onClick={handleConfirmDelete}
                    className="bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all">
              <div className="relative">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Foydalanuvchi ma'lumotlarini tahrirlash</h2>
                    </div>
                    <button 
                      onClick={() => {
                        setEditModal(false);
                        setUserToEdit(null);
                      }}
                      className="text-white hover:text-gray-200 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="p-6">
                  <form onSubmit={handleEditSubmit} className="space-y-6">
                    {/* User Avatar */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="h-24 w-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-800 text-3xl font-medium">
                            {editForm.fullName.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">To'liq ism</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="fullName"
                            value={editForm.fullName}
                            onChange={handleEditFormChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Username / Code Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="codeName"
                            value={editForm.codeName}
                            onChange={handleEditFormChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={editForm.email}
                            onChange={handleEditFormChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Telefon</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={editForm.phone}
                            onChange={handleEditFormChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-4 pt-4 border-t">
                      <button
                        type="button"
                        onClick={() => {
                          setEditModal(false);
                          setUserToEdit(null);
                        }}
                        className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Bekor qilish
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
                      >
                        Saqlash
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersAdminPanel;