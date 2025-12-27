import { ArrowRight, Users, FileText, Zap, CheckCircle, Star, ChevronRight, Play, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { DiagnosisModal } from '../components/DiagnosisModal'

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <>
            <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Hero Section */}
            <section className="hero-gradient pt-40 md:pt-52 pb-20 md:pb-32 px-4 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-clivy-purple/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clivy-purple opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-clivy-purple"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300">Consultoria Especializada em ClickUp</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                            Escale sua operação de serviços <br />
                            <span className="gradient-text pb-2">sem o caos operacional.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Implementamos Liderança, Processos e Tecnologia para transformar sua agência ou consultoria em uma máquina de escala previsível.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-clivy-purple/25"
                            >
                                Agendar consultoria gratuita <ArrowRight size={20} />
                            </motion.button>
                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                href="#metodo"
                                className="flex items-center gap-3 text-gray-300 hover:text-white px-8 py-4 rounded-full font-medium transition-all text-lg"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Play size={16} className="ml-1 fill-current" />
                                </div>
                                Conhecer o método
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof Bar */}
            <div className="bg-clivy-dark border-y border-white/5 relative z-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <p className="text-center text-gray-500 mb-8 text-sm font-medium uppercase tracking-wider">Empresas que confiam no Método Clivy</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Imagine Company', 'Gabriel Rucci', 'Cacique Ads', 'Arretada Agência', 'V4 Company'].map((company) => (
                            <span key={company} className="text-xl md:text-2xl font-bold text-white cursor-default hover:text-clivy-purple transition-colors">{company}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Método Clivy Section */}
            <section id="metodo" className="py-24 md:py-32 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="text-center mb-20"
                    >
                        <motion.span variants={itemVariants} className="text-clivy-purple font-bold tracking-wider text-sm mb-4 block uppercase">O Método Clivy</motion.span>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Três pilares para <br />
                            <span className="gradient-text">eliminar o caos</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Não adianta apenas contratar ferramentas. A organização precisa começar pela mentalidade e ser suportada por processos claros.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: Users,
                                title: "Liderança",
                                desc: "O time é reflexo do líder. Formamos gestores capazes de conduzir a operação com autonomia.",
                                items: ["Mapeamento de organograma", "Rituais de gestão", "Definição de OKRs", "Cultura de alta performance"]
                            },
                            {
                                icon: FileText,
                                title: "Processos",
                                desc: "Transformamos conhecimento tácito em processos documentados e replicáveis.",
                                items: ["Playbooks de áreas", "Estrutura de rotinas", "POPs detalhados", "Padronização de entregas"]
                            },
                            {
                                icon: Zap,
                                title: "Tecnologia",
                                desc: "Automatizamos o operacional para que seu time foque no estratégico.",
                                items: ["ClickUp Avançado", "Automações n8n/Make", "Dashboards BI", "Integração WhatsApp"]
                            }
                        ].map((pilar, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="gradient-border group">
                                <div className="gradient-border-inner h-full hover:bg-white/[0.02] transition-colors">
                                    <div className="w-16 h-16 bg-clivy-purple/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-clivy-purple/20">
                                        <pilar.icon className="text-clivy-purple" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{pilar.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                                        {pilar.desc}
                                    </p>
                                    <ul className="space-y-4">
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
            <section id="clickup" className="py-24 md:py-32 px-4 bg-clivy-dark-light/30 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clivy-purple/5 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-clivy-purple/10 border border-clivy-purple/20 text-clivy-purple text-xs font-bold mb-6 tracking-wider">OFFICIAL PARTNER</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                                ClickUp como seu <br />
                                <span className="gradient-text">Sistema Operacional</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Esqueça o caos de usar Trello, Excel e WhatsApp ao mesmo tempo.
                                Centralizamos sua operação em uma única ferramenta poderosa e customizada para o seu negócio.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { num: "01", title: "Centralização Total", desc: "Marketing, Vendas, RH e Operações em um só lugar." },
                                    { num: "02", title: "Visão 360º", desc: "Monitore a saúde de todos os projetos em uma única tela." },
                                    { num: "03", title: "Automações", desc: "Elimine tarefas manuais e erros humanos do dia a dia." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-clivy-purple/50 group-hover:bg-clivy-purple/10 transition-all">
                                            <span className="text-white font-bold group-hover:text-clivy-purple transition-colors">{item.num}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://try.web.clickup.com/clickup-14dias-gratis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 mt-10 bg-clivy-purple hover:bg-clivy-purple-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-clivy-purple/25"
                            >
                                Teste o ClickUp 14 dias grátis <ArrowRight size={20} />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-clivy-purple to-pink-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                            <div className="relative glass-panel rounded-2xl p-8 border border-white/10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="h-6 w-64 bg-white/5 rounded-md"></div>
                                </div>

                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                            <div className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-purple-500' : i === 2 ? 'bg-blue-500' : i === 3 ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                            <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                                            <div className="ml-auto h-2 w-16 bg-white/5 rounded-full"></div>
                                            <div className="w-8 h-8 rounded-full bg-white/5"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-8 -top-8 p-4 bg-clivy-dark rounded-xl border border-white/10 shadow-2xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <CheckCircle size={20} className="text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Tarefas concluídas</p>
                                            <p className="text-lg font-bold">+128%</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CASES PREVIEW SECTION */}
            <section id="cases-preview" className="py-24 md:py-32 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider mb-6 text-gray-300">
                            🌱 Resultados comprovados
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-white">
                            Conheça os nossos <br />
                            <span className="gradient-text">cases de sucesso</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                            Descubra como agências e consultorias transformaram suas operações com as soluções da Clivy Company.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/cases"
                                className="bg-white text-clivy-dark px-8 py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Veja nossos cases <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-24 md:py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-clivy-dark to-clivy-purple/10 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                            Quer resultados como esses <br />
                            <span className="gradient-text">na sua agência?</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                            Agende um diagnóstico gratuito e descubra como podemos transformar sua operação.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-3 bg-white text-clivy-dark hover:bg-gray-100 px-10 py-5 rounded-full font-bold transition-all text-lg shadow-xl"
                        >
                            Agendar diagnóstico gratuito <ArrowRight size={22} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
