import classes from './About.module.css';
import nathanpic from './nathan.jpg';

import Badge from './ui/Badge';

const About = () => {
    return (
        <div className={classes.contactcontent}>
            <div className={classes.left}>
                <img src={nathanpic}></img>
            </div>
            <div className={classes.right}>
                <h2>About Me</h2>
                <p>I'm a junior front-end developer. I love web development because challenges my technical skills while allowing me to use my artistic abilities to create beautiful experiences.</p>
                <a href="/contact" className={classes.contact}>
                    Let's Talk. 📧
                </a>
            </div>
            <div className={classes.skills}>
                <ul>
                    <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" /></li>
                    <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" /></li>
                    <li><Badge image="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" /></li>
                    <li><Badge image="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" /></li>
                    <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" /></li>
                    <li><Badge image="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png" /></li>
                    <li><Badge image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" /></li>
                    <li><Badge image="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png" /></li>
                    <li><Badge image="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" /></li>
                    <li><Badge image="https://ivazz.com/wp-content/uploads/2021/05/jquery-1.png" /></li>
                    <li><Badge image="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" /></li>
                    <li><Badge image="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_251be2af3ae607c45c14e816eaa1cf41/postgresql.png" /></li>
                    <li><Badge image="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png" /></li>
                    <li><Badge image="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" /></li>
                    <li><Badge image="https://rapidapi.com/wp-content/uploads/2021/07/Brand-blue-horizontal.svg" /></li>
                    <li><Badge image="https://mms.businesswire.com/media/20210623005228/en/887051/23/vercel-logotype-dark.jpg" /></li>

                </ul>
            </div>
        </div>
    );
};

export default About;