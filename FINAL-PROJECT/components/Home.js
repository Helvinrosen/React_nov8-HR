
import './home.css';
import Appbar from './Appbar';
import Footer from './Footer';

import ActionAreaCard1 from './Navbar';
import ActionAreaCard2 from './Navbar2';
import ActionAreaCard3 from './Navbar3';
export default function Homeproj()
{
    return(
        

        <div className="homebody">
            <Appbar/>
            

            <div className='hbox1'>
               <ActionAreaCard1/>
               <ActionAreaCard2/>
               <ActionAreaCard3/>
               
            </div>
            
            <div>
        <Footer/>
            </div>
        </div>
        
    );
}