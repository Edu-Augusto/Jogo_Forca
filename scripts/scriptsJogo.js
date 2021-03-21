        var biblioteca;
        var pos;
        var palavra=[];
        var escolher;
        var cont;
        var obj;
        var bt;
        var i;
        var numLetras;
        var letraEscolhida;
        var letraJogada;
        var tentativa;
        var erro=0;
        var winner;
        var preenchida=[];
        var estado=0;
        function iniciar(){
            biblioteca=['açougue','bola','futebol','javascript','computador','notebook','escola','paralelepipedo','celular','internet','tablet','brasileiro','carro','moto','motorista','dado','recursividade','mentalidade','pleonasmo','finalidade', 'palavra','paradigma','extensão','desgraça','índole','alienado','nojo','empatia','amor','respeito','exceto','deferido','sagaz','iminente','eminente','invasivo','sublime','essencial','varanda','abstrato','contundente','iniciante','indulgente','ardiloso','serenidade','conceito','prodígio','mito','Bolsonaro','Lula','Dilma','devaneio','nobre','pobre','rico'];
            cont=biblioteca.length-1;
        }
        function escolhePalavra(){
            erro=0;
            pos=Math.round(Math.random()*cont);
            palavra=biblioteca[pos];
            console.log(palavra);
            numLetras=palavra.length;
            for(var i=0;i<20;i++){
                obj=document.getElementById('ipt'+i).value='';
                obj=document.getElementById('ipt'+i).style.display='none';
            }
            for(var i=0;i<numLetras;i++){
                obj=document.getElementById('ipt'+i).style.display='inline-block';
        }
            letraEscolhida= document.getElementById('letraJogador').style.display='inline-block';
            letraJogada=document.getElementById('p1').style.display='block';
            for(i=0; i<numLetras; i++){
                    document.getElementById('ipt'+i).value='';
                    document.getElementById('p2').innerHTML='Erros:';
                    document.getElementById('p1').innerHTML='Palavras digitadas:';
                }
        }
        function procurarLetra(){
            letraEscolhida= document.getElementById('letraJogador').value;
            if(letraEscolhida ==''){
                alert('Digite alguma letra para jogar.');
            }
            else{
                for(i=0; i<numLetras; i++){
                    if(letraEscolhida == palavra[i]){
                        document.getElementById('ipt'+i).value=letraEscolhida; 
                        preenchida[i]=letraEscolhida;  
                    }
                } 
                document.getElementById('p1').innerHTML+='-'+letraEscolhida+'-';
            }
            
            gameOver();
            gameWinner();
            document.getElementById('letraJogador').value='';
        }
        function gameOver(){
            if(palavra.match(letraEscolhida) == null){
                erro+=1;
                document.getElementById('p2').innerHTML+='-'+letraEscolhida+'-';
                //boneco();
            }
            if(erro > 4){
                alert("Você perdeu.");
                erro=0;
                for(i=0; i<numLetras; i++){
                    document.getElementById('ipt'+i).value='';
                    document.getElementById('p2').innerHTML='Erros :';
                    document.getElementById('p1').innerHTML='Palavras digitadas:';
                }
            }
        }
        function gameWinner(){
            winner=0;
            for(i=0;i<numLetras;i++){
                if(preenchida[i] == palavra[i]){
                    winner++;
                }
            }
            if(winner == numLetras){
                alert("Você ganhou!!!");
               }
        }
        function menuInterativo(){
            if(estado==0){
                document.getElementById('divMenu').style.display='block';
                estado=1;
            }
            else{
                document.getElementById('divMenu').style.display='none';
                estado=0; 
            }
        }
        //function boneco(){

        //}
        window.addEventListener('load', iniciar);
