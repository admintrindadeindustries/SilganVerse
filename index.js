
// url de requisição do arena
//http://junerp02:5201/rest/arena02/22/01

function getArena(cEmp,cFilial)
{
    axios.get(`http://junerp02:5201/rest/arena02/${cEmp}/${cFilial}`)
    .then(
        (resposta) => {
            console.log(resposta);
            const listaops = document.getElementById('listaops');
            const tablebody = document.getElementById('tablebody');
            resposta.data.forEach(op => {
                let tr = document.createElement('tr');
                let uap = document.createElement('td');
                let maquina = document.createElement('td');
                let nomemaquina = document.createElement('td');
                let produto = document.createElement('td');
                let nomeproduto = document.createElement('td');
                let codop = document.createElement('td');
                let qtdop = document.createElement('td');
                let qtdreg = document.createElement('td');
                let qtdapto = document.createElement('td');
                let qtdsaldo = document.createElement('td');

                uap.innerHTML = op['CCELULA'];
                maquina.innerHTML = op['CCODMAQ'];
                nomemaquina.innerHTML = op['CMAQUINA'];
                produto.innerHTML = op['CCODPROD'];
                nomeproduto.innerHTML = op['CNOMEPROD'];
                codop.innerHTML = op['COP'];
                qtdop.innerHTML = op['NQTDOP'];
                qtdreg.innerHTML = op['NQTDREG'];
                qtdapto.innerHTML = op['NQTDAPT'];
                qtdsaldo.innerHTML = op['NSALDO'];

                tr.appendChild(uap);
                tr.appendChild(maquina);
                tr.appendChild(nomemaquina);
                tr.appendChild(produto);
                tr.appendChild(nomeproduto);
                tr.appendChild(codop);
                tr.appendChild(qtdop);
                tr.appendChild(qtdreg);
                tr.appendChild(qtdapto);
                tr.appendChild(qtdsaldo);

                tablebody.appendChild(tr);
               
            });
            let loader = document.getElementById("loader");
            loader.setAttribute("class","d-none");
            listaops.setAttribute("class","table table-dark table-striped");
        }
    ).catch((error) => {
        console.log(error);
    });
        
}

//this.getArena("22","01");