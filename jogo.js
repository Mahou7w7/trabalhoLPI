let PersonagemSelecionado= null;
let batalha = 0;
let inimigos = 0;
let drenoMaximo = 100;
 let drenagem = 0;
 let drenando = 0;
 let conta = 1;
 let duracao = 0;
 let SkillPugna= 1;
 let  temNetherWard=0;
 let  shield=0;
 let usouSkill=0;
 let HPregenerado = 0;
 let turnoPugna=0;
 let jinada=0;
 let pesadelo=0;
 let invisivel=0;
 let curse=0;
 let minigame = 0;
 let selecionou= 0;
 let Tarrasque = 0;
 let Midas=0;
 let Rapieira=0;
 let Aegis=0;
 let acabou=0;
 let kekwpog = 0;

 function CompraTarrasque(){
    if(PersonagemSelecionado.coins>=500){
    Tarrasque=1;
    PersonagemSelecionado.coins=PersonagemSelecionado.coins-500;
    PersonagemSelecionado.vidaTotal=PersonagemSelecionado.vidaTotal+100;
    PersonagemSelecionado.vida=PersonagemSelecionado.vidaTotal
    document.getElementById("vida").innerHTML=PersonagemSelecionado.vida;
    document.getElementById("money").innerHTML=PersonagemSelecionado.coins;
    }
 }
 function CompraMidas(){
    if(PersonagemSelecionado.coins>=1300){
        PersonagemSelecionado.coins=PersonagemSelecionado.coins-1300;
    Midas=1;
    document.getElementById("money").innerHTML=PersonagemSelecionado.coins;
    }
 }
 function CompraRapieira(){
    if(PersonagemSelecionado.coins>=1000){
        PersonagemSelecionado.coins=PersonagemSelecionado.coins-1000;
        Rapieira=1;
        PersonagemSelecionado.dano=PersonagemSelecionado.dano+60;
        document.getElementById("dano").innerHTML=PersonagemSelecionado.dano;
        document.getElementById("money").innerHTML=PersonagemSelecionado.coins;
    }
 }
 function CompraAegis(){
    if(PersonagemSelecionado.coins>=3000){
        PersonagemSelecionado.coins=PersonagemSelecionado.coins-3000;
        Aegis=1;
        document.getElementById("money").innerHTML=PersonagemSelecionado.coins;
    }
 }
 const Personagem= function(){

    this.id=12;
    this.nome="nome padrão";
    this.vidaTotal=1000;
    this.vida= 1000;
    this.mana=200;
    this.coins=10;
    this.atbPrincipal=150;
    this.dano=50;
    this.ganhoAtb= 2.21;
    this.ganhoVida= 2.21;
    this.ganhoMana=2.21;
    this.qNome ='asas';
    this.wNome = 'slakdls';
    this.eNome = 'dslfs';
    this.imagem="assets/p1.jpg"
}

let Abaddon = new Personagem();

Abaddon.id=1;
Abaddon.nome="Abaddon"
Abaddon.vidaTotal=604;
Abaddon.vida=604;
Abaddon.mana=303;
Abaddon.coins=100;
Abaddon.atbPrincipal=22;
Abaddon.dano=Abaddon.atbPrincipal*2;
Abaddon.ganhoAtb=2.2;
Abaddon.ganhoVida=3.2;
Abaddon.ganhoMana=1.2;
Abaddon.qNome="Neblina";
Abaddon.wNome="Escudo";
Abaddon.eNome="Maldição";

Abaddon.imagem="img/abaddon.png";
let Bane = new Personagem();

Bane.id=2;
Bane.nome="Bane"
Bane.vidaTotal=626;
Bane.vida=626;
Bane.mana=351;
Bane.coins=100;
Bane.atbPrincipal=23;
Bane.dano=Bane.atbPrincipal*2;
Bane.ganhoAtb=2.5;
Bane.ganhoVida=2.5;
Bane.ganhoMana=1.1;
Bane.qNome="Debilitar";
Bane.wNome="Brainrot";
Bane.eNome="Pesadelo";

Bane.imagem="img/bane.png";

