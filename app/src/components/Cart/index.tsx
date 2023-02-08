import { FlatList, Touchable, TouchableOpacity } from "react-native";
import { CartItem } from "../../Types/CartItem";
import { Product } from "../../Types/Product";
import { Actions, Item, ProductContainer, Image, QuantityContainer,ProductDetails, Summary, TotalContainer } from "./styles";
import { Text } from "../Text"
import { formatCurrency } from "../../Utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";

interface CartProps{
  cartItems: CartItem[]
}


export function Cart({cartItems}:CartProps ) {

  return (
    <>
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}
          renderItem={({item: cartItem}) =>(
            <Item>
              <ProductContainer>
                <Image source={{uri:`http://192.168.1.007:3001/uploads/${cartItem.product.imagePath}`}}></Image>
                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight="600" >
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color="#666" style={{marginTop:4}}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>
                <Actions>
                  <TouchableOpacity style={{marginRight: 24 }}>
                    <PlusCircle></PlusCircle>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <MinusCircle></MinusCircle>
                  </TouchableOpacity>
                </Actions>
            </Item>
          )}

          />

          <Summary>
            <TotalContainer>
              <Text color="#666">
                Total:
              </Text>
              <Text size={20} weight="600">
                {formatCurrency(120)}
              </Text>
            </TotalContainer>
              <Button onPress={()=>alert("A")}>Confirmar Pedido</Button>
          </Summary>
          </>
    );
}
