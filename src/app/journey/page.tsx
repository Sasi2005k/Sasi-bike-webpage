'use client';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const JourneyPage = () => {
    const [journeys, setJourneys] = useState([
        {
            id: 'munnar-2026',
            title: 'Misty Peaks of Munnar',
            image: '/images/ride.jpeg',
            experience: 'A soul-stirring ride through the emerald tea plantations of Kerala. The Hunter 350 carved through the 72 hairpin bends with absolute precision.',
            spots: ['Mattupetty Dam', 'Eravikulam National Park', 'Top Station Viewpoint'],
            features: { distance: '450km', terrain: 'Hilly/Curves', difficulty: 'Moderate' }
        },
        {
            id: 'coast-run',
            title: 'The Blue Coast Run',
            image: '/images/hero.jpeg',
            experience: 'Riding parallel to the Arabian Sea. The salt in the air and the steady thump of the J-series engine made this an unforgettable coastal escape.',
            spots: ['Maravanthe Beach', 'Murudeshwar Temple', 'Gokarna Cliff'],
            features: { distance: '320km', terrain: 'Coastal/Flat', difficulty: 'Easy' }
        }
    ]);

    const [editId, setEditId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<any>(null);

    const startEdit = (journey: any) => {
        setEditId(journey.id);
        setEditForm({ ...journey });
    };

    const saveEdit = () => {
        setJourneys(journeys.map(j => j.id === editId ? editForm : j));
        setEditId(null);
        setEditForm(null);
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />
            
            <section style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                        Ride <span style={{ color: 'var(--accent)' }}>Journeys</span>
                    </h1>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '5rem' }}>
                        Documenting the miles, the smiles, and the spirit of exploration.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6rem' }}>
                        {journeys.map((journey, idx) => (
                            <div key={journey.id} className="reveal-animation" style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                                gap: '4rem',
                                alignItems: 'center'
                            }}>
                                <div style={{ 
                                    height: '450px', 
                                    borderRadius: '20px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                    order: idx % 2 === 0 ? 1 : 2
                                }}>
                                    <img src={journey.image} alt={journey.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                
                                <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '2px' }}>{journey.features.distance} JOURNEY</span>
                                        <button onClick={() => startEdit(journey)} style={{ color: 'var(--accent)', fontSize: '0.8rem', border: '1px solid var(--accent)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>EDIT LOG</button>
                                    </div>

                                    {editId === journey.id ? (
                                        <div className="glass" style={{ padding: '2rem', marginTop: '1rem' }}>
                                            <input style={{ width: '100%', background: 'transparent', color: '#fff', fontSize: '1.5rem', border: 'none', borderBottom: '1px solid var(--accent)', marginBottom: '1rem' }} value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} />
                                            <textarea style={{ width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid var(--border)', padding: '1rem', minHeight: '100px', marginBottom: '1rem' }} value={editForm.experience} onChange={e => setEditForm({...editForm, experience: e.target.value})} />
                                            <button onClick={saveEdit} style={{ backgroundColor: 'var(--accent)', color: '#000', padding: '0.5rem 1.5rem', fontWeight: 'bold', borderRadius: '4px' }}>SAVE CHANGES</button>
                                        </div>
                                    ) : (
                                        <>
                                            <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>{journey.title}</h2>
                                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '2rem' }}>
                                                {journey.experience}
                                            </p>
                                        </>
                                    )}
                                    
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>Must Visit Spots:</h4>
                                        <ol style={{ paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                                            {journey.spots.map((spot, i) => (
                                                <li key={i} style={{ marginBottom: '0.5rem' }}>{spot}</li>
                                            ))}
                                        </ol>
                                    </div>

                                    <Link 
                                        href={`/journey/${journey.id}`} 
                                        target="_blank"
                                        style={{ 
                                            padding: '1rem 2.5rem', 
                                            border: '1px solid var(--accent)', 
                                            color: 'var(--accent)', 
                                            borderRadius: '50px',
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                            display: 'inline-block'
                                        }}
                                    >
                                        FULL RIDE LOG ↗
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default JourneyPage;
