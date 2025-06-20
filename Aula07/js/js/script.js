/* EVENTOS
Eventos sao açoes disparadas pela interaçao dos usuarios na pagina.
E o correto manejo desses eventos que tornam as paginas interativas e dinamicas.

Existem muitos eventos.

Os mais utilizados:

onClick → Disparado quando recebe um clique.
ondblclick → Disparado quando ocorre um clique duplo.
onmouseover → Disparado quando o mouse está sobre o elemento.
onmouseout → Disparado quando o mouse é movido para fora do elemento.
onmousemove → Disparado quando o mouse é movido dentro do elemento.
onmousedown → Disparado quando o botão do mouse é pressionado.
onmouseup → Disparado quando o botão do mouse é liberado.
onfocus → Disparado quando o elemento recebe o foco (válido para input).
onchange → Disparado quando há uma mudança no conteúdo ("ao mudar").
onblur → Disparado quando o elemento perde o foco.
onkeydown → Disparado quando uma tecla é pressionada.
onkeypress → Disparado quando uma tecla é pressionada e liberada.
onkeyup → Disparado quando uma tecla é liberada sobre o elemento.
onload → Disparado quando a página termina de ser carregada (body).
onresize → Disparado quando há um redimensionamento da janela.

*/

function eventoClick() {
    // alert("Acionou um evento de click!");
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick() {
    alert("Evento de clique duplo");
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAmarelo() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "yellow";
}

function adicionaTexto() {
    let p = document.getElementById("texto");
    p.append("O mouse moveu<br>");
    
}