import { Fragment, useState } from 'react';
import { useProducts } from '../services/queries';
import ProductDetails from './ProductDetails';

const ProductList = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProducts();

  return (
    <div className='row'>
      <div className='col-md-8'>
        <h2>Products</h2>
        {data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((product) => (
              <div
                className='border rounded d-flex justify-content-between p-2 my-2'
                key={product.id}
              >
                <h5>
                  {product.id}. {product.name}
                </h5>
                <button
                  className='btn btn-sm btn-info'
                  onClick={() => setSelectedProductId(product.id)}
                >
                  show
                </button>
              </div>
            ))}
          </Fragment>
        ))}
        <br />
        <div className='text-center'>
          <button
            className='btn btn-sm btn-dark'
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <>
                <span
                  className='spinner-border spinner-border-sm'
                  aria-hidden='true'
                />
                <span> Loading More</span>
              </>
            ) : hasNextPage ? (
              'Load More'
            ) : (
              'Nothing more to load'
            )}
          </button>
        </div>
      </div>
      <div className='col-md-4'>
        <ProductDetails id={selectedProductId} />
      </div>
    </div>
  );
};

export default ProductList;
