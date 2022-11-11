 import React,{useEffect,useState} from 'react';
 import "../Testimonials/test.css"
 import Carousel from "react-elastic-carousel";
 import "../../assets/css/style.css";
import "../../assets/css/default.css";
import "../../assets/css/LineIcons.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/slick.css";
 const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
 
 export default function Test() {
  const [data, setData] = useState([]);

    const getTestimonial = async () => {
      const response = await fetch("https://harmonious-cuchufli-845097.netlify.app/user/viewTestimonial");
      const myTestData = await response.json();
      setData(myTestData.reverse());
    };
    useEffect(() => {
      getTestimonial();
      console.log(data);
    
     }, []);
   return (
     <div id="row">
       <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={2000}>
       {data.map((user,index)=>{
        return (<>
  <div id='column '>        
<div className="card" style={{width: "18rem",height:"30rem"}}>
  <img src={user.Photo} className="card-img-top" id="image" alt="..."/>
  <div className="card-body">
     <p className="card-text">{user.TestimonialDescription}</p>
     <hr/>
     <h5 className="card-title">{user.Name}</h5>
    <span>{user.Post}</span>
  </div>
  </div>
</div>

          </>
        )
       })

       }
       </Carousel>
     </div>
   )
 }
 