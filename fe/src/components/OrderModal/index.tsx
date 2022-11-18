import closeIcon from '../../assets/images/close-icon.svg';

import React from 'react';
import {Overlay, ModalBody, OrderDetails} from './style';
import { Order } from '../../Types/Order';
import { formatCurrency } from '../../Utils/formatCurrency';

interface OrderModalProp {
  visible: boolean;
  order: Order | null
}
function OrderModal({visible, order}: OrderModalProp) {
  if (!visible || !order) {
    return null
  }

  return (
      <Overlay>
        <ModalBody>
          <header>
            <strong>Mesa {order.table}</strong>
            <button type='button'>
              <img src={closeIcon} alt="Fechar" />
            </button>
          </header>

          <div className="status-container">
            <small>Status do Pedido</small>
            <div>
              <span>
                {order.status === 'WAITING' && '🕒'}
                {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
                {order.status === 'DONE' && '✅'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Fila de Espera'}
                {order.status === 'IN_PRODUCTION' && 'Em Preparação'}
                {order.status === 'DONE' && 'Pronto'}
              </strong>
            </div>
          </div>

          <OrderDetails>
            <strong>Itens</strong>
            <div className="order-items">
              {order.products.map(({_id, product, quantity})=>(
                <div className="item" key={_id}>
                    <img
                        width="56"
                        height="28.51"
                        src={`http://localhost:3001/upload/${product.imagePath}`}
                        alt={`${product.name}`}
                    />
                    <span className='quantity'>{quantity}x</span>
                    <div className="product-details">
                      <strong>{product.name}</strong>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                </div>
              ))}
            </div>
          </OrderDetails>
        </ModalBody>
      </Overlay>
    )
}

export default OrderModal
