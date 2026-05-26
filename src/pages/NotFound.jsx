import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found — Argus" />
      <section className="section">
        <div className="wrap text-center">
          <p className="eyebrow justify-center">404 — UNWATCHED PATH</p>
          <h1 className="h-display mt-4">This route is off the grid.</h1>
          <p className="body-lg mt-6 max-w-xl mx-auto">
            Even Argus doesn't watch everything. The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="link-arrow mt-10 inline-flex"
          >
            ← Back to Argus
          </Link>
        </div>
      </section>
    </>
  );
}
