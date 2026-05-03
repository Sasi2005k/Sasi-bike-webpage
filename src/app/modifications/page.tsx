'use client';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';

const ModificationsPage = () => {
    const [mods, setMods] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMods = async () => {
            try {
                const res = await fetch('/api/posts?type=modification');
                const data = await res.json();
                setMods(data);
            } catch (err) {
                console.error('Error fetching mods:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchMods();
    }, []);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />
            
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem' }}>Modification <span style={{ color: 'var(--accent)' }}>Vault</span></h1>
                        <button style={{ 
                            padding: '1rem 2rem', 
                            backgroundColor: 'var(--accent)', 
                            color: '#000', 
                            fontWeight: '700', 
                            borderRadius: '4px' 
                        }}>
                            + POST YOUR MOD
                        </button>
                    </div>

                    {loading ? (
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading modifications...</p>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {mods.map(mod => (
                                <div key={mod.id} className="glass" style={{ overflow: 'hidden' }}>
                                    <div style={{ height: '200px' }}>
                                        <img src={mod.images[0]} alt={mod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase' }}>{mod.category}</span>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>${mod.cost}</span>
                                        </div>
                                        <h3 style={{ marginBottom: '1rem' }}>{mod.title}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{mod.user}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ModificationsPage;