let Rubick = new Personagem();

Rubick.id=3;
Rubick.nome="Rubick"
Rubick.vidaTotal=582;
Rubick.vida=582;
Rubick.mana=375;
Rubick.coins=100;
Rubick.atbPrincipal=25;
Rubick.dano=Rubick.atbPrincipal*2;
Rubick.ganhoAtb=3.1;
Rubick.ganhoVida=2.4;
Rubick.ganhoMana=1.8;
Rubick.qNome="Telecinese";
Rubick.wNome="Fade Bolt";
Rubick.eNome="Supremacia";

Rubick.imagem="img/rubick.png";

let BountyHunter = new Personagem();

BountyHunter.id=4;
BountyHunter.nome="Bounty Hunter"
BountyHunter.vidaTotal=604;
BountyHunter.vida=604;
BountyHunter.mana=303;
BountyHunter.coins=100;
BountyHunter.atbPrincipal=21;
BountyHunter.dano=BountyHunter.atbPrincipal*2;
BountyHunter.ganhoAtb= 2.21;
BountyHunter.ganhoVida=2.6;
BountyHunter.ganhoMana=1.6;
BountyHunter.qNome="Lançamento de Shuriken";
BountyHunter.wNome="Jinada";
BountyHunter.eNome="Andar das Sombras";

BountyHunter.imagem="img/bounty_hunter.png";

const Inimigo = function(){
    this.Inome="nome";
    this.Ivida=100;
    this.IvidaTotal=100;
    this.IdanoTotal=50;
    this.Idano=50;
}

let Pugna = new Inimigo()
Pugna.Inome="Pugna";
Pugna.Ivida=538;
Pugna.IvidaTotal=538
Pugna.IdanoTotal=47
Pugna.Idano=47;

let NetherWard = new Inimigo()
NetherWard.Inome = "Nether Ward";
NetherWard.Ivida= 150;
NetherWard.IvidaTotal=150;
NetherWard.IdanoTotal=50+(PersonagemSelecionado.mana*1.2);
NetherWard.Idano = 50+(PersonagemSelecionado.mana*1.2);


function ingame(personagem){
    if(selecionou==0){
    document.getElementById("sla").style="display:flex;"
    
    let img=document.createElement("img");
    img.src="img/witch_doctor.png";
    img.style="width:250px; height:250px; position:absolute; top:200px";
  document.getElementById("minigame1").appendChild(img);
    PersonagemSelecionado = personagem;
     limiteHP = Math.ceil((10*PersonagemSelecionado.vidaTotal)/100);
     if(PersonagemSelecionado.id==3){
        supremacia = 4;
     }
     document.getElementById("dialogo").setAttribute("onClick","javascript: WitchDoctorFala()")
     selecionou++;   
}
}

function MostrarPersonagem(personagem) {
    if(PersonagemSelecionado==null){
       
    document.getElementById('thebars').style='display:flex';
document.getElementById('foto').src=personagem.imagem;
document.getElementById("vida").innerHTML= personagem.vida;
document.getElementById("mana").innerHTML= personagem.mana;
document.getElementById("atP").innerHTML= personagem.atbPrincipal;
document.getElementById("PugnaVida").innerHTML= Pugna.Ivida;
document.getElementById("dano").innerHTML= "Dano: "+personagem.dano;
document.getElementById("money").innerHTML="Dinheiro: "+ personagem.coins;
    }
}
function Skill(){
    if(turnoPugna==0){
    document.getElementById('Q').style="display:inline-block";
    document.getElementById('W').style="display:inline-block";
    document.getElementById('E').style="display:inline-block";
    
    document.getElementById('atacar').style="display:none";
    document.getElementById('skill').style="display:none";
    document.getElementById('item').style="display:none";
    document.getElementById('defender').style="display:none";
    }
    }

    function DanoMagia(){
        if(temNetherWard==1 && shield==0){
            PersonagemSelecionado.vida==PersonagemSelecionado.vida-NetherWard.Idano;
            if(PersonagemSelecionado.vida>0){
            document.getElementById('vida').innerHTML=PersonagemSelecionado.vida;
            }else{
                GameOver();
            }
        }else{
            shield=1;
        }
    }

