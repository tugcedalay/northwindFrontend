import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {

  const {cartItems } = useSelector(state => state.cart)
  return (
    <div>

        <Dropdown item text="sepetiniz">
          <Dropdown.Menu>
{
   cartItems.map((cartItem) => (
   <Dropdown.Item>
    {cartItem.product.productName}
     <label>
      {cartItem.quantity}
     </label>
   </Dropdown.Item>

  ))
}
            <Dropdown.Divider/>
            <Dropdown.Item as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
  )
}
