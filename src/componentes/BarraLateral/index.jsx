import {styled} from 'styled-components';


const ListaEstilizada = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                <ul>
                    <li>
                        <a href="">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais curtidas
                        </a>
                    </li>
                </ul>
            </ListaEstilizada>
            </nav>
        </aside>
    )
}
export default BarraLateral;