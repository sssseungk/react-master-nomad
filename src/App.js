import styled from "styled-components";

// styled components 활용하여 컴포넌트 생성
// CSS 코드를 그대로 쓸 수 있다는 장점이 있음
// className, style을 사용할 필요가 없음
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  // 컴포넌트에서 props 받기
  background-color: ${(props) => props.bgColor}; 
  width: 100px; 
  height: 100px;
`;

// Box의 모든 속성을 가져온다. (확장하려는 컴포넌트 이름 작성하기)
const Circle = styled(Box)`
  border-radius: 50px;
`

function App(){
  return (
    <Father>
      <Box bgColor="teal"/>
      <Circle bgColor="tomato"/>
    </Father>
  )
}

export default App;

