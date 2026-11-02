import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";

// Faz o build funcionar em qualquer pasta/alojamento (caminhos relativos) e até abrindo
// dist/index.html com duplo-clique (sem type="module"/crossorigin, que o browser bloqueia em file://).
const portable=()=>({name:"portable-html",enforce:"post",transformIndexHtml:{order:"post",handler:h=>h.replace(/<script type="module" crossorigin/g,"<script defer").replace(/<link rel="stylesheet" crossorigin/g,'<link rel="stylesheet"')}});

export default defineConfig({
  base:"./",
  plugins:[react(),portable()],
  build:{modulePreload:false,cssCodeSplit:false,rollupOptions:{output:{format:"iife"}}},
  test:{environment:"jsdom",globals:true,setupFiles:"./src/setup.js",css:false}
});
