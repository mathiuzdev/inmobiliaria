import { ScrollShadow, CheckboxGroup,Checkbox} from "@nextui-org/react"
interface Names {
    names: string[]
}

export const CheckBoxGroup = ({names}: Names) => {
    return (
        <ScrollShadow  className="w-auto h-[150px] mb-4">
            <CheckboxGroup>
                {names.map(name => <Checkbox  key={name} value={name}>{name}</Checkbox>)}
            </CheckboxGroup>
        </ScrollShadow>
    )
}
