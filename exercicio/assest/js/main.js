const form = document.querySelector('#formulario');

let data = document.querySelector('#hora');
let dataAgora = new Date();


function getDiaSemana(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto= 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}
function getMes(mes){
    let MesTexto;
    switch (mes){
        case 0:
            MesTexto = 'Janeiro';
        return MesTexto;
        case 1:
            MesTexto = 'Fevereiro';
        return MesTexto;
        case 2:
            MesTexto = 'Março';
        return MesTexto;
        case 3:
            MesTexto = 'Abril';
        return MesTexto;
        case 4:
            MesTexto = 'Maio';
        return MesTexto;
        case 5:
            MesTexto = 'Junho';
        return MesTexto;
        case 6:
            MesTexto = 'Julho';
        return MesTexto;
        case 7:
            MesTexto = 'Agosto';
        return MesTexto;
        case 8:
            MesTexto = 'Setembro';
        return MesTexto;
        case 9:
            MesTexto = 'Outubro';
        return MesTexto;
        case 10:
            MesTexto = 'Novembro';
        return MesTexto;
        case 11:
            MesTexto = 'Dezembro';
        return MesTexto;

    }
}

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero :`0${numero}`;
}

function criaData() {
    const diaSemana = dataAgora.getDay();
    const mes = dataAgora.getMonth();

    const nomeDiaSemana = getDiaSemana(diaSemana);
    const numeroMes = getMes(mes);

    return (`${nomeDiaSemana}, ${dataAgora.getDate()} de ${numeroMes} de ${dataAgora.getFullYear()}` + ` ${zeroAEsquerda(dataAgora.getHours())}:${zeroAEsquerda(dataAgora.getMinutes())}:${zeroAEsquerda(dataAgora.getSeconds())}`)

}

/* mameira simple de colocar a data e hora 
const data = document.querySelector('#hora');
const dataAgora = new Date();
const opcoes = {
    dateStyle = 'full'
    timeStyle = 'short'
}
data.innerHtml = dataAgora.toLocaleDateString('pt-Br', opcoes);
Ou
data.innerHtml = dataAgora.toLocaleDateString('pt-Br', { dateStyle:'full', timeStyle: 'short'});
*/

data.innerHTML = criaData(dataAgora);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    
    if(!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

});

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >= 39.9) {
            return nivel[5];
        }
        if(imc >= 34.9) {
            return nivel[4];
        }
        if(imc >= 29.9) {
            return nivel[3];
        }
        if(imc >= 24.9) {
            return nivel[2];
        }
        if(imc >= 18.9) {
            return nivel[1];
        }
        if(imc < 18.5) {
            return nivel[0];
        }
    }

    function getImc(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
            const resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
        
        const p = criaP();

        if(isValid) {
            p.classList.add('paragrafo-resultado');
        }
            else {
                p.classList.add('bad');
            }

            p.innerHTML = msg;
            resultado.appendChild(p);
    }




