//props : 화면에 표ㅛ시되는 변수, 함수 매개변수 처럼 다른 컴포넌트에서 전달받음

const Header = ({ text }) => {
  return <h1 style={{ color: "red" }}>{text}</h1>;
};

export default Header;
