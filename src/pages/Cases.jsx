import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiagnosisModal } from '../components/DiagnosisModal'

export function Cases() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white text-clivy-dark pt-20">
            <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Header Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-clivy-purple mb-8 transition-colors text-sm font-medium">
                        <ChevronRight className="rotate-180 mr-1" size={14} /> Voltar ao início
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wider mb-6 text-gray-600">
                            🌱 Resultados comprovados
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                            Conheça os nossos <br />
                            <span className="text-clivy-purple">cases de sucesso</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
                            Descubra como agências e consultorias transformaram suas operações com as soluções da Clivy Company e alcançaram resultados extraordinários.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                            >
                                Ver cases detalhados <ArrowRight size={18} />
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-50 flex items-center justify-center gap-2">
                                Quero resultados parecidos <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gabriel Rucci - Full Width */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="/gabriel-rucci.png"
                                alt="Gabriel Rucci"
                                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Vendas e Lançamentos</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gabriel Rucci</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                O Gabriel Rucci é referência no mercado de infoprodutos e gestão de lançamentos digitais. Com nossa consultoria, implementamos processos que permitiram escalar suas operações mantendo a qualidade. A organização do ClickUp foi fundamental para dobrar a capacidade operacional e eliminar o caos em períodos críticos de lançamento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cacique Ads - Dark Section */}
            <section className="py-16 px-4 bg-clivy-dark text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="/cacique-ads.png"
                                alt="Cacique Ads"
                                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Agência de Performance</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Cacique Ads</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                A Cacique Ads precisava de uma estrutura operacional robusta para suportar seu crescimento acelerado. Implementamos sistemas e processos que transformaram a gestão de projetos e otimizaram toda a operação da agência.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Arretada Agência */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="/arretada-agencia.png"
                                alt="Arretada Agência"
                                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Comunicação Digital</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Arretada Agência</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                A Arretada Agência buscava padronizar sua gestão e escalar processos sem perder a essência criativa. Desenvolvemos uma estrutura que une criatividade com eficiência operacional, permitindo crescimento sustentável.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ATB Studio - Dark Section */}
            <section className="py-16 px-4 bg-clivy-dark text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="/atb-studio.png"
                                alt="ATB Studio"
                                className="w-full max-w-md mx-auto rounded-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Produção Audiovisual</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">ATB Studio</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                O ATB Studio enfrentava o desafio de gerir múltiplos projetos audiovisuais simultâneos. Criamos uma esteira operacional completa que permite melhor controle de recursos e prazos, elevando a qualidade das entregas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Quer resultados como esses na sua <span className="text-clivy-purple">agência</span>?
                    </h2>
                    <p className="text-gray-500 mb-10 text-lg">
                        Agende um diagnóstico gratuito e descubra como podemos transformar sua operação.
                    </p>
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
