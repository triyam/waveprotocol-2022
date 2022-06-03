import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

// import {
//   clusterApiUrl,
//   Connection,
//   LAMPORTS_PER_SOL,
//   Keypair
// } from "@solana/web3.js";
// import {
//   createMint,
//   getOrCreateAssociatedTokenAccount,
//   mintTo,
//   setAuthority,
//   transfer,
// } from "@solana/spl-token";

// function handleSubmit(event) {
//   (async () => {
//     // Connect to cluster
//     const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

//     // Generate a new wallet keypair and airdrop SOL
//     const fromWallet = Keypair.generate();
//     const fromAirdropSignature = await connection.requestAirdrop(
//       fromWallet.publicKey,
//       LAMPORTS_PER_SOL
//     );

//     // Wait for airdrop confirmation
//     await connection.confirmTransaction(fromAirdropSignature);

//     // Create a new token
//     const mint = await createMint(
//       connection,
//       fromWallet, // Payer of the transaction
//       fromWallet.publicKey, // Account that will control the minting
//       null, // Account that will control the freezing of the token
//       0 // Location of the decimal place
//     );

//     // Get the token account of the fromWallet Solana address. If it does not exist, create it.
//     const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
//       connection,
//       fromWallet,
//       mint,
//       fromWallet.publicKey
//     );

//     // Generate a new wallet to receive the newly minted token
//     const toWallet = Keypair.generate();

//     // Get the token account of the toWallet Solana address. If it does not exist, create it.
//     const toTokenAccount = await getOrCreateAssociatedTokenAccount(
//       connection,
//       fromWallet,
//       mint,
//       toWallet.publicKey
//     );

//     // Minting 1 new token to the "fromTokenAccount" account we just returned/created.
//     let signature = await mintTo(
//       connection,
//       fromWallet, // Payer of the transaction fees
//       mint, // Mint for the account
//       fromTokenAccount.address, // Address of the account to mint to
//       fromWallet.publicKey, // Minting authority
//       1 // Amount to mint
//     );

//     await setAuthority(
//       connection,
//       fromWallet, // Payer of the transaction fees
//       mint, // Account
//       fromWallet.publicKey, // Current authority
//       0, // Authority type: "0" represents Mint Tokens
//       null // Setting the new Authority to null
//     );

//     signature = await transfer(
//       connection,
//       fromWallet, // Payer of the transaction fees
//       fromTokenAccount.address, // Source account
//       toTokenAccount.address, // Destination account
//       fromWallet.publicKey, // Owner of the source account
//       1 // Number of tokens to transfer
//     );

//     console.log("SIGNATURE", signature);
//   })();
// }
// const shoot = () => {
//   alert("Great Shot!");
//     (async () => {
//     // Connect to cluster
//     const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

//     // Generate a new wallet keypair and airdrop SOL
//     const fromWallet = Keypair.generate();
//     const fromAirdropSignature = await connection.requestAirdrop(
//       fromWallet.publicKey,
//       LAMPORTS_PER_SOL
//     );

//     // Wait for airdrop confirmation
//     await connection.confirmTransaction(fromAirdropSignature);

//     // Create a new token
//     const mint = await createMint(
//       connection,
//       fromWallet, // Payer of the transaction
//       fromWallet.publicKey, // Account that will control the minting
//       null, // Account that will control the freezing of the token
//       0 // Location of the decimal place
//     );

//     // Get the token account of the fromWallet Solana address. If it does not exist, create it.
//     const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
//       connection,
//       fromWallet,
//       mint,
//       fromWallet.publicKey
//     );

//     // Generate a new wallet to receive the newly minted token
//     const toWallet = Keypair.generate();

//     // Get the token account of the toWallet Solana address. If it does not exist, create it.
//     const toTokenAccount = await getOrCreateAssociatedTokenAccount(
//       connection,
//       fromWallet,
//       mint,
//       toWallet.publicKey
//     );

//     // Minting 1 new token to the "fromTokenAccount" account we just returned/created.
//     let signature = await mintTo(
//       connection,
//       fromWallet, // Payer of the transaction fees
//       mint, // Mint for the account
//       fromTokenAccount.address, // Address of the account to mint to
//       fromWallet.publicKey, // Minting authority
//       1 // Amount to mint
//     );

//     await setAuthority(
//       connection,
//       fromWallet, // Payer of the transaction fees
//       mint, // Account
//       fromWallet.publicKey, // Current authority
//       0, // Authority type: "0" represents Mint Tokens
//       null // Setting the new Authority to null
//     );

//     signature = await transfer(
//       connection,
//       fromWallet, // Payer of the transaction fees
//       fromTokenAccount.address, // Source account
//       toTokenAccount.address, // Destination account
//       fromWallet.publicKey, // Owner of the source account
//       1 // Number of tokens to transfer
//     );

//     console.log("SIGNATURE", signature);
//   })();
// }


const DebitCard = () => {
  const [price, setPrice] = useState();
  const [product] = useState({
    name: "Wave Coin",
    price: price,
    description: "Wave Coin Description",
  });
  const makePayment = async (token) => {
    product.price = price;

    if (product.price !== "") {
      console.log(product.price);

      await axios
        .post("http://localhost:5000/payment", {
          token,
          product,
        })
        .then((response) => {
          console.log(response);
          window.alert("Payment Successful!");
          console.log("Payment Successful!");
          // navigate('/userLogin');
        })
        .catch((error) => {
          console.log(error);
          window.alert("Payment Failed ");
          console.log("Payment Failed");
        });
    } else {
      alert("Price Cannot be empty");
    }
  };
  return (
    <>
      <div>
        <Card>
          <CardBody>
            <div className="no-wrap mt-3 align-middle">
              <div className="alert alert-info mt-3">
                <h3>
                  Buy Through Credit/Debit
                  <br />
                </h3>
              </div>
              <h6>
                You can pay through Credit/Debit to complete your payment. The
                token balance will appear in your account after successful
                payment
              </h6>
              <div className="form-group">
                <label className="form-label">Amount To be paid</label>
                <input
                  required
                  type="number"
                  id="phone"
                  className="form-control mb-1"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              token={makePayment}
              amount={product.price}
              name="Wave Coin"
              // billingAddress
              // shippingAddress
            >
              <button type="button" className="btn btn-primary btn-block">
                Pay
              </button>
            </StripeCheckout>
            <div className="form-group">
              <label className="form-label">You get (WPFM)</label>
              <input
                required
                type="number"
                id="phone"
                className="form-control mb-1"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              token={makePayment}
              amount={product.price}
              name="Wave Coin"
              // billingAddress
              // shippingAddress
            >
              <button type="button" className="btn btn-primary btn-block">
                Calculate
              </button>
            </StripeCheckout>
            <br />
            <br />
            <br />
            {/* <form onSubmit={handleSubmit}>
              <button type="submit">Submit</button>
            </form> */}
            <button type="button" className="btn btn-primary btn-sm btn-block" >
            {/* onClick={shoot} */}
              Submit
            </button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default DebitCard;
