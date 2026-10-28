# Cambridge Heights School, E.I. — Portal (React + Vite + Tailwind)

Site público, Área do Encarregado (diário, fotos, perfil, boletim, pagamento e-Mola simulado) e Administração (métricas, matrículas, diário pedagógico, baixa manual, transações). Dados de demonstração em memória: abre a funcionar sem backend.

## 1. Requisitos
- Node.js 18 ou superior (recomendado 20). Verifique com `node -v` e `npm -v`.
- Download: https://nodejs.org

## 2. Instalar
```bash
cd cambridge-heights-portal
npm install
```

## 3. Executar em desenvolvimento
```bash
npm run dev
```
Abra http://localhost:5173. No telemóvel (mesma rede Wi-Fi): `npm run dev -- --host` e abra o endereço de rede mostrado.

## 4. Testar
**Automático** (5 testes: site, pré-matrícula, login, pagamento e-Mola, administração + diário):
```bash
npm test
```

**Manual** (checklist de 5 minutos):
1. Site: o slideshow do topo muda a cada 6 s (setas, pontos, teclado, deslizar no telemóvel; nunca pára); os lemas rodam; o scroll faz fade-in suave; "Escolher plano" leva à matrícula.
2. Pré-matrícula: preencha os 3 passos (telemóvel com 9 dígitos, ex.: 875755102). Deve aparecer "Pedido enviado!".
3. Barra inferior → **Administração** → Entrar (secretaria / admin). Aprove a matrícula (aparecem as credenciais), lance um diário e dê baixa a uma fatura.
4. Barra inferior → **Área do Pai** → Entrar (marta / 1234). Veja o diário publicado, troque de filho, abra Perfil e Boletim.
5. Pagamentos → Pagar → número 86xxxxxxx ou 87xxxxxxx → aguarde ~3 s → `TX_SUCCESS`, recibo (Copiar / Descarregar). Volte à Administração: a transação aparece.
6. Botão 🌙/☀️: alterna o tema. Redimensione para 360 px: tudo deve caber sem scroll lateral.

## 5. Compilar para produção
```bash
npm run build      # gera a pasta dist/
npm run preview    # serve dist/ em http://localhost:4173
```

## 6. Publicar
Qualquer alojamento estático serve (Netlify, Vercel, Cloudflare Pages, cPanel): envie o conteúdo de `dist/`. Comando de build: `npm run build`; pasta de saída: `dist`.

## 7. Credenciais de demonstração
| Área | Utilizador | Palavra-passe |
|---|---|---|
| Encarregado | marta | 1234 |
| Administração | secretaria | admin |

## 8. Estrutura
- `src/App.jsx` — todas as áreas e componentes
- `src/index.css` — Tailwind + estilos da marca (vinho #7A1C1C, dourado #D4AF37)
- `src/assets/` — logotipo oficial
- `src/App.test.jsx` — testes (Vitest + Testing Library)

## 9. Antes de ir para produção
Isto é um protótipo funcional, não um sistema de produção:
- **Backend real:** os dados vivem em memória e perdem-se ao recarregar. Ligue a uma API e base de dados (as funções `pay`, `approve`, `addDiario`, `baixa` e `addEnroll` em `App()` são os pontos a trocar).
- **Autenticação:** o login aceita apenas as credenciais de demonstração; as credenciais geradas na aprovação ainda não entram.
- **e-Mola:** o push USSD e o `TX_SUCCESS` são simulados; a integração real exige as credenciais e a API do operador.
- **Conteúdo:** propinas, testemunhos e dados de alunos são ilustrativos; substitua pelas fotos e valores reais.

## 10. Slideshow e tipo de letra
- Os 5 slides (`SC` em `src/App.jsx`) são ilustrações das crianças em atividades. Para usar fotos reais, coloque-as em `src/assets/`, importe-as e troque o `<svg>` do slide por `<img>` (um campo `title`, `bg` e `s` por slide).
- Títulos em *Poppins* (negrito) e texto em *Inter* (Google Fonts). Para trocar, altere o link em `index.html` e a regra `h1,h2,h3,.disp` em `src/index.css`.
