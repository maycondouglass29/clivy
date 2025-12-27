import { ArrowRight, ChevronRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiagnosisModal } from '../components/DiagnosisModal'

export function Cases() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Auto-scroll to top on mount
    useState(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-white text-clivy-dark pt-20">
            <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Header Section */}
            <section className="py-20 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-clivy-purple mb-8 transition-colors text-sm font-medium">
                        <ChevronRight className="rotate-180 mr-1" size={14} /> Voltar ao início
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-semibold uppercase tracking-wider mb-6">
                            🌱 Resultados comprovados
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading">
                            Impacto real na <br />
                            <span className="text-clivy-purple">operação dos nossos clientes</span>
                        </h1>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-10">
                            Veja como ajudamos grandes players do mercado a escalar com previsibilidade e organização.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Gabriel Rucci Card */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-3xl bg-clivy-dark text-white min-h-[500px] flex flex-col md:flex-row shadow-2xl">
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                                    alt="Gabriel Rucci"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-clivy-dark to-transparent md:bg-gradient-to-r"></div>
                            </div>
                            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
                                <span className="inline-block py-1 px-3 rounded-full bg-clivy-purple/20 border border-clivy-purple/30 text-clivy-purple text-xs font-bold mb-6 tracking-wider w-fit">VENDAS E LANÇAMENTOS</span>
                                <h3 className="text-4xl font-bold mb-6">Gabriel Rucci</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                    "Antes da Clivy, vivíamos um caos em época de lançamento. Implementamos processos que permitiram escalar nossas operações mantendo a qualidade. A organização do ClickUp foi fundamental para dobrarmos nossa capacidade."
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-white text-clivy-dark px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                                    >
                                        Quero resultados parecidos <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Cacique Ads Card */}
                        <div className="col-span-1 relative group overflow-hidden rounded-3xl bg-black text-white min-h-[500px] shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1618077360395-5296043000d3?auto=format&fit=crop&q=80&w=2528"
                                alt="Cacique Ads"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="relative h-full p-8 flex flex-col justify-end">
                                <span className="text-clivy-purple text-sm font-semibold mb-2 uppercase tracking-wider">Agência de Performance</span>
                                <h3 className="text-3xl font-bold mb-4">Cacique Ads</h3>
                                <p className="text-gray-300 text-sm line-clamp-4 mb-8 leading-relaxed">
                                    A Cacique Ads precisava de uma estrutura operacional robusta para suportar seu crescimento acelerado. Implementamos sistemas e processos que transformaram a gestão de projetos e otimizaram toda a operação da agência.
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-xl py-4 font-semibold transition-all flex items-center justify-center gap-2">
                                    Ver case <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Arretada Agencia Card */}
                        <div className="col-span-1 relative group overflow-hidden rounded-3xl bg-black text-white min-h-[500px] shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2664"
                                alt="Arretada Agência"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="relative h-full p-8 flex flex-col justify-end">
                                <span className="text-clivy-purple text-sm font-semibold mb-2 uppercase tracking-wider">Comunicação Digital</span>
                                <h3 className="text-3xl font-bold mb-4">Arretada Agência</h3>
                                <p className="text-gray-300 text-sm line-clamp-4 mb-8 leading-relaxed">
                                    A Arretada Agência buscava padronizar sua gestão e escalar processos sem perder a essência criativa. Desenvolvemos uma estrutura que une criatividade com eficiência operacional, permitindo crescimento sustentável.
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-xl py-4 font-semibold transition-all flex items-center justify-center gap-2">
                                    Ver case <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* ATB Studio Card */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-3xl bg-[#FF8A00] text-white min-h-[450px] flex flex-col md:flex-row-reverse shadow-xl">
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative flex items-center justify-center p-8 bg-[#FF8A00]">
                                <div className="w-full h-full relative rounded-2xl overflow-hidden border-4 border-black/10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1583512603837-78f9ebadc2df?auto=format&fit=crop&q=80&w=2600"
                                        alt="ATB Studio"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-black">
                                <span className="text-[#FF8A00] font-bold text-sm mb-4 uppercase tracking-wider">Produção Audiovisual</span>
                                <h3 className="text-3xl font-bold mb-4">ATB Studio</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    "O desafio era gerir múltiplos projetos audiovisuais simultâneos. Criamos uma esteira operacional completa que permite melhor controle de recursos e prazos, elevando a qualidade das entregas."
                                </p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center gap-2 text-white hover:text-[#FF8A00] transition-colors font-medium group/btn"
                                >
                                    Quero resultados parecidos <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-clivy-dark text-white text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para ser nosso próximo case?</h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-10 py-5 rounded-full font-bold transition-all text-lg shadow-xl shadow-clivy-purple/25"
                    >
                        Agendar diagnóstico gratuito
                    </button>
                </div>
            </section>
        </div>
    )
}
