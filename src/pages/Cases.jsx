import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiagnosisModal } from '../components/DiagnosisModal'

export function Cases() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    }

    return (
        <div className="min-h-screen bg-white text-clivy-dark pt-20">
            <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Header Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Link 
                        to="/" 
                        className="inline-flex items-center text-gray-400 hover:text-clivy-purple mb-10 transition-colors text-sm font-medium group"
                    >
                        <ChevronRight className="rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" size={16} /> 
                        Voltar ao início
                    </Link>
                    
                    <motion.div {...fadeInUp}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wider mb-8 text-gray-500">
                            🚀 Histórias de transformação
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Do caos à <br />
                            <span className="text-clivy-purple">previsibilidade</span>
                        </h1>
                        
                        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                            Veja como agências que viviam apagando incêndios hoje operam com processos claros, equipe alinhada e resultados consistentes.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#cases-list"
                                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-7 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-clivy-purple/20"
                            >
                                Ver cases detalhados <ArrowRight size={16} />
                            </a>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="border border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-semibold transition-all hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center gap-2 text-sm"
                            >
                                Quero resultados parecidos <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gabriel Rucci */}
            <section id="cases-list" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        {...fadeInUp}
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    >
                        <div className="w-full md:w-5/12">
                            <img
                                src="/gabriel-rucci.png"
                                alt="Gabriel Rucci"
                                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="w-full md:w-7/12">
                            <span className="text-clivy-purple text-xs font-semibold uppercase tracking-wider mb-3 block">
                                Lançamentos Digitais
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Gabriel Rucci</h2>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Referência em infoprodutos, Gabriel vivia o caos típico de épocas de lançamento: equipe sobrecarregada, informações perdidas e retrabalho constante. Estruturamos processos claros no ClickUp que permitiram dobrar a capacidade operacional sem aumentar a equipe. Hoje, cada lançamento roda com previsibilidade.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cacique Ads */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-clivy-dark text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        {...fadeInUp}
                        className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
                    >
                        <div className="w-full md:w-5/12">
                            <img
                                src="/cacique-ads.png"
                                alt="Cacique Ads"
                                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="w-full md:w-7/12">
                            <span className="text-clivy-purple text-xs font-semibold uppercase tracking-wider mb-3 block">
                                Tráfego Pago
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Cacique Ads</h2>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Crescimento acelerado trouxe um problema: a operação não acompanhava. Clientes reclamando de prazos, equipe perdida em demandas e o dono preso no operacional. Criamos uma estrutura robusta com processos documentados e automações que liberaram a liderança para focar no estratégico.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Arretada Agência */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        {...fadeInUp}
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    >
                        <div className="w-full md:w-5/12">
                            <img
                                src="/arretada-agencia.png"
                                alt="Arretada Agência"
                                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="w-full md:w-7/12">
                            <span className="text-clivy-purple text-xs font-semibold uppercase tracking-wider mb-3 block">
                                Marketing 360°
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Arretada Agência</h2>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Criatividade não faltava, mas organização sim. A Arretada queria escalar sem perder a essência que a tornava única. Desenvolvemos uma estrutura que preserva o DNA criativo enquanto garante entregas consistentes e prazos cumpridos. Resultado: crescimento sustentável sem burnout da equipe.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ATB Studio */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-clivy-dark text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        {...fadeInUp}
                        className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
                    >
                        <div className="w-full md:w-5/12">
                            <img
                                src="/atb-studio.png"
                                alt="ATB Studio"
                                className="w-full max-w-sm mx-auto rounded-2xl"
                            />
                        </div>
                        <div className="w-full md:w-7/12">
                            <span className="text-clivy-purple text-xs font-semibold uppercase tracking-wider mb-3 block">
                                Produção de Vídeo
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">ATB Studio</h2>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Múltiplos projetos audiovisuais rodando ao mesmo tempo, cada um com suas particularidades. O desafio era ter controle sem burocratizar a criação. Montamos uma esteira operacional que dá visibilidade total dos projetos, controla recursos e prazos, e ainda mantém a agilidade que produção de vídeo exige.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                            Sua agência pode ser a <span className="text-clivy-purple">próxima</span>
                        </h2>
                        <p className="text-gray-500 mb-10 text-base sm:text-lg leading-relaxed">
                            Em 30 minutos identificamos os gargalos da sua operação e traçamos o caminho para sair do caos.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-8 py-4 rounded-full font-semibold transition-all text-base shadow-xl shadow-clivy-purple/20"
                        >
                            Agendar diagnóstico gratuito
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
