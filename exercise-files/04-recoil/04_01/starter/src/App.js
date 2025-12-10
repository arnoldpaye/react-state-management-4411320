import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import styles from "./common/styles";

function App() {
  return (
    <div className="container mt-5 " style={styles.container}>
      <Form />
      <List />
    </div>
  );
}

export default App;
