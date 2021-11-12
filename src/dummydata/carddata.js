import shanchiImg from '../images/shangchi.jpg';
import freeguyImg from '../images/freeguy.jfif';
import duneImg from '../images/dune.jpg';
import jawsImg from '../images/jaws.jpg';
import interstellarImg from '../images/interstellar.jpg';

const cardDataItems = [
        {
            title: 'Shang-Chi',
            image: shanchiImg,
            url: '#/movie',
            playtimes: [
                { 
                    time: '18:00' 
                },
                { 
                    time: '21:00' 
                },
                { 
                    time: '22:30' 
                }
            ]
        },    
        {
            title: 'Free Guy',
            image: freeguyImg,
            url: '#/movie',
            playtimes: [
                { 
                    time: '18:00' 
                },
                { 
                    time: '21:00' 
                }
            ]
        },    
        {
            title: 'Jaws',
            image: jawsImg,
            url: '#/movie',
            playtimes: [
                { 
                    time: '18:00' 
                },
                { 
                    time: '22:00' 
                }
            ]
        },    
        {
            title: 'Interstellar',
            image: interstellarImg,
            url: '#/movie',
            playtimes: [
                { 
                    time: '19:30' 
                },
                { 
                    time: '21:30' 
                }
            ]
        },    
        {
            title: 'Dune',
            image: duneImg,
            url: '#/movie',
            playtimes: [
                { 
                    time: '16:00' 
                },
                { 
                    time: '18:00' 
                },
                { 
                    time: '22:00' 
                }
            ]
        }
    ]

export default cardDataItems;