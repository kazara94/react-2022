import "./styles/reset.css";
import "./App.css";
import Header from "./components/Header";
import Button from './components/Button';
import Form from "./components/Form";
import CounterParent from "./components/CounterParent";
import TodoApp from "./components/TodoApp";

export default function App() {
  
  const btnTexts = [
    {
      id: 1,
      text: 'Button 1',
    },
    {
      id: 2,
      text: 'Button 2',
    },
    {
      id: 3,
      text: 'Button 3',
    },
    {
      id: 4,
      text: 'Button 4',
    }
  ];

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="MainContent">
        {/* {
          btnTexts.filter((object) => object.id < 4).map(item => {
            return (
              <Button key={item.id} text={item.text} />
            )
          })
        } */}
        {/* <Form /> */}
        {/* <CounterParent /> */}
        <TodoApp />
      </div>
    </div>
  );
}
