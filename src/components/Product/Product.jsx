import { useEffect, useState } from "react"
import avt from '../../access/image/avatar.png'
export default function Product() {

    const [data, setData] = useState([])
    useEffect(() => {


        fetch("https://67cd3630dd7651e464eda7f6.mockapi.io/nguyentrongnghia")
            .then(res => res.json())
            .then(data => {
                console.log(data['0'].img)
                setData(data)
            })
    }, [])

    return (
        <>

            <div className="wrapperr" >
                <div className="content my-5" style={{ paddingLeft: '150px' }}>
                    <h1>Emma Gonzales's Recipe Box</h1>
                    <div className="profile d-flex">
                        <img src={avt} alt="" />
                        <div className="detail mx-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates consectetur amet quibusdam omnis quod mollitia ea quae repellendus aut repudiandae accusantium voluptatem pariatur placeat similique cupiditate a, repellat explicabo!</p>
                            <span>6.5k Subscribes</span>
                            <button type="button" class="btn btn-primary btn-sm m-0 mx-4">Share</button>
                        </div>
                    </div>
                </div>


                <div className="redirect" style={{ marginLeft: '150px' }}>
                    <span>Save Recipes</span>
                    <span>Folders</span>
                    <span>Recipes by Genneral</span>
                </div>

                <div className="container-product d-flex justify-content-center flex-wrap" >
                    {
                        data.map((item, index) => {
                            return <div key={index} className="card m-4" style={{ width: '18rem' }}>
                                {console.log(item.img)}
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <span href="#" className="text-pink" style={{ color: 'pink' }}>Go somewhere</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </>
    )

}