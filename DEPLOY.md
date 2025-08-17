# 🚀 Guia de Deploy - Portfólio Cássio Camargo

## 📋 Pré-requisitos para Deploy

Antes de fazer o deploy, certifique-se de que:

1. ✅ Build está funcionando: `yarn build`
2. ✅ Todos os arquivos SEO estão presentes
3. ✅ Meta tags estão configuradas
4. ✅ URLs estão atualizadas para seu domínio

## 🔧 Configurações Necessárias

### 1. Atualizar URLs nos Arquivos

Antes do deploy, atualize as seguintes URLs para seu domínio real:

#### `index.html`

```html
<link rel="canonical" href="https://SEU-DOMINIO.com" />
<meta property="og:url" content="https://SEU-DOMINIO.com" />
<meta property="twitter:url" content="https://SEU-DOMINIO.com" />
<meta property="og:image" content="https://SEU-DOMINIO.com/og-image.jpg" />
<meta property="twitter:image" content="https://SEU-DOMINIO.com/og-image.jpg" />
```

#### `public/robots.txt`

```
Sitemap: https://SEU-DOMINIO.com/sitemap.xml
```

#### `public/sitemap.xml`

```xml
<loc>https://SEU-DOMINIO.com/</loc>
```

### 2. Criar Imagem Open Graph

Crie uma imagem `og-image.jpg` (1200x630px) e coloque em `public/` para previews em redes sociais.

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

#### Passo a Passo:

1. **Conecte seu GitHub**:

   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub
   - Clique em "New Project"

2. **Configure o projeto**:

   - Selecione seu repositório
   - Framework: Vite
   - Build Command: `yarn build`
   - Output Directory: `dist`
   - Install Command: `yarn install`

3. **Variáveis de ambiente** (se necessário):

   ```
   NODE_ENV=production
   ```

4. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o build
   - Acesse seu domínio

#### Configuração Automática:

Crie um arquivo `vercel.json` na raiz:

```json
{
  "buildCommand": "yarn build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Netlify

#### Passo a Passo:

1. **Conecte seu GitHub**:

   - Acesse [netlify.com](https://netlify.com)
   - Faça login com GitHub
   - Clique em "New site from Git"

2. **Configure o build**:

   - Build command: `yarn build`
   - Publish directory: `dist`
   - Node version: `18` (ou superior)

3. **Configuração adicional**:
   Crie um arquivo `netlify.toml` na raiz:

```toml
[build]
  command = "yarn build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

#### Passo a Passo:

1. **Configure o repositório**:

   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

2. **Instale o plugin**:

```bash
yarn add -D gh-pages
```

3. **Adicione scripts no package.json**:

```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**:

```bash
yarn deploy
```

### 4. Firebase Hosting

#### Passo a Passo:

1. **Instale Firebase CLI**:

```bash
npm install -g firebase-tools
```

2. **Login e inicialize**:

```bash
firebase login
firebase init hosting
```

3. **Configure**:

   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub Actions: `No`

4. **Deploy**:

```bash
yarn build
firebase deploy
```

## 🔍 Verificações Pós-Deploy

### 1. Teste de Funcionalidade

- [ ] Site carrega corretamente
- [ ] Todas as seções estão visíveis
- [ ] Links funcionam
- [ ] Responsividade funciona
- [ ] Animações funcionam

### 2. Teste de SEO

- [ ] Meta tags estão presentes
- [ ] Título da página está correto
- [ ] Descrição aparece nos resultados de busca
- [ ] Open Graph funciona no Facebook/LinkedIn
- [ ] Twitter Cards funcionam

### 3. Teste de Performance

- [ ] Lighthouse Score > 90
- [ ] Core Web Vitals estão bons
- [ ] Imagens estão otimizadas
- [ ] CSS/JS estão minificados

### 4. Teste de Acessibilidade

- [ ] Navegação por teclado funciona
- [ ] Screen readers conseguem ler o conteúdo
- [ ] Contraste de cores está adequado
- [ ] Alt text nas imagens

## 🛠️ Ferramentas de Verificação

### Lighthouse

```bash
# Chrome DevTools > Lighthouse
# Ou via CLI
npm install -g lighthouse
lighthouse https://seu-dominio.com
```

### Google PageSpeed Insights

- Acesse: https://pagespeed.web.dev/
- Digite sua URL
- Analise os resultados

### Google Search Console

1. Adicione sua propriedade
2. Verifique se o sitemap está sendo lido
3. Monitore erros de indexação

## 📊 Monitoramento

### Google Analytics

Adicione o código de tracking no `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Hotjar (Opcional)

Para análise de comportamento do usuário.

## 🔧 Troubleshooting

### Problemas Comuns:

1. **404 em rotas**:

   - Configure redirects para SPA
   - Verifique se o servidor serve `index.html`

2. **Imagens não carregam**:

   - Verifique se estão na pasta `public/`
   - Use caminhos relativos corretos

3. **Build falha**:

   - Verifique dependências: `yarn install`
   - Limpe cache: `yarn cache clean`
   - Verifique TypeScript: `yarn tsc --noEmit`

4. **SEO não funciona**:
   - Verifique meta tags
   - Teste com ferramentas de preview
   - Aguarde indexação (pode levar dias)

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs de build
2. Teste localmente: `yarn preview`
3. Consulte a documentação da plataforma
4. Abra uma issue no GitHub

---

**Boa sorte com o deploy! 🚀**
