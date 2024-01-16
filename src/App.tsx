import styled from "styled-components";

// Title은 App 안에, App은 ThemeProvider 안에 존재하기 때문에 props 사용 가능
const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;


function App(){
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  )
}

export default App;


