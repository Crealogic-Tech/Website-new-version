import React from 'react'
import HadingTitle from '../Components/HadingTitle'
import ProtfolioList from '../Components/ProtfolioList'
import App1 from '../assets/images/Protfolio/a1.png'
import App2 from '../assets/images/Protfolio/a2.png'
// import App3 from '../assets/images/Protfolio/a3.png'
// import App4 from '../assets/images/Protfolio/a4.png'
import App5 from '../assets/images/Protfolio/a5.png'
import web1 from '../assets/images/Protfolio/web1.png'
// import web2 from '../assets/images/Protfolio/web4.png'
import web3 from '../assets/images/Protfolio/web3.png'
import web8 from '../assets/images/Protfolio/web8.png'
import web5 from '../assets/images/Protfolio/web5.png'
import web9 from '../assets/images/Protfolio/web9.png'

function Projects() {
const ProtfoliosData = [
  {
    src: App1,
    alt:"Protfolio",
  },
  {
    src: App2,
    alt:"Protfolio",
  },
  // {
  //   src: App3,
  //   alt:"Protfolio",
  // },
  // {
  //   src: App4,
  //   alt:"Protfolio",
  // },
  {
    src: App5,
    alt:"Protfolio",
  },
  {
    src: web1,
    alt:"Protfolio",
  },
  {
    src: web5,
    alt:"Protfolio",
  },
  {
    src: web3,
    alt:"Protfolio",
  },
  {
    src: web8,
    alt:"Protfolio",
  },
  {
    src: web9,
    alt:"Protfolio",
  },
]

  return (
    <section id='project' className="py-[90px] lg:pb-16 lg:pt-32 relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HadingTitle
              className="flex text-[24px] mb-5 justify-center items-center"
              text="Protfolio"
            />
          </div>
          <div className='flex'>
            <ProtfolioList  data={ProtfoliosData} className=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects