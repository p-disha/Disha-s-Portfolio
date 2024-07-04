import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Experienced backend developer with 5+ years in AWS, Python, Nodejs and TypeScript, skilled in designing and leading large-scale, multi-tiered, distributed software applications. Expertise extending to object-oriented and distributed programming, impacting over 100k accounts globally in over 20+ regions. Proficient in delivering robust security features and driving significant cost savings through architectural design and data-driven process optimization.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;