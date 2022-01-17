import React from 'react'
import MedicationIcon from '@mui/icons-material/Medication';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function Mainnavigation() {
    return (
        <div>
       
<div className='main-navigation-div'>
 <div className='inner-nav'>
   {/* {products.map((row)=>(
     <div className='nav1-div'><img src={row.image} />{row.name} </div> 
   ))} */}
<div className='nav-div nav1'> <HomeMaxIcon/>DEVICE
<div className='nav-dropdown'> <ul>
<li className='nav-listitem'> Orthopaedics</li>
<li className='nav-listitem'> Breathe Easy</li>
<li className='nav-listitem'> Measurements</li>
<li className='nav-listitem'> Surgical Accessories</li>
</ul></div> </div>
<div className='nav-div nav2'><MedicationIcon/>AYUSH
<div className='nav-dropdown'> <ul>
<li className='nav-listitem'> Homeopathy</li>
<li className='nav-listitem'> Ayurvedic</li>
<li className='nav-listitem'> Unani</li>
<li className='nav-listitem'>Siddha</li>
</ul></div>

</div> 
<div className='nav-div nav3'>< MedicalServicesIcon /> COVID ESSENTIAL

</div> 
<div className='nav-div nav4'> < FitnessCenterIcon/> FITNESS
<div className='nav-dropdown'> <ul>
<li className='nav-listitem'> Vitamins And Supplements</li>
<li className='nav-listitem'> Family Nutrition</li>
<li className='nav-listitem'> Health Food And Drinks</li>
<li className='nav-listitem'>Ayurvedic Supplements</li>
<li className='nav-listitem'> Sports Supplements</li>
<li className='nav-listitem'>Smoking Cessation Support</li>
<li className='nav-listitem'>Weight Management</li>
</ul></div>
</div> 
</div>
</div> 
        </div>
    )
}
