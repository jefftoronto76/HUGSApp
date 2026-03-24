import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StrokeSupportGuide from './pages/StrokeSupportGuide';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/guides/stroke-support" element={<StrokeSupportGuide />} />
        <Route path="/" element={<Navigate to="/guides/stroke-support" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);