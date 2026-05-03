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
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                    HUNTER <span style={{ color: '#fff' }}>350</span>
                </Link>
                
                <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/gallery" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                        Gallery
                    </Link>
                    <Link href="/modifications" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        Modifications
                    </Link>
                    <Link href="/journey" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                        Journey
                    </Link>
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
