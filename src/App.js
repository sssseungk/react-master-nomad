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

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  // box 안의 span target하기
  span{
    font-size: 36px;
    // span:hover{} 과 같음 :: pseudo collector
    &:hover{
      font-size: 48px
    }
    // span::active와 같음 
    &:active{
      opacity: 0;
    }
  }
`;


function App(){
  return (
    <Wrapper>
      <Box>
        <span>🤓</span>
      </Box>
    </Wrapper>
  )
}

export default App;


// styled components에서 animation 주는 방법 : helper function import 하기 {keyframse}
// 컴포넌트에 다른 태그 target 하기

