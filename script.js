let nome = document.getElementById("nome")
let resposta = document.getElementById("nina")

function apertar()

{
    resposta.innerHTML= "Olá," + nome.value + "Tudo bem?"
}

let centimetro = document.getElementById("centimetro")
let resultadocm = document.getElementById("resultadocm")

function conversão()

{
    resultadocm.innerHTML = parseInt(centimetro.value) /100
}

let numero20 = document.getElementById("numero20")
let numero12 = document.getElementById("numero12")
let maior = document.getElementById("maior")

function mostre()

{

    if (numero20>numero12.value)
        {
            maior.innerHTML = numero20.value
        }
        else
        {
            maior.innerHTML = numero12.value
        }

    }


    var d = 1
    while(d <= 100)
        {
            console.log(d)
            d = d + 1
        }

        
        var d = 0
    while(d <= 50)
        {
            console.log(d)
            d = d + 5
        }


        var d = 0
        while(d <= 100)
            {
                console.log(d)
                d = d + 10
            }

if (salario.value)
    {
        aumento.innerHTML
    }