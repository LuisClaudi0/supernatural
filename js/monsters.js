const monstersList = [
    {
        id: '1',
        nome: 'Demônio',
        desc: 'Demônios são espíritos malignos que foram corrompidos no Inferno. Eles possuem corpos humanos e podem manipular suas vítimas para cometer atrocidades. Alguns têm poderes sobrenaturais, como possessão e telecinesia, mas todos têm uma fraqueza comum: a exorcização.',
        kill: 'Exorcizar o demônio usando o ritual de exorcismo (em latim). Outra maneira é destruir o recipiente humano onde o demônio habita com uma arma de fogo, preferencialmente com uma bala de ferro ou uma lâmina de prata, mas o exorcismo é sempre o método mais eficaz.',
        img: '/styles/assets/criaturas/demon.png'
    },

    {
        id: '2',
        nome: 'Anjo',
        desc: 'Anjos são seres celestiais enviados por Deus. Embora sejam poderosos e aparentemente benignos, muitos têm suas próprias agendas e nem todos são amigos dos Winchester. Alguns, como Castiel, são aliados, enquanto outros, como Lúcifer, podem ser inimigos mortais.',
        kill: 'Anjos podem ser mortos com lâminas de anjo (feitas de ferro angelical) ou outros métodos místicos, como um golpe direto no coração. Também são vulneráveis a armas e feitiços sagrados que os privam de seus poderes.',
        img: '/styles/assets/criaturas/angel.png'
    },

    {
        id: '3',
        nome: 'Leviatã',
        desc: 'Esses monstros saíram do Purgatório e são uma das ameaças mais perigosas. Eles são enormes, visgosos e podem assumir a forma humana para se infiltrar na sociedade. Não têm uma forma física comum, sendo mais uma substância pegajosa e monstruosa.',
        kill: 'Para matar um Leviatã, é necessário usar "Cão de Deus" (uma arma celestial) ou fazer uso de sua fraqueza, que é a "pureza de sangue". Outra forma é usar o veneno de outro Leviatã para enfraquecê-los. Porém, são extremamente difíceis de derrotar, e você vai precisar de algo de grande poder para isso.',
        img: '/styles/assets/criaturas/leviata.png'
    },

    {
        id: '4',
        nome: 'Fantasma',
        desc: 'Espíritos de pessoas que morreram de maneira violenta ou que têm assuntos inacabados na Terra. Eles podem assombrar locais ou pessoas, frequentemente causando caos e medo.',
        kill: 'Os fantasmas podem ser destruídos com sal (jogado ao redor de seu corpo ou em locais onde eles aparecem) ou queimando os restos mortais da pessoa. A verdade é que a maioria dos fantasmas precisa resolver seus problemas antes de descansar, mas se isso não for possível, a única opção é exorcizá-los ou destruí-los.',
        img: '/styles/assets/criaturas/ghost.png'
    },

    {
        id: '5',
        nome: 'Vampiro',
        desc: 'Criaturas imortais que se alimentam de sangue humano. Eles podem se regenerar rapidamente, tornando-se extremamente difíceis de matar. São geralmente sensíveis à prata, mas têm uma habilidade de se curar rapidamente de ferimentos.',
        kill: 'Vampiros podem ser mortos com estacas de madeira ou decapitados com lâminas prateadas. Fogo também é uma maneira eficaz de destruí-los. Tente pegar um vampiro de surpresa — é mais fácil matá-los enquanto ainda estão se alimentando.',
        img: '/styles/assets/criaturas/vampire.png'
    },

    {
        id: '6',
        nome: 'Lobisomen',
        desc: 'Seres humanos que se transformam em lobos durante a lua cheia. Eles possuem uma força sobre-humana e são extremamente agressivos. Alguns lobisomens têm controle parcial sobre sua transformação, mas a maioria perde o controle e ataca indiscriminadamente.',
        kill: 'Lobisomens podem ser mortos com balas de prata, ou com um golpe fatal na cabeça com uma lâmina de prata. A única maneira de prevenir a transformação é matar o lobisomem antes que ele se transforme, ou conseguir curá-lo (o que é raríssimo).',
        img: '/styles/assets/criaturas/werewolf.png'
    },

    {
        id: '7',
        nome: 'Wendigo',
        desc: 'Criaturas canibais que habitam florestas remotas. Os Wendigos são humanos que, após se alimentarem de carne humana, se transformaram em monstros. Eles são rápidos, fortes e possuem um apetite insaciável.',
        kill: 'Os Wendigos podem ser mortos com balas de prata. Além disso, podem ser queimados ou atingidos com uma arma poderosa para destruir seu corpo. A chave é não subestimá-los — eles são ágeis e sabem caçar bem.',
        img: '/styles/assets/criaturas/wendigo.png'
    },

    {
        id: '8',
        nome: 'Metamorfo',
        desc: 'Seres capazes de mudar de forma e assumir a aparência de qualquer ser humano que toquem. Metamorfos geralmente se disfarçam para cometer crimes ou se infiltrar em locais. Eles são difíceis de detectar, pois têm a habilidade de imitar qualquer pessoa com perfeição.',
        kill: 'Metamorfos podem ser mortos com balas de prata ou outras armas tradicionais, mas a única maneira de identificar um é, em muitos casos, usando algum tipo de feitiço ou ritual para forçá-los a revelar sua verdadeira forma. Fique atento — eles podem assumir qualquer identidade.',
        img: '/styles/assets/criaturas/metamorf.png'
    },

];

document.addEventListener('DOMContentLoaded', function () {

    let monsters = document.getElementById('monsters__all');
    let about = document.getElementById('about__all');
    let back = document.querySelector('.about__back');
    let rows = document.querySelectorAll('.row__monster');

    rows.forEach(function (row) {
        row.addEventListener('click', function (event) {
            if (event.target.classList.contains('monster__img')) { // verifica se clicou em img
                let id = event.target.getAttribute('id'); // pega o id da img clicada
                monsters.classList.toggle('none');
                about.classList.toggle('none');
                
                monstersList.forEach(function (monster) {
                    if (monster.id === id) {
                        // atualiza o titulo e o conteudo do "about"
                        document.querySelector('.about__title').textContent = monster.nome;
                        document.querySelector('.about__text.desc').textContent = monster.desc;
                        document.querySelector('.about__text.kill').textContent = monster.kill;
                        document.querySelector('.about__img').setAttribute('src', monster.img);
                        document.querySelector('.about__img').setAttribute('alt', monster.nome);
                    }
                });
            }
        });
    });

    back.addEventListener('click', function () {
        monsters.classList.toggle('none');
        about.classList.toggle('none');
    });

});



