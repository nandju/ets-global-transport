import React from "react";


export default function ContactUsComponent() {
    return (
        <div className="w-full px-20 py-8 bg-gray-100/80">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Partie gauche - Informations de contact */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Entrer en contact</h2>
                    <p className="text-gray-600 mb-8">
                    Retrouvez-nous à Yopougon Maroc, Carrefour OBAMA pour discuter de vos besoins en transport et travaux publics.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <img 
                                    src="https://i.pinimg.com/236x/ea/0f/a1/ea0fa109aee6bd984d69ee2b3341ea26.jpg" 
                                    alt="Adresse" 
                                    width={20} 
                                    height={20}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-gray-600">Yopougon Maroc, Carrefour OBAMA</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <img 
                                    src="https://i.pinimg.com/236x/64/dc/47/64dc47577ec6ca078db2989a5b87b40b.jpg" 
                                    alt="Téléphone" 
                                    width={20} 
                                    height={20}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone Number</h3>
                                <p className="text-gray-600">(+225) 27 23 43 70 06 / (+225) 05 06 17 18 19</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <img 
                                    src="https://i.pinimg.com/236x/b0/2e/b4/b02eb40f533cb7ed4222efe9c179f187.jpg" 
                                    alt="Email" 
                                    width={20} 
                                    height={20}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold">E-Mail</h3>
                                <p className="text-gray-600">info@globaltransport-ci.com</p>
                            </div> 
                        </div>
                    </div>

                    <div className="border-b border-black/60 w-full my-8"></div>

                    <div className="mt-8">
                        <p className="font-semibold mb-4">Follow Us:</p>
                        <div className="flex gap-4">
                            {['https://i.pinimg.com/736x/70/b9/3a/70b93af70f637f2d8a2dec42bfcf23f8', 'https://i.pinimg.com/236x/ff/df/dd/ffdfdda33b374b7882b2dc0baec51c67', 'https://i.pinimg.com/236x/19/40/ab/1940abcfbcbdbdb11b1b8fdbf2f01973', 'https://i.pinimg.com/236x/fa/98/3a/fa983a2e5a92b0d949dc434a7eaa8ba3'].map((social) => (
                                <div key={social} className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <img 
                                        src={`${social}.jpg`}
                                        alt={social}
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Partie droite - Formulaire */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg text-end">
                    <h2 className="text-2xl font-bold mb-6 text-start">Envoyer un message</h2>
                    <form className="space-y-6" method="get" action="">
                        <div>
                            <input
                                type="text"
                                placeholder="Nom"
                                className="w-full p-3 border-b-2 border-gray-200 focus:border-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="l'adresse e-mail"
                                className="w-full p-3 border-b-2 border-gray-200 focus:border-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full p-3 border-b-2 border-gray-200 focus:border-black outline-none"
                                required
                            />
                        </div>
                        <p className="text-sm text-gray-500 text-start">
                            En soumettant, vous acceptez le traitement de vos données personnelles par nous conformément à l&apos;énoncé de confidentialité.
                        </p>
                        <button
                            type="submit"
                            className="w-1/5 bg-black text-white py-3 px-6 rounded-3xl hover:bg-black/80 transition-colors"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}