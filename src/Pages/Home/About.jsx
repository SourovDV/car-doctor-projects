import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="  bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='lg-w-1/2 relative'>
                    <img className='w-3/4' src={person} alt="" />
                    <img src={parts} className="max-w-sm top-1/2 w-1/2 absolute a rounded-lg right-5 shadow-2xl" />
                </div>
                <div className='mt-14 '>
                    <p className='text-orange-500'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br />& of experienc e <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn mt-3 btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;