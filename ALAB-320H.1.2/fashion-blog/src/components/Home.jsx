import '../App.css';
import Header from './Header';
import NavTab from './NavTab'
import ArticalsView from './ArticalsView'
import Footer from './Footer';
import VerticalLine from './VerticalLine';

export default function Home() {
    return (
        <div className='app'>
            <VerticalLine />
            <div className='home'>
                <Header />
                <NavTab />
                <ArticalsView />
                <Footer />
            </div>
        </div>
    );
}