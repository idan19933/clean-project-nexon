// src/pages/Home.jsx - CLEAN VERSION
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Sparkles, ArrowLeft, BookOpen, Zap } from 'lucide-react';
import useAuthStore from '../store/authStore';

const Home = () => {
    const user = useAuthStore(state => state.user);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900" dir="rtl">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <Brain className="w-24 h-24 text-purple-400 mx-auto" />
                    </motion.div>

                    <h1 className="text-6xl font-black text-white mb-6">
                        ברוכים הבאים ל-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Nexon</span>
                    </h1>

                    <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        פלטפורמת הלמידה החכמה שלך למתמטיקה 🚀
                    </p>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        למד מתמטיקה עם בינה מלאכותית מתקדמת, תרגולים אינטראקטיביים, ומעקב אחר ההתקדמות שלך
                    </p>

                    {!user ? (
                        <div className="flex gap-4 justify-center">
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
                                >
                                    התחל עכשיו בחינם
                                </motion.button>
                            </Link>

                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all"
                                >
                                    התחבר
                                </motion.button>
                            </Link>
                        </div>
                    ) : (
                        <Link to="/dashboard">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl"
                            >
                                לך ללוח הבקרה
                                <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                            </motion.button>
                        </Link>
                    )}
                </motion.div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    {[
                        {
                            icon: Brain,
                            title: 'למידה עם AI',
                            description: 'נקסון, המורה הוירטואלי שלך, מותאם אישית לרמה שלך',
                            color: 'from-purple-500 to-pink-500'
                        },
                        {
                            icon: Target,
                            title: 'תרגול ממוקד',
                            description: 'תרגולים מותאמים לנושאים שאתה צריך לשפר',
                            color: 'from-blue-500 to-cyan-500'
                        },
                        {
                            icon: TrendingUp,
                            title: 'מעקב התקדמות',
                            description: 'עקוב אחר ההתקדמות שלך וצפה בשיפור',
                            color: 'from-orange-500 to-red-500'
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
                >
                    <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-white mb-4">מוכן להתחיל?</h2>
                    <p className="text-xl text-white/90 mb-8">הצטרף אלינו והתחל ללמוד מתמטיקה בצורה חכמה יותר</p>
                    
                    {!user && (
                        <Link to="/register">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white text-purple-600 rounded-2xl font-black text-xl shadow-2xl hover:shadow-white/50 transition-all"
                            >
                                צור חשבון בחינם
                            </motion.button>
                        </Link>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
