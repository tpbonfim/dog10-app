class Endereco {
    rua:String;
    cep:String;
    numero:String;
    bairro:String;
    cidade:String;
    estado:String;
  
    salvar(){
        localStorage.setItem((Math.random() * 100).toString(), JSON.stringify(this))
    }
  
    listar(){
        const lista=[]
        const tamanhoDoBanco = localStorage.length
        for(let i = 0; i < tamanhoDoBanco; i++){
            const idEndereco = localStorage.key(i)
            const endereco = localStorage.getItem(idEndereco)
            lista.push(JSON.parse(endereco))
        }
        return lista;      
    }
  }
  
  export default Endereco