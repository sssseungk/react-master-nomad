import styled from "styled-components";

// styled components 활용하여 컴포넌트 생성
// CSS 코드를 그대로 쓸 수 있다는 장점이 있음
// className, style을 사용할 필요가 없음
const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({required:true, minLength: 10})`
  background-color: tomato;
`;

function App(){
  return (
    <Father as="header">
      <Btn>Login</Btn>
      {/* Btn의 style은 유지하고, html 태그를 button이 아닌 a로 설정 */}
      <Btn as="a">Login</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  )
}

export default App;


// 1. 다른 컴포넌트의 스타일은 그대로, 태그만 바꾸고 싶을때 => 컴포넌트에 as="" 사용하기
// ex. <Father as="header"/>  :: div 태그였던 컴포넌트를 스타일은 같은 header 태그로 사용
// 2. 컴포넌트의 속성값을 설정하는 방법 => styled.태그명.attrs({속성들}) 
// ex. const In[ut = styled.input.attrs({required: true})`CSS속성`;



