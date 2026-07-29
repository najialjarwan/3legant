// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalLayout, MainLayout, MinimalLayout, StandardLayout } from '@layout';
import {
  HomePage,
  AuthPage,
  ProductPage,
  ShopPage,
  CartPage,
  AccountPage,
  BlogPage,
  BlogArticlePage,
} from '@pages';
import { ProductProvider } from '@product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GlobalLayout Shell={MainLayout} />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/product"
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
          <Route path='/cart' element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />

        <Route element={<GlobalLayout Shell={StandardLayout} />}>
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
