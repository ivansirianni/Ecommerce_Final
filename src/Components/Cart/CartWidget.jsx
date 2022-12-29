import react, { useContext } from "react"
import { cartContext } from "../../Storage/cartContext"

export default function Cart (props) {
    let cartProps = props.cartQty > 1 ? "units" : "unit"

    return (
        <>
            <div className="cart-cards">
                <div className={`cart-img ${props.img}`}></div>
                <div className="cart-content">
                    <p className="cart-name">{props.name}</p>
                    <p className="cart-detail">{props.detail}</p>
                    <p className="cart-price">Price: u$s {props.price}</p>
                </div>
                <div className="content-price">
                    <span>
                        Total: ${(props.price * props.cartQty). toLocaleString()} - {" "}
                        {props.cartQty.toLocaleString()} {cartProps}
                    </span>
                </div>
            </div>
        </>
    )
}

export function CartTotal(){
    const valueContext = useContext(cartContext)
    const totalValueInCart = valueContext.totalValueInCartfn()
    const totalQtyInCart = valueContext.totalQtyInCartfn()

    let cartProps = totalQtyIncart > 1 ? "units" : "unit"

    return(
        <>
            <div className="total-card">
                <div>
                    <div className="cart-price">
                        <span>
                            Final Price ${totalValueInCart.toLocaleString()} - {" "}
                            {totalQtyInCart.toLocaleString()} {cartProps}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}