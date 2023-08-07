import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Display from './components/OrderSummary/Display'
import OrderSummary from './components/OrderSummary/OrderSummary'
import classes from './App.module.scss'
import PatternDesktop from './images/pattern-background-desktop.svg'
import PatternMobile from './images/pattern-background-mobile.svg'
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const media = useMediaQuery('only screen and (max-width: 700px)')
  return (
    <div className={classes.bg_app}>
      <img src={media? PatternMobile: PatternDesktop} alt='Pattern background' className={classes.background} />
    <Card>
      <Display/>
      <OrderSummary/>
    </Card>
    <Footer />
    </div>
  );
}

export default App;
