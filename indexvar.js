/**
 * Estudo conceito de variáveis:
 * var; let; const
 */

//--> 1) Uso de do var:

// a)- Variável local:

/*var nome = "José Neto";
console.log('Meu nome é = ', nome);
*
//b)- Variável dentro de escopo:*

function imprimirNome(){
    var nome = 'Fabricio Neto'
    //console.log('Meu nome é = ', nome);
}
console.log('Meu nome é = ', nome);//Error: Sempre usar var usá-la como local.
imprimirNome();

// --> 2) Uso do let:

//a)- Padrão usar let em laços(interaçoes)

function imprimirIdade(){
    for(let idade =0; idade <= 40; idade++ ){
        console.log('Idades = ', idade);
    }
}
imprimirIdade();

Observaçoes: -No uso de var pode-se declarar varias variáveis com o mesmo
nome que não dá erro(var nome; var nome).

-No uso de let não há como declarar tais variáveis( let nome; let nome).
*/

// --> 3) Uso do const:

// a)- São variáveis constantes, seu valor não pode ser alterado.

const getValue = (n) => {
return n + n;
}

console.log('Resustado = ', getValue(20));

typeof n;
