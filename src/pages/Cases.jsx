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
                            🚀 Histórias de transformação
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                            Do caos à <br />
                            <span className="text-clivy-purple">previsibilidade</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
                            Veja como agências que viviam apagando incêndios hoje operam com processos claros, equipe alinhada e resultados consistentes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#cases-list"
                                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                            >
                                Ver cases detalhados <ArrowRight size={18} />
                            </a>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-50 flex items-center justify-center gap-2"
                            >
                                Quero resultados parecidos <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gabriel Rucci - Full Width */}
            <section id="cases-list" className="py-16 px-4 bg-white">
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
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Lançamentos Digitais</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gabriel Rucci</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Referência em infoprodutos, Gabriel vivia o caos típico de épocas de lançamento: equipe sobrecarregada, informações perdidas e retrabalho constante. Estruturamos processos claros no ClickUp que permitiram dobrar a capacidade operacional sem aumentar a equipe. Hoje, cada lançamento roda com previsibilidade.
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
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Tráfego Pago</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Cacique Ads</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Crescimento acelerado trouxe um problema: a operação não acompanhava. Clientes reclamando de prazos, equipe perdida em demandas e o dono preso no operacional. Criamos uma estrutura robusta com processos documentados e automações que liberaram a liderança para focar no estratégico.
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
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Marketing 360°</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Arretada Agência</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Criatividade não faltava, mas organização sim. A Arretada queria escalar sem perder a essência que a tornava única. Desenvolvemos uma estrutura que preserva o DNA criativo enquanto garante entregas consistentes e prazos cumpridos. Resultado: crescimento sustentável sem burnout da equipe.
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
                            <span className="text-clivy-purple text-sm font-bold uppercase tracking-wider mb-4 block">Produção de Vídeo</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">ATB Studio</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Múltiplos projetos audiovisuais rodando ao mesmo tempo, cada um com suas particularidades. O desafio era ter controle sem burocratizar a criação. Montamos uma esteira operacional que dá visibilidade total dos projetos, controla recursos e prazos, e ainda mantém a agilidade que produção de vídeo exige.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gray-50 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Sua agência pode ser a <span className="text-clivy-purple">próxima</span>
                    </h2>
                    <p className="text-gray-500 mb-10 text-lg">
                        Em 30 minutos identificamos os gargalos da sua operação e traçamos o caminho para sair do caos.
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
