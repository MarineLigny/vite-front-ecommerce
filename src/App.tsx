import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='max-w-4xl mx-auto'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='text-4xl font-bold text-center text-blue-600 mb-8'>Vite + React</h1>
      <div className='card bg-white p-6 rounded-lg shadow-md max-w-md mx-auto'>
        <button 
          onClick={() => setCount((count) => count + 1)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
        >
          count is {count}
        </button>
        <p className='text-gray-600'>
          Edit <code className='bg-gray-200 px-2 py-1 rounded'>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs text-center mt-8 text-gray-500'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
