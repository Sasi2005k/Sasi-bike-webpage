'use client';
import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';

const JourneyDetail = () => {
    const params = useParams();
    const id = params.id as string;

    // In a real app, you'd fetch this from DB based on ID
    const journeyData: any = {
        'munnar-2026': {
            title: 'Misty Peaks of Munnar',
            hero: '/images/ride.jpeg',
            stats: [
                { label: 'Distance', value: '450 km' },
                { label: 'Max Altitude', value: '7,200 ft' },
                { label: 'Terrain', value: 'Mountainous' },
                { label: 'Time', value: '2 Days' }
            ],
            highlights: [
                'The early morning fog at Top Station.',
                'Perfect lean angles on the Munnar curves.',
                'The refreshing smell of tea leaves in the air.'
            ]
        }
    };

    const journey = journeyData[id] || journeyData['munnar-2026'];

    return (
        <main style={{ minHeight: '100vh', background: '#000' }}>
            <Navbar />
            
            <div style={{ height: '70vh', position: 'relative', overflow: 'hidden' }}>
                <img src={journey.hero} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6' }} />
                <div style={{ position: 'absolute', bottom: '4rem', left: '5%', zIndex: 10 }}>
                    <h1 style={{ fontSize: '5rem', fontWeight: '900', textTransform: 'uppercase' }}>{journey.title}</h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Detailed Ride Log</p>
                </div>
            </div>

            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        {journey.stats.map((stat: any, i: number) => (
                            <div key={i} className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>{stat.label}</p>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', borderLeft: '5px solid var(--accent)', paddingLeft: '1.5rem' }}>Ride Highlights</h2>
                        <ul style={{ listStyle: 'none' }}>
                            {journey.highlights.map((h: string, i: number) => (
                                <li key={i} style={{ 
                                    fontSize: '1.3rem', 
                                    marginBottom: '2rem', 
                                    padding: '2rem', 
                                    background: 'rgba(255,255,255,0.03)', 
                                    borderRadius: '12px',
                                    borderLeft: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <span style={{ color: 'var(--accent)', marginRight: '1rem' }}>✦</span> {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default JourneyDetail;
