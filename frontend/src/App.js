import Footer from "./components/Footer";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentSceen";
import { AnimatePresence } from "framer-motion";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route path="/login" component={LoginScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact component={HomeScreen} />
            </Switch>
          </AnimatePresence>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
