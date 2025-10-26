import ProductSearch from 'features/product/search-products/ui/ProductSearch';

function App() {
  const onSubmit = (search: string): void => {
    console.log('Recherche de produit :', search);
  };
  return <ProductSearch onSubmit={onSubmit} />;
}

export default App;
