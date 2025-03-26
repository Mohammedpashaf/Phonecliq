import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import Button from './Button';
import PathImage from './PathImage';
const bestSellerArray = [
    {
        name: 'Nothing',
        image: PathImage.productthumb1,
        link: '',
        offerPrice: '44,999.00',
        mrpPrice: '64,999.00',
        category: 'Nothing'
    },
    {
        name: 'SAMSUNG Gallaxy S23 5G',
        image: PathImage.productthumb2,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'Samsung'
    },
    {
        name: 'iPhone12',
        image: PathImage.iphone12,
        link: '',
        offerPrice: '40,3000',
        mrpPrice: '38,000',
        category: 'Iphone'
    },
    {
        name: 'iPhone 13',
        image: PathImage.iphone13,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'Iphone'
    },
    {
        name: 'iPhone 15 Pro Max',
        image: PathImage.iphone15,
        link: '',
        offerPrice: '70,3000',
        mrpPrice: '68,000',
        category: 'Iphone'
    },
    {
        name: 'oneplus Plus',
        image: PathImage.oneplus,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'oneplus'
    },
    {
        name: 'samsung',
        image: PathImage.samsung,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'Samsung'
    },
    {
        name: 'google',
        image: PathImage.google,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'google'
    },
    {
        name: 'IQOO',
        image: PathImage.iqoo,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'iqoo'
    },
];

const filterBestsellerTab = [
    {
        label: 'All',
        parameter: bestSellerArray
    },
    {
        label: 'Iphones',
        parameter: 'Iphone'
    },
    {
        label: 'Samsung',
        parameter: 'Samsung'
    },
    {
        label: 'IQOO',
        parameter: 'iqoo'
    }

];
function Best() {
    const [items, setItems] = useState(bestSellerArray);
    const [active, setActive] = useState(false);
    const filterItem = (categItem) => {
        const updateItems = bestSellerArray.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updateItems.length === 0 ? bestSellerArray : updateItems);
        setActive(true);
    };
    return (
        <div>
            <section class="py-5">
                <div class="container-fluid">
                    <div class="d-flex row">
                        <div class="bootstrap-tabs product-tabs">
                            <div class="tabs-header d-flex justify-content-between border-bottom my-5">
                                <h3>Trending Products</h3>
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        {filterBestsellerTab.map((data) => {
                                            return (
                                                <a href="javascrip:0;" className={`text-uppercase fs-6 ${active ? "nav-link active" : "nav-link"}`} id="nav-all-tab" onClick={() => filterItem(data.parameter)}>{data.label}</a>
                                            )
                                        })}
                                    </div>
                                </nav>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                    <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                                        {items.map((data) => {
                                            return (
                                                <div class="col">
                                                    <div class="product-item p-2">
                                                        <figure>
                                                            <a href="index.html" title="Product Title">
                                                                <img src={data.image} class="tab-image" alt={data.image} />
                                                            </a>
                                                        </figure>
                                                        <h3 className="font-size-medium">{data.name}</h3>
                                                        <span class="price">From : <FaRupeeSign />{data.offerPrice}</span><br />
                                                        <span class="qty"><del><FaRupeeSign />{data.mrpPrice}</del></span>
                                                        <br></br>
                                                        <Button label='Shop Now'></Button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Best;