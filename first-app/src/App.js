const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App(){
  return(<div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>)
}
function Header(){
 return(<div className="header">
  <h1>Fast React co.</h1>
 </div>)
}
function Menu(){
  const pizzas  = pizzaData;
  //const pizzas = [];
  const test = pizzas.length;
  return(
    <main className="menu">
      <h2>Our Menu</h2>
      {test >0 ? (
         <ul className="pizzas">
         {pizzaData.map((pizza)=>(
           <Pizza pizzaObj = {pizza} key={pizza.name} />
         ))}
       </ul>
      ):(<p>we're still working on our menu.Please come back later</p>)}
     {/*<ul className="pizzas">
        {pizzaData.map((pizza)=>(
          <Pizza pizzaObj = {pizza} key={pizza.name} />
        ))}
      </ul> */} 
      {/*<Pizza 
      name ="Pizza Funghi"
      ingredients = "Tomato"
      price = {15}
      photoName = "pizzas/funghi.jpg"
      />
      <Pizza
        name ="Pizza Funghi"
        ingredients = "Tomato"
        price = {17}
        photoName = "pizzas/salamino.jpg"
      />
      <Pizza
        name ="Pizza Funghi"
        ingredients = "Tomato"
        price = {12}
        photoName = "pizzas/focaccia.jpg"
  />*/}
    </main>
  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza(props){
  if(props.pizzaObj.soldOut) return null;
  return(
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>${props.pizzaObj.price+3}</span>
      </div>
    </li>
  )
}
export default App;