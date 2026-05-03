'use client';
import { useState } from 'react';

const Specs = () => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const specifications = [
        { label: 'Engine', value: '349cc, Single Cylinder, Air-Oil Cooled' },
        { label: 'Max Torque', value: '27 Nm @ 4000 rpm' },
        { label: 'Fuel Capacity', value: '13 Litres' },
        { label: 'Weight', value: '181 kg (Kerb)' },
        { label: 'Mileage', value: '36.2 kmpl' },
        { label: 'Variants', value: 'Retro & Metro' }
    ];

    const handleClick = (index: number) => {
        setClickedIndex(index);
        setTimeout(() => setClickedIndex(null), 200); // Reset after animation
    };

    return (
        <section style={{ padding: '8rem 0', background: '#050505' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pure <span style={{ color: 'var(--accent)' }}>Power</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Engineered for agility and style. Click to interact.</p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '2rem' 
                }}>
                    {specifications.map((spec, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleClick(index)}
                            className={`glass spec-card ${clickedIndex === index ? 'pop-effect' : ''}`} 
                            style={{ 
                                padding: '2.5rem', 
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer',
                                border: clickedIndex === index ? '1px solid var(--accent)' : '1px solid var(--border)'
                            }}
                        >
                            <h3 style={{ 
                                fontSize: '0.9rem', 
                                color: clickedIndex === index ? '#fff' : 'var(--accent)', 
                                textTransform: 'uppercase', 
                                marginBottom: '0.5rem',
                                transition: 'color 0.2s'
                            }}>
                                {spec.label}
                            </h3>
                            <p style={{ 
                                fontSize: '1.6rem', 
                                fontWeight: '700',
                                textShadow: clickedIndex === index ? '0 0 15px var(--accent)' : 'none',
                                transition: 'all 0.2s'
                            }}>
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .spec-card:hover {
                    background: rgba(255, 255, 255, 0.08);
                    transform: translateY(-5px);
                }
                .pop-effect {
                    transform: scale(0.95) !important;
                }
            `}</style>
        </section>
    );
};

export default Specs;
