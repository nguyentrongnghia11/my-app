
import './Header.css'
import logo from  '../../access/image/avatar_small.png'
import avt from  '../../access/image/avatar.png'

function Header() {
    return (
        <header className="header">
            <div className="sub-header1">
                <img src={logo} alt="" />
                <input type="text" placeholder='cakescascsa' />
            </div>
            <div className="sub-header">
                <span>What to cook</span>
                <span>Recipes</span>
                <span>Ingredient</span>
                <span>Occasions</span>
                <span>About us</span>
            </div>
            <div className="sub-header-2">
                <span>Your recipe Box</span>
                <img src={avt} className='avt' alt="" />
            </div>

        </header>
    )
}

export default Header;