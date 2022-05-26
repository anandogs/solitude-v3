import type { NextPage } from 'next'
import { createClient } from 'contentful'
import { GetStaticProps  } from 'next'
import { InferGetStaticPropsType } from 'next'
import { Key } from 'react'
import CardImageText from '../components/CardImageText'


export const getStaticProps: GetStaticProps = async () => {

  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE!,
    accessToken: process.env.CONTENTFUL_KEY!,
  })



  const res = await client.getEntries({ content_type: 'card'})
  const cards = res.items

  return {
    props: {
      cards,
    }
  }

  }

  // 24-05-2022:2 infer get static props
const Home: NextPage = ( { cards } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
<div className='grid grid-cols-12 gap-desktop m-desktop justify-items-center '>
  {cards.map((card: { 
    sys: {id: Key}
    fields: { title: String; body: String; cardImage: { fields: { description: String; file: { url: String } } } } }) => 
    
      <div className='col-span-6'>
      <CardImageText key={card.sys.id} cardDict={card} />
      </div>
      
    )}
</div>
  )
}

export default Home
