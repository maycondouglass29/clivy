import { ArrowRight, Users, FileText, Zap, CheckCircle, Star, Menu, X } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-clivy-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-clivy-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">
                CLIVY<sup className="text-xs">®</sup>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#metodo" className="text-gray-300 hover:text-white transition-colors">Método</a>
              <a href="#clickup" className="text-gray-300 hover:text-white transition-colors">ClickUp</a>
              <a href="#depoimento" className="text-gray-300 hover:text-white transition-colors">Cases</a>
              <a 
                href="#cta" 
                className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                Agendar diagnóstico <ArrowRight size={16} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-clivy-dark-light border-t border-white/5">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#metodo" className="text-gray-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Método</a>
              <a href="#clickup" className="text-gray-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>ClickUp</a>
              <a href="#depoimento" className="text-gray-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Cases</a>
              <a 
                href="#cta" 
                className="bg-clivy-purple text-white px-5 py-3 rounded-lg font-medium text-center"
                onClick={() => setMenuOpen(false)}
              >
                Agendar diagnóstico
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 md:pt-40 pb-20 md:pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="text-clivy-purple text-sm">🎯</span>
            <span className="text-sm text-gray-300">Consultoria Especializada em ClickUp</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Você já tem muitos clientes novos,<br />
            agora precisa retê-los<br />
            <span className="gradient-text">com uma gestão eficiente.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Ajudamos empresas de serviços a sair do caos operacional e escalar com previsibilidade 
            através de Liderança, Processos e Tecnologia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#cta" 
              className="bg-clivy-purple hover:bg-clivy-purple-dark text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-lg"
            >
              Agendar diagnóstico <ArrowRight size={20} />
            </a>
            <a 
              href="#metodo" 
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all text-lg"
            >
              Conhecer o método
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-clivy-dark-light py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 mb-6">Este é o mesmo método que os <span className="gradient-text font-semibold">grandes</span> usam</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <span className="text-xl font-semibold">Imagine Company</span>
            <span className="text-xl font-semibold">Gabriel Rucci</span>
            <span className="text-xl font-semibold">Cacique Ads</span>
            <span className="text-xl font-semibold">Arretada Agência</span>
          </div>
        </div>
      </section>

      {/* Método Clivy Section */}
      <section id="metodo" className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-clivy-purple font-medium mb-4 block">O MÉTODO CLIVY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Três pilares para tirar sua empresa<br />
              <span className="gradient-text">do caos operacional</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A organização da equipe é um reflexo da organização do líder. 
              Nosso método integra os três elementos essenciais para uma gestão que funciona.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Pilar 1 - Liderança */}
            <div className="gradient-border">
              <div className="gradient-border-inner h-full">
                <div className="w-14 h-14 bg-clivy-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="text-clivy-purple" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Liderança</h3>
                <p className="text-gray-400 mb-6">
                  O time não vai se adaptar ao novo formato de gestão à força. 
                  Líderes devem ser vistos como exemplo dentro da organização.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Mapeamento do organograma</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Formação e treinamento de líderes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Definição de OKRs e metas SMART</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Gestão de pessoas e contratação</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilar 2 - Processos */}
            <div className="gradient-border">
              <div className="gradient-border-inner h-full">
                <div className="w-14 h-14 bg-clivy-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="text-clivy-purple" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Processos</h3>
                <p className="text-gray-400 mb-6">
                  Tudo o que é repetível deve ser documentado. 
                  Qualquer pessoa deve conseguir executar um passo a passo pré-definido.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Estrutura de rotinas e rituais</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Produtização de serviços</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Documentação de POPs</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Mapeamento de fluxos de trabalho</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilar 3 - Tecnologia */}
            <div className="gradient-border">
              <div className="gradient-border-inner h-full">
                <div className="w-14 h-14 bg-clivy-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-clivy-purple" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tecnologia</h3>
                <p className="text-gray-400 mb-6">
                  A tecnologia serve para unir liderança e processos, 
                  eliminando o trabalho manual e automatizando tarefas repetitivas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>ClickUp como sistema central</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Automações com n8n e Make</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Integração com WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-clivy-purple shrink-0 mt-0.5" size={18} />
                    <span>Dashboards personalizados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ClickUp Section */}
      <section id="clickup" className="py-20 md:py-32 px-4 bg-clivy-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-clivy-purple font-medium mb-4 block">CLICKUP + CLIVY</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                O ClickUp é nossa<br />
                <span className="gradient-text">ferramenta central</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Utilizamos o ClickUp para operacionalizar toda a gestão da sua empresa. 
                Todos os departamentos, processos, entregas e tarefas administrativas 
                ficam centralizados em um único lugar.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-clivy-purple/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-clivy-purple font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Estrutura por Departamentos</h4>
                    <p className="text-gray-400">Espaços para Marketing, Vendas, Operações, RH e mais.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-clivy-purple/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-clivy-purple font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Automações Inteligentes</h4>
                    <p className="text-gray-400">Onboarding de clientes, abertura de projetos e reuniões automatizadas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-clivy-purple/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-clivy-purple font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Dashboards e Relatórios</h4>
                    <p className="text-gray-400">Visualizações personalizadas para acompanhar métricas em tempo real.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-clivy-purple/20 to-transparent rounded-2xl p-8 border border-white/10">
                <div className="bg-clivy-dark rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-sm ml-2">ClickUp - Workspace Clivy</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-clivy-purple"></div>
                      <span className="text-sm">📁 Comercial</span>
                      <span className="text-xs text-gray-500 ml-auto">12 tarefas</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">📁 Projetos</span>
                      <span className="text-xs text-gray-500 ml-auto">28 tarefas</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">📁 Marketing</span>
                      <span className="text-xs text-gray-500 ml-auto">8 tarefas</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">📁 RH & Gestão</span>
                      <span className="text-xs text-gray-500 ml-auto">5 tarefas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento Section */}
      <section id="depoimento" className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-clivy-purple font-medium mb-4 block">CASES DE SUCESSO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              O que nossos clientes<br />
              <span className="gradient-text">dizem sobre nós</span>
            </h2>
          </div>

          <div className="gradient-border">
            <div className="gradient-border-inner">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                "Antes da Clivy, minha agência vivia apagando incêndios. Perdíamos clientes por falta de 
                organização e eu trabalhava 14 horas por dia sem ver resultado. Em 3 meses de implementação 
                do Método Clivy, conseguimos estruturar todos os processos no ClickUp, treinar a liderança 
                e finalmente ter previsibilidade. Hoje a operação roda sem depender 100% de mim e 
                <span className="text-clivy-purple font-semibold"> reduzimos o churn em 40%</span>."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-clivy-purple to-clivy-purple-dark rounded-full flex items-center justify-center text-xl font-bold">
                  RM
                </div>
                <div>
                  <p className="font-semibold text-lg">Rafael Mendes</p>
                  <p className="text-gray-400">CEO, Agência Impulso Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-32 px-4 bg-gradient-to-b from-clivy-dark-light to-clivy-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Quer resultados como esses<br />
            <span className="gradient-text">na sua empresa?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito e descubra como podemos transformar 
            sua operação com Liderança, Processos e Tecnologia.
          </p>
          
          <a 
            href="https://clivy.com.br" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-clivy-purple hover:bg-clivy-purple-dark text-white px-10 py-5 rounded-xl font-semibold transition-all text-lg shadow-lg shadow-clivy-purple/25 hover:shadow-clivy-purple/40"
          >
            Agendar diagnóstico gratuito <ArrowRight size={22} />
          </a>
          
          <p className="text-gray-500 text-sm mt-6">
            Sem compromisso. Vamos entender sua operação e mostrar como podemos ajudar.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">CLIVY<sup className="text-xs">®</sup></span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400 text-sm">Liderança, Processos e Tecnologia</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/clivycompany" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/@clivycompany" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
              <a href="https://linkedin.com/company/clivy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-gray-500 text-sm">
              © 2025 Clivy Company. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
