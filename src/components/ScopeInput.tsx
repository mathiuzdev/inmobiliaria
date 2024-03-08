import {Input} from "@nextui-org/react";
import { useMemo } from "react";

interface Element {
    element?: React.ReactElement
}

export const ScopeInput = ({ element }: Element) => {
    const startContent = useMemo(() => element, [element]);
    return (
        <div className="flex space-x-3 pt-4 mb-4">
            <Input
                type="number"
                
                placeholder="Desde"
                labelPlacement="outside"
                startContent={startContent}
            />
            <Input
                type="number"
                placeholder="Hasta"
                
                labelPlacement="outside"
                startContent={
                    startContent
                }
            />
        </div>
    )
}
