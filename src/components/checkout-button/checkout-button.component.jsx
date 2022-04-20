import React from "react";

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = 100 * price;
    const publishableKey = 'pk_test_51KqiqcSF5CpaUDpInGVqV7U0X8C0GhXSE78BWzVfPOsDSLOFA3ffm8RJtXX3vrwW3vLO265p3dTm7YKDYOQ5uAa5000iYWXeZa';

    const onToken = token => {
        console.log(token);
        alert("Payment succesfull!");
    }

    return (

        <StripeCheckout
            label="Pay Now"
            name="Eco Clothing Ltd"
            billingAddress
            shippingAddress
            image="http://svgshare.com/i/CUz.svg"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;