import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Specs from '@/components/Specs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Specs />
      
      {/* Modification Preview Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem' }}>Modification <span style={{ color: 'var(--accent)' }}>Showcase</span></h2>
              <p style={{ color: 'var(--text-muted)' }}>See how the community is personalizing their Hunter.</p>
            </div>
            <button style={{ color: 'var(--accent)', fontWeight: '600', borderBottom: '1px solid var(--accent)' }}>VIEW ALL</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ height: '500px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img src="/images/modified.png" alt="Modified Hunter 350" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                padding: '2rem', 
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' 
              }}>
                <h3>The Midnight Scrambler</h3>
                <p style={{ color: 'var(--accent)' }}>Cost: $450 | Category: Performance</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '2rem' }}>
               <div className="glass" style={{ padding: '2rem' }}>
                  <h3>Latest Discussion</h3>
                  <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>"What is the best exhaust for better low-end torque on the Hunter 350?"</p>
                  <button style={{ marginTop: '1.5rem', color: 'var(--accent)' }}>Join Debate →</button>
               </div>
               <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <img src="/images/ride.png" alt="Ride Story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', background: '#050505' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>HUNTER 350 COMMUNITY</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>A platform for enthusiasts, by enthusiasts.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', opacity: '0.6' }}>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>Twitter</span>
          </div>
          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Hunter 350 Community. Not affiliated with Royal Enfield Ltd.</p>
        </div>
      </footer>
    </main>
  );
}
