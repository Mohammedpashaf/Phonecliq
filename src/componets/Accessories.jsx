import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import Button from './Button';
import PathImage from './PathImage';
const bestSellerArray = [
    {
        name: 'Apple Type C to Type C',
        image: PathImage.Appletypec,
        link: '',
        offerPrice: '12,00.00',
        mrpPrice: '19,00.00',
        category: 'Accessories',
        dsc: '-37%'
    },
    {
        name: 'Apple Type c Lighting Cable',
        image: PathImage.Applelighting,
        link: '',
        offerPrice: '900.00',
        mrpPrice: '15,00',
        category: 'Accessories',
        dsc: '-40%'
    },
    {
        name: 'Samsung Type A to Type C',
        image: PathImage.Samsungtype,
        link: '',
        offerPrice: '490.00',
        mrpPrice: '750.00',
        category: 'Accessories',
        dsc: '-35%'
    },
    {
        name: 'Samsung Type A to Type C ',
        image: PathImage.Samsungtypectoc,
        link: '',
        offerPrice: '132,3000',
        mrpPrice: '128,000',
        category: 'Accessories',
        dsc: '-34%'
    },
    {
        name: 'Samsung 25W Type C Fast Charger',
        image: PathImage.Samsungcharger,
        link: '',
        offerPrice: '1,200.00',
        mrpPrice: '16,00.00',
        category: 'Accessories',
        dsc: '-29%'
    },
    {
        name: 'Apple 20W Type C Fast charger',
        image: PathImage.Applecharger,
        link: '',
        offerPrice: '1,200.00',
        mrpPrice: '1,900.00',
        category: 'Accessories',
        dsc: '-37%'
    },
];

const filterBestsellerTab = [
    {
        label: 'Accessories',
        parameter: 'Accessories'
    }
];
function Accessories() {
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
        <section class="py-5">
            <div class="container-fluid">
                <div class="d-flex row">
                    <div class="bootstrap-tabs product-tabs">
                        <div class="tabs-header d-flex justify-content-between border-bottom my-5">
                            <h3>Accessories</h3>
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
                                <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-4">
                                    {items.map((data) => {
                                        return (
                                            <div class="col">
                                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">{data.dsc}</h2>
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
                                                            <li>Port Type: Type C to Type C</li>
                                                            <li>Supports Fast Charging: Yes</li>
                                                            <li>Cable Length: 3.9 Feet, 1.2 M</li>
                                                            <li>Woven Design, Fast Charging</li>
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
    );
}

export default Accessories;