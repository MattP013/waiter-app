import { FlatList } from "react-native";
import { CartItem } from "../../Types/CartItem";
import { Product } from "../../Types/Product";

interface CartProps{
  cartItems: CartItem[]
}


export function Cart({cartItems}:CartProps ) {

  return (
        <FlatList
          data={cartItems}

        />
    );
}
