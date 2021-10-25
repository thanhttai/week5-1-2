
import './App.css';
import data from "./data.json"
import Header from "./components/Header.js"
// import Container from "./components/Container.js"
import ListItem from "./components/ListItem.js"

function App() {
  const jobData = data.jobs.slice(0, 20)
  // const newData = data
  return (
    <div className="App">
      <Header />
      {/* <Container /> */}
      <div class="grid wide">
        <div class="row container__main">
          {
            jobData.map(el => <ListItem data={el} />)
          }
        </div>
      </div>



    </div>
  );
}

export default App;
