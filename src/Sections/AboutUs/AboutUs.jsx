import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='text-center d-flex align-items-center justify-content-center'>
            <div className='about-us'>
            <h1 className='about-us-title'>With 10+ years of experience <br /> we are constantly improving Businesses.</h1>
            <p className='about-us-description'>At Talentship Global Advisory Forum, we believe in harnessing unique talents and untapped potential for the greater good. Our non-profit startup is dedicated to empowering individuals, organizations, and communities through expert advisory services and collaboration. Join us in envisioning a future where everyone thrives.</p>
            <div className='row mt-5'>
                <div className='mt-5 col col-12 col-sm-6 col-lg-3'>
                    <h1 className='about-section-number'>89%</h1>
                    <hr />
                    <h5 className='text-start'>Enhanced Strategic Planning</h5>
                </div>
                <div className='mt-5 col col-12 col-sm-6 col-lg-3'>
                    <h1 className='about-section-number'>25+</h1>
                    <hr />
                    <h5 className='text-start'>Business with million revenue</h5>
                </div>
                <div className='mt-5 col col-12 col-sm-6 col-lg-3'>
                    <h1 className='about-section-number'>99%</h1>
                    <hr />
                    <h5 className='text-start'>Happy Customers</h5>
                </div>
                <div className='mt-5 col col-12 col-sm-6 col-lg-3'>
                    <h1 className='about-section-number'>55+</h1>
                    <hr />
                    <h5 className='text-start'>Company Connections.</h5>
                </div>

            </div>
            </div>
        </div>
    );
};

export default AboutUs;