import NavTab from './NavTab';
import '../App.css';

export default function Footer() {
    return (
        <div className='footer'>
            <NavTab isFooter={true} />
            <h3>© 2023 VALET Industries, Inc</h3>
        </div>
    );
}