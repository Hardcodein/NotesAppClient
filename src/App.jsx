import './App.css'
import {Input} from "@chakra-ui/react";

function App() {
  return <section>
    <div>
      <form>
        <h3>Создание заметки</h3>
        <Input placeholder ="Название заметки"/>
      </form>
    </div>
  </section>;
}

export default App
