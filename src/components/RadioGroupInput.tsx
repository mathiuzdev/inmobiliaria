import {RadioGroup, Radio} from "@nextui-org/react";

interface Names{
    names: string[]
}

export const RadioGroupInput = ({names}: Names) => {
  return (
    <RadioGroup className="mt-4" orientation="horizontal">
        {names.map(name => <Radio value={name} key={name}>{name}</Radio>)}
    </RadioGroup>
  )
}
