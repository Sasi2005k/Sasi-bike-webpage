'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
            <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/images/hero.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))'
                }}></div>
            </motion.div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', padding: '0 2rem' }}>
                <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    style={{ 
                        fontSize: 'clamp(3rem, 10vw, 6rem)', 
                        fontWeight: '900', 
                        lineHeight: '1', 
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-2px',
                    }}
                >
                    IT'S <span style={{ color: 'var(--accent)' }}>SASI KRISH</span> <br/> 
                    HUNTER <span style={{ fontStyle: 'italic', color: '#fff' }}>350</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    style={{ 
                        fontSize: '1.2rem', 
                        color: 'rgba(255,255,255,0.7)', 
                        marginBottom: '3rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase'
                    }}
                >
                    Engineering Agility | Defining Style
                </motion.p>
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <Link href="/gallery" passHref>
                        <motion.span
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(212, 175, 55, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
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
                                letterSpacing: '1px',
                                cursor: 'pointer'
                            }}
                        >
                            EXPLORE THE HUNTER
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
