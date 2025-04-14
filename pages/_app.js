
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-blue-900 text-white p-4 flex space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/storygraph" className="hover:underline">StoryGraph</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/law-firms" className="hover:underline">Law Firms</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <main className="p-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
