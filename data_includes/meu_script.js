PennController.ResetPrefix()
PennController.DebugOff();
//Sequência de telas do experimento
Sequence ("consent","inicial", "instr.treino", ("treino"), "instr.exp" , randomize("experimento"), SendResults(), "final");
newTrial("consent",
defaultText
        .css("font-size","1.2em")
        .print()
        ,
      newText("Você foi convidado a participar de uma pesquisa sobre como as pessoas compreendem sentenças. Este estudo está sendo conduzido pelo LAPEX -<br> Laboratório de Psicolinguística Experimental, da UFRJ. </p><p>Você é apto a participar deste experimento porque você é maior de 18 anos, é falante nativo de Português do Brasil, fluente neste idioma (você adquiriu o Português <br> do Brasil durante a infância e tem o Português do Brasil como sua primeira língua). </b></p><p> Qualquer informação pessoal que você forneça neste experimento será anônima e mantida em sigilo. Você pode desistir de participar do estudo<br> a qualquer momento sem penalização. No entanto, é importante que você faça o experimento até o final para obtenção das suas horas<br> complementares (AACC). Ao decidir começar o teste, certifique-se que tem boa conexão com a internet e que você está disponível para<br> completar o estudo de uma só vez.</p><p> Se você tiver alguma dúvida sobre esta pesquisa ou se você deseja receber os resultados deste estudo quando estiver finalizado, por favor,<br> entre em contato com o doutoranda Vitor Caldas, através do e-mail vitorgabrielish@gmail.com</p><p><b> Este teste dura aproximadamente 15 minutos.</p><p> Clicando em EU CONCORDO, você concorda que é maior de idade, que é falante nativo de Português do Brasil, que você é fluente em Português<br> do Brasil e que você entendeu estas instruções e condições de participação.</p>")
    .print()
        ,
    newButton("EU CONCORDO")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
        
        )
        ;
newTrial("inicial",
//Define que todo o texto ser impresso na tela e que o tamanho da fonte ser "1.2em"
    defaultText
        .css("font-size","1.2em")
        .print()
        ,
    newText("<p>Bem-vindo!</p>")
    ,
    newText("<p>Neste experimento, você irá ouvir algumas frases e ler uma afirmação sobre cada uma delas. Após ler a afirmação, você deverá decidir se ela está certa ou errada em relação à frase ouvida anteriormente. Se a sua resposta for SIM (a afirmação está certa), você deverá CLICAR NA TECLA S do seu teclado. Se a sua resposta for NÃO (a afirmação está errada), você deverá CLICAR NA TECLA N do seu teclado.</p>")
    ,
    
    newText("<p>Por favor, preencha o seu NOME completo abaixo:</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("Nome")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Por favor, preencha o seu E-MAIL na caixa abaixo:</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Preencha a sua IDADE abaixo:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
    ,
    
         
    newText("<p>Selecione o seu nível de escolaridade, depois clique em INICIAR”</p>")
        .css("font-size","1.2em")
        .print()
    ,
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
    newDropDown("Escolaridade", "Selecione o seu nível de escolaridade")
        .add("Pós-graduação em andamento","Pós-graduação concluída", "Graduação em andamento", "Graduação concluída")
        .css("font-size","1.2em")
        .print()
        .log()  
 
    ,
     newText("<p>Preencha o seu curso e período:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("curso_periodo")
        .css("font-size","1.2em")
        .print()
        ,
//Cria um novo bot�o nomeado "Iniciar"
    newButton("INICIAR")
        .css("font-size","1.2em")
        .print()
        .wait()
    ,
//Cria uma nova vari�vel chamada "ID" que recebe o conte�do da caixa de texto "Nome"
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
    ,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
    newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
        ,
    newVar("curso_periodo")
        .global()
        .set( getTextInput("Curso/Período") )
        
        )
        

//Envia para o arquivo "results" o conte�do da vari�vel "ID"
.log( "ID" , getVar("ID") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "AGE" , getVar("AGE") )
.log( "curso_periodo" , getVar("curso_periodo") )
,


 
//Nova tela - Tela de instru��es do treino
newTrial("instr.treino",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Vamos praticar um pouco antes de começar o teste!</p>")
         .center()
    ,
    newText("<p>Instruções:</p>")
         .center()
         .bold()
    ,
    newText("<p>Passo 1: Você ouvirá uma frase. Assim que o áudio terminar, clique na barra de espaço do seu teclado.</p>")
         .left()
    ,
    newText("<p>Passo 2: Você irá ler uma afirmação sobre a frase ouvida anteriormente. Depois de ler a afirmação, clique na tecla S do seu teclado se a afirmação estiver CERTA em relação à frase ouvida anteriormente ou clique na tecla N do seu teclado se a afirmação estiver ERRADA em relação à frase ouvida anteriormente.</p>")
    .left()
         ,
        
    newText("<p>Se possível, use fones de ouvido durante a tarefa.</p>")
         .left()
    ,
    newText("<p>Aperte COMEÇAR para fazer um treino.</p>")
         .left()
    ,
    //Cria um novo bot�o nomeado "Iniciar" e envia para o arquivo "results" a informa��o de quando ele � pressionado
    newButton("COMEÇAR")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
)
Template("treino.csv",variable=>
    newTrial("treino",
        newAudio("audio.treino",variable.AudioSentenceTreino)
             .play()
                     ,
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
            .center()
                   ,
       
    
           newSelector()
    .keys(        "S" )
    .log()
    .wait()
            
                 ,
             
             getAudio("audio.treino",variable.AudioSentenceTreino)
             .wait("first")
             ,
             getImage("altofalante.png")
            .remove()
            ,
             
            newText("frase.treino", variable.FraseTreino)
             .print()
            ,
        
         newSelector()
    .keys(        "S"    ,       "N"   )
    .log()
    .wait()
            
        
    ,
    
             getText("frase.treino",variable.SentenceTreino)
             .wait("first")
             ,
            
            
                  )

    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
    .log("Item"), variable.Item

)
//Nova Tela - Tela de instruções do experimento
newTrial("instr.exp",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Agora que você praticou, vamos começar o experimento!</p>")
    ,
    newText("<p>A tarefa durará em torno de 15 minutos. Certifique-se que você esteja em um local tranquilo e silencioso, para que você não seja interrompido.</p>")
    ,
    newText("<p>Clique em COMEÇAR quando você estiver pronto para começar o experimento.</p>")
    ,
    newButton("COMEÇAR")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
    )
Template("tabela.csv", variable=>    
    newTrial("experimento",
        newAudio("audio.exp", variable.AudioSentence)
             .play()
        ,
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
            .center()
       ,
       
         newSelector()
    .keys(        "S"  )
    .log()
    .wait()
                ,

             getAudio("audio.exp",variable.AudioSentence)
             .wait("first")
             ,
             getImage("altofalante.png")
            .remove()
                         ,
        newText("frase.experimento", variable.Frase)
             .print()
        ,
        
         newSelector()
    .keys(        "S"    ,       "N"   )
    .log()
    .wait()
            
        ,
        getText("frase.experimento",variable.Frase)
             .wait("first")
             ,
            
      )

    .log("Item", variable.Item)
    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
    )
    PennController.SendResults;
//Nova Tela - Tela final    
newTrial("final",
    newText("<p> O experimento foi concluído!Você receberá seu certificado de AACC por e-mail. Obrigada pela sua participação!</p>")
        .css("font-size","1.2em")
        .print()
        .wait()
    )
//Ajeita a barra de pogresso para que ela fique completa
.setOption("countsForProgressBar",false);
//Fim do Script


