import InfoCard from '../components/InfoCard.js'
import BigHeader from '../components/BigHeader.js'

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
      linkName: 'See all my skills'
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
      linkName: 'See my top projects'
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
      linkName: 'See all the cute dog pictures'
    }
  ]
  return (
    <>
      <BigHeader />
      { data.map((item) => {
         return <InfoCard { ...item } />
      })}
    </>
  )
}

export default About