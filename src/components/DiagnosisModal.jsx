import { X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function DiagnosisModal({ isOpen, onClose }) {
    const formUrl = "https://form.respondi.app/8KiwCz8L?utm_medium=org&utm_source=site&utm_term=home"

    const handleRedirect = () => {
        window.open(formUrl, '_blank')
        onClose()
    }

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
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden text-clivy-dark"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Content */}
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 bg-clivy-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🚀</span>
                            </div>
                            
                            <h2 className="text-2xl font-bold font-heading mb-3">Diagnóstico Gratuito</h2>
                            <p className="text-gray-500 mb-8">
                                Você será redirecionado para nosso formulário de diagnóstico. 
                                Leva menos de 2 minutos para preencher!
                            </p>

                            <button
                                onClick={handleRedirect}
                                className="w-full bg-clivy-purple hover:bg-clivy-purple-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-clivy-purple/20 active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                Agendar agora <ArrowRight size={20} />
                            </button>
                            
                            <p className="text-xs text-gray-400 mt-4">
                                Sem compromisso. 100% gratuito.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
