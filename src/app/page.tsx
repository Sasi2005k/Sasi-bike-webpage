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
      <footer style={{ padding: '6rem 0 4rem', borderTop: '1px solid var(--border)', background: '#050505' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>HUNTER 350 COMMUNITY</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                The ultimate destination for Royal Enfield Hunter 350 enthusiasts to share, mod, and ride.
              </p>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase' }}>Join the Pack</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="https://www.instagram.com/itzz._.krish350?igsh=cm5yZGRsYjBnNWkw" target="_blank" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--accent)' }}></span> Instagram
                </a>
                <a href="https://wa.me/919345846647" target="_blank" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ color: '#25D366' }}></span> WhatsApp Group
                </a>
                <a href="mailto:sasi93458466@gmail.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--accent)' }}></span> Contact via Gmail
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', pt: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
              © 2026 Hunter 350 Community. Not affiliated with Royal Enfield Ltd.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
