import { useState } from 'react';
import { NotificationBar, NavBar } from '@navigation';
import { Newsletter, Footer } from '@footer';

const MainLayout = ({ children, onMenuOpen, onCartOpen }) => {
  const [showNotificationBar, setShowNotificationBar] = useState(true);
  return (
    <>
      {showNotificationBar && (
        <NotificationBar onClose={() => setShowNotificationBar(prev => !prev)} />
      )}

      <NavBar
        onMenuOpen={onMenuOpen}
        onCartOpen={onCartOpen}
      />

      <main>
        {children}
      </main>

      <Newsletter />

      <Footer />
    </>
  );
};


export default MainLayout;