import RemoveCartButton from "features/cart/remove-cart-product/ui/RemoveCartButton";



function App() {
  

  return (
    <>
      <RemoveCartButton removeFromCart={() => {
        alert('Call API pour retirer le produit du panier');
      }} />
    </>
  );
}

export default App;

