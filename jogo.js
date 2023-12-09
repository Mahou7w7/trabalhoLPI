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
const Personagem= function(){

    this.id=12;
    this.nome="nome padrão";
    this.vidaTotal=1000;
    this.vida= 1000;
    this.mana=200;
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
Abaddon.atbPrincipal=22;
Abaddon.dano=Abaddon.atbPrincipal*2;
Abaddon.ganhoAtb=2.2;
Abaddon.ganhoVida=3.2;
Abaddon.ganhoMana=1.2;
Abaddon.qNome="Neblina";
Abaddon.wNome="Escudo";
Abaddon.eNome="Maldição";
Abaddon.rNome="Tempo Emprestado";
Abaddon.imagem="img/abaddon.png";
let Bane = new Personagem();

Bane.id=2;
Bane.nome="Bane"
Bane.vidaTotal=626;
Bane.vida=626;
Bane.mana=351;
Bane.atbPrincipal=23;
Bane.dano=Bane.atbPrincipal*2;
Bane.ganhoAtb=2.5;
Bane.ganhoVida=2.5;
Bane.ganhoMana=1.1;
Bane.qNome="Debilitar";
Bane.wNome="Brainrot";
Bane.eNome="Pesadelo";
Bane.rNome="Fiend's Grip";
Bane.imagem="img/bane.png";

let Rubick = new Personagem();

Rubick.id=3;
Rubick.nome="Rubick"
Rubick.vidaTotal=582;
Rubick.vida=582;
Rubick.mana=375;
Rubick.atbPrincipal=25;
Rubick.dano=Rubick.atbPrincipal*2;
Rubick.ganhoAtb=3.1;
Rubick.ganhoVida=2.4;
Rubick.ganhoMana=1.8;
Rubick.qNome="Telecinese";
Rubick.wNome="Fade Bolt";
Rubick.eNome="Supremacia";
Rubick.rNome="Spell Steal";
Rubick.imagem="img/rubick.png";

let BountyHunter = new Personagem();

BountyHunter.id=4;
BountyHunter.nome="Bounty Hunter"
BountyHunter.vidaTotal=604;
BountyHunter.vida=604;
BountyHunter.mana=303;
BountyHunter.atbPrincipal=21;
BountyHunter.dano=BountyHunter.atbPrincipal*2;
BountyHunter.ganhoAtb= 2.21;
BountyHunter.ganhoVida=2.6;
BountyHunter.ganhoMana=1.6;
BountyHunter.qNome="Lançamento de Shuriken";
BountyHunter.wNome="Jinada";
BountyHunter.eNome="Andar das Sombras";
BountyHunter.rNome="Rastreio";
BountyHunter.imagem="img/bounty_hunter.png";

const Inimigo = function(){
    this.Inome="nome";
    this.Ivida=100;
    this.IdanoTotal=50;
    this.Idano=50;
}

let Pugna = new Inimigo()
Pugna.Inome="Pugna";
Pugna.Ivida=538;
Pugna.IdanoTotal=47
Pugna.Idano=47;

function ingame(personagem){
    document.getElementById("sla").style="display:flex;"
    document.getElementById("telaJogo").style="display:flex;"
    PersonagemSelecionado = personagem;
     limiteHP = Math.ceil((10*PersonagemSelecionado.vidaTotal)/100);
}

let NetherWard = new Inimigo()
    NetherWard.Inome = "Nether Ward";
    NetherWard.Ivida= 150;
    NetherWard.IdanoTotal=50+(PersonagemSelecionado.mana*1.2);
    NetherWard.Idano = 50+(PersonagemSelecionado.mana*1.2);

   


function MostrarPersonagem(personagem) {
    if(PersonagemSelecionado==null){
       
    document.getElementById('thebars').style='display:flex';
document.getElementById('foto').src=personagem.imagem;
document.getElementById("vida").innerHTML= personagem.vida;
document.getElementById("mana").innerHTML= personagem.mana;
document.getElementById("atP").innerHTML= personagem.atbPrincipal;
document.getElementById("PugnaVida").innerHTML= Pugna.Ivida;
document.getElementById("dano").innerHTML= personagem.dano;
    }
}
function Skill(){
    if(turnoPugna==0){
    document.getElementById('Q').style="display:inline-block";
    document.getElementById('W').style="display:inline-block";
    document.getElementById('E').style="display:inline-block";
    document.getElementById('R').style="display:inline-block";
    document.getElementById('atacar').style="display:none";
    document.getElementById('skill').style="display:none";
    document.getElementById('item').style="display:none";
    document.getElementById('defender').style="display:none";
    }
    }

function SkillQ(inimigoSk){
    if(inimigos>1 && usouSkill==0){
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
       inimigoSk.Idano=inimigoSk.Idano-(55*inimigoSk.Idano)/100;
      
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
    }else if(PersonagemSelecionado.id==3){
        SkillPugna=0;
    }else if(PersonagemSelecionado.id==4){
        inimigoSk.Ivida=inimigoSk.Ivida-100;
    }
    usouSkill=0;
EstadoEspera();
    }
}
function SkillW(inimigo){
    if(inimigos>1 && usouSkill==0 && PersonagemSelecionado.id!=1){
        usouSkill=2;
        document.getElementById('pugnaButton').style='display:block';
        document.getElementById('netherwardButton').style='display:block';
    }else{
    if(PersonagemSelecionado.id==1){
        shield=1;
    }

    EstadoEspera();
    PugnaAttack();
}
}


