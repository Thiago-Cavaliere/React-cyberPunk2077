import React from "react";
import imagem from "../../assets/david-main-image.jpg";
import imagem2 from "../../assets/178303da5b0c19233c90d5852e621a50.jpg";
import imagem3 from "../../assets/2ac1bce3402c19b7b1ae178a8c15e2e9.jpg";
import "../../commits/Main/Main.css";

const Main = () => {
  return (
    <div>
      <section>
        <h1>David Martinez em CyberPunk: Edgerunners</h1>
        <img src={imagem} alt="David Cyberpunk 2077" />
        <h2>
          David é um jovem que vive em Night City, uma metrópole futurista
          marcada por desigualdade social e avanços tecnológicos extremos. Ele
          vem de uma família humilde e inicialmente segue os passos esperados
          por sua mãe, que trabalha duro para pagar sua educação em uma
          prestigiada escola corporativa. No entanto, sua vida muda
          drasticamente após a morte de sua mãe em um acidente. Após adquirir o
          Sandevistan e implantá-lo em si mesmo, David entra no mundo dos
          edgerunners, um grupo de mercenários que vivem fora das leis
          corporativas. Ele se junta a uma equipe liderada por Maine, onde
          aprende sobre o funcionamento da vida de mercenário, enfrenta ameaças
          constantes e cria laços emocionais profundos, especialmente com Lucy,
          uma netrunner habilidosa. Conforme David avança em sua jornada, ele
          enfrenta os perigos do cyberpsicose, uma condição mental que afeta
          aqueles que se sobrecarregam com implantes cibernéticos. Sua história
          é uma tragédia que exemplifica o custo da ambição desenfreada e do
          desejo de mudar um destino
        </h2>
      </section>

      <section>
        <h1>Dinâmica da Gangue</h1>
        <img src={imagem2} alt="David Cyberpunk 2077" />
        <h2>
          A gangue de David Martinez em Cyberpunk: Edgerunners é composta por um
          grupo de mercenários conhecido como os Edgerunners, que atuam em Night
          City, realizando trabalhos perigosos para sobreviver e desafiar as
          corporações que controlam a cidade. Cada membro da gangue tem
          habilidades únicas e uma personalidade distinta, formando uma equipe
          altamente especializada. A gangue funciona como uma família
          improvisada, com cada membro desempenhando um papel crucial para o
          sucesso das missões. Entretanto, como acontece em Night City, a vida
          perigosa de mercenários frequentemente resulta em tragédias e perdas.
          Conforme David assume a liderança, a gangue enfrenta desafios
          crescentes, incluindo traições, ciberpsicose e conflitos com
          corporações poderosas como a Arasaka.
        </h2>
      </section>

      <section>
        <h1>Lucy: O Passado e os Sonhos</h1>
        <img src={imagem3} alt="David Cyberpunk 2077" />
        <h2>
          Lucy é uma personagem misteriosa, com um passado doloroso que molda
          suas ações e sua visão de mundo: Ela foi criada e treinada pela
          Arasaka como uma netrunner desde jovem. Sua missão era explorar os
          recessos mais perigosos do ciberespaço, onde muitas crianças como ela
          morreram devido aos riscos desse trabalho. Depois de escapar da
          Arasaka, Lucy decidiu lutar por sua liberdade e sonha em deixar Night
          City para viver uma vida tranquila na Lua, um lugar que simboliza para
          ela uma nova chance longe do perigo e da opressão. Desde o início,
          Lucy se conecta emocionalmente com David, vendo nele algo mais do que
          apenas um mercenário ou líder da gangue: Apoio mútuo: Lucy se torna
          uma aliada confiável e protetora, especialmente quando David assume
          riscos cada vez maiores ao implantar tecnologia perigosa como o
          Sandevistan. Sonho compartilhado: Embora David inicialmente não
          compartilhe o sonho de Lucy de ir para a Lua, ele eventualmente
          reconhece sua importância para ela. Seu amor por Lucy o motiva a
          protegê-la, mesmo que isso signifique sacrificar a si mesmo. Momentos
          de ternura: Apesar da brutalidade de suas vidas, os dois encontram
          momentos de calma juntos, fortalecendo seu vínculo e mostrando que o
          amor ainda pode florescer em um mundo tão sombrio.
        </h2>
      </section>
    </div>
  );
};

export default Main;
