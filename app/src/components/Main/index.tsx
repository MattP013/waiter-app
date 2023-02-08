import { useState } from "react"
import { products } from "../../mocks/products"
import { CartItem } from "../../Types/CartItem"
import { Button } from "../Button"
import { Cart } from "../Cart"
import { Categories } from "../Categories"
import { Header } from "../Header"
import { Menu } from "../Menu"
import { ProductModal } from "../ProductModal"
import { TableModal } from "../TableModal"
import { Text } from "../Text"
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles"
export function Main(){

 const [isTableModalVisible, setIsTableModalVisible] = useState(false);
 const [selectedTable, setSelectedTable] = useState('');
 const [cartItems, setCartItems] = useState<CartItem[]>([
  {
    quantity: 1,
    product: products[0]
  },
  {
    quantity: 3,
    product: products[1]
  },
 ]);

  function handleSaveTable(table:string){
    setSelectedTable(table);
  }

  function handleCancelOrder(){
    setSelectedTable('');
  }
  return (
    <>

      <Container>
        <Header
          selectedTable={selectedTable}
          onCencelOrder={handleCancelOrder}
        />
        <CategoriesContainer>
          <Categories></Categories>
        </CategoriesContainer>
        <MenuContainer></MenuContainer>
      </Container>
      <Menu />
      <Footer>
        <FooterContainer>
          {
            !selectedTable && (
              <Button onPress={()=>setIsTableModalVisible(true)}>
              Novo Pedido
              </Button>
            )
          }

          {
            selectedTable &&(
              <Cart cartItems={cartItems}/>
            )
          }

        </FooterContainer>
      </Footer>

      <TableModal onSave={handleSaveTable} onClose={() => setIsTableModalVisible(false)} visible={isTableModalVisible}></TableModal>
    </>
  )
}
