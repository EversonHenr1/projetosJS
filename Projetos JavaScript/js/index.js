window.onload = function (){

    //Container dos projetos
    const containerProj = document.querySelector("#container-proj");
    
    //Instaciar Projetos
        
        //Criar arrays que contenham dados dos projetos 
        let projArr = [] 
        //parm1 = Imagem de fundo , parm2 = Titulo do projeto , parm3 = LinkGitHub , parm4 = LinkdoProjeto 

        //Projeto para Criar listas
        let lista = ["./project/imagem_lista.png","Lista de Tarefas","https://github.com/EversonHenr1/lista_JS","https://eversonhenr1.github.io/lista_JS/lista_js/index.html"]
        let cal = ["./project/imagem_cal.png","Calculadora + Historico","https://github.com/EversonHenr1/calculadora","https://eversonhenr1.github.io/calculadora/calculadora/"]
        
        //Inserir projetos na Array
        projArr.push(lista)
        projArr.push(cal)
        

    //Inserir classe em todos os projetos

    projArr.forEach((img,i) => {
        //Guardar o template
        const template = document.querySelector("#template").cloneNode(true)
        template.style.display = "block"
        //Mudar a Imagem de fundo
        template.style.backgroundImage = `url(${projArr[i][0]})`
        //Mudar o Titulo
        const titulo = template.querySelector("h2")
        titulo.textContent = projArr[i][1]
        //Adiciona eventos
        const site = template.querySelector("i:last-child")
        const git = template.querySelector("i:nth-of-type(1)")
        //Criar links 
        git.onclick = () =>{
            window.open(projArr[i][2],'_blank')
        }
        site.onclick =() =>{
            window.open(projArr[i][3],'_blank')
        }
        //Aplicar o projeto ao site
        containerProj.appendChild(template)
    });
} 