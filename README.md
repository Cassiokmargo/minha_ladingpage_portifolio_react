# 🚀 Portfólio - Cássio Camargo

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Sass-1.89.2-CC6699?style=for-the-badge&logo=sass" alt="Sass" />
</div>

## 📋 Sobre o Projeto

Portfólio pessoal desenvolvido com React, TypeScript e Vite, apresentando minha jornada como desenvolvedor front-end. O projeto demonstra habilidades em desenvolvimento web moderno, com foco em responsividade e experiência do usuário.

### ✨ Características Principais

- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Componentização**: Arquitetura modular com componentes reutilizáveis
- **Performance Otimizada**: Build otimizado com Vite
- **Acessibilidade**: Implementação de boas práticas de acessibilidade
- **Animações Suaves**: Transições e efeitos visuais modernos

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **TypeScript 5.8.3** - Superset JavaScript com tipagem estática
- **Vite 7.0.4** - Build tool e dev server
- **Sass 1.89.2** - Pré-processador CSS
- **Swiper 11.2.10** - Biblioteca para carrosséis
- **Motion 12.23.12** - Animações e transições

### Desenvolvimento

- **ESLint** - Linting de código
- **Yarn** - Gerenciador de pacotes
- **Git** - Controle de versão

## 🎯 Funcionalidades

### 📱 Responsividade Inteligente

- **Desktop (≥430px)**: Layout horizontal com carrossel de imagens
- **Mobile (<430px)**: Cards verticais otimizados para touch

### 🎨 Seções do Portfólio

- **Header**: Navegação principal
- **Primeira Seção**: Apresentação pessoal com efeito typewriter
- **Stacks**: Tecnologias e ferramentas dominadas
- **Projetos**: Portfolio de trabalhos realizados
- **Footer**: Informações de contato

### 🎪 Componentes Especiais

- **ProgressScrollBar**: Barra de progresso do scroll
- **SwiperComponent**: Carrossel responsivo para projetos
- **SocialMedia**: Links para redes sociais
- **ButtonLinks**: Botões de ação personalizados

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn (recomendado) ou npm

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/portifolio-react-vite-yarn.git
cd portifolio-react-vite-yarn
```

2. **Instale as dependências**

```bash
yarn install
# ou
npm install
```

3. **Execute o projeto em modo desenvolvimento**

```bash
yarn dev
# ou
npm run dev
```

4. **Acesse o projeto**

```
http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev

# Build para produção
yarn build

# Preview do build
yarn preview

# Linting
yarn lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── FirstSection/   # Seção de apresentação
│   ├── Header/         # Cabeçalho
│   ├── ProjectsSection/# Seção de projetos
│   ├── StacksSection/  # Seção de tecnologias
│   ├── Footer/         # Rodapé
│   └── ...
├── assets/             # Recursos estáticos
│   ├── icons/          # Ícones SVG
│   ├── imagens/        # Imagens dos projetos
│   └── stacks_icons/   # Ícones das tecnologias
├── mocks/              # Dados mockados
│   ├── projects.json   # Projetos
│   └── stacks.json     # Tecnologias
└── styles/             # Estilos globais
```

## 🎨 Design System

### Cores

- **Laranja**: `#EE9A47` - Cor de destaque
- **Branco**: `#FFFFFF` - Texto principal
- **Preto**: `#171717` - Fundo principal
- **Gradiente**: Linear gradient para cards

### Tipografia

- **JetBrains Mono**: Fonte monospace para código
- **Inter**: Fonte sans-serif para texto

### Breakpoints

- **Desktop**: ≥430px
- **Mobile**: <430px

## 📱 Responsividade

O projeto implementa uma estratégia de **renderização condicional** baseada no tamanho da tela:

- **Telas grandes**: Componente `Project` com carrossel horizontal
- **Telas pequenas**: Componente `CardProject` com layout em cards

## 🔧 Configuração de Desenvolvimento

### ESLint

Configurado com regras para React e TypeScript:

```bash
yarn lint
```

### TypeScript

Configuração estrita para melhor qualidade de código:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

## 📦 Deploy

### Build para Produção

```bash
yarn build
```

### Preview do Build

```bash
yarn preview
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: cassio.dev.camargo@gmail.com
- **LinkedIn**: [Cássio Camargo](https://linkedin.com/in/cassio-c-camargo)
- **GitHub**: [@Cassiokmargo](https://github.com/Cassiokmargo)

---

<div align="center">
  <p>Desenvolvido com ❤️ por <strong>Cássio Camargo</strong></p>
  <p>✨ Front-end Developer</p>
</div>
