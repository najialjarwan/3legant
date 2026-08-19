import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@contexts';
import {
  GlobalLayout,
  MainLayout,
  MinimalLayout,
  StandardLayout,
  CleanLayout,
} from '@layout';
import {
  HomePage,
  AuthPage,
  ProductPage,
  ShopPage,
  CartPage,
  AccountPage,
  BlogPage,
  BlogPostPage,
  ContactUsPage,
} from '@pages';
import { ProductProvider } from '@product';

const App = () => {
  const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated
      ? <Outlet />
      : <Navigate to="/auth?mode=signin" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GlobalLayout Shell={MainLayout} />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/product/:id"
            element=
            {
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            }
          />

          <Route path="/shop" element={<ShopPage />} />

        </Route>

        <Route element={<GlobalLayout Shell={MinimalLayout} />}>
          <Route path="/cart" element={<CartPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<AccountPage />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthPage />} />

        <Route element={<GlobalLayout Shell={StandardLayout} />}>
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Route>

        <Route element={<GlobalLayout Shell={CleanLayout} />}>
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
