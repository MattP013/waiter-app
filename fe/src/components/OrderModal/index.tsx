import closeIcon from '../../assets/images/close-icon.svg';

import React, { useEffect } from 'react';
import {Overlay, ModalBody, OrderDetails, Action} from './style';
import { Order } from '../../Types/Order';
import { formatCurrency } from '../../Utils/formatCurrency';

interface OrderModalProp {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}
function OrderModal({visible, order, onClose}: OrderModalProp) {
  useEffect(()=>{
    function handleKeyDown(e: KeyboardEvent){
        if (e.key === "Escape") {
            onClose()
        }
      }

    document.addEventListener('keydown', handleKeyDown)

    return () =>{
      document.removeEventListener('keydown', handleKeyDown)
    }
  },[onClose])

  if (!visible || !order) {
    return null
  }

  const total = order.products.reduce((total, {product, quantity})=>{
    return total +  (product.price * quantity);
  }, 0)
  return (
      <Overlay>
        <ModalBody>
          <header>
            <strong>Mesa {order.table}</strong>
            <button type='button'>
              <img src={closeIcon} onClick={onClose} alt="Fechar" />
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

            <div className="total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </OrderDetails>

          <Action>
            <button type='button' className='primary'>
                <span>👩‍🍳</span>
                <strong>Iniciar Produção</strong>
            </button>

            <button type='button' className='secondary'>
                <strong>Cancelar Pedido</strong>
            </button>
          </Action>
        </ModalBody>
      </Overlay>
    )
}

export default OrderModal
