import styled, {keyframes} from "styled-components";

const Title = styled.h1`
  color: tomato;
  &:hover{
    color: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover{
    font-size: 99px;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box 컴포넌트 확장
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: tomato;
`;

// styled component에 속성값 추가하기
const Input = styled.input.attrs({  required: true, maxLength: 10 })`
  background-color: tomato
`;

/* 애니메이션 */
const anim = keyframes`
  from{
    color:tomato;
  }
  to{
    color: teal;
  }
`;

const BtnAnimation = styled.button`
  animation: ${anim} 0.5s infinite
`;


function App(){
  return (
    <Wrapper>
      <Title>Hello</Title>
      {/* props로 컴포넌트에 다른 속성값 설정 */}
      <Box bgColor="teal"/>
      <Circle bgColor="tomato"/>
      <Btn>Log in</Btn>
      {/* 컴포넌트의 style은 그대로, tag만 바꾸기 */}
      <Btn as="a">Log out</Btn>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <BtnAnimation>Animation</BtnAnimation>
    </Wrapper>
  )
}

export default App;


