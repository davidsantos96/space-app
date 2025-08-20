import Imagem from "../Galeria/imagem";
import {styled} from "styled-components";


const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
`;

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto}>
            <Imagem foto={foto} expandida={true} />
            <p>Zoomed In Content</p>
            <form method="dialog">
              <button>Close</button>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
