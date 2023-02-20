
    function consultar()
        window.alert('Bem vindo(a) a nossa página!');
    window.confirm('Confirme sua idade, tenho mais de 18 anos.');
    var nome = window.prompt('Digite seu primeiro nome:');
    var sobren = window.prompt('Digite seu sobrenome:');
    window.alert(`Olá, ${nome} ${sobren}, para darmos sequência em seu acesso, precisamos confirmar algumas informações...`);

var anonascimento = window.prompt('Digite o ano em que nasceu:');
var anoatual = window.prompt('Digite o ano atual: ');
    var idade = Number(anoatual-anonascimento);
    var registro = Number(prompt('Digite o ano de seu primeiro registro:'))
    var tempo = Number(prompt('Digite em quantos anos você deseja se aponsentar: '));
var aposent = registro+tempo;
var idadeapo = aposent-anonascimento;
window.alert(`Sr(a) ${nome} ${sobren}, informamos que você irá se aposentar no ano de ${aposent}, com a idade de ${idadeapo} anos de idade.`);
