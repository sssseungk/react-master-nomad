import styled from "styled-components";


const Container = styled.div`
  /* 우리가 만든 theme에 접근하기 */
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;


function App(){
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  )
}

export default App;


/*
* 타입스크립트와 styled components 테마 연결하기
1. styped components 설치하기
2. 선언 파일(declaration) 만들기 : styled.d.ts
3. 테마 만들기 : theme.ts 파일 생성
4. index.tsx에 ThemeProvider 생성 및 테마 전달
5. app.tsx에서 props로 받아 사용하기
*/

