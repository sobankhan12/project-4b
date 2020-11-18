import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shoes from "./images.json"
import "./Home.css"
import useWebAnimations,{fadeInUp} from "@wellyshen/use-web-animations";
const Home1 = () => {
    const {ref:Name}=useWebAnimations({...fadeInUp})
    const{keyframes,timing}=fadeInUp
    const {ref:detail}=useWebAnimations({
        keyframes:[
            {
            transform:"translateX(0)"
        },
        {
            transform:"translateX(50%)"
        }
    ],
    timing:{
        delay: 300,
        duration:2000,
        iterations: Infinity,
        // easing: 'ease-in-out',
        direction:"alternate"
    }
    })
    const { ref: shoes } = useWebAnimations({
        keyframes,
        timing: {
            // ...timing,
            duration:1,
            delay: 500,
            iterations: 1,
            easing: 'ease'
        }
    })

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }
    
    return (
        <div style={{overflow:"hidden"}}>
            <div ref={Name} style={{width:'300px', height:'100px',margin:'0 auto 10px', fontSize:'60px', fontWeight: 'bold', color:'#00f291' }}>Shoe Store</div>
            <div ref={detail} style={{width:'800px', height:'50px',margin:'0 auto 10px', fontSize:'30px', color:'red' }}>Chose what ever you want</div>
            <div style={{height:'100%', width: '100%',marginRight:'100px',backgroundColor:'white' }} ref={shoes}>
                <Slider {...settings} >
                        {Object.keys(Shoes).map((keyName) => {
                            return(
                                <div key={keyName}>
                                    <img  
                                    
                                     src={Shoes[keyName].image}  
                                    // src={shoe1}  
                                     alt={Shoes[keyName].title}          
                                     style={{
                                     height:'400px',
                                     backgroundColor:'#2c2230',
                                     display: "block",
                                     margin: "0 auto",
                                     cursor: "pointer",
                                    //  zoom:"-150%"
                                    }}/>
                                </div>
                            )})}
                </Slider>
            </div>
            
        </div>
        
        
    )
}

export default Home1
