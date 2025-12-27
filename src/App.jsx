import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cases } from './pages/Cases'
import { Menu, X, ArrowRight, MessageCircle, Instagram, Youtube, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { DiagnosisModal } from './components/DiagnosisModal'

// Componente do botão flutuante de WhatsApp
function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Número do WhatsApp conectado ao agente (formato: código país + DDD + número)
  const whatsappNumber = "5522997885784"
  const defaultMessage = "Olá! Vim pelo site da Clivy e gostaria de saber mais sobre a consultoria de vocês."
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
  
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: isHovered ? '16px 24px' : '16px',
        }}
      >
        <MessageCircle size={24} className="fill-current" />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="font-semibold whitespace-nowrap overflow-hidden"
            >
              Fale com a gente
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
      
      {/* Pulse animation */}
      <span className="absolute -inset-1 rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none" />
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Use location to determine background color of header or behavior
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`min-h-screen ${isHome ? 'bg-clivy-dark' : 'bg-white'} selection:bg-clivy-purple selection:text-white font-sans`}>
      <DiagnosisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-clivy-dark/80 border-white/5' : 'bg-white/90 border-gray-100'} backdrop-blur-lg border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center group">
              <img 
                src="/clivy-logo.png" 
                alt="Clivy" 
                className={`h-8 md:h-10 ${isHome ? '' : 'brightness-0'}`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/clivycompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isHome ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-clivy-dark'} transition-colors`}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@clivycompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isHome ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-clivy-dark'} transition-colors`}
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/clivy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isHome ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-clivy-dark'} transition-colors`}
                >
                  <Linkedin size={20} />
                </a>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-6 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-clivy-purple/25"
              >
                Agendar diagnóstico <ArrowRight size={16} />
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${isHome ? 'text-white' : 'text-clivy-dark'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t overflow-hidden ${isHome ? 'bg-clivy-dark border-white/5' : 'bg-white border-gray-100'}`}
            >
              <nav className="flex flex-col p-6 gap-4">
                <Link
                  to="/#metodo"
                  className={`${isHome ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-clivy-purple'} py-2 text-lg font-medium`}
                  onClick={() => setMenuOpen(false)}
                >
                  Método
                </Link>
                <Link
                  to="/#clickup"
                  className={`${isHome ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-clivy-purple'} py-2 text-lg font-medium`}
                  onClick={() => setMenuOpen(false)}
                >
                  ClickUp
                </Link>
                <Link
                  to="/cases"
                  className={`${isHome ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-clivy-purple'} py-2 text-lg font-medium`}
                  onClick={() => setMenuOpen(false)}
                >
                  Cases
                </Link>

                <button
                  className="bg-clivy-purple text-white px-5 py-3 rounded-xl font-bold text-center mt-2 shadow-lg shadow-clivy-purple/30 w-full"
                  onClick={() => { setMenuOpen(false); setIsModalOpen(true); }}
                >
                  Agendar diagnóstico
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {children}

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${isHome ? 'border-white/5 bg-clivy-dark-light/30 text-gray-400' : 'border-gray-100 bg-white text-gray-500'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img 
                src="/clivy-logo.png" 
                alt="Clivy" 
                className={`h-6 ${isHome ? '' : 'brightness-0'}`}
              />
              <p className="text-sm mt-2">Elevando o padrão de gestão no Brasil.</p>
            </div>

            <div className="flex items-center gap-8">
              {['Instagram', 'YouTube', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com/${social === 'Instagram' ? 'clivycompany' : social === 'YouTube' ? '@clivycompany' : 'company/clivy'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors font-medium ${isHome ? 'hover:text-clivy-purple' : 'hover:text-clivy-purple'}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 Clivy Company. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-clivy-purple">Termos de Uso</a>
              <a href="#" className="hover:text-clivy-purple">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