function PugnaFala(){
    let fala = Math.floor(Math.random() * 4);
    if(batalha == 1){
        BatalhaInicio();
        batalha = 0;
    }
    switch(fala){
        case 1:
            document.getElementById('fala').innerHTML=`Ora Ora, se não é o ${PersonagemSelecionado.nome}`;
            break;
            case 2:
                document.getElementById('fala').innerHTML='Chega de falar, vamos lutar!';
                batalha = 1;
                break;
                case 3:
                    document.getElementById('fala').innerHTML='Eu, Pugna, irei acabar com você!!!!!!!';
                    break;
    }
}
function chooseAttack(inimigo){
    if(turnoPugna==0){
   switch(usouSkill){
    case 1:
        document.getElementById('pugnaButton').style='display:none';
        document.getElementById('netherwardButton').style='display:none';
        SkillQ(inimigo);
    break;
    case 2:
        document.getElementById('pugnaButton').style='display:none';
        document.getElementById('netherwardButton').style='display:none';
        SkillW(inimigo);
        break;
        default:
    if(inimigo.Ivida>0 && PersonagemSelecionado.dano>0){
        if(inimigo==Pugna){
        inimigo.Ivida= inimigo.Ivida-PersonagemSelecionado.dano;
        }else{
            inimigo.Ivida= inimigo.Ivida-(PersonagemSelecionado.dano*2);
        }
       
        }else if(PersonagemSelecionado.dano==0){
            PersonagemSelecionado.dano=PersonagemSelecionado.atbPrincipal*2;
            document.getElementById("dano").innerHTML= PersonagemSelecionado.dano;
        }
        if(inimigo.Ivida>0 && inimigo==Pugna){
        document.getElementById("PugnaVida").innerHTML= inimigo.Ivida;
        }else if(inimigo.Ivida<=0 && inimigo==Pugna){
            document.getElementById('inimigo').style='display:none';
            document.getElementById('VidaInimigo').style='display:none';
       
          
            }
            if(inimigo==NetherWard && inimigo.Ivida<0){
                document.getElementById('netherWard').style='display:none';
                temNetherWard=0;
                inimigos=1;
        }
        PugnaAttack()
        document.getElementById('pugnaButton').style='display:none';
        document.getElementById('netherwardButton').style='display:none';

        break;
}
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
    Pugna.Ivida= Pugna.Ivida-PersonagemSelecionado.dano;
    }else if(PersonagemSelecionado.dano==0){
        PersonagemSelecionado.dano=PersonagemSelecionado.atbPrincipal*2;
        document.getElementById("dano").innerHTML= PersonagemSelecionado.dano;
    }
    if(Pugna.Ivida>0){
    document.getElementById("PugnaVida").innerHTML= Pugna.Ivida;
    }else{
        document.getElementById('inimigo').style='display:none';
        document.getElementById('VidaInimigo').style='display:none';
    }
   
    PugnaAttack();
}
    }
}
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
    turnoPugna=1;
    if(PersonagemSelecionado.vida!=PersonagemSelecionado.vidaTotal){
     RegeneraHP();
    }
    if(SkillPugna==1){
    let delay = setInterval(function(){
     
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
                        if(shield==0){
            if(PersonagemSelecionado.vida>0){
                PersonagemSelecionado.vida= PersonagemSelecionado.vida-Pugna.Idano;
                document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
                document.getElementById("log").innerHTML= 'Pugna usou ataque!'
                inicioTurno();
                }}else{
                    shield=0;
                    document.getElementById("log").innerHTML= 'Pugna usou atacar mas falhou!'
                    inicioTurno();
                }
                break;
                case 4:
                    case 5:
                    
                    if(PersonagemSelecionado.dano>0){
                    PersonagemSelecionado.dano=0;
                    document.getElementById("dano").innerHTML= PersonagemSelecionado.dano;
                    document.getElementById("log").innerHTML= 'Pugna usou decrepitar!'
                    inicioTurno();
                    break;
                
                    }else{
                        conta=1;
                        PugnaAttack();

                        
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
                        if(shield==0){
                        drenagem=0;
                        document.getElementById("log").innerHTML= 'Pugna usou Dreno de vida!'
                        drenando=1;

                        let atumalaca =  setInterval(function(){
                            PersonagemSelecionado.vida--;
                            drenagem++;
                                                    
                            document.getElementById("vida").innerHTML= PersonagemSelecionado.vida;
                            if(drenagem>=drenoMaximo){
                                drenando=0;
                                clearInterval(atumalaca);
                            }
                        }, 100);}else{
                            shield=0;
                            document.getElementById("log").innerHTML= 'Pugna usou dreno de vida mas falhou!'
                        }
                        if(drenando==0){
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
    }
   
}
function EstadoEspera(){
 
    document.getElementById('Q').style='display:none';
    document.getElementById('W').style='display:none';
    document.getElementById('E').style='display:none';
    document.getElementById('R').style='display:none';
    document.getElementById('atacar').style="display:inline-block";
    document.getElementById('skill').style="display:inline-block";
    document.getElementById('item').style="display:inline-block";
    document.getElementById('defender').style="display:inline-block";
}
function BatalhaInicio(){
    document.getElementById('Q').innerHTML=PersonagemSelecionado.qNome;
    document.getElementById('W').innerHTML=PersonagemSelecionado.wNome;
    document.getElementById('E').innerHTML=PersonagemSelecionado.eNome;
    document.getElementById('R').innerHTML=PersonagemSelecionado.rNome;
    document.getElementById('dialogo').style='display:none';
    document.getElementById('batalha').style='display:block';


    if(Pugna.Ivida>0 && inimigos==0){
        inimigos=1;
    }
}
function inicioTurno(){
    turnoPugna=0;
    if(PersonagemSelecionado.vida!=PersonagemSelecionado.vidaTotal){
        RegeneraHP();
       }
}