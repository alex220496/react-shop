import axios from "axios"
import { Component } from "react"


class CheckoutPage extends Component {
    state ={
                name:"",
                address:"",
                isOrderSend:false,
            }

    orderName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    orderAddress = (e) => {
        this.setState({
            address:e.target.value
        })
    }

    sendForm = (e) => {
        e.preventDefault();
        axios.post("1.25")
    }
            
    renderForm = () => {
        return (
            <form>
                <div className="form-field">
                    <input 
                        type="text"
                        placeholder="Your name."
                        value={this.state.name} 
                        onChange={this.orderName}
                    />
                </div>
                <div className="form-field">
                    <input 
                        type="text"
                        placeholder="Your address."
                        value={this.state.address} 
                        onChange={this.orderAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    render(){
        return (
            <>
                <h1 className="page-title">Checkout</h1>  
                {this.state.isOrderSend !== true ? this.renderForm() :"Send"} 

            </>
        )
    }
}

export default CheckoutPage