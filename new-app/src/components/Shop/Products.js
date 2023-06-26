import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_ITEM =[
  {
  id:'p1',
  title:'New Fiction Book',
  pric:34,
  description:'This is a first product - amazing!'

},
{
  id:'p2',
  title:'New History Book',
  pric:38,
  description:'This is a first product - amazing!'

}

];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEM.map((item =>   <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.pric}
          description={item.description}
        />))}
     
      </ul>
    </section>
  );
};

export default Products;
