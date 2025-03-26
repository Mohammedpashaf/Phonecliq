import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import Button from './Button';
import PathImage from './PathImage';
const bestSellerArray = [
    {
        name: 'Samsung s22',
        image: PathImage.Samsungs22,
        link: '',
        offerPrice: '24,999.00',
        mrpPrice: '19,999.00',
        category: 'Samsung',
        dsc: '-47%'
    },
    {
        name: 'Samsung s24 plus',
        image: PathImage.Samsungs24plus,
        link: '',
        offerPrice: '34,300',
        mrpPrice: '30,000',
        category: 'Samsung',
        dsc: '-57%'
    },
    {
        name: 'Samsung s25',
        image: PathImage.Samsungs25,
        link: '',
        offerPrice: '40,3000',
        mrpPrice: '38,000',
        category: 'Samsung',
        dsc: '-64%'
    },
    {
        name: 'Samsung Flip4',
        image: PathImage.Samsungflip4,
        link: '',
        offerPrice: '132,3000',
        mrpPrice: '128,000',
        category: 'Samsung',
        dsc: '-67%'
    },
    {
        name: 'Samsung A53',
        image: PathImage.Samsunga53,
        link: '',
        offerPrice: '20,3000',
        mrpPrice: '18,000',
        category: 'Samsung',
        dsc: '-37%'
    },
    {
        name: 'Samsung S25 Ultra',
        image: PathImage.Samsungs25u,
        link: '',
        offerPrice: '45,3000',
        mrpPrice: '38,000',
        category: 'Samsung',
        dsc: '-77%'
    },
    {
        name: 'Samsung s22',
        image: PathImage.Samsangs22p,
        link: '',
        offerPrice: '30,3000',
        mrpPrice: '28,000',
        category: 'Samsung',
        dsc: '-57%'
    },

];

const filterBestsellerTab = [
    {
        label: 'Samsung',
        parameter: 'Samsung'
    }
];
function Samsung() {
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
                                <h3>Samsung</h3>
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
                                                                <li>Display: 6.9 inches (17.42 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate</li>
                                                                <li>Memory: 12GB RAM, 512GB ROM</li>
                                                                <li>Memory: 12GB RAM, 512GB ROM</li>
                                                                <li>Camera: 200 MP + 50 MP + 50 MP + 10 MP Quad Rear & 12 MP Front Camera</li>
                                                                <li>Battery: 5000 mAh with USB Type-C Charging</li>
                                                                <li>USP: Side Button To Access Google Gemini, Knox Matrix Trust Chain Technology, Galaxy AI</li>
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

export default Samsung;