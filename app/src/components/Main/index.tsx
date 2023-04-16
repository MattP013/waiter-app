import { useState } from "react"
import { products as mockProducts } from "../../mocks/products"
import { Button } from "../Button"
import { Cart } from "../Cart"
import { Categories } from "../Categories"
import { Header } from "../Header"
import { Menu } from "../Menu"
import { ProductModal } from "../ProductModal"
import { TableModal } from "../TableModal"
import { Text } from "../Text"
import { CategoriesContainer, CenteredContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles"
import { Product } from "../../Types/Product"
import { CartItem } from "../../Types/CartItem"
import { ActivityIndicator } from "react-native"
import { Empty } from "../Icons/Empty"


export function Main(){

 const [isTableModalVisible, setIsTableModalVisible] = useState(false);
 const [selectedTable, setSelectedTable] = useState('');
 const [cartItems, setCartItems] = useState<CartItem[]>([]);
 const [isLoading] = useState(false);
 const [products] = useState<Product[]>(mockProducts)
  function handleSaveTable(table:string){
    setSelectedTable(table);
  }

  function handleResetOrder(){
    setSelectedTable('');
    setCartItems([]);
  }


  function handleAddToCart(product: Product)
  {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0){
        return prevState.concat({quantity: 1, product})
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex]
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      }

      return newCartItems;
    })
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex]
      const newCartItems = [...prevState];

       if (item.quantity === 1) {
          newCartItems.splice(itemIndex, 1);

          return newCartItems
       }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      };

      return newCartItems;

    })
  }

  return (
    <>

      <Container>
        <Header
          selectedTable={selectedTable}
          onCencelOrder={handleResetOrder}
        />
        {!isLoading && (
          <>
            <CategoriesContainer>
            <Categories></Categories>
            </CategoriesContainer>

           {products.length > 0 ?
              <MenuContainer>
                <Menu products={products} onAddToCart={handleAddToCart} />
              </MenuContainer>
              :
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{marginTop: 24}}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>}
          </>
        )}


        {
          isLoading && (
            <CenteredContainer>
              <ActivityIndicator color={"#D73835"} size={"large"}></ActivityIndicator>
            </CenteredContainer>
          )
        }
      </Container>
      <Footer>
        <FooterContainer>
          {
            !selectedTable && (
              <Button

              onPress={()=>setIsTableModalVisible(true)}
              disabled={isLoading}
              >
              Novo Pedido
              </Button>
            )
          }

          {
            selectedTable &&(
              <Cart cartItems={cartItems} onAdd={handleAddToCart} onDecrement={handleDecrementCartItem} onConfirmOrder={handleResetOrder}/>
            )
          }

        </FooterContainer>
      </Footer>

      <TableModal onSave={handleSaveTable} onClose={() => setIsTableModalVisible(false)} visible={isTableModalVisible}></TableModal>
    </>
  )
}
