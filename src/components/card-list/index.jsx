import Card from '../card';
import CardSkeleton from '../card/skeleton';

const CardList = ({products, isLoadCard, cart, onAddCart}) => {
    
    return (
        <>
            <div className="card-list__content">
                    {/* Cards component */}
                    {
                        isLoadCard === true
                        ? [...new Array(9)].map((_, index)=><CardSkeleton key={index} />) 
                        : products.map((product) => <Card product={product} key={product.id} onAddCart={onAddCart} cart={cart}/>)}
            </div>
            
        </>
    )
}

export default CardList;

