import './ProductCard.css'
import product1 from '../../assets/productImages/sneaker.png'
import hotSale from '../../assets/productImages/hotsale.png'

const ProductCard = () => {
    return(
        <>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <div className='specialTag'>
                            <span><img src={hotSale} /></span>
                        </div>
                        <img className="card-img" src="https://cdn.media.amplience.net/i/office/4175135836_sd1.jpg?$highres$&fmt=auto&qlt=default&fmt.jpeg" alt="Vans" />
                        <div className="d-flex justify-content-end">
                            <a href="#" className="card-link text-danger like">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">AIR JORDAN 5 TRAINERS</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Style: 4175135836</h6>
                            <div className="options d-flex flex-fill">
                                <div className="price text-success"><h5 className="mt-4">£125</h5></div>
                            </div>
                            <div className="buy d-flex justify-content-between align-items-baseline">
                                <select className="custom-select mr-1">
                                    <option defaultValue>Color</option>
                                    <option value="1">Green</option>
                                    <option value="2">Blue</option>
                                    <option value="3">Red</option>
                                </select>
                                <select className="custom-select ml-1">
                                    <option defaultValue>Size</option>
                                    <option value="1">41</option>
                                    <option value="2">42</option>
                                    <option value="3">43</option>
                                </select>
                                <a href="#" className="btn cartBtn mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProductCard;