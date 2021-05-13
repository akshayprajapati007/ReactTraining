import './App.css'
import Functional from './components/Functional'
import Class from './components/Class'
import Jsx from './components/Jsx'
import Props from './components/Props'
import SetState from './components/SetState'
import EventHandling from './components/EventHandling'
import BindEventHandling from './components/BindEventHandling'
import ParentComponent from './components/ParentComponent'
import ConRendering from './components/ConRendering'
import ListRendering from './components/ListRendering'
import Stylesheet from './components/Stylesheet'
import './components/Stylesheet.css'
import styles from './components/Stylesheet.module.css'

function App() {
  return (
    <div className="App">
      {/* Functional Component */}
     <Functional />
     {/* Class Component */}
      <Class />
      {/* return using JSX */}
      <Jsx />
      {/* Use of props */}
      <Props name='Ak' nickName='A'>
        <p>this p from first props.</p>
      </Props>
      {/* Use of setSet */}
      <SetState></SetState>
      {/* Event Handling example */}
      <EventHandling></EventHandling>
      {/* Binding Eventhandler */}
      <BindEventHandling></BindEventHandling>
      {/* Send method as a parameter */}
      <ParentComponent></ParentComponent>
      <ConRendering></ConRendering>
      {/* Display the List using map function */}
      <ListRendering></ListRendering>
      <Stylesheet></Stylesheet>
      {/* if we import regular css here than it can also use in child compnent without import
      but css module file not accessible direct in child component */}
      <h1 className={styles.success}>css using css module</h1>
    </div>
  );
}

export default App