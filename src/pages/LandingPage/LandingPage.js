import { InitialNav, Body} from '../../components';
import Footer from '../../components/Footer/Footer';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className='landing-page-header'>
        <link href="//db.onlinewebfonts.com/c/105007d99d9df64c50cc24d696d79555?family=Graphik+Web+Regular" rel="stylesheet" type="text/css" />
        <InitialNav/>
      </header>
      <Body/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
