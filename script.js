let minutos = 25;
let segundos = 0;
let intervalo;
const timer = document.getElementById("tempo");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reiniciar = document.getElementById("reiniciar");
function atualizarTela() {
    timer.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}
function iniciarPomodoro() {
    if (intervalo) return;
    intervalo = setInterval(() => {
        if (segundos === 0) {
            if (minutos === 0) {
                clearInterval(intervalo);
                intervalo = null;
                alert("tempo encerrado!");
                return;
            }
            minutos--;
            segundos = 59;
        } else {
            segundos--;
        }
        atualizarTela();
    }, 1000);
}
function pausarPomodoro() {
    clearInterval(intervalo);
    intervalo = null;
}
function reiniciarPomodoro() {
    clearInterval(intervalo);
    intervalo = null;
    minutos = 25;
    segundos = 0;
    atualizarTela();
}
iniciar.addEventListener("click", iniciarPomodoro);
pausar.addEventListener("click", pausarPomodoro);
reiniciar.addEventListener("click", reiniciarPomodoro);

atualizarTela();