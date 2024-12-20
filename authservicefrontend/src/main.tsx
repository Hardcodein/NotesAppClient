import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './index.css';
import Login from './pages/Login';
import Profile from './pages/Profile.tsx';
import SupportPage from './pages/Support.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/auth" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/support" element={<SupportPage />} />
            </Routes>
        </Router>
    </StrictMode>
);
