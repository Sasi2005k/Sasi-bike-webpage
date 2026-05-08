'use client';
import { motion } from 'framer-motion';

const Specs = () => {
    const specifications = [
        { label: 'Engine', value: '349cc, Single Cylinder, Air-Oil Cooled' },
        { label: 'Max Torque', value: '27 Nm @ 4000 rpm' },
        { label: 'Fuel Capacity', value: '13 Litres' },
        { label: 'Weight', value: '181 kg (Kerb)' },
        { label: 'Mileage', value: '36.2 kmpl' },
        { label: 'Variants', value: 'Retro & Metro' }
    ];

    return (
        <section style={{ padding: '8rem 0', background: '#050505' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pure <span style={{ color: 'var(--accent)' }}>Power</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Engineered for agility and style. Tap to experience.</p>
                </motion.div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '2rem' 
                }}>
                    {specifications.map((spec, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.05, 
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                borderColor: 'var(--accent)',
                                y: -5
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="glass" 
                            style={{ 
                                padding: '2.5rem', 
                                cursor: 'pointer',
                                transition: 'border-color 0.3s ease'
                            }}
                        >
                            <h3 style={{ 
                                fontSize: '0.9rem', 
                                color: 'var(--accent)', 
                                textTransform: 'uppercase', 
                                marginBottom: '0.5rem'
                            }}>
                                {spec.label}
                            </h3>
                            <p style={{ 
                                fontSize: '1.6rem', 
                                fontWeight: '700'
                            }}>
                                {spec.value}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specs;
