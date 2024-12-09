import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-mono">
          <Link href="/">
            ETS Global Transport
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/location-camions" className="hover:underline">
            Location de Camion
          </Link>
          <Link href="/transport-marchandises" className="hover:underline">
            Transport de Marchandises
          </Link>
          <Link href="/travaux-publics" className="hover:underline">
            Travaux Publics
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contactez-nous
          </Link>
        </div>
        <button className="bg-white text-black p-2 rounded-xl hover:bg-gray-200" onClick={()=>alert('souscription effectué')}>Souscrire</button>
      </div>
    </nav>
  );
}
