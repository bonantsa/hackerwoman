import InfoCard from '../components/InfoCard.js'
import BigHeader from '../components/BigHeader.js'

import Photo1 from '../content/woman2.jpg'
import Photo2 from '../content/woman3.jpg'
import Photo3 from '../content/lion.jpg'

function About() {
  const data = [
    {
      info: [
        {
          name: 'I am a',
          title: 'Frontend developer'
        },
        {
          name: 'and an',
          title: 'UX designer'
        }
      ],
      linkPath: '/skills',
      linkName: 'See all my skills',
      img: {
        alt: 'Picture of a woman',
        src: Photo1
      }
    },
    {
      info: [
        {
          name: 'I have worked in',
          title: 'many projects'
        },
        {
          name: 'oh',
          title: 'so many'
        }
      ],
      linkPath: '/projects',
      linkName: 'See my top projects',
      img: {
        alt: 'Picture of a woman',
        src: Photo2
      }
    },
    {
      info: [
        {
          name: `Here's a picture of`,
          title: 'My dog'
        },
        {
          name: 'he is',
          title: 'a good boy'
        }
      ],
      linkPath: '/doge',
      linkName: 'See all the cute dog pictures',
      img: {
        alt: 'Picture of a woman',
        src: Photo3
      }
    }
  ]
  return (
    <>
      <div className='m-bottom--2xl'>
        <BigHeader />
      </div>
      { data.map((item) => {
        return <div className='card m-bottom--3xl'>
            <InfoCard { ...item } />
          </div>
      })}
    </>
  )
}

export default About