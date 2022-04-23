let altura = document.getElementById('altBar');
let peso =document.getElementById('pesBar');
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');
let imc = document.getElementById('imc');
let descricao = document.getElementById('descricao')

calcular.addEventListener('click', conta)


const formula = function (){

        return peso.value / (altura.value*altura.value) * 10000
        };
        

function conta () {
    imc.style.opacity='1'
    
    if (formula() <=18.5) {
        resultado.innerHTML = `${formula().toFixed(2)}`
        resultado.style.color = 'blue'
        descricao.style.display= 'block'
        descricao.innerHTML = `BAIXO PESO:
        Nesse ponto, o corpo magro deixa de ser saudável e o organismo fica mais vulnerável a infecções. Se o baixo peso persistir, mesmo com alimentação normal, procure ajuda médica; a dificuldade para engordar pode ser sintoma de alguma doença insidiosa, como o diabetes.`
    }
    if (18.5 <= formula() && formula () <= 24.9) {
        resultado.innerHTML = `${formula().toFixed(2)}`
        resultado.style.color = 'green'
        descricao.style.display= 'block'
        descricao.innerHTML = `PESO IDEAL:
        Seu peso está adequado à altura. É importante manter a educação alimentar e a atividade física. Fique atento caso seu valor esteja perto dos limites para os estágios de Baixo Peso ou Sobrepeso.`};

    if (25 <= formula() && formula () <= 29.9) {
        resultado.innerHTML = `${formula().toFixed(2)}`
        resultado.style.color = 'yellow'
        descricao.style.display= 'block'
        descricao.innerHTML = `SOBREPESO:
        Esta faixa indica que você está com predisposição à obesidade; dependendo do seu histórico familiar e pessoal, pode haver um quadro de pré-diabetes e hipertensão. Procure orientação médica para evitar o próximo estágio, Obesidade 1. Quanto mais quilos extras, maior a dificuldade para emagrecer.`};

    if (30 <= formula() && formula () <= 34.9) {
        resultado.innerHTML = `${formula().toFixed(2)}`
        resultado.style.color = 'yellowgreen'
        descricao.style.display= 'block'
        descricao.innerHTML = `OBESIDADE GRAU 1:
        O risco de desenvolver diabetes, para quem está nesta faixa de peso, é de 20%, e o de hipertensão ultrapassa 25%. Há risco maior de outras doenças cardiovasculares, articulares, distúrbios psiquiátricos, apneia do sono e até certos tipos de câncer.`};
    
    if (35 <= formula() && formula () <= 39.9) {
        resultado.innerHTML = `${formula().toFixed(2)}`
        resultado.style.color = 'red'
        descricao.style.display= 'block'
        descricao.innerHTML = `OBESIDADE GRAU 2:
        O risco de desenvolver diabetes chega a 40%, e a chance de surgirem doenças associadas à obesidade, como reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares pode chegar a 50%. Procure orientação médica.`};
    
    if (formula() >= 40) {
        resultado.innerHTML = `${formula().toFixed(2)}`
        resultado.style.color = 'purple'
        descricao.style.display= 'block'
        descricao.innerHTML = `OBESIDADE GRAU 3:
        O risco de desenvolver doenças associadas ao excesso de peso, como diabetes, reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares chega a até 90%. Nesse estágio, a cirurgia de redução do estômago pode ser indicada. Procure orientação médica imediatamente.`};    
    };




