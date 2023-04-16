import { FlatList, Touchable, TouchableOpacity } from "react-native";
import { CartItem } from "../../Types/CartItem";
import { Product } from "../../Types/Product";
import { Actions, Item, ProductContainer, Image, QuantityContainer,ProductDetails, Summary, TotalContainer } from "./styles";
import { Text } from "../Text"
import { formatCurrency } from "../../Utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { useState } from "react";

interface CartProps{
  cartItems: CartItem[]
  onAdd: (product: Product) => void
  onDecrement: (product: Product) => void,
  onConfirmOrder: () => void
}


export function Cart({cartItems,onAdd, onDecrement, onConfirmOrder}:CartProps ) {
  const total = cartItems.reduce((acc, cartItem) => {return acc + cartItem.quantity * cartItem.product.price}, 0)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function handleConfirmOrder (){

    setIsModalVisible(true)
  }

  function handleOk(){
    onConfirmOrder()
    setIsModalVisible(false)
  }


  return (
    <>
    <OrderConfirmedModal visible={isModalVisible} onOk={handleOk} />
        {cartItems.length > 0 && (
          <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20, maxHeight: 150}}
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
                  <TouchableOpacity style={{marginRight: 24 }} onPress={()=>onAdd(cartItem.product)}>
                    <PlusCircle></PlusCircle>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>onDecrement(cartItem.product)}>
                    <MinusCircle></MinusCircle>
                  </TouchableOpacity>
                </Actions>
            </Item>
          )}

          />
        )}

          <Summary>
            <TotalContainer>
              {cartItems.length > 0 ? (
              <>
                <Text color="#666">
                  Total:
                </Text>
                <Text size={20} weight="600">
                  {formatCurrency(total)}
                </Text>
              </>
              ) : (
                <Text size={16} color="#666">
                  Seu carrinho está vazio
                </Text>
              )
              }
            </TotalContainer>
              <Button
                onPress={handleConfirmOrder}
                disabled={cartItems.length === 0}
                loading={isLoading}
              >
                Confirmar Pedido
              </Button>
          </Summary>
          </>
    );
}
