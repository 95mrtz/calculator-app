import "./App.css";
import Header from "./components/Header.js";
import Display from "./components/Display.js";
import BtnArea from "./components/BtnArea.js";

const App = () => {
  return (
    <div className="h-screen bg-green-600 mx-auto flex flex-col justify-center items-center">
      <Header></Header>
      <Display></Display>
      <BtnArea></BtnArea>
     
    </div>
  );
};

export default App;
