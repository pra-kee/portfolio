import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am Prakash , I am Coming From Perungudi . I recently graduated with a  Bachelors degree in Computer Science. During my studies, I developed a strong foundation in programming languages like HTML , CSS , Javascript , React js and Database using MySQL and programming in Python.',
        line2: 'Coming to my project, One of my key projects was a Restaurant website like food ordering . The  main home pages are Home , about , menu , orders and type of foods available in a menu and login and payment sections also added in this website . This project is responsive and user-friendly using react js .',
        line3: 'Another one project was Em ployee Management System . This project is a software application designed to manage employees information developed  using python for frontend and MYSQL for backend database . this project was add new employee details , update employee informations , delete records and display all records',
        line4: 'I also gained practical experience through internships, where I worked on python fullstack development and python projects and collaborated with team to build responsive and user-friendly applications.',


    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'> 
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
            </div>
        </div>
    </section>
}