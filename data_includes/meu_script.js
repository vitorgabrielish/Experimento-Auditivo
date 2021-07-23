//Início do Script

//Inativa os prefixos do PennController (sem esse comando os códigos não funcionam)
PennController.ResetPrefix(null);
PennController.DebugOff();
//Define a sequência de telas do experimento
Sequence("consent","inicial", "instr.treino", ("treino"), "instr.exp" , randomize("experimento"), SendResults(), "final");

//Cria um cabeçalho. Todos os comandos dentro do cabeçalho serão rodados automaticamente antes de cada "trial"
Header(
//Define que todo texto será impresso na tela e que o tamanho da fonte será "1.2em"
         defaultText
            .css("font-size","1.2em")
            .print()
            
         ,
//Define que toda caixa de texto será impressa na tela e que o tamanho da fonte será "1.2em"
         defaultTextInput
            .css("font-size","1.2em")
            .print()
         ,
//Define que todo botão será impresso na tela, que o tamanho da fonte será "1.2em" e que o participante será obrigado a interagir com ele para prosseguir com o experimento
         defaultButton
            .css("font-size","1.2em")
            .center()
            .print()
            .wait()
         ,         
)


//Cria uma nova tela - Tela de coleta de dados do participante
newTrial("consent",

//Cria o texto "Bem-Vindos!"
         newText("<p>Bem-Vindos!</p>")
         ,
         newText("<p>Você foi convidado a participar de uma pesquisa sobre como as pessoas compreendem sentenças. Este estudo está sendo conduzido pelo LAPEX -<br> Laboratório de Psicolinguística Experimental, da UFRJ. </p><p>Você é apto a participar deste experimento porque você é maior de 18 anos, é falante nativo de Português do Brasil, fluente neste idioma (você adquiriu o Português <br> do Brasil durante a infância e tem o Português do Brasil como sua primeira língua). </b></p><p> Qualquer informação pessoal que você forneça neste experimento será anônima e mantida em sigilo. Você pode desistir de participar do estudo<br> a qualquer momento sem penalização. No entanto, é importante que você faça o experimento até o final para obtenção das suas horas<br> complementares (AACC). Ao decidir começar o teste, certifique-se que tem boa conexão com a internet e que você está disponível para<br> completar o estudo de uma só vez.</p><p> Se você tiver alguma dúvida sobre esta pesquisa ou se você deseja receber os resultados deste estudo quando estiver finalizado, por favor,<br> entre em contato com o doutoranda Vitor Caldas, através do e-mail vitorgabrielish@gmail.com</p><p><b> Este teste dura aproximadamente 15 minutos.</p><p> Clicando em EU CONCORDO, você concorda que é maior de idade, que é falante nativo de Português do Brasil, que você é fluente em Português<br> do Brasil e que você entendeu estas instruções e condições de participação.</p>")
         ,
          newButton("EU CONCORDO")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()

         );
newTrial("inicial",
//Define que todo o texto ser impresso na tela e que o tamanho da fonte ser "1.2em"
    defaultText
        .css("font-size","1.2em")
        .print()
        ,
newText("<p>Neste experimento, você irá ouvir algumas frases e ler uma afirmação sobre cada uma delas. Após ler a afirmação, você deverá decidir se ela está certa ou errada em relação à frase ouvida anteriormente. Se a sua resposta for SIM (a afirmação está certa), você deverá CLICAR NA TECLA S do seu teclado. Se a sua resposta for NÃO (a afirmação está errada), você deverá CLICAR NA TECLA N do seu teclado.</p>")
         ,
         newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>")
         ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante  
         newTextInput("Nome")
         ,
          newText("<p>Preencha a sua IDADE abaixo:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
,
         newText("<p>Por favor, preencha o seu E-MAIL na caixa abaixo:</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
,
         
         newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte o botão 'Iniciar' para começar </p>")
         , 
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
         newDropDown("Escolaridade", "Selecione sua escolaridade")
        .add("Médio completo", "Superior em curso", "Superior completo", "Pós-graduação")
        .css("font-size","1.2em")
        .print()
        .log() //Envia para o arquivo "results" a opção selecionada pelo participante 
         ,
          newText("<p>Preencha o seu curso e período:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("curso_periodo")
        .css("font-size","1.2em")
        .print()
,
//Cria um botão nomeado "Iniciar"
         newButton("Iniciar")
         ,
//Cria uma nova variável chamada "NOME" que recebe o conteúdo da caixa de texto "Nome"
    newVar("NOME")
        .global()
        .set( getTextInput("Nome") )

           ,
        newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
        newVar("CursoPeriodo")
        .global()
        .set( getTextInput("curso_periodo") )

            
        
        )



//Envia para o arquivo "results" o conteúdo da variável "NOME"
.log( "NOME" , getVar("NOME") )
.log( "AGE" , getVar("AGE") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "CursoPeriodo" , getVar("CursoPeriodo") )

//Nova tela - Tela de instruções do treino
newTrial("instr.treino",
           defaultText
        .css("font-size","1.2em")
        .print()
    ,

         
    newText("<p>Vamos praticar um pouco antes de começar o teste!</p>")
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

           
    //Cria um novo botão nomeado "Iniciar" e envia para o arquivo "results" a informação de quando ele é pressionado
    newButton("Iniciar")
        .log()
)

//Indica o uso da tabela "treino_script_auditivo.csv"
Template("treino.csv",
// "variable" vai automaticamente apontar para cada linha da tabela "tabela_script_auditivo.csv"
    variable => newTrial( "treino",
//"variable" aponta para todas as linhas da coluna "AudioExperimento" da tabela "tabela_script_auditivo.csv" e toca o audio referente a elas
        newAudio("AudioSentenceTreino", variable.AudioSentenceTreino)
            .play()
        ,
//Exibe na tela a imagem "alto_falante_icone.png"
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
            .center()
       
        ,
//Cria um botão nomeado "Próximo", envia para o arquivo "results" a informação de quando ele foi pressionado e remove ele da tela
        newButton("Próximo")
            .log()
            .remove()
        ,
//Remove a imagem "alto_falante_icone.png" 
        getImage("altofalante.png")
            .remove()
        ,
        //Cria um novo texto nomeado "A" e "variable" aponta para todas as linhas da coluna "SentencaA" e imprime o texto presente nelas 
        newText("FraseT",variable.FraseTreino)
        ,
       
        //Possibilita a seleção dos textos "A" e "B" através do mouse ou das teclas "A" e "B". Também envia para o arquivo "result" qual texto foi selecionado
        newSelector()
            .keys("S","N")
            .log()
            .wait()
    )
         
    //Envia para o arquivo "results" o conteúdo da coluna "Group" 
    .log("Item", variable.Item)
    .log("Condition", variable.Condition)
    .log("Group", variable.Group)
    .log("Type", variable.Type)
);

//Nova Tela - Tela final    
newTrial( "Final" ,
    newText("<p> O experimento foi concluído. Obrigada pela participação!</p>")
    .center()
    ,
    newText("<p> Você receberá um e-mail com a sua declaração de participação.</p>")
    .center()
    .wait()
 )

//Ajeita a barra de pogresso para que ela fique completa
.setOption("countsForProgressBar",false);
//Fim do Script


