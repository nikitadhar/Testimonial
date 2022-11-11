import React from 'react'

import "../../assets/css/style.css"
import "../../assets/css/default.css"
import "../../assets/css/LineIcons.css"
import "../../assets/css/magnific-popup.css"
import "../../assets/css/slick.css"
import client1 from "../../assets/images/client_logo_01.png"
import client2 from "../../assets/images/client_logo_02.png"
import client3 from "../../assets/images/client_logo_03.png"
import client4 from "../../assets/images/client_logo_04.png"






const Banner2 = () => {
  return (
    <>
    
<section className="client-logo-area">
<div className="container">
<div className="row">
<div className="col-md-3 col-6">
<div className="single-client mt-30 text-center">
<img src={client1} alt="Logo"/>
</div> 
</div>
<div className="col-md-3 col-6">
<div className="single-client mt-30 text-center">
<img src={client2} alt="Logo"/>
</div> 
</div>
<div className="col-md-3 col-6">
<div className="single-client mt-30 text-center">
<img src={client3} alt="Logo"/>
</div> 
</div>
<div className="col-md-3 col-6">
<div className="single-client mt-30 text-center">
<img src={client4} alt="Logo"/>
</div> 
 </div>
</div> 
</div> 
</section>
      
    </>
  )
}

export default Banner2;