import styled from 'styled-components';

interface containerProps{
  bgColor: string;
}

const Container = styled.div<containerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface CircleProps{
  bgColor: string;
}

function Circle({bgColor}: CircleProps){
  return (
    <div>
      <Container bgColor={bgColor}/>
    </div>
  )
}


export default Circle;