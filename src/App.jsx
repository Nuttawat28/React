import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    {name: "Mike", surname: "Brow"},
    {name: "Bob", surname: "Alex"}
  ]

  return (
    <div className="App">
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} surname={data.surname} />
      ))}

      <Contact email="Boss1150@gmail.com" phone = "0812345678" />
    </div>
  );
}

export default App
