import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import PaymentBody from "./Components/PaymentBody";

function App() {
  return (
    <div className="App">
      <Header />
      <PaymentBody/>
      <Footer />
    </div>
  );
}

export default App;
