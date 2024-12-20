import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <BackgroundLines className="min-h-screen bg-gradient-to-br from-sky-light via-white to-cloud-gray">
      <div className="min-h-screen flex items-center justify-center p-4 relative">


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/50">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 mx-auto bg-gradient-to-r from-sky-dark to-sky-accent rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={isLogin ? 'login' : 'register'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-4xl font-bold bg-gradient-to-r from-sky-dark to-sky-accent bg-clip-text text-transparent"
                >
                  {isLogin ? 'Welcome Back!' : 'Join ClubCloud'}
                </motion.h1>
              </AnimatePresence>

              <motion.p
                className="text-gray-600 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isLogin
                  ? 'Sign in to connect with your STEM Academy clubs'
                  : 'Create an account to get started with STEM clubs'}
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
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
              </AnimatePresence>

              <motion.input
                type="email"
                placeholder="School Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-sky-dark focus:ring-2 focus:ring-sky-dark/20 transition-all outline-none"
                required
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />

              <motion.input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-sky-dark focus:ring-2 focus:ring-sky-dark/20 transition-all outline-none"
                required
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-sky-dark to-sky-accent text-white rounded-lg font-semibold relative overflow-hidden group flex items-center justify-center"
                disabled={isLoading}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform"
                  transition={{ duration: 0.5 }}
                />
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </motion.button>
            </form>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={toggleMode}
                className="text-sky-dark hover:text-sky-accent transition-colors relative group"
              >
                <span className="relative z-10">
                  {isLogin
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Sign in'}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-accent group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </BackgroundLines>
  );
};

export default AuthPage;