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
                        { id: '1', src: '/images/hero.jpeg', category: 'Stock', title: 'Factory Fresh', type: 'gallery' },
                        { id: '2', src: '/images/modified.png', category: 'Modified', title: 'Dark Edition', type: 'gallery' },
                        { id: '3', src: '/images/ride.jpeg', category: 'Rides', title: 'Mountain Escape', type: 'gallery' },
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

    const handleExportImage = (src: string, filename: string) => {
        const link = document.createElement('a');
        link.href = src;
        link.download = filename || 'bike_image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                // Now create the database entry
                const postRes = await fetch('/api/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: file.name.split('.')[0],
                        src: data.path,
                        category: activeTab === 'All' ? 'Stock' : activeTab,
                        type: 'gallery'
                    })
                });

                if (postRes.ok) {
                    alert(`✅ ${file.name} imported and saved to gallery!`);
                } else {
                    alert(`⚠️ File uploaded to folder, but database failed to save. The image may not appear after refresh.`);
                }
                await fetchImages();
            } else {
                alert(`❌ Upload failed: ${data.error}`);
            }
        } catch (err: any) {
            alert(`❌ Error during upload: ${err.message}`);
        } finally {
            setLoading(false);
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
                                <label style={{ border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                                    IMPORT JPEG/PNG
                                    <input type="file" accept="image/*" onChange={handleImportImage} style={{ display: 'none' }} />
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
                        <div className="grid-mobile-stack" style={{ 
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
                                    <img src={img.src || (img.images && img.images[0])} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                    
                                    {isManageMode && (
                                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleExportImage(img.src, img.title); }}
                                                style={{ background: 'var(--accent)', color: '#000', border: 'none', borderRadius: '4px', padding: '0.2rem 0.5rem', fontSize: '0.7rem', fontWeight: 'bold' }}
                                            >
                                                EXPORT
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleDelete(img._id || img.id); }}
                                                style={{ background: 'rgba(255,0,0,0.8)', color: '#fff', border: 'none', borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                ✕
                                            </button>
                                        </div>
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
