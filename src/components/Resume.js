import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: 'http://localhost:3000/files/Prakash_Resume.pdf'
    }
    const forceDownload = () =>{
        const link = document.createElement("a");
        link.href = "http://localhost:3000/files/Prakash_Resume.pdf";
        link.setAttribute("download","Prakash_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' onClick={forceDownload} /* target='_blank' href={config.link} download="Prakash_Resume.pdf" rel='noopener noreferrer' */>  Download 📄</a></p>
            </div>
        </div>
    </section>
}