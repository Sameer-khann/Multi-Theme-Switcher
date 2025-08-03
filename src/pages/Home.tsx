import React, { useEffect, useState } from 'react';
// import { fetchProducts } from '../../services/productService';
import { fetchProducts } from '../services/productService';
import { Product } from '../types/product';
import Card from '../Components/Card/Card';
import { useAppSelector } from '../redux/hooks';
import './Home.css';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const theme = useAppSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <main className={`home-page ${theme}`}>
      <h2 className="page-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import { fetchProducts } from '../services/productService';
// import { useAppSelector } from '../redux/hooks';
// import Card from '../components/Card/Card';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const theme = useAppSelector((state) => state.theme.currentTheme);

//   useEffect(() => {
//     fetchProducts().then(setProducts);
//   }, []);

//   return (
//     <div className={`home ${theme}`}>
//       <h2>Featured Products</h2>
//       <div className="card-grid">
//         {products.map((p) => (
//           <Card key={p.id} data={p} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
