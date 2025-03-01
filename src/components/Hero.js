import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin,AiOutlineInstagram } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-Stack Developer',
        social: {
            instagram: 'https://www.instagram.com/itz._me._prakee',
            facebook: 'https://www.facebook.com/profile.php?id=100013704945753&mibextid=ZbWKwL',
            linkedin: 'https://www.linkedin.com/in/prakee13',
            github:'https://github.com/pra_kee'

        }
    }

    
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>R</span> Prakash
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className=' pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
