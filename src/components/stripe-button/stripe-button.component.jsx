import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KdQHvDwjS0Dqry0IdNIAq5ErUErVQA1ZM9IZ156NKFdCwtVo35vSFvnMxw1zteAPg4Qocd1x5nYUZwjbrBGFf5N0086js6xVp';


    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };


    return (
        <StripeCheckout
          label='Pay Now'
          name='Equinoxa Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
    };


    export default StripeCheckoutButton;