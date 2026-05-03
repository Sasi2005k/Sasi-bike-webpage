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
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pure <span style={{ color: 'var(--accent)' }}>Power</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Engineered for agility and style.</p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '2rem' 
                }}>
                    {specifications.map((spec, index) => (
                        <div key={index} className="glass" style={{ padding: '2rem', transition: 'all 0.3s ease' }}>
                            <h3 style={{ fontSize: '1rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                {spec.label}
                            </h3>
                            <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specs;
