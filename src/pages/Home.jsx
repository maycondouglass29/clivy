import { ArrowRight, Users, FileText, Zap, CheckCircle, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { DiagnosisModal } from '../components/DiagnosisModal'
import { ClientCarousel } from '../components/ClientCarousel'

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <>
            <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Hero Section */}
            <section className="hero-gradient pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-clivy-purple/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />

                <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clivy-purple opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-clivy-purple"></span>
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-gray-300">Consultoria Especializada em ClickUp</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-5 tracking-tight">
                            Sua agência cresce, mas a operação não acompanha? <span className="gradient-text">Vamos resolver isso.</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Transformamos agências desorganizadas em operações previsíveis através de liderança, processos e tecnologia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/cases"
                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all text-sm border border-white/20 text-white hover:bg-white/5 w-full sm:w-auto"
                                >
                                    Veja nossos cases <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsModalOpen(true)}
                                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-clivy-purple/20 w-full sm:w-auto"
                            >
                                Agendar diagnóstico <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof Bar */}
            <div className="bg-clivy-dark border-y border-white/5 relative z-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                    <p className="text-center text-gray-500 mb-10 text-xs sm:text-sm font-medium uppercase tracking-widest">
                        Agências que já saíram do caos com a Clivy
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                        {['Imagine Company', 'Gabriel Rucci', 'Cacique Ads', 'Arretada Agência', 'V4 Company'].map((company) => (
                            <span 
                                key={company} 
                                className="text-base sm:text-lg md:text-xl font-semibold text-white/40 hover:text-white/80 transition-colors duration-300 cursor-default"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Método Clivy Section */}
            <section id="metodo" className="py-20 md:py-32 px-4 sm:px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="text-center mb-16 md:mb-20"
                    >
                        <motion.span variants={itemVariants} className="text-clivy-purple font-semibold tracking-widest text-xs sm:text-sm mb-4 block uppercase">
                            O Método Clivy
                        </motion.span>
                        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            A fórmula para <br />
                            <span className="gradient-text">sair do caos operacional</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Ferramenta sozinha não resolve. Construímos a base que falta: mentalidade de gestão, processos documentados e tecnologia que conecta tudo.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {[
                            {
                                icon: Users,
                                title: "Liderança",
                                desc: "Seu time só vai funcionar quando você parar de apagar incêndios. Desenvolvemos líderes que conduzem a operação com autonomia.",
                                items: ["Organograma funcional", "Rituais de alinhamento", "Metas claras com OKRs", "Cultura de responsabilidade"]
                            },
                            {
                                icon: FileText,
                                title: "Processos",
                                desc: "Se está na sua cabeça, não existe. Documentamos cada etapa para que qualquer pessoa execute com excelência.",
                                items: ["Playbooks por área", "Rotinas estruturadas", "POPs passo a passo", "Entregas padronizadas"]
                            },
                            {
                                icon: Zap,
                                title: "Tecnologia",
                                desc: "Chega de Trello, Excel e WhatsApp espalhados. Centralizamos tudo em um sistema que trabalha por você.",
                                items: ["ClickUp personalizado", "Automações inteligentes", "Dashboards em tempo real", "Integrações conectadas"]
                            }
                        ].map((pilar, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="group">
                                <div className="h-full p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-clivy-purple/30 hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="w-14 h-14 bg-clivy-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 border border-clivy-purple/20">
                                        <pilar.icon className="text-clivy-purple" size={28} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{pilar.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                                        {pilar.desc}
                                    </p>
                                    <ul className="space-y-3">
                                        {pilar.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                                <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={16} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ClickUp Section */}
            <section id="clickup" className="py-20 md:py-32 px-4 sm:px-6 bg-clivy-dark-light/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-clivy-purple/5 rounded-full blur-[100px]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-clivy-purple/10 border border-clivy-purple/20 text-clivy-purple text-xs font-semibold mb-6 tracking-wider">
                                OFFICIAL PARTNER
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Seu negócio inteiro <br />
                                <span className="gradient-text">em uma única tela</span>
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
                                Pare de perder tempo alternando entre 10 ferramentas diferentes. 
                                Montamos um ClickUp sob medida onde Marketing, Vendas, RH e Operações conversam entre si.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { num: "01", title: "Tudo centralizado", desc: "Todos os departamentos em um só lugar, sem informação perdida." },
                                    { num: "02", title: "Visibilidade total", desc: "Saiba exatamente o status de cada projeto e cliente em segundos." },
                                    { num: "03", title: "Trabalho automático", desc: "Tarefas criadas, avisos enviados e relatórios gerados sem você fazer nada." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-clivy-purple/40 group-hover:bg-clivy-purple/10 transition-all duration-300">
                                            <span className="text-white/70 font-semibold text-sm group-hover:text-clivy-purple transition-colors">{item.num}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base mb-1 text-white">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://try.web.clickup.com/clickup-14dias-gratis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-10 bg-clivy-purple hover:bg-clivy-purple-dark text-white px-7 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-clivy-purple/20 text-sm"
                            >
                                Teste o ClickUp 14 dias grátis <ArrowRight size={18} />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-clivy-purple/40 to-pink-600/40 rounded-2xl blur-xl opacity-30"></div>
                            <div className="relative bg-gradient-to-br from-[#2D1B4E] to-[#1a1025] rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    {[
                                        { status: 'bg-green-500', task: 'Onboarding Cliente X', assignee: 'MG', progress: 100 },
                                        { status: 'bg-blue-500', task: 'Campanha Black Friday', assignee: 'LS', progress: 75 },
                                        { status: 'bg-yellow-500', task: 'Reunião Estratégica', assignee: 'GP', progress: 50 },
                                        { status: 'bg-purple-500', task: 'Relatório Mensal', assignee: 'MG', progress: 25 },
                                        { status: 'bg-orange-500', task: 'Automação WhatsApp', assignee: 'LS', progress: 60 }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/8 transition-colors">
                                            <div className={`w-1.5 h-7 rounded-full ${item.status}`}></div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white text-sm font-medium truncate">{item.task}</p>
                                                <div className="w-full bg-white/10 rounded-full h-1 mt-1.5">
                                                    <div className={`h-1 rounded-full ${item.status}`} style={{ width: `${item.progress}%` }}></div>
                                                </div>
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-clivy-purple/30 flex items-center justify-center text-xs font-semibold text-white shrink-0">
                                                {item.assignee}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-4 -top-4 p-3 bg-clivy-dark rounded-xl border border-white/10 shadow-xl"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="p-1.5 bg-green-500/20 rounded-lg">
                                            <CheckCircle size={18} className="text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400">Tarefas concluídas</p>
                                            <p className="text-base font-bold text-white">+128%</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cases Preview Section */}
            <section id="cases-preview" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider mb-6 text-gray-300">
                            🚀 Transformações reais
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                            Quem já passou <span className="gradient-text">pela transformação</span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                            Agências que estavam no caos e hoje operam com previsibilidade.
                        </p>
                    </motion.div>
                </div>
                
                {/* Carrossel de Clientes */}
                <ClientCarousel />
                
                <div className="text-center mt-10">
                    <Link
                        to="/cases"
                        className="inline-flex items-center gap-2 bg-white text-clivy-dark px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg text-sm"
                    >
                        Ver histórias completas <ChevronRight size={16} />
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-clivy-dark to-clivy-purple/10 pointer-events-none"></div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-10 sm:p-14 md:p-20 shadow-2xl"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Pronto para parar de <br />
                            <span className="gradient-text">apagar incêndios?</span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                            Em 30 minutos mapeamos os gargalos da sua operação e mostramos o caminho para sair do caos. Sem compromisso.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 bg-white text-clivy-dark hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all text-base shadow-xl"
                        >
                            Agendar diagnóstico gratuito <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
