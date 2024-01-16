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
  bgColor: string;        /* default props :: required 프로퍼티*/
  borderColor?: string;   /* optional props : undefined일수도 있는 프로퍼티*/
  text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps){
  return (
    <div>
      <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
      </Container>
    </div>
  )
}

export default Circle;

/*
required props, optional props
optional props의 기본값 설정 : borderColor ?? bgColor 
  ㄴ borderColor가 undefined이면 borderColor 값을 bgColor 값으로 지정하기 
* CircleProps에선 borderColor가 필수값이 아니지만 
ContainerProps에 borderColor가 필수 속성으로 들어가 있기 때문에 default 값을 지정해줘야한다. 
*/
