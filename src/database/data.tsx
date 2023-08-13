import { PostType } from '../components/Post'

export const posts: PostType[] = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://github.com/matheus1714.png',
        name:'Matheus Mota',
        role: 'Web Developer'
      },
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉jane.design/doctorcare'
        },
      ],
      publishedAt: new Date('2023-08-12 17:00:00')
    },
    {
      id: 2,
      author:{
        avatarUrl: 'https://github.com/dfidalg0.png',
        name:'Diego Fidalgo',
        role: 'Web Developer'
      },
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉jane.design/doctorcare'
        },
      ],
      publishedAt: new Date('2023-08-07 20:00:00')
    }
]