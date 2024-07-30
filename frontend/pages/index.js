import React from 'react'
import {Product,FooterBanner,HeroBanner} from '../components';
import {client} from '../lib/client';

const Home = ({products,bannerData}) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Headphones & Other Products</p>
      </div>

      <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
        };
        export const getServerSideProps = async () => {
          try {
            const query = '*[_type=="product"]';
            const products = await client.fetch(query);
        
            const bannerQuery = '*[_type=="banner"]';
            const bannerData = await client.fetch(bannerQuery);
        
            return {
              props: { products, bannerData },
            };
          } catch (error) {
            console.error('Error fetching data:', error);
            return {
              props: { products: [], bannerData: [] },
            };
          }
        };
        


export default Home