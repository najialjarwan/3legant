import { useState } from 'react';
import { NavBar, NotificationBar } from '@navigation';
import { Footer } from '@footer';

const MinimalLayout = ({ children, onMenuOpen, onCartOpen }) => {
  const [showNotificationBar, setShowNotificationBar] = useState(true);

  return (
    <>
      {showNotificationBar && (
        <NotificationBar
          onClose={() => setShowNotificationBar(prev => !prev)}
          className='2xl:hidden'
        />
      )}

      <NavBar
        onMenuOpen={onMenuOpen}
        onCartOpen={onCartOpen}
      />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MinimalLayout;

