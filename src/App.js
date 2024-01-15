import styled from "styled-components";

// styled components 활용하여 컴포넌트 생성
// CSS 코드를 그대로 쓸 수 있다는 장점이 있음
// className, style을 사용할 필요가 없음
const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal; 
  width: 100px; 
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App(){
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo/>
    </Father>
  )
}

export default App;