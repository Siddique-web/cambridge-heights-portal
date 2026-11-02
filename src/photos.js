// Fotos reais da escola. Para trocar/adicionar uma foto: coloque os ficheiros
// `nome-lg.webp` (1400px) e `nome-sm.webp` (640px) em src/assets/fotos/ e acrescente uma linha abaixo.
const raw = import.meta.glob("./assets/fotos/*.webp", { eager: true, import: "default" });
const u = (n, s) => raw[`./assets/fotos/${n}-${s}.webp`];

// [chave, largura, altura, título, legenda, categorias, texto alternativo]
const D = [
  ["fachada", 1280, 960, "Bem-vindo à Cambridge Heights", "Entrada principal, na Ponta-Gêa, Beira", ["Espaço"],
    "Fachada da escola com a placa Cambridge Heights School, E.I. e o cartaz Welcome / Bem-vindo no portão"],
  ["patio", 1600, 1200, "Pátio da frangipani", "Recreio à sombra, com areia e espaço para correr", ["Pátio", "Crianças"],
    "Pátio interior com uma frangipani, crianças a brincar na areia e vasos feitos com pneus reciclados"],
  ["sala-criancas", 1280, 960, "Hora de brincar e aprender", "Esteiras, cantinho de livros e muita alegria", ["Salas", "Crianças"],
    "Crianças a brincar numa sala de aula com esteiras, estante amarela e cartazes do alfabeto"],
  ["sala-numeros", 1600, 1200, "A sala dos números", "Números de 0 a 20, ecrã de apoio e quadro branco", ["Salas"],
    "Sala com cartazes dos números de 0 a 20, televisão, quadro branco e cartazes do tempo"],
  ["alfabeto", 1600, 1200, "Letras e sons", "O alfabeto sempre à vista e à altura das crianças", ["Salas", "Crianças"],
    "Crianças em pé junto à parede com o cartaz do alfabeto, a sorrir para a câmara"],
  ["quadro", 1600, 1200, "A rotina do dia no quadro", "Data, tópico da aula e cartazes do tempo", ["Salas"],
    "Quadro branco com a data e o tópico 'Number', ecrã com imagens de baleias e números na parede"],
  ["hall", 1600, 1200, "Hall e cacifos", "Cacifos individuais para as mochilas de cada aluno", ["Espaço"],
    "Hall de entrada com cacifos metálicos, escadas, cadeiras e ar condicionado"],
  ["sala-ampla", 1600, 1200, "Sala de aula ampla", "Ecrã de apoio, banco de leitura e muita luz natural", ["Salas"],
    "Sala de aula espaçosa com parede vermelha, ecrã, quadro branco e banco amarelo"],
  ["jardim", 1280, 960, "Jardim e cantinho de sombra", "Zona verde com tenda de sombra para atividades ao ar livre", ["Pátio"],
    "Jardim com plantas, uma mesa colorida e uma tenda de sombra no fundo"],
  ["secretaria", 1280, 960, "Secretaria", "Atendimento aos encarregados, matrículas e informações", ["Espaço"],
    "Secretaria da escola com secretárias, estante de livros, quadro de avisos e a bandeira de Moçambique"],
];

export const PH = Object.fromEntries(
  D.map(([k, w, h, title, sub, cats, alt]) => [k, { k, w, h, sm: u(k, "sm"), lg: u(k, "lg"), title, sub, cats, alt }])
);
export const ALL = D.map((d) => d[0]);
export const CATS = ["Todas", "Espaço", "Salas", "Pátio", "Crianças"];
