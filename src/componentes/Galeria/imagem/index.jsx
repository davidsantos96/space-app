import styled from "styled-components";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    display: block;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    h3 {
      font-family: "GandhiSansBold";
      margin: 0;
      font-size: 16px;
    }

    h4 {
      flex-grow: 1;
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const Fonte = styled.p`
  margin: 0;
`;

const Icones = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;


const Imagem = ({ foto, $expandida = false }) => {
  return (
    <Figure $expandida={$expandida}>
      <img
        src={`./imagens/galeria/${foto.path.replace("/imagens/galeria/", "")}`}
        alt={foto.titulo}
      />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Footer>
          <Fonte>{foto.fonte}</Fonte>
          <Icones>
            <IconButton title="Favorito">
              <IconImg src="./icones/favorito-ativo.png" alt="Favorito" />
            </IconButton>
            <IconButton title="Expandir">
              <IconImg src="./icones/expandir.png" alt="Expandir" />
            </IconButton>
          </Icones>
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
