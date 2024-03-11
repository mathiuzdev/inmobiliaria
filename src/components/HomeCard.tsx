
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const HomeCard = () => {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/'

    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/'
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/'
    }
  ];



  return (
    <Card className="pt-[7px] pb-10 rounded-lg bg-colorLogo h-auto grow-0 desktop:w-[23.6%] tablet:w-[48%] notebook:w-[31.6%] laptop:w-[48%] phone:w-full">
      <CardBody className="py-1 w-full overflow-hidden">
        <div className="flex w-full relative h-[200px]">



          <ImageGallery items={images} autoPlay={true} showBullets={false} slideDuration={1500} slideInterval={6000} renderItem={(item => <Image
            alt="Card background"
            className="object-cover object-center w-full h-full rounded-none"
            src={item.original}
            removeWrapper
          />)} additionalClass="botones h-full" showPlayButton={false} showFullscreenButton={false} showThumbnails={false} />
          <p className="absolute top-0 right-0 z-10 bg-black p-1 w-[110px] text-white text-center text-sm">
            VENTA
          </p>
        </div>


      </CardBody>
      <CardFooter>
        <p>footer</p>
      </CardFooter>
    </Card>
  )
}

