import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Footer from '../../components/footer/Footer';
import './homepage.css';

const Homepage = ({ id, nickName }) => {
    return (
        <>
        <Header id={id} nickName={nickName} />
        <Section />
        <Footer />
        </>
    )
}

export default Homepage;