'use client';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

    const handleImportImage = async (event: any) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename', file.name);

        try {
            setLoading(true);
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                const postRes = await fetch('/api/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: file.name.split('.')[0],
                        src: data.path,
                        category: 'Performance',
                        type: 'modification',
                        cost: '100',
                        user: 'Sasi Krish'
                    })
                });

                if (postRes.ok) {
                    alert(`✅ Mod photo imported successfully!`);
                } else {
                    alert(`⚠️ File uploaded, but database error occurred.`);
                }
                window.location.reload();
            } else {
                alert(`❌ Upload failed: ${data.error}`);
            }
        } catch (err: any) {
            alert(`❌ Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />

            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mod-header"
                    >
                        <h1 style={{ fontSize: '3rem' }}>Modification <span style={{ color: 'var(--accent)' }}>Vault</span></h1>
                        <div className="mod-actions">
                            <motion.label 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    backgroundColor: 'transparent',
                                    border: '1px solid var(--accent)',
                                    color: 'var(--accent)',
                                    fontWeight: '700',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    display: 'inline-block'
                                }}
                            >
                                IMPORT JPEG/PNG
                                <input type="file" accept="image/*" onChange={handleImportImage} style={{ display: 'none' }} />
                            </motion.label>
                            <motion.button 
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    backgroundColor: 'var(--accent)',
                                    color: '#000',
                                    fontWeight: '700',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                + POST YOUR MOD
                            </motion.button>
                        </div>
                    </motion.div>

                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                style={{ width: '40px', height: '40px', border: '3px solid var(--accent)', borderTopColor: 'transparent', borderRadius: '50%' }}
                            />
                        </div>
                    ) : (
                        <motion.div 
                            layout
                            className="grid-mobile-stack" 
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}
                        >
                            <AnimatePresence mode="popLayout">
                                {mods.map((mod, idx) => (
                                    <motion.div 
                                        key={mod._id || mod.id || idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        whileHover={{ y: -10 }}
                                        className="glass" 
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ height: '200px', overflow: 'hidden' }}>
                                            <motion.img 
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                src={mod.src || (mod.images && mod.images[0]) || '/images/hero.jpeg'} 
                                                alt={mod.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                            />
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
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ModificationsPage;
