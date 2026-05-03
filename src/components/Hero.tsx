'use client';
import Link from 'next/link';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/images/hero.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))'
                }}></div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
                <h1 className="motion-header" style={{ 
                    fontSize: '6rem', 
                    fontWeight: '900', 
                    lineHeight: '1', 
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-2px',
                }}>
                    IT'S <span style={{ color: 'var(--accent)' }}>SASI KRISH</span> <br/> 
                    HUNTER <span style={{ fontStyle: 'italic', color: '#fff' }}>350</span>
                </h1>
                
                <p className="animate-fade-in" style={{ 
                    fontSize: '1.2rem', 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '3rem',
                    letterSpacing: '4px',
                    textTransform: 'uppercase'
                }}>
                    Engineering Agility | Defining Style
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} className="animate-fade-in">
                    <Link href="/gallery" style={{
                        padding: '1.2rem 3rem',
                        backgroundColor: 'var(--accent)',
                        backgroundImage: 'linear-gradient(45deg, var(--accent), #ffcc33)',
                        color: '#000',
                        fontWeight: '800',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)',
                        display: 'inline-block',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }} onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(212, 175, 55, 0.5)';
                    }}
                       onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(212, 175, 55, 0.3)';
                    }}>
                        EXPLORE THE HUNTER
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
