import EmployeeList from './EmployeeList';
import Header from './Header';
import SearchBar from './SearchBar';

function Homepage() {

    return (
        <>
            <Header />
            <SearchBar />
            <EmployeeList employees={employees} />
        </>
    )
}


export default Homepage


// Data for employees

const employees = [
    {
        id: 1,
        name: 'James King',
        position: 'President and CEO',
        image: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
    },
    {
        id: 2,
        name: 'Julie Taylor',
        position: 'VP of Marketing',
        image: "https://media.istockphoto.com/id/1394347360/photo/confident-young-black-businesswoman-standing-at-a-window-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=tOFptpFTIaBZ8LjQ1NiPrjKXku9AtERuWHOElfBMBvY="
    },
    {
        id: 3,
        name: 'Eugene Lee',
        position: 'CFO',
        image: "https://media.istockphoto.com/id/1051453400/photo/portrait-of-smiling-confident-female-boss-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5JclaGw4P_Pea9tr_zBkJQqn_4dFST_OghhRDiFT9fk="
    },
    {
        id: 4,
        name: 'John Williams',
        position: 'VP of Engineering',
        image: "https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=612x612&w=0&k=20&c=qkOwVHZFC-fbtbTnufVGaXFhnQBcfEjzbu5ThSXVLR0="

    },
    {
        id: 5,
        name: 'Ray Moore',
        position: 'VP of Sales',
        image: "https://media.istockphoto.com/id/831902158/photo/confidence-got-him-to-the-top.jpg?s=612x612&w=0&k=20&c=NPUySFpIi4KQtcBRKeLQLObP5TYaViw9WhHb9NwJbVw="
    },
    {
        id: 6,
        name: 'Paul Jones',
        position: 'QA Manager',
        image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
    }
]