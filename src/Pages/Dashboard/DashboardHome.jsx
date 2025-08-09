import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { foodCreatedByPromise } from '../../Api/FoodsApi';
import { myOrderPromise } from '../../Api/OrdersApi';
import { FaUser, FaEnvelope, FaUtensils, FaShoppingCart } from 'react-icons/fa';

const DashboardHome = () => {
  const { user } = use(AuthContext);
  const [userStats, setUserStats] = useState({
    totalFoods: 0,
    totalOrders: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.email) {
        try {
          // Fetch foods created by user
          const foodsData = await foodCreatedByPromise(user.email);
          
          // Fetch orders placed by user
          const ordersData = await myOrderPromise(user.email);

          setUserStats({
            totalFoods: foodsData.length || 0,
            totalOrders: ordersData.length || 0,
            loading: false,
            error: null
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserStats({
            totalFoods: 0,
            totalOrders: 0,
            loading: false,
            error: 'Failed to load user data'
          });
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (userStats.loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
        
        {/* User Info Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300">
              {user?.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="User Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-400">
                  <FaUser className="text-2xl text-white" />
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user?.displayName || 'User'}</h2>
              <p className="text-blue-100 flex items-center">
                <FaEnvelope className="mr-2" />
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Foods Added Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Foods Added</p>
              <p className="text-3xl font-bold text-gray-900">{userStats.totalFoods}</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100">
              <FaUtensils className="text-2xl text-orange-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Total food items you've added to the menu
            </p>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Orders Placed</p>
              <p className="text-3xl font-bold text-gray-900">{userStats.totalOrders}</p>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <FaShoppingCart className="text-2xl text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Total orders you've placed
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="/dashboard/addfood" 
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 text-center transition-colors"
          >
            <FaUtensils className="text-2xl mx-auto mb-2" />
            <p className="font-medium">Add New Food</p>
          </a>
          <a 
            href="/dashboard/myfood" 
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-4 text-center transition-colors"
          >
            <FaUtensils className="text-2xl mx-auto mb-2" />
            <p className="font-medium">View My Foods</p>
          </a>
          <a 
            href="/dashboard/myorders" 
            className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 text-center transition-colors"
          >
            <FaShoppingCart className="text-2xl mx-auto mb-2" />
            <p className="font-medium">View Orders</p>
          </a>
        </div>
      </div>

      {userStats.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {userStats.error}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
