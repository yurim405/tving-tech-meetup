/* =========================================================================
 *  App — Brutalist edition
 * ========================================================================= */

function App() {
  useInViewMount();
  return (
    <div className="relative">
      <HeaderBru />
      <main>
        <HeroBru />
        <AboutBru />
        <ScheduleBru />
        <SpeakersBru />
        <CFPBru />
      </main>
      <FooterBru />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
