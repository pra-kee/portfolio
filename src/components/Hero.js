import HeroImg from '../assets/hero.png';
import {  AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram ,AiOutlineGithub, AiOutlineFileGif, AiOutlineFile, AiOutlineFileJpg, AiOutlineDownload} from "react-icons/ai";
import Typerwriter from "typewriter-effect";

export default function Hero() {
    const config  = {
        subtitle: 'Im a ',
        social: {
            instagram: 'https://www.instagram.com/itz._me._prakee',
            facebook: 'https://facebook.com/profile.php?id=100013704945753&mibextid=ZbWKwL',
            linkedin: 'https://in.linkedin.com/in/prakee13',
            github:'https://github.com/pra-kee'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'><span className='text-red-300'>H</span><span className='text-gray-950'>i</span>, <br/> <span className='text-yellow-300'>I</span>'<span>m</span> <span className='text-black'>R </span> <span className='text-green-400'>Prakash</span>
                <div className='flex'>
                <span className='text-3xl pr-3'> I'<span className='text-yellow-300'>m</span>
                </span>
                <p className='text-4xl text-pink-500' >
                <Typerwriter options={{
                        strings:["FullStack Developer","FrontEnd Developer","BackEnd Developer",'Web Developer' , "Python Developer"],
                        autoStart:true,
                        loop:true,
                        delay:50,
                        deleteSpeed:30,
                    }}/>
                </p>
                </div>
            </h1>

                <div className='flex flex-col justify-center text-black'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'></h1>
                    <p className='pb-5'><a className='bg-neutral-400 hover:bg-neutral-500 px-5 py-2 font-bold border-2 border-white rounded' href="/Prakash_B.SC.CS_2024_CGPA-6.7.pdf" download="Prakash_Resume.pdf"> Download CV  📄</a> 
                    </p>
            </div>

            <div className='flex py-2'>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='pr-5 *:hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
