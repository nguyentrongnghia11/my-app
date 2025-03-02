import avt from  '../../access/image/avatar.png'
import main from  '../../access/image/main.jpg'
import aside from  '../../access/image/aside.jpg'
import './Body.css'

function Body(params) {

    return (
        <>
            <div className="container">
                <div className="main">
                <div className="sub-main">
                    <div className="contain-img">
                        <img src={main} alt="" />
                    </div>

                    <button className="btn">Apply</button>
                </div>
                </div>
                <div className="aside">
                    
                    <h2>Sorry, no results were found for "cakescascsa"</h2>
                    <img src={aside} alt="" />



                </div>
            </div>
        </>
    )

}

export default Body