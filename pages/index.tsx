import type { NextPage } from 'next'
import { createClient } from 'contentful'
import { GetStaticProps  } from 'next'
import { InferGetStaticPropsType } from 'next'
import { Key } from 'react'
import Card from '../components/Card'


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
<div>
  {cards.map((card: { sys: { id: Key }, fields:{title:String} }) => 
    
      
      <Card key={card.sys.id} cardDict={card} />
        
      
    )}
</div>
  )
}

export default Home
