import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import '../homepage/homepage.css';

const Login =  () => {
    return (
        <>
        <Header />
        <p>id나 pw가 잘못되었습니다. 다시 로그인 해주세요.</p>
        <Footer />
        </>
    )
}

export default Login;