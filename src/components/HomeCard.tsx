
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"

export const HomeCard = () => {

  return (
    <Card className="pt-[7px] pb-10 rounded-lg bg-colorLogo h-auto grow-0 desktop:w-[23.6%] tablet:w-[48%] notebook:w-[31.6%] laptop:w-[48%] phone:w-full">
      <CardBody className="py-1 w-full overflow-hidden">
        <div className="relative h-[200px]">
    
            <Image
              alt="Card background"
              className="rounded-lg object-cover object-center w-full h-full"
              src="/images/casa.png"
              removeWrapper
            />

   

          <p className="absolute top-0 right-0 z-10 bg-black rounded-tr-lg p-1 w-[110px] text-white text-center text-sm">
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

