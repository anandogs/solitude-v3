import type { NextPage } from 'next'
import { createClient } from 'contentful'
import { GetStaticProps  } from 'next'
import { InferGetStaticPropsType } from 'next'
import { Key } from 'react'
import CardImageText from '../components/Cards/CardImageText'
import CardImageTextButton from '../components/Cards/CardImageTextButton'


export const getStaticProps: GetStaticProps = async () => {

  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE!,
    accessToken: process.env.CONTENTFUL_KEY!,
  })



  const cardImageTextResponse = await client.getEntries({ content_type: 'card', order: 'fields.order',})
  const cardImageTextButtonResponse = await client.getEntries({ content_type: 'cardImageTextButton', order:'fields.order'})
  
  const cardsImageText = cardImageTextResponse.items
  const cardsImageTextButton = cardImageTextButtonResponse.items

  console.log(cardsImageTextButton)

  return {
    props: {
      cardsImageText,
      cardsImageTextButton
    }
  }

  }

  // 24-05-2022:2 infer get static props
const Home: NextPage = ( { cardsImageText, cardsImageTextButton } : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
<div className='grid grid-cols-12 gap-x-desktop m-desktop justify-items-center '>
  {cardsImageText.map((card: { 
    sys: {id: Key}
    fields: { title: string; body: string; cardImage: { fields: { description: string; file: { url: string } } } } }) => 
    
      <div className='col-span-6' key={card.sys.id} >
      <CardImageText cardDict={card} />
      </div>
      
    )}
</div>
<div className='grid justify-items-center'>
  {cardsImageTextButton.map((card: { 
    sys: {id: Key}
    fields: { title: string; body: string; subheading: string; button: string; image: { fields: { description: string; file: { url: string } } } } },  index:number) => 
    
      <div key={card.sys.id} >
      <CardImageTextButton cardDict={card} cardNumber={index} />
      </div>
      
    )}
</div>

</div>

  )
}

export default Home
