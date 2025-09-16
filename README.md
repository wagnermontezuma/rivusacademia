<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Rivus Academia - Landing Page

Landing page moderna para a academia Rivus, desenvolvida com React, Vite e TailwindCSS.

## Executando Localmente

**Pré-requisitos:** Node.js

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure a variável de ambiente `GEMINI_API_KEY` no arquivo [.env.local](.env.local) com sua chave de API do Gemini

3. Execute a aplicação:
   ```bash
   npm run dev
   ```

## Deploy na Vercel

### Método 1: Deploy via Interface Web da Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Importe este repositório Git ou faça upload dos arquivos
4. Configure as variáveis de ambiente na aba "Environment Variables":
   - `GEMINI_API_KEY` com sua chave de API do Gemini
5. Clique em "Deploy"

### Método 2: Deploy via Vercel CLI

1. Instale a Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Faça login na Vercel:
   ```bash
   vercel login
   ```

3. Execute o deploy:
   ```bash
   vercel
   ```

4. Siga as instruções para configurar o projeto e definir as variáveis de ambiente

### Configurações Importantes

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente