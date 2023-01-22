import "./App.css";

import "./routes/home/home.styles.scss";

const App = () => {
  return (
    <div className="outer-container">
      <img
        class="background-img"
        src="https://gcdnb.pbrd.co/images/0AenMkzPJszt.png?o=1"
      />

      <button className="top-menu btn">Menu</button>
      <button className="top-order-now btn">Order Now</button>

      <button className="menu btn">menu</button>
      <button className="locations btn">locations</button>
      <button className="order btn">place order</button>
      <button className="contact btn">contact</button>
    </div>
  );
};

export default App;
