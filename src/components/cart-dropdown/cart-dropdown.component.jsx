import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div clasName='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

)

export default CartDropdown