function SkillQ(inimigoSk){
    
    if(inimigos>1 && usouSkill==0){//checando se tem mais de um inimigo para que o jogador consiga selecionar quem acertar
        usouSkill=1;
        document.getElementById('pugnaButton').style='display:block';
        document.getElementById('netherwardButton').style='display:block';
       
    }else{
    if(PersonagemSelecionado.id==1){
        PersonagemSelecionado.vida=Math.ceil(PersonagemSelecionado.vida-(35*PersonagemSelecionado.vidaTotal)/100);
        document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
        inimigoSk.Ivida=inimigoSk.Ivida-100;
        if(inimigoSk==Pugna){
            document.getElementById("PugnaVida").innerHTML= Pugna.Ivida;
        }
    }else if(PersonagemSelecionado.id==2){     
        if(inimigoSk!=NetherWard){
       duracao=12;
       inimigoSk.Idano=inimigoSk.Idano-(55*inimigoSk.Idano)/100;//diminui o dano em 55%
      

        let johnson=  setInterval(function(){
            inimigoSk.Ivida=inimigoSk.Ivida-12;
            duracao--

                                    if(inimigoSk==Pugna){
            document.getElementById("PugnaVida").innerHTML= inimigoSk.Ivida;
                                    }
            if(duracao<=0){
                clearInterval(johnson);
                inimigoSk.Idano=inimigoSk.IdanoTotal;
            }
        }, 1000);
    }else{
        document.getElementById("log").innerHTML='Você tentou usar Debilitar mas falhou!';
    }
    DanoMagia();
    }else if(PersonagemSelecionado.id==3){
        SkillPugna=0;
        DanoMagia();
        }else if(PersonagemSelecionado.id==4){
        inimigoSk.Ivida=inimigoSk.Ivida-100;
        testeInvisivel();
        DanoMagia();
    }
    usouSkill=0;
    if(Pugna.Ivida>0){
EstadoEspera();
PugnaAttack();
    }else{
        document.getElementById('inimigo').style='display:none';
        document.getElementById('VidaInimigo').style='display:none';
        document.getElementById('netherWard').style='display:none';
        Loja();
    }
    }
}
function SkillW(inimigo){
    if(inimigos>1 && usouSkill==0 && PersonagemSelecionado.id!=1 && PersonagemSelecionado.id!=4){//checando se tem mais de um inimigo para que o jogador consiga selecionar quem acertar
        usouSkill=2;
        document.getElementById('pugnaButton').style='display:block';
        document.getElementById('netherwardButton').style='display:block';
        
    }else{
    if(PersonagemSelecionado.id==1){
        shield=1;
        DanoMagia();
    }else if(PersonagemSelecionado.id==2){
        //o personagem do jogador irá se curar por 75 e o inimigo irá receber 75 de dano
        inimigo.Ivida=inimigo.Ivida-75;
        PersonagemSelecionado.vida=PersonagemSelecionado.vida+75;
        DanoMagia();
    }else if(PersonagemSelecionado.id==3){
        inimigo.Ivida=inimigo.Ivida-(100+supremacia);
        inimigo.Idano=inimigo.Idano-(inimigo.Idano*55)/100;
        DanoMagia();
    }else if(PersonagemSelecionado.id==4){
        jinada=1;
    }
if(Pugna.Ivida>0){
    EstadoEspera();
    PugnaAttack();
}else{
    document.getElementById('inimigo').style='display:none';
    document.getElementById('VidaInimigo').style='display:none';
    document.getElementById('netherWard').style='display:none';
    Loja();
}
}
}

