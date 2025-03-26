import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import Button from './Button';
import PathImage from './PathImage';
const bestSellerArray = [
    {
        name: 'IPhone 11 ',
        image: PathImage.IPhone11,
        link: '',
        offerPrice: '44,999.00',
        mrpPrice: '64,999.00',
        category: 'Iphone',
        dsc: '-67%'
    },
    {
        name: 'IPhone 12 Mini',
        image: PathImage.iphone12,
        link: '',
        offerPrice: '50,3000',
        mrpPrice: '48,000',
        category: 'IPhone',
        dsc: '-64%'
    },
    {
        name: 'iPhone12',
        image: PathImage.iphone12,
        link: '',
        offerPrice: '40,3000',
        mrpPrice: '38,000',
        category: 'Iphone',
        dsc: '-55%'
    },
    {
        name: 'iPhone 13',
        image: PathImage.iphone13,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'Iphone',
        dsc: '-65%'
    },
    {
        name: 'iPhone 15 Pro Max',
        image: PathImage.iphone15,
        link: '',
        offerPrice: '70,3000',
        mrpPrice: '68,000',
        category: 'Iphone',
        dsc: '-60%'
    },
    {
        name: 'IPhone 14 Plus',
        image: PathImage.IPhone14,
        link: '',
        offerPrice: '45,3000',
        mrpPrice: '38,000',
        category: 'Iphone',
        dsc: '-57%'
    },
    {
        name: 'IPhone 14 Pro',
        image: PathImage.IPhone14pro,
        link: '',
        offerPrice: '50,3000',
        mrpPrice: '48,000',
        category: 'Iphone',
        dsc: '-47%'
    },
    {
        name: 'IPhone 15 Pro',
        image: PathImage.IPhone15pro,
        link: '',
        offerPrice: '130,3000',
        mrpPrice: '128,000',
        category: 'Iphone',
        dsc: '-67%'
    },
    {
        name: 'Iphone 16',
        image: PathImage.IPhone16,
        link: '',
        offerPrice: '75,3000',
        mrpPrice: '68,000',
        category: 'Iphone',
        dsc: '-77%'
    },
];

const filterBestsellerTab = [
    {
        label: 'Iphones',
        parameter: 'Iphone'
    }
];
function IPhone() {
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
                                <h3>IPhone</h3>
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
                                    <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                                        {items.map((data) => {
                                            return (
                                                <div class="col">
                                                    <h2 class="z-1 position-absolute rounded-3 font-size bg-org border-dark-subtle">{data.dsc}</h2>
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
                                                        <div class="display-toggle py-4">
                                                            <h2 className="font-1rem">Key Features</h2>
                                                            <ul className="font-size">
                                                                <li>Display: 5.4 inches (13.72 cm), Super Retina XDR</li>
                                                                <li>Memory: 4GB RAM, 64GB ROM</li>
                                                                <li>Processor: Apple A14 Bionic, Hexa Core</li>
                                                                <li>Camera: 12 MP + 12 MP Dual Rear & 12 MP Front Camera</li>
                                                                <li>Battery: 2227 mAh with Turbo Charging</li>
                                                                <li>Security (Lock): Password | Pattern | PIN | Face Unlock</li>
                                                                <li><h2 className="font-1rem">Condition: <a href="Learn More" className="bg-col">Learn more</a> </h2></li>
                                                            </ul>
                                                        </div>
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

export default IPhone;