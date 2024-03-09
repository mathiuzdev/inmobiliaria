
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
export const HomeCard = () => {

  return (
    <Card className="pt-[7px] pb-10 rounded-lg bg-green-600 h-fit grow-0 desktop:w-[23.6%] tablet:w-[48%] notebook:w-[31.6%] laptop:w-[48%] phone:w-full" fullWidth={false}>
      <CardBody className="overflow-visible py-1 w-full ">
        <div>
          <Image
            alt="Card background"
            className="object-cover rounded-lg"
            src="/images/img009.jpg"
          />
        </div>
      </CardBody>
      <CardFooter>
        <p>footer</p>
      </CardFooter>
    </Card>
  )
}