function SkillE(inimigo){
    if(inimigos>1 && usouSkill==0 && PersonagemSelecionado.id!=1 && PersonagemSelecionado.id!=4){//checando se tem mais de um inimigo para que o jogador consiga selecionar quem acertar
        usouSkill=3;
        document.getElementById('pugnaButton').style='display:block';
        document.getElementById('netherwardButton').style='display:block';
        
    }else{
        if(PersonagemSelecionado.id==1){
            document.getElementById('log').innerHTML="esta é uma habilidade passiva";
        }else if(PersonagemSelecionado.id==2){
            pesadelo=3;
        }else if(PersonagemSelecionado.id==3){
            document.getElementById('log').innerHTML="esta é uma habilidade passiva";
        }else if(PersonagemSelecionado.id==4){
            invisivel=3;
        }
    }
    if(Pugna.Ivida>0){
    EstadoEspera();
    PugnaAttack();
    }else{
        document.getElementById('inimigo').style='display:none';
        document.getElementById('VidaInimigo').style='display:none';
        document.getElementById('netherWard').style='display:none';
        Loja();
    }
}

function GainMoney(){
    PersonagemSelecionado.coins+=100;
    document.getElementById("money").innerHTML= `Dinheiro: `+PersonagemSelecionado.coins;
}
function CoinPicker(){
   
   
         coin1= document.createElement("img");
        const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
        coin1.src= "img/coin.png";
       coin1.style="display:none"       
       coin1.style=`display: inline-block; height: 50px; width: 50px; position: absolute;`;
       coin1.setAttribute("onClick", "javascript: GainMoney()");
        document.getElementById("minigame1").appendChild(coin1);
            

        MoeShop = setInterval(function(){
            
            coin1.style.left= getRandom(510, 1350)+'px'; // 👈🏼 Horizontally
            coin1.style.top = getRandom(30, 530)+'px'; // 👈🏼 Vertically
           
          
    },1000)
}
function MinigameInicio(){
    document.getElementById("fala").innerHTML= "pegue o dinheiro.";
    document.getElementById("dialogo").setAttribute("onClick","javascript: ")
    let timer = 10;
    let temporiza = setInterval(function(){
        document.getElementById("timer").innerHTML = timer;
        timer--;
        if(timer<0){
            clearInterval(temporiza);
            clearInterval(MoeShop);
            coin1.style="display:none";
            document.getElementById("timer").style = "display:none";
            Loja();
        }
    }, 1000)
CoinPicker();

}
function Acabou(){
    if(Midas==0){
    PersonagemSelecionado.coins+=500;
    }else{
        PersonagemSelecionado.coins+=1000;
    }
    document.getElementById("money").innerHTML= "Dinheiro: "+ PersonagemSelecionado.coins;
    document.getElementById("fala").style="display:block";
    document.getElementById("telaJogo").style="display:none";
    document.getElementById("batalha").style="display:none";
    document.getElementById("lojista").style="display:block";
    document.getElementById("dazzle").style="display:block";
    document.getElementById("dialogo").style="display:block";
    document.getElementById("dialogo").setAttribute("onClick","javascript: ")
    acabou=1;
    Loja();
}
function Loja(){
    document.getElementById("minigame1").style="display:none";
    document.getElementById("thegame").style=" background-image: url('img/shop.jpg'); background-size: cover;";
    document.getElementById("fala").innerHTML="Você chegou em uma loja misteriosa.";
    document.getElementById("loja").style="display:block";
    if(acabou==1){
        document.getElementById("terminar").setAttribute("onClick","javascript:Templo() ")
    }

   
}
function Templo(){
    document.getElementById("HudLoja").style="display:none";
    document.getElementById("thegame").style=" background-image: url('img/temploPorta.jpg'); background-size: cover;";
    document.getElementById("dialogo").setAttribute("onClick","javascript:Final()");
}
function Final(){
   
   
    switch(kekwpog){
        case 0:
        document.getElementById("fala").innerHTML="Finalmente... Você chegou, agora, só resta entrar.";
       break;
       case 1:
    
        if(Aegis<=0){
            document.getElementById("fala").innerHTML="Só precisa pegar a Aegis pra abrir a porta e... ué? Você esqueceu?";
           
        }else{
            document.getElementById("fala").innerHTML="Você pega a Aegis do seu bolso e abre a porta.";
            
        }
        break;
    case 2:
        if(Aegis<=0){
            GameOver();
            kekwpog=0
        }else{
            EntraTemplo();
            kekwpog=0;
        }
    break;
    }
    kekwpog++;
}
function EntraTemplo(){
    document.getElementById("thegame").style=" background-image: url('img/Cheating_Death_Artifact.webp'); background-size: cover;";
    let falaRazor=Math.floor(Math.random()* 4);

    switch(falaRazor){
    case 0:
    document.getElementById("fala").innerHTML="Você conseguiu!!!!!"
    break;
    case 1:
        document.getElementById("fala").innerHTML="Ouro é um ótimo Condutor!";
        break;
        case 2:
            document.getElementById("fala").innerHTML="Sou eu! Razor!";
            break;
    }
    document.getElementById("dialogo").setAttribute("onClick","javascript: ")
}
function GameOver(){
    document.getElementById("entire").style="display:none";
    document.getElementById("GameOver").style="display:block";
}
function DazzleFala(){
    let fala = Math.floor(Math.random() * 4);
    switch(fala){
        case 0:
            if(PersonagemSelecionado.coins<300){
                document.getElementById("fala").innerHTML="Caramba, como você tem tão pouco dinheiro?";
            }else if(PersonagemSelecionado.coins>=300 && PersonagemSelecionado.coins<1000){
                document.getElementById("fala").innerHTML="Continue com o bom trabalho.";
            }
                else if(PersonagemSelecionado.coins>=1000 && PersonagemSelecionado.coins<2000){
                document.getElementById("fala").innerHTML="Hmm... você tem um bom dinheiro até";
            }else if(PersonagemSelecionado.coins>=2000){
                document.getElementById("fala").innerHTML="Nossa, você tá muito rico!!!";
            }
            break;
            case 1:
                document.getElementById("fala").innerHTML="Dazzle!!!!!";
                break;
                case 2:
                    document.getElementById("fala").innerHTML="ZZZZZap!!";
                    break;
    }
}
function KeeperFala(){
    let fala = Math.floor(Math.random() * 4);
    switch(fala){
        case 0:
            document.getElementById("fala").innerHTML="Ah, meu cliente favorito!";
            AbrirLoja();
            break;
            case 1:
                document.getElementById("fala").innerHTML="O que você gostaria?";
                AbrirLoja();
                break;
                case 2:
                    document.getElementById("fala").innerHTML="Seja bem-vindo!";
                    AbrirLoja();
                    break;
                    
    }
}
function AbrirLoja(){
    document.getElementById("lojista").style="display: none";
    document.getElementById("dazzle").style="display:none";
    document.getElementById("HudLoja").style="display:block";
}
function WitchDoctorFala(){
   
    if(minigame<=0){
     falaDoctor = Math.floor(Math.random()*4);
    }
    
    
    

    switch(falaDoctor){
        case 0:
            if(minigame==0){
            document.getElementById('fala').innerHTML=`Ah, ${PersonagemSelecionado.nome}, então você também quer entrar no labirinto de Razor?`;
            }else if(minigame==1){
            document.getElementById('fala').innerHTML=`Mas, não sei se você sabe, precisa de uma Aegis pra entrar, e uma Aegis é muito caro`;
            
            }else if(minigame==2){
            document.getElementById('fala').innerHTML=`Sorte sua que consigo te ajudar com isso, vou abrir um portal no céu que cairá muito dinheiro, vamos lá, pegue`;
            
            }else if(minigame==3){
                MinigameInicio();
                minigame=0;
            }
            break;
            case 1:
                if(minigame==0){
                document.getElementById('fala').innerHTML=`Olha só quem eu encontrei, se não é você mesmo ${PersonagemSelecionado.nome}, você quer ir até o labirinto, não é?`;
                }else if(minigame==1){
                document.getElementById('fala').innerHTML=`Você já deve saber que para entrar precisa de uma Aegis né? Sabe quanto custa uma?`;
                
                }else if(minigame==2){
                document.getElementById('fala').innerHTML=`Sorte sua que hoje vai chover ouro por 10 segundos seguidos, se fosse você, iria se aproveitar disso`;
                
                }else if(minigame==3){
                    MinigameInicio();
                    minigame=0;
                }
                break;
                case 2:
                    if(minigame==0){
                    document.getElementById("fala").innerHTML=`Ah, você é um daqueles que veio aqui pelo evento de caridade do "Dinheiro do Céu"?`;
                    }else if(minigame==1){
                    document.getElementById("fala").innerHTML=`Hmmm... então você quer entrar no labirinto.`;
                    
                    }else if(minigame==2){
                    document.getElementById("fala").innerHTML=`Olha, boa sorte, a Aegis é cara viu, mas olha ali, vai começar`;
                  
                    }else if(minigame==3){
                        MinigameInicio();
                        minigame=0;
                    }
                    break;
                    }
                    minigame++;
}

