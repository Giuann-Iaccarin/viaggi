import { travelData } from '../data/travelData';
import Timeline from './homepage-components/Timeline';

export default function Homepage() {
    return (
        <div className="min-h-screen bg-linear-to-b from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Header con gradient overlay */}
            <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
                {/* Pattern decorativo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <span className="text-2xl">🇬🇷</span>
                            <span className="text-white font-medium text-sm">Estate 2026</span>
                        </div>

                        {/* Titolo principale */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Scopri la Grecia
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                            Il tuo viaggio perfetto ti aspetta
                        </p>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <button
                                onClick={() => document.getElementById("timeline").scrollIntoView({ behavior: "smooth" })}
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" href="#timeline"
                            >
                                <span>Esplora le opzioni</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 md:h-16 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* Sezione introduttiva */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Scegli il tuo itinerario ideale
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Confronta voli, scopri le destinazioni e prenota l'esperienza perfetta per la tua vacanza in Grecia
                    </p>
                </div>
            </div>

            {/* Timeline principale */}
            <main className="max-w-6xl mx-auto px-4 pb-16" id="timeline">
                <Timeline data={travelData} />
            </main>

            {/* Footer moderno */}
            <footer className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Colonna 1 */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span>🇬🇷</span> Grecia 2026
                            </h3>
                            <p className="text-slate-400">
                                La tua avventura mediterranea inizia qui. Confronta, scegli e prenota in tutta sicurezza.
                            </p>
                        </div>

                        {/* Colonna 2 */}
                        <div>
                            <h4 className="font-semibold mb-4 text-slate-300">Destinazioni</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li className="hover:text-white transition-colors cursor-pointer">✈️ Santorini</li>
                                <li className="hover:text-white transition-colors cursor-pointer">✈️ Corfù</li>
                                <li className="hover:text-white transition-colors cursor-pointer">🏖️ Tutte le isole greche</li>
                            </ul>
                        </div>

                        {/* Colonna 3 */}
                        <div>
                            <h4 className="font-semibold mb-4 text-slate-300">Supporto</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li className="hover:text-white transition-colors cursor-pointer">💬 Contattaci</li>
                                <li className="hover:text-white transition-colors cursor-pointer">📞 Assistenza 24/7</li>
                                <li className="hover:text-white transition-colors cursor-pointer">❓ FAQ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className="pt-8 border-t border-slate-700 text-center">
                        <p className="text-slate-400 text-sm">
                            © 2026 Vacanze Grecia. Prenota con fiducia la tua prossima avventura.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}