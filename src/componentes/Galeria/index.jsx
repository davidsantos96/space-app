import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import { styled } from "styled-components";
import Imagem from "./imagem";



const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
        <Tags />
        <GaleriaContainer>
            <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                    gap: '24px',
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {fotos.map(foto => (
                                        <li key={foto.id}>
                                            <Imagem foto={foto} />
                                        </li>
                                    ))}
                                </ul>
            </SecaoFluida>
            <Populares />

        </GaleriaContainer>
       
      </>
    )
};

export default Galeria;
