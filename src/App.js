function App() {
  const h1Value = "Hello from the 'App' component.";
  const items = [
    {id: 1, name: "Apple"},
    {id: 2, name: "Orange"},
    {id: 3, name: "Guava"},
  ];
  return (
    <div>
      <h1 className="h1">{h1Value}</h1>
      <p>Items ({items.length})</p>
      <ul>
        {items && items.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
      {Math.random() + 10}
    </div>
  );
}
export default App;
