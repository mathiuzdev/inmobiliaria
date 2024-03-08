import {Button, ButtonGroup} from "@nextui-org/react";

interface Numbers {
    names: string[]
}

export const ButtonGroupInput = ({names}: Numbers) => {
  return (
    <ButtonGroup className="flex py-2 my-3 space-x-2">
        {names.map(name => <Button className="py-5" size="sm" key={name}>{name}</Button>)}
    </ButtonGroup>
  )
}
