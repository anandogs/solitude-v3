import type { NextPage } from 'next'
import { createClient } from 'contentful'
import { GetStaticProps  } from 'next'
import { InferGetStaticPropsType } from 'next'


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

  // 24----05--202
const Home: NextPage = ( { cards } : InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(cards)
  return (
<div>
  Hello World
</div>
  )
}

export default Home
