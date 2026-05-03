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

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h1 style={{ 
                    fontSize: 'clamp(3rem, 10vw, 6rem)', 
                    lineHeight: '1.1',
                    marginBottom: '1rem',
                    textTransform: 'uppercase'
                }} className="animate-fade-in">
                    A Shot of <br />
                    <span style={{ color: 'var(--accent)' }}>Motorcycling</span>
                </h1>
                <p style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--text-muted)', 
                    maxWidth: '600px', 
                    margin: '0 auto 2rem'
                }} className="animate-fade-in">
                    The Royal Enfield Hunter 350. Built for the urban sprawl, designed for the ride of your life.
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
