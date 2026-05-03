'use client';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';

const GalleryPage = () => {
    const categories = ['All', 'Stock', 'Modified', 'Rides', 'Events'];
    const [activeTab, setActiveTab] = useState('All');
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        // In a real app, this would fetch from /api/gallery
        // For now we use the mock data directly since it's client-side demo
        const mockGallery = [
            { id: 1, src: '/images/hero.png', category: 'Stock', title: 'Factory Fresh' },
            { id: 2, src: '/images/modified.png', category: 'Modified', title: 'Dark Edition' },
            { id: 3, src: '/images/ride.png', category: 'Rides', title: 'Mountain Escape' },
        ];
        setImages(mockGallery);
    }, []);

    const filteredImages = activeTab === 'All' 
        ? images 
        : images.filter(img => img.category === activeTab);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />
            
            <section style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        Image <span style={{ color: 'var(--accent)' }}>Gallery</span>
                    </h1>

                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '1.5rem', 
                        marginBottom: '4rem',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '30px',
                                    border: `1px solid ${activeTab === cat ? 'var(--accent)' : 'var(--border)'}`,
                                    color: activeTab === cat ? '#000' : '#fff',
                                    backgroundColor: activeTab === cat ? 'var(--accent)' : 'transparent',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        {filteredImages.map(img => (
                            <div key={img.id} className="gallery-item" style={{ 
                                position: 'relative', 
                                height: '300px', 
                                borderRadius: '12px', 
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}>
                                <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                <div className="overlay" style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'rgba(0,0,0,0.6)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }}>
                                    <h3 style={{ color: 'var(--accent)' }}>{img.title}</h3>
                                    <p style={{ fontSize: '0.9rem' }}>{img.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .gallery-item:hover img {
                    transform: scale(1.1);
                }
                .gallery-item:hover .overlay {
                    opacity: 1 !important;
                }
            `}</style>
        </main>
    );
};

export default GalleryPage;
