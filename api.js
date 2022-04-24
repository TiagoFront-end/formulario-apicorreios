// const cep = document.getElementById("cep");
// cep.addEventListener("blur", function (e) {
//     let Cep = document.getElementById("cep").value;
//     let search = cep.value.replace("-", "")
//     fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
//         response.json().then(data => {
//             console.log(data)
//             document.getElementById("bairro").value = data.bairro;
//             document.getElementById("ddd").value = data.ddd;
//             document.getElementById("ibge").value = data.ibge;
//             document.getElementById("localidade").value = data.localidade;
//             document.getElementById("logradouro").value = data.logradouro;
//             document.getElementById("siafi").value = data.siafi;
//             document.getElementById("telefone").value = data.telefone;
//             document.getElementById("uf").value = data.uf;
//         })
//     })

// })

// function Enviar() {
//     document.getElementById("bairro").value = data.bairro;
//     document.getElementById("ddd").value = data.ddd;
//     document.getElementById("telefone").value = data.telefone;
//     document.getElementById("ibge").value = data.ibge;
//     document.getElementById("localidade").value = data.localidade;
//     document.getElementById("logradouro").value = data.logradouro;
//     document.getElementById("uf").value = data.uf;
//     document.getElementById("telefone").value = data.telefone;
//     document.getElementById("siafi").value = data.siafi;


//     let json = {
//         "bairro": bairro,
//         "ddd": ddd,
//         "telefone": telefone,
//         "ibge": ibge,
//         "localidade": localidade,
//         "logradouro": logradouro,
//         "siafi": siafi,
//         "uf": uf


//     }
//     console.log(json)

// };

// exemplo 02  codigo reduzido

const cep = document.querySelector("#cep")


const showData = (resultado)=>{
    for( var campo in resultado){
        if(document.querySelector("#"+campo)) // so pega o campo que existe o restante sao anulados//
     document.querySelector("#"+campo).value = resultado [campo]
    }
}


 cep.addEventListener("blur", function(e){
    let search = cep.value.replace("-", "")
    const options = {
        method:'GET',
        cache: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data))
    })
    .catch(e => console.error('Deu Erro:'+ e,message))
})






