import { useState } from 'react';
import styled from 'styled-components';

interface containerProps{
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<containerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps{
  bgColor: string;        
  borderColor?: string; 
}

function Circle({bgColor, borderColor}: CircleProps){
  // * state 타입 바꾸는 방법
  const [value, setValue] = useState<number | string>(0);
  setValue(2);
  setValue("hello")
  // setValue(true)   -> 타입 에러 발생

  return (
    <div>
      <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>
    </div>
  )
}

export default Circle;
