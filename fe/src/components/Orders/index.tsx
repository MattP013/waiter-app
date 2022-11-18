import React from 'react';
import {Container } from './style';
import OrdersBoard from '../OrdersBoard';
import { Order } from '../../Types/Order';

const orders: Order[] =[
  {
    "_id": "6373f86665cca03f8a306f78",
		"table": "3",
		"status": "WAITING",
		"products":[
          {

            "product": {
              "name": "Pizza quatro queijos",
              "imagePath": "1668540535458-quatro-queijos.png",
              "price": 40,
          },
          "_id": "6373f86665cca03f8a306f79",
          "quantity": 1,

        },
    ]

  }
]


function Orders() {
  return (
    <Container>
       <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
       ></OrdersBoard>
       <OrdersBoard
        icon="👩‍🍳"
        title="Em Preparação"
        orders={[]}
       ></OrdersBoard>
       <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
       ></OrdersBoard>
    </Container>
  )
}

export default Orders
