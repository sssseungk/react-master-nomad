import { useState } from "react";


function App(){
  const [value, setValue] = useState("");
  // any 대신 타입 지정해줘야함 
  // 타입스크립트는 onChange 함수가 InputElement에 의해 실행되는 것을 알게됨
  // HTMLInputElement가 이벤트를 발생시킨다. 
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // const value = event.currentTarget.value랑 같은 의미 
    // currentTarget 안에서 여러 값을 가져오고 싶을 때 간단하게 작성하기 위함
    // 예시 : const {currentTarget: {value, tagName, width, id} = event;}
    const {currentTarget: {value},
    } = event;
  setValue(value);
  };

  // HTMLFormElement가 이벤트를 발생시킨다. 
  const onSubmit = () => 
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("hello", value);
    };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="username"
          value={value}
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default App;