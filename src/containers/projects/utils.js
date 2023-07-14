import image from '../../Assets/figma.png'
import bombay from '../../Assets/bombay.png'
import pms from '../../Assets/pms.png'
import alumni from '../../Assets/alumni.png'
import book from '../../Assets/book.png'

const data ={ 
    projects:[
    {
        name:'Alumni Portal for College',
        desc:'Alumni can connect with each other through chat feature and also provide job opportunity to college students. Created using MERN stack.',
        image:alumni,
        link:'https://github.com/yashNaiya/bry'
    },
    {
        name:'E-commerce website for restarant',
        desc:'Online order placement website for a pickup restaurant having multiple pages for user experience with admin side included. Created using MERN stack.',
        image:bombay,
        link:'https://github.com/yashNaiya/restaurant'

    },
    {
        name:'Project Management System',
        desc:'System for a small business to track the projects and work under each one. Software as a service. Created using MERN stack.',
        image:pms,
        link:'https://github.com/yashNaiya/pmsFront'
    },
    {
        name:'E-Booksell-Project',
        desc:'Online bookselling platform using integration of .Net as a backend provider and React for the user side.',
        image:book,
        link:'https://github.com/yashNaiya/E-BookSell-Project'
    },
]}

export default data