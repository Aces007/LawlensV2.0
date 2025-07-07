import NavigationHeader from '../reusables/NavigationHeader';
import heroImg from '../assets/heroImg.png';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className='home_cont flex flex-col justify-between min-h-screen py-10'>
            <div className="home_content flex flex-col items-center justify-center">
                <h1 className="hero_heading">LAWLENS</h1>
                <img src={heroImg} alt="heroImg" className="img_hero"/>
                <h2 className='hero_subHead'>CHALLENGING PLATEAUS</h2>
            </div>

            <div className="hero_foot flex flex-row justify-between items-center">
                <div className="hero_foot_btns">
                    <Link to={""} className="hero_nav">LINKEDIN</Link>
                    <Link to={""} className="hero_nav">GITHUB</Link>
                </div>
                <div className="hero_foot_btns">
                    <Link to={""} className="hero_nav">YOUTUBE</Link>
                    <Link to={""} className="hero_nav">INSTAGRAM</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;