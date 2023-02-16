import { IMonster } from "../models/Models";
import { RecipeTreeNode } from "./RecipeTreeNode";
import styled from 'styled-components';

const Tree = styled.div`
  position:relative;
  text-align: center;
  display:flex;
  width: max-content;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

interface RecipeTreeProps {
  monster: IMonster;
}

export const RecipeTree = ({monster}: RecipeTreeProps) => {
  return (
    <Tree>
    <RecipeTreeNode part={monster.name} />
    </Tree>
  )
}