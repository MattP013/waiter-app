import { CloseButton, Image, Header, ModalBody, IngredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from "./styles";
import { Text } from "../Text";
import { FlatList, Modal } from "react-native";
import { Product } from "../../Types/Product";
import { Close } from "../Icons/Close";
import { formatCurrency } from "../../Utils/formatCurrency";
import { Button } from "../Button";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void

}
export function ProductModal({visible, onClose, product, onAddToCart} : ProductModalProps) {

  function handleOnAddToCart()
  {
    onAddToCart(product!)
    onClose()
  }

  if (!product) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri:`http://192.168.1.007:3001/uploads/${product?.imagePath}`
        }}
      >
      <CloseButton  onPress={onClose}>
        <Close></Close>
      </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text style={{marginTop: 8}} color="#666">
            {product.description}
          </Text>
        </Header>
        {product.ingredients.length > 0 && ( <IngredientsContainer>
          <Text color="#666" weight="600">
            Ingredientes
          </Text>

        <FlatList
          data={product.ingredients}
          keyExtractor={ingredient => ingredient._id }
          showsVerticalScrollIndicator={false}
          style={{marginTop: 16}}
          renderItem={({item: ingredient})=>(
            <Ingredient>
                <Text>
                  {ingredient.icon}
                </Text>
                <Text size={14} color="#666" style={{marginLeft: 20}}>
                  {ingredient.name}
                </Text>
            </Ingredient>
          )}
        />
        </IngredientsContainer>)}

      </ModalBody>
        <Footer>
          <FooterContainer>
            <PriceContainer>
              <Text color="#666">
                Preço
              </Text>
              <Text size={20} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ PriceContainer>
            <Button onPress={handleOnAddToCart}>
                Adicionar ao pedido
            </Button>
          </FooterContainer>
        </Footer>
    </Modal>
  )
}
