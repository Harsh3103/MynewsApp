import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CategoryNews from '../pages/NewsCategory';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes({ isAuthenticated }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/NewsCategory"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CategoryNews/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
