'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div className="glass" style={{ width: '100%', maxWidth: '450px', padding: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                        {isLogin ? 'Welcome Back' : 'Join the Pack'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>
                        {isLogin ? 'Login to your account' : 'Create an account to start sharing'}
                    </p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {!isLogin && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Username</label>
                                <input type="text" style={{ 
                                    padding: '1rem', 
                                    background: 'rgba(255,255,255,0.05)', 
                                    border: '1px solid var(--border)', 
                                    borderRadius: '4px',
                                    color: '#fff'
                                }} placeholder="Enter username" />
                            </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                            <input type="email" style={{ 
                                padding: '1rem', 
                                background: 'rgba(255,255,255,0.05)', 
                                border: '1px solid var(--border)', 
                                borderRadius: '4px',
                                color: '#fff'
                            }} placeholder="your@email.com" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Password</label>
                            <input type="password" style={{ 
                                padding: '1rem', 
                                background: 'rgba(255,255,255,0.05)', 
                                border: '1px solid var(--border)', 
                                borderRadius: '4px',
                                color: '#fff'
                            }} placeholder="••••••••" />
                        </div>

                        <button style={{ 
                            padding: '1rem', 
                            backgroundColor: 'var(--accent)', 
                            color: '#000', 
                            fontWeight: '700', 
                            borderRadius: '4px',
                            marginTop: '1rem'
                        }}>
                            {isLogin ? 'LOGIN' : 'SIGN UP'}
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"} {' '}
                        <span 
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: '600' }}
                        >
                            {isLogin ? 'Register Now' : 'Login Here'}
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AuthPage;
