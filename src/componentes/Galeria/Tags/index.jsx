import Titulo from "../../Titulo";
import tags from "./tags.json";
import styled from "styled-components";

const Tags = () => {

  const TagsEstializado = styled.section`
    display: flex;
    gap: 60px;
    align-items: center;
    color: #d9d9d9;
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 400;
  `;

  const TagTitulo = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    margin: 0;
  `;

  const Tag = styled.button`
    font-size: 24px;
    color: #ffffff;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #c98cf1;
    }
  `;

  return (
    <TagsEstializado>
      <Titulo>Busque por tags</Titulo>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.titulo}</Tag>
      ))}
    </TagsEstializado>
  );
};

export default Tags;
