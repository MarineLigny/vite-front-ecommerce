import Header from 'common/layout/Header';

function App() {
  const onSubmit = (search: string): void => {
    console.log(`Recherche de produit: ${search}`);
  };
  const cartCount = 3;
  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
    </>
  );
}
export default App;
