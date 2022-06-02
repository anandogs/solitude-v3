import type { NextPage } from "next";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { Key } from "react";
import CardImageText from "../components/Cards/CardImageText";
import CardImageTextButton from "../components/Cards/CardImageTextButton";
import HeroImageText from "../components/Cards/HeroImageText";
import TextField from "../components/Cards/TextField";
import Header from "../components/Common/Header";

export const getStaticProps: GetStaticProps = async () => {
  interface homePage {
    title: string;
    textImageCards: [];
    textImageButtonCards: [];
    youtubeHeroVideo: {};
    heroImage: {};
    textField: {};	
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE!,
    accessToken: process.env.CONTENTFUL_KEY!,
  });

  const homePageRes = await client.getEntry<homePage>("3ZijWO9ECH1F3T6GLU8LbI");

  const cardsImageText = homePageRes.fields.textImageCards;
  const cardsImageTextButton = homePageRes.fields.textImageButtonCards;
  const youtubeHeroVideo = homePageRes.fields.youtubeHeroVideo;
  const heroImage = homePageRes.fields.heroImage;
  const textField = homePageRes.fields.textField;


  return {
    props: {
      cardsImageText,
      cardsImageTextButton,
      youtubeHeroVideo,
      heroImage,
      textField, 
    },
  };
};


// 24-05-2022:2 infer get static props
const Home: NextPage = ({
  cardsImageText,
  cardsImageTextButton,
  youtubeHeroVideo,
  heroImage,
  textField,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  

  return (
    <div>
      <Header/>
      <iframe className="w-screen" height="720" src={youtubeHeroVideo.fields.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <HeroImageText heroDict={heroImage}/>
      <TextField textFieldDict={textField}/>
      <div className="grid grid-cols-12 gap-x-desktop m-desktop justify-items-center">
        {cardsImageText.map(
          (card: {
            sys: { id: Key };
            fields: {
              title: string;
              body: string;
              cardImage: {
                fields: { description: string; file: { url: string } };
              };
            };
          }) => (
            <div className="col-span-6" key={card.sys.id}>
              <CardImageText cardDict={card} />
            </div>
          )
        )}
      </div>
      <div className="grid justify-items-center">
        {cardsImageTextButton.map(
          (
            card: {
              sys: { id: Key };
              fields: {
                title: string;
                body: string;
                subheading: string;
                button: string;
                image: {
                  fields: { description: string; file: { url: string } };
                };
              };
            },
            index: number
          ) => (
            <div key={card.sys.id}>
              <CardImageTextButton cardDict={card} cardNumber={index} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
