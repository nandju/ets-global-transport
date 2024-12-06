import Image from "next/image";
import Link from "next/link";

export default function Paiement() {
    return (
        <div
  className="min-h-screen py-8"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1430276084627-789fe55a6da0?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover", // Assure que l'image couvre tout l'espace
    backgroundPosition: "center", // Centre l'image
    backgroundRepeat: "no-repeat", // Empêche la répétition
  }}
>
            <div className="max-w-3xl mx-auto bg-gray-100/80 rounded-lg shadow-lg overflow-hidden">
                {/* En-tête avec les étapes */}
                <div className="flex justify-between border-b">
                    <div className="px-8 py-4 text-gray-500">VOTRE COMMANDE</div>
                    <div className="px-8 py-4 text-gray-500">DÉTAILS LIVRAISON</div>
                    <div className="px-8 py-4 text-black border-b-2 border-black">PAIEMENT</div>
                    <div className="px-8 py-4 text-gray-500">CONFIRMATION</div>
                </div>

                {/* Contenu principal */}
                <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">Détails du Paiement</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Carte de crédit */}
                        <div>
                            <div className="bg-black text-white p-6 rounded-lg shadow-md w-full max-w-sm">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-12 h-8 bg-white/20 rounded"></div>
                                    <Image 
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////8/PwEBASXl5fy8vL4+Pjj4+MeHh6Tk5MbGxucnJz19fVpaWkqKirm5ubGxsbV1dWIiIjMzMxeXl7T09OAgIClpaXb29vs7Oy+vr6ysrJ6enrl5eU5OTlXV1dMTExycnJCQkKMjIwzMzMmJiYUFBRJSUmtra0/Pz/729HgAAADbElEQVR4nO3YbXOiPBSA4QRERaAiaFW0amu17f//g5tzkrRud2f2+WAHH+e+PjQBonMOea3GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA+zU59x3B1aWXxf7J2tGux2h+RDqZTMZjX81sYu2m54Curk6cWqtzm7gMu54Durq1dQqt7qVqq54DuraJZjX3F0VWPj33G8/1pGGJqSTBZHz5JK475zg9v33yj4p52O0mfzbs33zQtYdCMpzqdd22i8Wi0UD3m1Hm5me2rmX7qGeLWb01j6NhuTiYdDAty1UVE3quM3lJo0FvifxVauYjyW1cy19dXLY6Xu3WVQ8rG8nK+uirC18cnny51y+azHQQuBXKrl57TOi71OQaZWaGUjRyz20Vjv3QjBKN2TWQ0be2v/FP/Gs5P8VLZ9ZrTt9U/rW3qZYHd6fwCa6lM5PPqI/uydL+le4wtf3KMAndehukW5LhYPesocmdY76WDFtzLjXaRXN4eNGdIz9O5cawWGo2yXKpb6B2I+FNUxsu86l+puk3qUvzuPO9S7nyy6BmuDTH2HnbpmmOL9Jch+m7MWWYmWtfpqF7q/iFN5Sh9sbIVWZxNTHmVSdf5W+1ci1kp9xpB7ma3nEbpk7ex/hx+Z5Km9zQXtrGpaIMMRtZX1yCyclksQt1AJ/cEx3Kw3E485zMi5Zv7sk0DAGz0Qxfekzpm1mI7BhiFkvrFxrN0B3jRrF//Fh0rQdSuhaNlJk80eGaNLtB8tn4Rmgf2kXt18C6bl03riTDLu4NnSZos67emFUYym0Yv52UZdd17k197RV+3N4KnYe6MPrYSndy0Wl4DIuP/Xr8+DntNPfcmHgeKNwYuMiw7TurS7qKfO16Ev6bZnhwh8yQfAh+FKbdh9npjb1JS/8GhiYOBhun4w3xR7R1OKnJubTRHV+eVb5HwkZf+ck6jIe3SZihYVAWPl07uqGdQqTmsGnr/GwOgzzPB+407SaX68KV/s/xWnTvbmI+F44LvHJN8kZO6o4cck5N7mq58dvo3F1sP3pO6L9YS4Z39wvGhVMiGW77DuMHVbry3N3vbBcKWTuzvqP4SfE0er8enNfxv9v9b/320/cdu/sEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANyxX4mDIVbI6lZcAAAAAElFTkSuQmCC"
                                        alt="Visa"
                                        width={80}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-xl tracking-widest mb-4">
                                    **** **** **** 1287
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>NOM DU CLIENT</span>
                                    <span>02/25</span>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Nom sur la Carte</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Nom complet"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Numéro de Carte</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="1234 5678 9012 3456"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Date d'Expiration</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="MM/AA"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">CVV</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="123"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bouton de paiement */}
                    <div className="mt-8 flex justify-between items-center">
                        <Link href="/location-camions" className="text-black hover:underline">
                            ← Retour
                        </Link>
                            <button className="bg-black/80 text-white px-8 py-3 rounded-lg hover:bg-black">
                            PAYER 600,000 FCFA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}