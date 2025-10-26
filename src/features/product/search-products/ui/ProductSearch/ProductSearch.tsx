import type { ReactElement } from 'react';

const ProductSearch = (): ReactElement => {
  return (
    <form>
      <input
        type='text'
        id='product-search'
        name='product-search'
        placeholder='Rechercher un produit...'
        aria-label='Rechercher un produit'
      />
    </form>
  );
};

export default ProductSearch;
