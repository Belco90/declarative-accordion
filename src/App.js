import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionItem title="Title A">Content A</AccordionItem>
        <AccordionItem title="Title B">Content B</AccordionItem>
        <AccordionItem title="Title C">Content C</AccordionItem>
        <AccordionItem title="Title D">Content D</AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
