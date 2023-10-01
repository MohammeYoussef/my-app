import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Body() {

    const ScrollToTop = () => {
        const [showButton, setShowButton] = React.useState(false);

        React.useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    setShowButton(true);
                } else {
                    setShowButton(false);
                }
            });
        }, []);

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }


    return (


        <div className='body_in_footer'>
            <div className='container'>
                <div className="top_in_footer">

                    <div className='office'>
                        <h3 className='header_in_top'>Office</h3>
                        Germany —
                        329 Queensberry Street,
                        North Melbourne VIC 3051</div>
                    <div className='need_help'>
                        <h3 className='header_in_top'>Need help</h3>
                        +1 670 936 46 70
                        hello@voiture.com
                    </div>
                    <div className='opening_hours'>
                        <h3 className='header_in_top'>OPENING HOURS</h3>
                        Monday – Friday: 09:00AM – 09:00PM
                        Saturday: 09:00AM – 07:00PM
                        Sunday: Closed
                    </div>
                    <div className='keep_in_touch'>
                        <h3 className='header_in_top'>KEEP IN TOUCH</h3>
                        <div className='col-auto_in_touch'>
                            <input className='form-control_in_touch' placeholder='enter your Email' type="email" />
                            <button type='submit'>GO</button>
                        </div>

                        Get latest updates and offers.
                    </div>
                </div>
                <div className="bottom_in_footer">

                    <h4>ib-themes © 2023. All Rights Reserved</h4>
                    <div className='icon_in_footer'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-solid fa-x" />
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </div>




                </div>
            </div>
        </div>
    )
}
