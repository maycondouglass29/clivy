# Desafio Clivy - Processo Seletivo

## 📋 Entregáveis

### Desafio 1: Landing Page
- **Link da página publicada:** [https://clivy.vercel.app](https://clivy.vercel.app)
- **Repositório:** Este repositório (pasta `clivy-landing/`)
- **Tecnologias:** React + Vite + TailwindCSS + Framer Motion

### Desafio 2: Agente de IA no WhatsApp
- **Workflow n8n:** `n8n-workflow-whatsapp-completo.json`
- **Base de conhecimento:** `base-conhecimento-clivy.md`
- **Tecnologias:** n8n + Evolution API + Groq (Llama 3.1)

---

## 🚀 Landing Page

### Estrutura
```
clivy-landing/
├── src/
│   ├── components/
│   │   ├── ClientCarousel.jsx    # Carrossel de clientes
│   │   └── DiagnosisModal.jsx    # Modal de diagnóstico
│   ├── pages/
│   │   ├── Home.jsx              # Página principal
│   │   └── Cases.jsx             # Página de cases
│   ├── App.jsx                   # Layout e rotas
│   └── index.css                 # Estilos globais
├── public/
│   ├── carrossel/                # Imagens dos clientes
│   └── *.png                     # Logos e imagens de cases
└── package.json
```

### Funcionalidades
- ✅ Design responsivo (mobile/desktop)
- ✅ Carrossel animado de clientes
- ✅ Botão flutuante de WhatsApp (conectado ao agente)
- ✅ Integração com formulário Respondi
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado

### Rodar localmente
```bash
cd clivy-landing
npm install
npm run dev
```

---

## 🤖 Agente de IA WhatsApp

### Arquitetura
```
WhatsApp → Evolution API → n8n Webhook → Groq AI → Resposta WhatsApp
```

### Fluxo do Workflow
1. **Webhook WhatsApp** - Recebe mensagens da Evolution API
2. **Filtrar Mensagens** - Processa apenas `messages.upsert`
3. **Extrair Dados** - Extrai número, conteúdo, tipo da mensagem
4. **Validar Mensagem** - Filtra mensagens válidas (não próprias, texto)
5. **Indicador Digitando** - Mostra "digitando..." no WhatsApp
6. **Preparar Prompt** - Monta contexto com base de conhecimento
7. **Chamar Groq** - Envia para IA (Llama 3.1 8B)
8. **Processar Resposta** - Limpa formatação markdown
9. **Enviar Resposta** - Envia via Evolution API
10. **Registrar Log** - Loga a interação

### Base de Conhecimento
O agente conhece:
- Identidade e missão da Clivy
- Os 3 pilares (Liderança, Processos, Tecnologia)
- Estrutura no ClickUp
- Automações implementadas
- Cases de sucesso
- Links e contatos oficiais

### Regras de Resposta
- Conversa natural de WhatsApp
- 3-6 frases por resposta
- Sem listas, bullets ou formatação
- Sempre termina com pergunta relacionada
- Direciona para diagnóstico quando apropriado

### Importar no n8n
1. Acesse seu n8n
2. Vá em Workflows → Import from File
3. Selecione `n8n-workflow-whatsapp-completo.json`
4. Configure as credenciais (Evolution API, Groq)
5. Ative o workflow

---

## 📁 Estrutura de Arquivos

```
Desafio-Clivy/
├── clivy-landing/              # Código da landing page
├── n8n-workflow-whatsapp-completo.json  # Workflow do agente
├── base-conhecimento-clivy.md  # Base de conhecimento do agente
├── docker-compose.yml          # Infraestrutura (Evolution API)
└── README.md                   # Este arquivo
```

---

## 👤 Autor

Desenvolvido para o processo seletivo da Clivy Company.
