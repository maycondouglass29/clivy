import { X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function DiagnosisModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1)
    const totalSteps = 7
    const progress = (step / totalSteps) * 100

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden text-clivy-dark"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Header */}
                        <div className="text-center pt-8 pb-4 px-8">
                            <h2 className="text-2xl font-bold font-heading mb-2">Diagnóstico gratuito</h2>
                            <p className="text-gray-500 text-sm max-w-md mx-auto">
                                Preencha o formulário e nossa equipe entrará em contato para agendar seu diagnóstico personalizado.
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="px-12 mb-8">
                            <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                                <span>Etapa {step} de {totalSteps}</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-clivy-purple rounded-full"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-12 pb-12">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold font-heading mb-2">Vamos nos conhecer!</h3>
                                <p className="text-gray-500 text-sm">Primeiro, precisamos de suas informações básicas</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                                        Nome completo *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome completo"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-clivy-purple focus:ring-4 focus:ring-clivy-purple/10 outline-none transition-all placeholder:text-gray-300 text-gray-700"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                                        DDD + WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="(11) 99999-9999"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-clivy-purple focus:ring-4 focus:ring-clivy-purple/10 outline-none transition-all placeholder:text-gray-300 text-gray-700"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                                        Instagram da empresa *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="@sua_empresa"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-clivy-purple focus:ring-4 focus:ring-clivy-purple/10 outline-none transition-all placeholder:text-gray-300 text-gray-700"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => setStep(step < totalSteps ? step + 1 : step)}
                                        className="w-full bg-clivy-purple hover:bg-clivy-purple-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-clivy-purple/20 active:scale-[0.98]"
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
