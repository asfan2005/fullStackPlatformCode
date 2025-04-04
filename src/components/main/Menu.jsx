// Function to handle menu item click with auth check
const handleMenuItemClick = (item) => {
  if (item.requiresAuth && !isAuthenticated) {
    // Show login prompt or message
    toast.error("Bu bo'limga kirish uchun tizimga kirishingiz kerak");
    return;
  }
  
  setCurrentPage(item.id);
  // Always close the menu when navigating to any page
  closeMenu();
};

const handleMenuClick = (id, requiresAuth, isPremium) => {
  if (requiresAuth && !isAuthenticated) {
    setCurrentPage('login');
    closeMenu();
    return;
  }
  if (isPremium && !isPremium) {
    setCurrentPage('premium-subscription');
    closeMenu();
    return;
  }
  setCurrentPage(id);
  // Always close the menu regardless of the page
  closeMenu();
}; 