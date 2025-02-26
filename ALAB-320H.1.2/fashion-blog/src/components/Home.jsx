import '../App.css';
import Header from './Header';
import NavTab from './NavTab'
import ArticalsView from './ArticalsView'
import Footer from './Footer';

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <NavTab />
            <ArticalsView />
            <Footer />
        </div>
    );
}