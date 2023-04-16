import { Container } from "./styles";
import { Text } from "../Text";
import { ActivityIndicator } from "react-native";
interface ButtonProp {
  children: String;
  onPress: () => void;
  disabled?: boolean,
  loading?: boolean
}
export function Button({children, onPress, disabled, loading}:ButtonProp)
{
    return(
    <Container onPress={onPress} disabled={disabled || loading}>

      {!loading && (
      <Text weight="600" color="#fff">
        {children}
      </Text>
      )}

      {loading && (
        <ActivityIndicator color={"#fff"}/>
      )}
    </Container>
  )

}
