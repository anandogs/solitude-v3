import { FunctionComponent } from 'react'

// Define your component props
type CardProps = {
  cardDict: {fields: {title:String}};

}

// Add props
const Card: FunctionComponent<CardProps> = ({ cardDict}) => {
return (
  <div>
    {cardDict.fields.title}
  </div>
)
}

export default Card