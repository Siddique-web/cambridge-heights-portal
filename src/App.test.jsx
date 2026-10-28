import {render,screen,fireEvent,act} from "@testing-library/react";
import App from "./App.jsx";
const go=n=>fireEvent.click(screen.getByRole("button",{name:n}));
const login=()=>fireEvent.click(screen.getByRole("button",{name:"Entrar"}));

test("site público mostra lema, programas e contacto",()=>{
  render(<App/>);
  expect(screen.getByText(/Building Strong Foundations/)).toBeInTheDocument();
  expect(screen.getByText("Um caminho para cada idade")).toBeInTheDocument();
  expect(screen.getAllByText(/875755102/).length).toBeGreaterThan(0);
});

test("pré-matrícula em 3 passos termina com sucesso",()=>{
  render(<App/>);
  fireEvent.change(screen.getByLabelText("Nome completo"),{target:{value:"Ana Silva"}});
  fireEvent.change(screen.getByLabelText("Telemóvel"),{target:{value:"875755102"}});
  fireEvent.click(screen.getByText("Continuar"));
  fireEvent.change(screen.getByLabelText("Nome da criança"),{target:{value:"Leo"}});
  fireEvent.change(screen.getByLabelText("Data de nascimento"),{target:{value:"2023-05-01"}});
  fireEvent.click(screen.getByText("Continuar"));
  fireEvent.click(screen.getByText("Enviar pré-matrícula"));
  expect(screen.getByText("Pedido enviado!")).toBeInTheDocument();
});

test("pai entra e paga a fatura com e-Mola (TX_SUCCESS)",async()=>{
  vi.useFakeTimers();
  render(<App/>);
  go("Área do Pai"); login();
  fireEvent.click(screen.getByRole("tab",{name:"Pagamentos"}));
  fireEvent.click(screen.getByRole("button",{name:"Pagar"}));
  const btn=screen.getByRole("button",{name:"Pagar com e-Mola"});
  expect(btn).toBeDisabled();
  fireEvent.change(screen.getByPlaceholderText(/86xxxxxxx/),{target:{value:"861234567"}});
  expect(btn).not.toBeDisabled();
  fireEvent.click(btn);
  expect(screen.getByText("Confirme no seu telemóvel")).toBeInTheDocument();
  await act(async()=>{vi.advanceTimersByTime(3000)});
  expect(screen.getByText("TX_SUCCESS")).toBeInTheDocument();
  vi.useRealTimers();
});

test("login recusa palavra-passe errada",()=>{
  render(<App/>);
  go("Área do Pai");
  fireEvent.change(screen.getByLabelText("Palavra-passe"),{target:{value:"errada"}});
  login();
  expect(screen.getByRole("alert")).toBeInTheDocument();
});

test("administração aprova matrícula e o diário publicado aparece no portal",()=>{
  render(<App/>);
  go("Administração"); login();
  fireEvent.click(screen.getAllByText("Aprovar")[0]);
  expect(screen.getByText("Aprovada")).toBeInTheDocument();
  fireEvent.change(screen.getByPlaceholderText("Atividades do dia"),{target:{value:"Aula de pintura com guaches"}});
  fireEvent.click(screen.getByText("Publicar diário"));
  expect(screen.getByText(/Diário publicado/)).toBeInTheDocument();
  go("Área do Pai"); login();
  expect(screen.getByText("Aula de pintura com guaches")).toBeInTheDocument();
});

test("slideshow do hero roda de 6 em 6 segundos, sem parar nem com o rato por cima",async()=>{
  vi.useFakeTimers();
  render(<App/>);
  expect(screen.getByText(/^Paint & Print: /)).toBeInTheDocument();
  expect(screen.queryByRole("button",{name:"Pausar"})).toBeNull();
  fireEvent.mouseEnter(screen.getByRole("region",{name:/Crianças/}));
  for(const t of ["Mathematics & Estimation","Reading & Language","Recreio e brincadeira","Blocos e letras","Paint & Print"]){
    await act(async()=>{vi.advanceTimersByTime(6000)});
    expect(screen.getByText(new RegExp("^"+t+": "))).toBeInTheDocument();
  }
  fireEvent.click(screen.getByRole("button",{name:"Slide seguinte"}));
  expect(screen.getByText(/^Mathematics & Estimation: /)).toBeInTheDocument();
  vi.useRealTimers();
});

test("menu do topo tem Entrar e Matricular e abre a área do pai",()=>{
  render(<App/>);
  expect(screen.getByRole("link",{name:"Matricular"})).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button",{name:"Entrar"}));
  expect(screen.getByText("Área do Encarregado")).toBeInTheDocument();
});