function PugnaFala(){
    document.getElementById("dialogo").setAttribute("onClick","javascript: PugnaFala()")
    let fala = Math.floor(Math.random() * 4);
    if(batalha == 1){
        BatalhaInicio();
        batalha = 0;
    }
    switch(fala){
        case 1:
            document.getElementById('fala').innerHTML=`Ora Ora, se não é o ${PersonagemSelecionado.nome}`;
            batalha = 1;
            break;
            case 2:
                document.getElementById('fala').innerHTML='Chega de falar, vamos lutar!';
                batalha = 1;
                break;
                case 3:
                    document.getElementById('fala').innerHTML='Eu, Pugna, irei acabar com você!!!!!!!';
                    batalha = 1;
                    break;
    }
}
function chooseAttack(inimigo){
    if(turnoPugna==0){
   switch(usouSkill){
    case 1:
        //se ele tiver usado alguma skill, a função de escolher ataque irá alternar sua função original de fazer com que o ataque padrão acerte o inimigo selecionado, para uma função secundária, na qual ele irá usar uma skillQ no inimigo selecionado.
        document.getElementById('pugnaButton').style='display:none';
        document.getElementById('netherwardButton').style='display:none';
        SkillQ(inimigo);
    break;
    case 2:
        //mesma coisa que o primeiro caso, entretanto, ele irá usar uma skillW selecionada.
        document.getElementById('pugnaButton').style='display:none';
        document.getElementById('netherwardButton').style='display:none';
        SkillW(inimigo);
        break;
        default:
    if(inimigo.Ivida>0 && PersonagemSelecionado.dano>0){
        if(inimigo==Pugna){
            if(jinada==0){
        inimigo.Ivida= inimigo.Ivida-PersonagemSelecionado.dano;
            }else{
                inimigo.Ivida= inimigo.Ivida-(PersonagemSelecionado.dano+60);
                PersonagemSelecionado.coins+= 12;
                document.getElementById("money").innerHTML= "Dinheiro: "+ PersonagemSelecionado.coins;
            }
        }else{
            if(jinada==0){
            inimigo.Ivida= inimigo.Ivida-(PersonagemSelecionado.dano*2);
            }else{
                inimigo.Ivida= inimigo.Ivida-((PersonagemSelecionado.dano+60)*2);
            }
        }
       
        }else if(PersonagemSelecionado.dano==0){
            PersonagemSelecionado.dano=PersonagemSelecionado.atbPrincipal*2;
            document.getElementById("dano").innerHTML= "Dano: "+PersonagemSelecionado.dano;
        }
        if(inimigo.Ivida>0 && inimigo==Pugna){
        document.getElementById("PugnaVida").innerHTML= inimigo.Ivida;
        }else if(inimigo.Ivida<=0 && inimigo==Pugna){
            document.getElementById('inimigo').style='display:none';
            document.getElementById('VidaInimigo').style='display:none';
            document.getElementById('netherWard').style='display:none';
            Loja();
       
          
            }
            if(inimigo==NetherWard && inimigo.Ivida<0){
                document.getElementById('netherWard').style='display:none';
                temNetherWard=0;
                inimigos=1;
        }
        Maldicao(inimigo);
        testeInvisivel();
        PugnaAttack()
        document.getElementById('pugnaButton').style='display:none';
        document.getElementById('netherwardButton').style='display:none';

        break;
}

    }
}
function testeInvisivel(){
    if(invisivel>0){
        invisivel=0;
    }
}
function Attack(){
    if(turnoPugna==0){
    if(drenando==0){
    if(inimigos>1){
 document.getElementById('pugnaButton').style='display:block';
        document.getElementById('netherwardButton').style='display:block';
    }else{
    if(Pugna.Ivida>0 && PersonagemSelecionado.dano>0){
        if(jinada==0){
    Pugna.Ivida= Pugna.Ivida-PersonagemSelecionado.dano;
    
        }else{
            Pugna.Ivida= Pugna.Ivida-(PersonagemSelecionado.dano+60);
        }
    }else if(PersonagemSelecionado.dano==0){
        if(Rapieira==0){
        PersonagemSelecionado.dano=PersonagemSelecionado.atbPrincipal*2;
        }else{
            PersonagemSelecionado.dano=(PersonagemSelecionado.atbPrincipal*2)+60;
        }
        document.getElementById("dano").innerHTML="Dano: "+ PersonagemSelecionado.dano;
    }
    if(Pugna.Ivida>0){
    document.getElementById("PugnaVida").innerHTML= Pugna.Ivida;
    }else{
        document.getElementById('inimigo').style='display:none';
        document.getElementById('VidaInimigo').style='display:none';
    }
   Maldicao(Pugna)
    testeInvisivel();
    PugnaAttack();
}
    }
}
}
function Maldicao(inimigoCursed){
    if(PersonagemSelecionado.id==1 && PersonagemSelecionado.dano>0 && inimigoCursed==Pugna){
        curse++;
        }else if(PersonagemSelecionado.id==1 && PersonagemSelecionado.dano>0){
            curse=0;
        }
        if(curse==4){
            SkillPugna=0;
            curse=0;
            document.getElementById('log').innerHTML="Pugna está silenciado.";
        }
}
function BattleBegins(){
    document.getElementById('HudLoja').style="display:none";
    document.getElementById('telaJogo').style="display:flex";
    document.getElementById('thegame').style="background-image: url('img/floresta.jpg')";
    PugnaFala();
}
function RegeneraHP(){
    let vidaRecuperada = setInterval(function(){
            
        PersonagemSelecionado.vida+=Math.ceil(PersonagemSelecionado.ganhoVida);
        HPregenerado+=Math.ceil(PersonagemSelecionado.ganhoVida);
        if(PersonagemSelecionado.vida>PersonagemSelecionado.vidaTotal){
            PersonagemSelecionado.vida=PersonagemSelecionado.vidaTotal
            document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
        }else{
        document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
        }
        if(PersonagemSelecionado.vida>=PersonagemSelecionado.vidaTotal || HPregenerado>=limiteHP){
            clearInterval(vidaRecuperada); document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
  
            HPregenerado=0;
            
        }
    }, 1000);
}
function PugnaAttack(){
    if(Pugna.Ivida>0){
        if(PersonagemSelecionado.vida>0){
    turnoPugna=1;
    if(PersonagemSelecionado.vida!=PersonagemSelecionado.vidaTotal){
     RegeneraHP();
    }
    if(pesadelo==0){
    if(SkillPugna==1){
    let delay = setInterval(function(){//uma animaçãozinha de carregando a ação.
     
        if(conta==1){
        document.getElementById("log").innerHTML= '.'
        }if(conta==2){
            document.getElementById("log").innerHTML= '..'
        }if(conta==3){
            document.getElementById("log").innerHTML= '...'
        }
        if(conta==4){
            let ataquePugna = Math.floor(Math.random() * 9);
    switch(ataquePugna){
       
        case 0:
            case 1:
                case 2:
                    case 3:
                        if(shield==0 && invisivel==0){
            if(PersonagemSelecionado.vida>0){
                PersonagemSelecionado.vida= PersonagemSelecionado.vida-Pugna.Idano;
                if(PersonagemSelecionado.vida>0){
                document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
                document.getElementById("log").innerHTML= 'Pugna usou ataque!'
                }else{
                    document.getElementById("log").innerHTML= 'Pugna usou ataque!';
                    document.getElementById("vida").innerHTML= 0;
                    GameOver();
                }
                inicioTurno();
                }}else{
                    if(shield>0){
                    shield=0;
                    }
                    document.getElementById("log").innerHTML= 'Pugna usou atacar mas falhou!'
                    inicioTurno();
                }
                break;
                case 4:
                    case 5:
                    
                    if(PersonagemSelecionado.dano>0 && invisivel==0){
                    PersonagemSelecionado.dano=0;
                    document.getElementById("dano").innerHTML= "Dano: "+ PersonagemSelecionado.dano;
                    document.getElementById("log").innerHTML= 'Pugna usou decrepitar!'
                    inicioTurno();
                    break;
                
                    }else{
                        if(PersonagemSelecionado.dano<=0){
                        conta=1;
                        PugnaAttack();
                        }else{
                            document.getElementById("log").innerHTML= 'Pugna usou decrepitar mas falhou!'
                        }

                        
                    }
                    
                    case 6:
                        case 7:
                        if(inimigos==1 && temNetherWard==0){
                      inimigos=2;
                      temNetherWard=1;
                      document.getElementById('netherWard').style='display:block';
                      document.getElementById("log").innerHTML= 'Pugna usou Sentinela Antimagia!'
                      inicioTurno();
                        }else{
                            conta=1;
                            PugnaAttack();
                        }
                      break;
                      
                      case 8:
                        if(shield==0 && invisivel==0){
                        drenagem=0;
                        document.getElementById("log").innerHTML= 'Pugna usou Dreno de vida!'
                        drenando=1;

                        let atumalaca =  setInterval(function(){
                            
                            if(drenagem>=drenoMaximo){
                                drenando=0;
                                if(drenando<=0){
                                    inicioTurno();
                                    }
                                clearInterval(atumalaca);
                            }
                            if(PersonagemSelecionado.vida>0){
                            PersonagemSelecionado.vida--;
                            drenagem++;
                            if(Pugna.Ivida<Pugna.IvidaTotal){
                            Pugna.Ivida++;
                            document.getElementById('PugnaVida').innerHTML=Pugna.Ivida;
                            }
                                                    
                            document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
                        }else{
                            GameOver();
                            clearInterval(atumalaca);
                        }
                            
                            
                        }, 100);}else{
                            if(shield>0){
                            shield=0;
                            inicioTurno()
                            }
                            document.getElementById("log").innerHTML= 'Pugna usou dreno de vida mas falhou!'
                            inicioTurno();
                        }
                       
break;

    
    
    }
        }
        conta++;
        if(conta>4){
            clearInterval(delay);
        }
    }, 1000);
    if(conta>4){   
    conta=1;
}
    }else{
        SkillPugna=1;
        inicioTurno();
    }
}else{
    pesadelo--;
    inicioTurno();
}
}else{
    document.getElementById("netherWard").style="display:none";
    Acabou();
}
if(PersonagemSelecionado.vida<=0){
    GameOver();
}
    }else{
        GameOver;
    }
}
function EstadoEspera(){
    if(PersonagemSelecionado.vida>0){
    document.getElementById('Q').style='display:none';
    document.getElementById('W').style='display:none';
    document.getElementById('E').style='display:none';
 
    document.getElementById('atacar').style="display:inline-block";
    document.getElementById('skill').style="display:inline-block";
    document.getElementById('item').style="display:inline-block";
    
    }else{
        GameOver();
    }
}
function BatalhaInicio(){
    document.getElementById('Q').innerHTML=PersonagemSelecionado.qNome;
    document.getElementById('W').innerHTML=PersonagemSelecionado.wNome;
    document.getElementById('E').innerHTML=PersonagemSelecionado.eNome;
    
    document.getElementById('dialogo').style='display:none';
    document.getElementById('batalha').style='display:block';


    if(Pugna.Ivida>0 && inimigos==0){
        inimigos=1;
    }
}
function inicioTurno(){
    turnoPugna=0;
    if(invisivel>0){
        invisivel--;
    }
    if(PersonagemSelecionado.vida!=PersonagemSelecionado.vidaTotal){
        RegeneraHP();
       }
}