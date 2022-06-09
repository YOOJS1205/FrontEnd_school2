import './header.css';

const Header = ({ id, nickName }) => {
    return (
        <div className='test'>
            {nickName}, ({id})님 반갑습니다.
            <div>
                Menu
            </div>
        </div>
    )
}

export default Header;

// npm i => package.json 기준으로 다시 module이 설치된다.