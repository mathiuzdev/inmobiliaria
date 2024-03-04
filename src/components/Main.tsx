import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { ReactNode } from "react"

interface MainProps {
    children: ReactNode,
    children2?: ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <main className="flex bg-gray-800 h-full">
            {children}
            <div className="w-3/4 bg-white rounded-2xl  m-2 px-4 py-4 h-auto text-xl">
                <div className="w-full py-4">
                    <h1 className="py-3 font-bold">Variable de propiedades</h1>
                </div>
                <div className="w-full flex h-72">
                    <Card className="py-4 bg-green-600" fullWidth={false}>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Daily Mix</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="/images/img009.jpg"
                                width={270}
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </main>
    )
}
