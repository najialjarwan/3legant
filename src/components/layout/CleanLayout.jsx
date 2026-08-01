import { NavBar } from '@navigation';
import { Footer } from '@footer';

const CleanLayout = ({ children, onMenuOpen, onCartOpen }) => {
    return (
        <>
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

export default CleanLayout;
