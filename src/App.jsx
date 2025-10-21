// src/App.jsx - WITH ONBOARDING
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuthStore from './store/authStore';

// Components
import Layout from './components/layout/Layout';
import PrivateRoute from './components/auth/PrivateRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Practice from './pages/Practice';

// AI Components
import MathTutor from './components/ai/MathTutor';

// Onboarding
import OnboardingFlow from './pages/OnboardingFlow';
import PersonalizedDashboard from './pages/PersonalizedDashboard';

function App() {
    const initAuth = useAuthStore(state => state.initAuth);
    const loading = useAuthStore(state => state.loading);

    useEffect(() => {
        initAuth();
    }, [initAuth]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-400">טוען...</p>
                </div>
            </div>
        );
    }

    return (
        <Router>
            <Toaster position="top-center" />

            <Routes>
                {/* ONBOARDING - Fullscreen */}
                <Route
                    path="/onboarding"
                    element={
                        <PrivateRoute>
                            <OnboardingFlow />
                        </PrivateRoute>
                    }
                />

                {/* Routes with Layout */}
                <Route path="/" element={<Layout />}>
                    {/* Public Routes */}
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                    {/* Protected Routes */}
                    <Route
                        path="dashboard"
                        element={
                            <PrivateRoute>
                                <SmartDashboard />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="practice"
                        element={
                            <PrivateRoute>
                                <Practice />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="math-tutor"
                        element={
                            <PrivateRoute>
                                <MathTutor />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="user-dashboard"
                        element={
                            <PrivateRoute>
                                <UserDashboard />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

// Smart Dashboard - Routes to onboarding or personalized dashboard
function SmartDashboard() {
    const navigate = useNavigate();
    const needsOnboarding = useAuthStore(state => state.needsOnboarding);
    const studentProfile = useAuthStore(state => state.studentProfile);

    useEffect(() => {
        if (needsOnboarding) {
            navigate('/onboarding', { replace: true });
        }
    }, [needsOnboarding, navigate]);

    if (needsOnboarding) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-300">מעביר לטופס הכנה...</p>
                </div>
            </div>
        );
    }

    // Show personalized dashboard if onboarding completed
    if (studentProfile && studentProfile.onboardingCompleted) {
        return <PersonalizedDashboard />;
    }

    // Fallback to regular dashboard
    return <UserDashboard />;
}

export default App;
