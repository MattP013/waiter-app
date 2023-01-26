import { FlatList, TouchableOpacity } from "react-native"
import { products } from '../../mocks/products';
import { AddToCartButton, ProductContainer, ProductDetails, ProductImage, Separator } from "./styles";
import {Text} from '../Text';
import { formatCurrency } from "../../Utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../Types/Product";
export function Menu()
{

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);
  function handleOpenModel(product : Product){
    setIsModalVisible(true)
    setSelectedProduct(product)
  }
  return (
    <>
    <ProductModal
      visible={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      product={selectedProduct }
    />

    <FlatList
      data={products}
      keyExtractor={products=>products._id}
      style={{marginTop: 34}}
      contentContainerStyle={{paddingHorizontal: 24}}
      ItemSeparatorComponent={Separator}
      renderItem={({item: product}) => (
        <ProductContainer onPress={()=> handleOpenModel(product)}>
          <ProductImage
            source={{uri:`http://192.168.1.007:3001/uploads/${product.imagePath}`}}
          />
          <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text style={{paddingVertical: 8}} color="#666" size={14}>{product.description}</Text>
              <Text weight="600" color="#666" size={14}>{formatCurrency(product.price)}</Text>
          </ProductDetails>
          <AddToCartButton>
            <PlusCircle></PlusCircle>
          </AddToCartButton>
        </ProductContainer>

      )}
    >

  </FlatList>
  </>
  )

}
