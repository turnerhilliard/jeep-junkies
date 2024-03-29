import './featured-product.styles.scss';
import React, {useContext} from 'react';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers';
import { withRouter } from 'react-router-dom';


const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = {title, imageUrl, price, id, description}; 
  const {addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);
  
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        {
        !itemInCart &&
        <button 
        className='button is-black nomad-btn'
        onClick={() => addProduct(product)}>
        ADD TO CART</button>     
        }
        {
        itemInCart &&
        <button 
        className='button is-white nomad-btn'
        id='btn-white-outline'
        onClick={() => increase(product)}>
        ADD MORE</button>     
        }
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct);