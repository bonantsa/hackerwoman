import InfoCard from '../components/InfoCard.js'
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
      linkName: 'See'
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
      linkName: 'See'
    },
    {
      info: [
        {
          name: 'Here`s a picture of',
          title: 'My dog'
        },
        {
          name: 'he is',
          title: 'a good boy'
        }
      ],
      linkPath: '/doge',
      linkName: 'See'
    }
  ]
  return (
    <>
      <div>Hi there,</div>
      <div>My name is</div>
      <h1>Anniina</h1>
      { data.map((item) => {
         return <InfoCard { ...item } />
      })}
    </>
  )
}

export default About