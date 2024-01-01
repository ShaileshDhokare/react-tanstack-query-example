import { useProduct } from '../services/queries';

const ProductDetails = ({ id }: { id: number | null }) => {
  const { data: product, isFetching } = useProduct(id);

  if (!id) {
    return (
      <div className='card m-4 p-3 text-center'>
        <h2>Selected Product</h2>
        <p>No product is selected.</p>
      </div>
    );
  }

  return (
    <div className='card m-4 text-center'>
      <h2>Selected Product</h2>
      <div className='card-body'>
        <h5 className='card-title'>
          {product?.id}. {product?.name}
        </h5>
        <span className='badge bg-secondary mx-2'>
          Category : {product?.category}
        </span>
        <span className='badge bg-secondary mx-2'>Price: {product?.price}</span>
        <span className='badge bg-secondary mx-2'>
          In Stock: {'' + product?.inStock}
        </span>
        <br />
        {isFetching && (
          <span
            className='spinner-border spinner-border-sm mt-2'
            aria-hidden='true'
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
