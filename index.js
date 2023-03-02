
// url de requisição do arena
//http://junerp02:5201/rest/arena02/22/01

function getArena(cEmp,cFilial)
{
    axios.get(`http://junerp02:5201/rest/arena02/${cEmp}/${cFilial}`)
    .then(
        (resposta) => {
            console.log(resposta);
        }
    ).catch((error) => {
        console.log(error);
    });
        
}

//this.getArena("22","01");