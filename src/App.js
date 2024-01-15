import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;


const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  // styled component 자체를 타겟하기
  ${Emoji}{
    &:hover{
      font-size: 98px
    }
    &:active{
      opacity: 0;
    }
  }
`;


function App(){
  return (
    <Wrapper>
      <Box>
        <Emoji>🤓</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  )
}

export default App;


// 태그 종류와 상관없이 컴포넌트 타겟팅 => 컴포넌트 안에 styledcomponent 자체를 타겟팅하기
// ex. ${Emoji}{&::hover{}}

