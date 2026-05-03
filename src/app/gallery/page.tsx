'use client';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';

const GalleryPage = () => {
    const categories = ['All', 'Stock', 'Modified', 'Rides', 'Events'];
    const [activeTab, setActiveTab] = useState('All');
    const [images, setImages] = useState<any[]>([]);
    const [isManageMode, setIsManageMode] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/posts?type=gallery');
            const data = await res.json();
            
            // Safety check: Ensure data is an array
            if (Array.isArray(data)) {
                if (data.length === 0) {
                    setImages([
                        { id: '1', src: '/images/hero.png', category: 'Stock', title: 'Factory Fresh', type: 'gallery' },
                        { id: '2', src: '/images/modified.png', category: 'Modified', title: 'Dark Edition', type: 'gallery' },
                        { id: '3', src: '/images/ride.png', category: 'Rides', title: 'Mountain Escape', type: 'gallery' },
                    ]);
                } else {
                    setImages(data);
                }
            } else {
                console.error("API did not return an array:", data);
                setImages([]); // Reset to empty array if error
            }
        } catch (err) {
            console.error(err);
            setImages([]);
        } finally {
            setLoading(false);
        }
    };

    const handleAddImage = async () => {
        const title = prompt("Enter Bike Title:");
        const src = prompt("Enter Image URL (or /images/hero.png):");
        const category = prompt("Enter Category (Stock, Modified, Rides, Events):") || 'Stock';

        if (title && src) {
            const newImg = { title, src, category, type: 'gallery' };
            try {
                const res = await fetch('/api/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newImg)
                });
                if (res.ok) fetchImages();
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Delete this bike from gallery?")) {
            // In a real app, you'd have a DELETE API route. 
            // For now, we'll filter locally for the demo if it's a mock ID
            setImages(images.filter(img => img.id !== id && img._id !== id));
        }
    };

    const handleExport = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(images));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "hunter350_gallery.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const handleImport = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    setImages(imported);
                    alert("Gallery imported successfully!");
                } catch (err) {
                    alert("Invalid JSON file");
                }
            };
            reader.readAsText(file);
        }
    };

    const filteredImages = (Array.isArray(images) ? (activeTab === 'All' 
        ? images 
        : images.filter(img => img.category === activeTab)) : []);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />
            
            <section style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        Bike <span style={{ color: 'var(--accent)' }}>Gallery</span>
                    </h1>

                    {/* Management Toolbar */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <button onClick={() => setIsManageMode(!isManageMode)} style={{ color: isManageMode ? 'var(--accent)' : '#fff', fontSize: '0.8rem', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                            {isManageMode ? 'EXIT MANAGEMENT' : 'MANAGE GALLERY'}
                        </button>
                        {isManageMode && (
                            <>
                                <button onClick={handleAddImage} style={{ backgroundColor: 'var(--accent)', color: '#000', fontWeight: 'bold', padding: '0.5rem 1.5rem', borderRadius: '4px' }}>+ ADD BIKE</button>
                                <button onClick={handleExport} style={{ border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.5rem 1rem', borderRadius: '4px' }}>EXPORT JSON</button>
                                <label style={{ border: '1px solid #fff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                                    IMPORT JSON
                                    <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
                                </label>
                            </>
                        )}
                    </div>

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
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '30px',
                                    border: `1px solid ${activeTab === cat ? 'var(--accent)' : 'var(--border)'}`,
                                    color: activeTab === cat ? '#000' : '#fff',
                                    backgroundColor: activeTab === cat ? 'var(--accent)' : 'transparent',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading gallery...</p>
                    ) : (
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
                            gap: '1.5rem' 
                        }}>
                            {filteredImages.map((img, idx) => (
                                <div key={img._id || idx} className="gallery-item" style={{ 
                                    position: 'relative', 
                                    height: '300px', 
                                    borderRadius: '12px', 
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}>
                                    <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                    
                                    {isManageMode && (
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleDelete(img._id || img.id); }}
                                            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,0,0,0.8)', color: '#fff', border: 'none', borderRadius: '50%', width: '30px', height: '30px', zIndex: 10 }}
                                        >
                                            ✕
                                        </button>
                                    )}

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
                    )}
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
