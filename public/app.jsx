/* =========================================================================
 *  App — composes the page
 * ========================================================================= */

function App() {
  useInViewMount();

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <CFP />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
