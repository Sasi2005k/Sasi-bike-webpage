'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
             style={{
                 padding: scrolled ? '1rem 0' : '1.5rem 0',
                 backgroundColor: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
                 backdropFilter: scrolled ? 'blur(10px)' : 'none',
                 transition: 'all 0.3s ease'
             }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--accent)' }}>
                    HUNTER <span style={{ color: '#fff' }}>350</span>
                </Link>
                
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/gallery" className="nav-link">Gallery</Link>
                    <Link href="/modifications" className="nav-link">Modifications</Link>
                    <Link href="/auth" style={{ 
                        padding: '0.5rem 1.5rem', 
                        borderRadius: '25px', 
                        backgroundColor: 'var(--accent)', 
                        color: '#000',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>Login</Link>
                </div>
            </div>

            <style jsx>{`
                .nav-link {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.8);
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--accent);
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
