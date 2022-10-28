   
const jogos = [
    jogo1={
        nome:'Kingdom Two Crowns',
        ano: 2018,
        preco: 23.70,
        descricao: 'Construa o seu reino e proteja-o da ameaça dos greed na nova evolução da premiada série de micro estratégia. Experimente novas tecnologias, unidades, inimigos, montarias e segredos no novo modo campanha solo ou cooperativo.',
        expansao: true,
        desenvolvedor: 'Stumpy Squid',
        categoria: [" Estratégia", " Aventura", " Indie"],
        linkJogo: "https://store.steampowered.com/app/701160/Kingdom_Two_Crowns/",
        imgJogo:".projeto-intro-web/kingdom.jpg",
        },
    jogo2={
            nome:'Story of Seasons: Friends of Mineral Town',
            ano: 2020,
            preco: 93.99,
            descricao: 'Experimente os prazeres da vida na fazenda, neste remake do clássico Harvest Moon:Friends of Mineral Town.',
            expansao: false,
            desenvolvedor: 'Marvelous Inc.',
            categoria: [" Simulação", " Simulador Rural", " RPG"," Casual", " Fofo"],
            linkJogo: "https://store.steampowered.com/app/978780/STORY_OF_SEASONS_Friends_of_Mineral_Town/",
            imgJogo: ".projeto-intro-web/sos.jpg",
         },
    jogo3={
                nome:'Rune Factory 5',
                ano: 2022,
                preco: 189.95,
                descricao: 'Como o mais novo soldado da organização mantenedora da paz, mais conhecido como SEED, proteja a comunidade cercada por monstros e enfrentes missões especiais. Cultive plantações em sua fazenda e faça amigos enquanto descobre os mistérios das ruínas.',
                expansao: false,
                desenvolvedor: 'Marvelous Inc',
                categoria: ["RPG", " Aventura", " Simulador Rural", " Simulação"],
                linkJogo: "https://store.steampowered.com/app/1702330/Rune_Factory_5/",
                imgJogo: ".projeto-intro-web/rune.jpg",
         },
    jogo4={
                nome:'New World',
                ano: 2021,
                preco: 75.49,
                descricao: 'Explore um MMO de mundo aberto emocionante e cheio de perigos e oportunidades, onde você irá forjar um novo destino na ilha sobrenatural de Aeternum.',
                expansao: false,
                desenvolvedor: 'Amazon Games',
                categoria: ["Multijogador Massivo ", "Mundo Aberto ", "MMORPG "],
                linkJogo: "https://store.steampowered.com/app/1063730/New_World/",
                imgJogo:".projeto-intro-web/new.jpg",
         },
    jogo5= {
                    nome:'Final Fantasy XIV Online',
                    ano: 2014,
                    preco: 52.99,
                    descricao: 'Faça parte de um FINAL FANTASY épico e sempre renovado, aventurando-se e explorando ao lado de amigos do mundo inteiro.',
                    expansao: false,
                    desenvolvedor: 'Square Enix',
                    categoria: ["Multijogador Massivo", " Mundo Aberto", " MMORPG"," Fantasia"],
                    linkJogo: "https://store.steampowered.com/app/39210/FINAL_FANTASY_XIV_Online/",
                    imgJogo:".projeto-intro-web/ffx.jpg",
          }
]
let soma = 0;

for(let i in jogos){
  soma += jogos[i].preco
  console.log(`
  Jogo: ${jogos[i].nome.toUpperCase()}
  Ano de Lançamento: ${jogos[i].ano}
  Preço na Steam: R$ ${jogos[i].preco.toLocaleString('pt-BR')}
  Possui Expansão: ${jogos[i].expansao}
  Categoria: ${jogos[i].categoria}
  Desenvolvedor: ${jogos[i].desenvolvedor}
  Descrição: ${jogos[i].descricao}
  `)
}
soma=soma/5
console.log(`A média de preço dos jogos é de R$ ${soma.toLocaleString('pt-BR',{ maximumFractionDigits: 2})}`)

//teste//