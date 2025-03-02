
import logo from  '../../access/image/avatar_small.png'
import './Footer.css'
function Footer() {
    return (
        <footer className="main-footer">
            <div className="sub-footer">
                <p>About us</p>
                <p>Lorem ipsum dolor sit amet consectetur adipi</p>
                <div className="send">
                    <input type="text" />
                    <button >Send</button>
                </div>


                <div className="text1">
                    <img src={logo} alt="" />
                    <span>2023 Chefifi Company</span>
                    <span>Tems of sevices|Privacy Policy</span>
                </div>
            </div>

            <div className="sub-footer">
                <div className="text">
                    <p><b>Learn more</b></p>
                    <p>Our cooks</p>
                    <p>See our feature</p>
                </div>
                <div className="text">
                    <p><b>Shop</b></p>
                    <p>Gift Subscription</p>
                    <p>Send us feedback</p>
                </div>
            </div>

            <div className="sub-footer">
                <div className="text">
                    <p><b>Recipes</b></p>
                    <p>What to cook this week</p>
                    <p>Pasta</p>
            
                
                    <p>Dinner</p>
                    <p>Healthy</p>
                    <p>Vegatarion</p>
                    <p>Vegan</p>
                    <p>Chrismas</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;