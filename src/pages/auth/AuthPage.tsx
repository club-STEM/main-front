import { useState } from 'react';
import { motion } from 'framer-motion';

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // log/reg
    };

    const toggleMode = () => setIsLogin(!isLogin);

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-light to-white flex items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/30 rounded-full blur-xl"
                        animate={{
                            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        style={{
                            width: `${Math.random() * 400 + 100}px`,
                            height: `${Math.random() * 400 + 100}px`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-sky-dark mb-2">
                            {isLogin ? 'Welcome Back!' : 'Join ClubCloud'}
                        </h1>
                        <p className="text-gray-600">
                            {isLogin
                                ? 'Sign in to connect with your STEM Academy clubs'
                                : 'Create an account to get started with STEM clubs'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-sky-dark focus:ring-2 focus:ring-sky-dark/20 transition-all outline-none"
                                    required
                                />
                            </motion.div>
                        )}

                        <input
                            type="email"
                            placeholder="School Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-sky-dark focus:ring-2 focus:ring-sky-dark/20 transition-all outline-none"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-sky-dark focus:ring-2 focus:ring-sky-dark/20 transition-all outline-none"
                            required
                        />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 bg-sky-dark text-white rounded-lg font-semibold hover:bg-sky-dark/90 transition-colors"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </motion.button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={toggleMode}
                            className="text-sky-dark hover:text-sky-dark/80 transition-colors"
                        >
                            {isLogin
                                ? "Don't have an account? Sign up"
                                : 'Already have an account? Sign in'}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthPage;