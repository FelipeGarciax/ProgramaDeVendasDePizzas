'use strict'
//variaveis
let somaMussarela = 0;
let somaPresunto = 0;
let somaMista = 0;
let somaModa = 0;
let vendaMussarela = 0.0;
let vendaPresunto = 0.00;
let vendaMista = 0.00;
let vendaModa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções
function venda(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);  
    }else if(document.getElementById('presunto').checked)
    {
        somaPresunto = somaPresunto + 1;
        vendaPresunto = vendaPresunto + 25.00;
        document.getElementById('resultadoPresunto').innerHTML = somaPresunto;
        document.getElementById('vendaPresunto').innerHTML = vendaPresunto.toFixed(2); 
    }else if(document.getElementById('mista').checked)   
    {
         somaMista = somaMista + 1;
         vendaMista = vendaMista + 25.00;
         document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2); 
    }else if(document.getElementById('moda').checked)  
    {
        somaModa = somaModa + 1;
        vendaModa = vendaModa + 50.00;
        document.getElementById('resultadoModa').innerHTML = somaModa;
        document.getElementById('vendaModa').innerHTML = vendaModa.toFixed(2); 
    } 
}

function estorno(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela < 0)
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);  
    }else if(document.getElementById('presunto').checked)
    {
        somaPresunto = somaPresunto - 1;
        vendaPresunto = vendaPresunto - 25.00;
        if(somaPresunto < 0)
        {
            somaPresunto = 0;
            vendaPresunto = 0.00;
        }
        document.getElementById('resultadoPresunto').innerHTML = somaPresunto;
        document.getElementById('vendaPresunto').innerHTML = vendaPresunto.toFixed(2); 
    }else if(document.getElementById('mista').checked)   
    {
         somaMista = somaMista - 1;
         vendaMista = vendaMista - 25.00;
         if(somaMista < 0)
         {
             somaMista = 0;
             vendaMista = 0.00;
         }
         document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2); 
    }else if(document.getElementById('moda').checked)  
    {
        somaModa = somaModa - 1;
        vendaModa = vendaModa - 50.00;
        if(somaModa < 0)
        {
            somaModa = 0;
            vendaModa = 0.00;
        }
        document.getElementById('resultadoModa').innerHTML = somaModa;
        document.getElementById('vendaModa').innerHTML = vendaModa.toFixed(2); 
    } 
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}

