import { Container } from "./styles";
import { Text } from "../Text";
interface ButtonProp {
  children: String;
  onPress: () => void;
  disabled?: boolean
}
export function Button({children, onPress, disabled}:ButtonProp)
{
    return(
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>
  )

}
