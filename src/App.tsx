import Button from 'common/design_system/Button';

function App() {

  return (
    <>
      <Button onClick={() => console.log('Retirer du panier')}>Retirer du panier</Button>
      <Button variant='contained' onClick={() => console.log('Ajouter au panier')}>Ajouter au panier</Button>
    </>
  );
}

export default App;
