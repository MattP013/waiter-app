import React, { useState } from 'react'
import { Order } from '../../Types/Order'
import OrderModal from '../OrderModal';
import { Board, OrdersContainer } from './style'

interface OrdersBoardProps{
  icon: string;  title: string;
  orders: Order[];
}
function OrdersBoard({icon, title, orders}:OrdersBoardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setselectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order:Order){
    setModalVisible(true);
    setselectedOrder(order);
  }

  function handleCloseModal(){
    setModalVisible(false);
    setselectedOrder(null);
  }



  return (
      <Board>
        <OrderModal
          visible={isModalVisible}
          order={selectedOrder}
          onClose={handleCloseModal}
        ></OrderModal>
          <header>
            <span>{icon}</span>
            <strong>{title}</strong>
            <span>({orders.length})</span>
          </header>
          {
            orders.length > 0 && (
              <OrdersContainer>
                {orders.map((order)=>(
                  <button type='button' onClick={() => handleOpenModal(order)} key={order._id}>
                    <strong>Mesa {order.table}</strong>
                    <span>{order.products.length} itens</span>
                  </button>
                ))}
             </OrdersContainer>
            )
          }
      </Board>
  )
}

export default OrdersBoard
