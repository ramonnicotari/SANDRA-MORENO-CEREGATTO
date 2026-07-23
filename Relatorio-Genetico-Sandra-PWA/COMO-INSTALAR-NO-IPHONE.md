# 📱 Como instalar no iPhone — Relatório Genético (PWA)

Este pacote transforma o relatório da **Sandra Moreno Ceregatto** em um app instalável na tela de início do iPhone, que abre em tela cheia e funciona **offline**.

## O que vem no zip
```
index.html      → o relatório (com as tags de PWA já embutidas)
manifest.json   → identidade do app (nome, cores, ícones)
sw.js           → service worker (faz funcionar offline)
icons/          → ícones da tela inicial (DNA em azul-marinho)
```

## ✅ Forma recomendada (app de verdade, com ícone e offline)

O iPhone só instala um PWA quando os arquivos são abertos por um endereço `https://`. É rápido e gratuito:

1. No computador, acesse **https://app.netlify.com/drop** (ou GitHub Pages / Cloudflare Pages).
2. **Arraste a pasta descompactada** (a pasta inteira, com `index.html` na raiz) para a área indicada. Em segundos você recebe um link `https://...netlify.app`.
3. No **iPhone**, abra esse link no **Safari** (precisa ser o Safari).
4. Toque no botão **Compartilhar** (quadrado com seta para cima) → **Adicionar à Tela de Início** → **Adicionar**.
5. Pronto: o ícone de DNA aparece na tela inicial. Ao abrir, roda em tela cheia. Depois da 1ª abertura, funciona **sem internet**.

## 📖 Só quer ler no iPhone, sem instalar?

O `index.html` é **autossuficiente** (todo o conteúdo está dentro dele). Você pode enviá-lo por e-mail/WhatsApp/AirDrop e abrir direto — funciona offline. Nesse modo, porém, não vira ícone de app (isso exige o passo do Safari acima).

## 🔄 Atualizar o relatório no futuro

Basta substituir o `index.html` por uma versão nova e reenviar a pasta ao mesmo host. O service worker usa versão `genetica-sandra-v1`; se quiser forçar atualização, altere para `v2` dentro do `sw.js`.

---
Dr. Ramon Nicotari · Nutricionista · CRN3-31139
