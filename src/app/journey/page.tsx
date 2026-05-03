'use client';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const JourneyPage = () => {
    const [journeys, setJourneys] = useState([
        {
            id: 'munnar-2026',
            title: 'Misty Peaks of Munnar',
            start: 'Kochi',
            destination: 'Munnar',
            distance: '130km',
            image: '/images/ride.jpeg',
            experience: 'A soul-stirring ride through the emerald tea plantations of Kerala.',
            spots: ['Mattupetty Dam', 'Top Station Viewpoint'],
            features: { terrain: 'Hilly', difficulty: 'Moderate' }
        }
    ]);

    const [editId, setEditId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<any>(null);

    const startEdit = (journey: any) => {
        setEditId(journey.id);
        setEditForm({ ...journey });
    };

    const saveEdit = () => {
        if (editId === 'new') {
            setJourneys([...journeys, { ...editForm, id: Date.now().toString() }]);
        } else {
            setJourneys(journeys.map(j => j.id === editId ? editForm : j));
        }
        setEditId(null);
        setEditForm(null);
    };

    const deleteJourney = (id: string) => {
        if (confirm("Permanently delete this journey log?")) {
            setJourneys(journeys.filter(j => j.id !== id));
        }
    };

    const startCreate = () => {
        setEditId('new');
        setEditForm({
            title: 'New Trip',
            start: '',
            destination: '',
            distance: '',
            image: '/images/hero.jpeg',
            experience: '',
            spots: [],
            features: { terrain: 'Road', difficulty: 'Easy' }
        });
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)' }} className="animate-page-fade">
            <div className="liquid-bg"></div>
            <Navbar />
            
            <section style={{ padding: '8rem 0 4rem', position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                        The <span style={{ color: 'var(--accent)' }}>Hunter</span> Logs
                    </h1>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '5rem' }}>
                        <button onClick={startCreate} style={{ backgroundColor: 'var(--accent)', color: '#000', padding: '1rem 3rem', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}>
                            + LOG NEW RIDE
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10rem' }}>
                        {/* New Journey Creation Form */}
                        {editId === 'new' && (
                            <div className="glass" style={{ padding: '4rem', borderRadius: '30px', border: '1px solid var(--accent)' }}>
                                <h2 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>New Adventure</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <input style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1rem', border: '1px solid var(--border)' }} placeholder="Trip Title" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} />
                                    <input style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1rem', border: '1px solid var(--border)' }} placeholder="Distance" value={editForm.distance} onChange={e => setEditForm({...editForm, distance: e.target.value})} />
                                    <input style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1rem', border: '1px solid var(--border)' }} placeholder="Starting From" value={editForm.start} onChange={e => setEditForm({...editForm, start: e.target.value})} />
                                    <input style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1rem', border: '1px solid var(--border)' }} placeholder="Destination" value={editForm.destination} onChange={e => setEditForm({...editForm, destination: e.target.value})} />
                                </div>
                                <textarea style={{ width: '100%', background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1rem', border: '1px solid var(--border)', minHeight: '150px', margin: '2rem 0' }} placeholder="Experience..." value={editForm.experience} onChange={e => setEditForm({...editForm, experience: e.target.value})} />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button onClick={saveEdit} style={{ background: 'var(--accent)', color: '#000', padding: '1rem 3rem', fontWeight: 'bold', borderRadius: '50px' }}>CREATE TRIP</button>
                                    <button onClick={() => setEditId(null)} style={{ color: '#fff' }}>Cancel</button>
                                </div>
                            </div>
                        )}

                        {journeys.map((journey, idx) => (
                            <div key={journey.id} className="reveal-animation grid-mobile-stack" style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                                gap: '6rem',
                                alignItems: 'center'
                            }}>
                                <div style={{ position: 'relative' }}>
                                    <div className="image-float" style={{ 
                                        height: 'clamp(300px, 50vh, 500px)', 
                                        borderRadius: '30px', 
                                        overflow: 'hidden', 
                                        boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <img src={journey.image} alt={journey.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <button onClick={() => deleteJourney(journey.id)} style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'rgba(255,0,0,0.9)', color: '#fff', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontWeight: 'bold', cursor: 'pointer', zIndex: 10 }}>✕</button>
                                    
                                    {/* Tech Readout Overlay */}
                                    <div style={{ 
                                        position: 'absolute', 
                                        bottom: '-30px', 
                                        left: '50%', 
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0,0,0,0.9)',
                                        border: '1px solid var(--accent)',
                                        padding: '1.5rem 2rem',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        gap: '2rem',
                                        zIndex: 5,
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Distance</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>{journey.distance}</p>
                                        </div>
                                        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem', textAlign: 'center' }}>
                                            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Route</p>
                                            <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{journey.start} ➔ {journey.destination}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <span className="glow-text" style={{ color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase' }}>Live Journey Log</span>
                                        <button onClick={() => startEdit(journey)} style={{ color: '#fff', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 1.2rem', borderRadius: '30px' }}>EDIT ROUTE</button>
                                    </div>

                                    {editId === journey.id ? (
                                        <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
                                            <input style={{ width: '100%', background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '1rem', border: '1px solid var(--border)', marginBottom: '1rem' }} value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} />
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                                <input style={{ background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '1rem', border: '1px solid var(--border)' }} placeholder="From" value={editForm.start} onChange={e => setEditForm({...editForm, start: e.target.value})} />
                                                <input style={{ background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '1rem', border: '1px solid var(--border)' }} placeholder="To" value={editForm.destination} onChange={e => setEditForm({...editForm, destination: e.target.value})} />
                                            </div>
                                            <input style={{ width: '100%', background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '1rem', border: '1px solid var(--border)', marginBottom: '1rem' }} placeholder="Distance" value={editForm.distance} onChange={e => setEditForm({...editForm, distance: e.target.value})} />
                                            <textarea style={{ width: '100%', background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '1rem', border: '1px solid var(--border)', minHeight: '100px', marginBottom: '2rem' }} value={editForm.experience} onChange={e => setEditForm({...editForm, experience: e.target.value})} />
                                            <button onClick={saveEdit} style={{ background: 'var(--accent)', color: '#000', width: '100%', padding: '1rem', fontWeight: 'bold' }}>UPDATE RIDE</button>
                                        </div>
                                    ) : (
                                        <>
                                            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>{journey.title}</h2>
                                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '3rem', fontStyle: 'italic' }}>
                                                "{journey.experience}"
                                            </p>
                                            
                                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                                <Link href={`/journey/${journey.id}`} target="_blank" className="btn-shine" style={{ 
                                                    padding: '1.2rem 3rem', 
                                                    background: 'var(--accent)', 
                                                    color: '#000', 
                                                    borderRadius: '50px',
                                                    fontWeight: 'bold',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}>View Full Report</Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes pageFade {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-page-fade {
                    animation: pageFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .image-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .liquid-bg {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, #000 100%);
                    z-index: -2;
                }
                .glow-text {
                    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
                }
            `}</style>
        </main>
    );
};

export default JourneyPage;
