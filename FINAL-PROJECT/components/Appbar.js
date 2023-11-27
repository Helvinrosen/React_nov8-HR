import {Link} from 'react-router-dom';


import './home.css';
export default function Appbar()
{
    return(
        <div>
            <div >
                <div className='homeapp'>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{display:'flex',justifyContent:'space-around' ,alignItems:'center',height:'10vh',backgroundColor:'black',}}>
                   <div className='htext'> <p>VEHICLE SERVICE BOOKING</p></div>
                   
                            <ul className='navbar nav' style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0,padding:'1rem',gap:'1rem',marginRight:50}}>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/' className='nav-link' style={{color:'white'}}>HOME</Link>
                                </li>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/blog' className='nav-link' style={{color:'white'}}>BLOG</Link>
                                </li>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/login' className='nav-link' style={{color:'white'}}>LOGIN</Link>
                                </li>
                                {/* <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/register' className='nav-link'>Register</Link>
                                </li> */}
                            </ul>
                            
                        </nav>
                </div>
                
            </div>
        </div>
    );
}