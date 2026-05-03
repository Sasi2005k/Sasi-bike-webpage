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
                        padding: '1rem 2.5rem',
                        backgroundColor: 'var(--accent)',
                        color: '#000',
                        fontWeight: '700',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        transition: 'transform 0.3s ease',
                        display: 'inline-block'
                    }}>
                        EXPLORE HUNTER
                    </Link>
                    <Link href="/modifications" style={{
                        padding: '1rem 2.5rem',
                        border: '1px solid #fff',
                        color: '#fff',
                        fontWeight: '700',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        display: 'inline-block'
                    }}>
                        JOIN COMMUNITY
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
