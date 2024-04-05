import React, { useState, useEffect } from 'react'
import distributediot from '../assets/portfolio/distributedIOT.png'
import ptop from '../assets/portfolio/p2p.jpg'
import pcaml from '../assets/portfolio/pca_ml.png'
// import n_portfolio from '../assets/portfolio/portfolio.jpg'
import Raw_terminal from '../assets/portfolio/terminal.png'
// import reactWeather from '../assets/portfolio/reactWeather.jpg'
    

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const portfolios = [
    {
        id:1,
        src: distributediot,
        link: 'https://github.com/shekh2000/IOT.git',
        details: (
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Collaborated in a team of three to design and develop from IoT devices onto our platform, and designing a database for sensor registration.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  A platform that will have all the necessary components required to build and run IoT-based applications.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  It will also have monitoring and fault tolerance services for deployed applications.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Instances of sensors and controllers can be configured and used as a service by the deployed application.
                </li>
              </ul>
            </div>
          )
    },
    {
        id:2,
        src: ptop,
        link: 'https://github.com/shekh2000/Peer2Peer.git',
        details: (
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  A group-based file sharing system where users can share and download files from the group they belong to.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Authentication is done for the users. Download is parallel with multiple pieces from multiple peers. SHA1 hash is used to verify that each chunk is not corrupted.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Two trackers are implemented for fault tolerence and load balancing.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Random first and Rarest piece first Piece selection algorithms are implemented for downloading from peers.
                </li>
              </ul>
            </div>
          )
    },
    {
        id:3,
        src: pcaml,
        link: 'https://github.com/shekh2000/Eigen_Faces_PCA.git',
        details: (
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Implemented a facial recognition system using Principal Component Analysis (PCA), leveraging Eigenfaces to represent and recognize distinct faces in a dataset.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Demonstrated the reconstruction of images using different numbers of principal components, showcasing the trade-off between reconstruction quality and computational efficiency and visualized the mean face (Eigenface), providing an 
                  overview of the average facial features with the dataset.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Evaluated the facial recognition module’s accuracy. Acheived an impressive accuracy rate of 97.5 percentage across a range of 50 to 360 principal components.
                </li>
              </ul>
            </div>
          )
    },
    {
        id:4,
        src: Raw_terminal,
        link: 'https://github.com/shekh2000/Terminal_File_Explorer.git',
        details: (
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  Made a File Explorer in Linux Terminal using C++. It provides Normal and Command Mode.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  In normal mode we can navigate through the directories and open files in vi.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>•</span>
                  In command mode commands such as copy, move, rename, create, delete, search and goto can be executed.
                </li>
              </ul>
            </div>
          )
    }
    // {
    //     id:6,
    //     src: reactWeather
    // }
  ];
  const handleHover = (id) => {
    setActiveProject(id);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.shadow-md')) {
        setActiveProject(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // const handleCardHover = () => {
  //   // Prevent the card from being hidden when the cursor is over it
  //   // if (activeProject !== null) {
  //   //   setActiveProject(activeProject);
  //   // }
  //   // setActiveProject(null);
  // };
  return (
    <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen bg-green-500'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='md:pb-5 pb-0'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='md:py-6 py-2'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 pb-0'>
                {
                    portfolios.map(({id,src,details,link}) =>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <div>
                              <a href={link}>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                              </a>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button
                                className='w-1/2 px-10 py-3 duration-200 hover:scale-105'
                                onMouseEnter={() => handleHover(id)}
                                // onMouseLeave={() => setActiveProject(null)}
                                >Details</button>
                            </div>
                            {activeProject === id && (
                                <div className='bg-gradient-to-b from-purple-500 to-indigo-500 text-black font-bold p-1 absolute w-80 h-100 rounded-md duration-200 hover:scale-105' onMouseEnter={() => handleHover(id)} onMouseLeave={() => setActiveProject(null)}>
                                    <div>
                                        <p>{details}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
