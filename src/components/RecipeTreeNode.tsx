import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { library } from '../models/Library';
import { Family, getColorFromFamily, Monsters, isFamily } from '../models/Models';
import { MonsterImage } from './MonsterImage';

const Card = styled.div<{family: Family}>`
  background-color: ${props => getColorFromFamily(props.family)};
  color: white;
  min-width: 150px;
  height: 150px;
  position:relative;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Select = styled.select`
  max-width: 100%;
  position: absolute;
  bottom:0;
`

const ChildContainer = styled.div`
  width: 100%;
  display: inline-block;
`

const Child = styled.div`
  display: inline-block;
  vertical-align: top;
  
  * {
    :hover {
      z-index: 5;
    }
  }
`

const FamilyNode = styled.div<{family: Family}>`
  background-color: ${props => getColorFromFamily(props.family)};
  height: 150px;
  min-width: 150px;
  color: white;
  text-align: center;

  * {
    :hover {
      z-index: 5;
    }
  }
`


interface RecipeTreeNodeProps {
  part: Monsters | Family;
}

export const RecipeTreeNode = ({part}: RecipeTreeNodeProps) => {
  const [recipeIndex, setRecipeIndex] = useState(-1);


  // when part changes for the component, reset the selection
  useEffect(() => {
    setRecipeIndex(-1)
  }, [part]);

  // part can be null if you switch from a deep recipe tree to a shallow one.
  // in that case don't try to render this "empty" child component.
  if( !part ){
    return null;
  }
  
  else if (isFamily(part)) {
    const fam = part as Family;
    return (
      <FamilyNode family={fam}>
        {part}
      </FamilyNode>
    );
  }

  const monster = library.get(part);

  return (
    <div>
      <Card family={monster.family}>
        <MonsterImage monster={monster.name} clickNav={false} />
        <Select value={recipeIndex} onChange={x => setRecipeIndex(parseInt(x.target.value))}>
          <option value={-1}>none</option>
          {monster.recipes.map(x => (
            <option value={monster.recipes.indexOf(x)}>{x.base} + {x.mate}</option>
          ))}
        </Select>
      </Card>
    
      
      {recipeIndex !== -1 && 
      <ChildContainer>
        <Child>
          <RecipeTreeNode part={monster.recipes[recipeIndex]?.base} />
        </Child> 
        <Child>
          <RecipeTreeNode part={monster.recipes[recipeIndex]?.mate} />
        </Child>
      </ChildContainer>}
    </div>
  );
};