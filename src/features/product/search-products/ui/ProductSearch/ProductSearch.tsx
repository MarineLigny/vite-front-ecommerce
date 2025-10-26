import type { ReactElement } from 'react';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';

type Props = {
  onSubmit: (search: string) => void;
};

const ProductSearch = ({ onSubmit }: Props): ReactElement => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(search);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <form className='flex w-full' onSubmit={handleSubmit}>
      <input
        className='w-full'
        type='text'
        id='product-search'
        name='product-search'
        placeholder='Rechercher un produit...'
        aria-label='Rechercher un produit'
        value={search}
        onChange={handleChange}
      />
      <IconButton type='submit' aria-label='Rechercher'>
        <Search />
      </IconButton>
    </form>
  );
};

export default ProductSearch;
