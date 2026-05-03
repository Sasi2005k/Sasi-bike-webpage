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

      {/* Founder Section */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, #0a0a0a, #050505)' }}>
        <div className="container">
          <div className="glass" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4rem', 
            padding: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ 
              width: '300px', 
              height: '300px', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '4px solid var(--accent)',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
              flexShrink: 0
            }}>
              <img src="/images/profile.png" alt="Sasi Krish" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Meet the Founder</span>
              <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>Sasi <span style={{ color: 'var(--accent)' }}>Krish</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', fontStyle: 'italic' }}>
                "Hunter 350 Enthusiast & Community Founder. Dedicated to the roar of the single cylinder and the spirit of the urban wanderer."
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                 <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>500+</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Members</p>
                 </div>
                 <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>120+</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mods Shared</p>
                 </div>
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
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Join the Pack</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <a href="https://www.instagram.com/itzz._.krish350?igsh=cm5yZGRsYjBnNWkw" target="_blank" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'color 0.3s ease' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <a href="https://wa.me/919345846647" target="_blank" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'color 0.3s ease' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.236-3.32c1.532.909 3.04 1.388 4.707 1.388 5.233 0 9.492-4.259 9.495-9.492.002-5.233-4.258-9.492-9.492-9.492-4.52 0-8.197 3.182-9.155 7.424-.26 1.15-.339 2.107-.233 3.114.15 1.42.593 2.766 1.3 3.96l-.11-.202-1.103 4.028 4.13-1.082-.139-.068z"/></svg>
                  WhatsApp Group
                </a>
                <a href="mailto:sasi93458466@gmail.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'color 0.3s ease' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 4.612l1.224.992 1.224-.992 4.808-3.904 4.807 3.904 1.224.992 1.224-.992 5.92-4.808v14.116h-24v-14.116l6.623 5.375z"/></svg>
                  Contact via Gmail
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
