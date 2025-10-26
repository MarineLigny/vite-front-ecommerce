import AddCartButton from 'features/cart/add-cart-product/ui/addCartButton';


function App() {
  const addToCart = (): void => {
    alert('Call API pour ajouter le produit au panier');
  }

  return (
    <>
      <AddCartButton addToCart={addToCart} />
    </>
  );
}

export default App;

