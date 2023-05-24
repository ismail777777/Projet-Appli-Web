import React, { useEffect } from "react";
import { useState } from "react";
import './products.css';
import hp_laptop from './hp_laptop.jpg';

function Products (props) {

    const [filtersVisible, setFiltersVisible] = useState(false);
    const [products, setProducts] = useState([]);

    function showFilters() {
        setFiltersVisible(!filtersVisible);
    }

    /*function Product(name, img, description, price) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.price = price;
    }

    /*function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.body.appendChild(img)
    }*/

    /*const p1 = new Product("ordi HP .....","/src/hp_laptop.jpg","RAM, processeur, ...", 599);
    const p2 = new Product("ordi LENOVO .....","hp_laptop.jpg","RAM, processeur, ...", 799);
    const p3 = new Product("ordi DELL .....","hp_laptop.jpg","RAM, processeur, ...", 1599);
    const p4 = new Product("ordi MAC .....","hp_laptop.jpg","RAM, processeur, ...", 999);
    let products = [];
    let list1 = '';
    products.push(p1,p2,p3,p4);*/
    useEffect(() => {
        fetch('')
         .then(response => response.json())
         .then(data => setProducts(data));
    },[]);
    return (
        <div className={"products"}>
            <header className="products-header">
            <p>
            Electronic Corner
            </p>
            <button onClick={() => showFilters()}>Filter by</button>
            </header>
            <div className={`filters ${filtersVisible ? "" : "hidden"}`}>
                <input type="radio" name="filter" value="Marque" id="marque"/><label htmlFor="marque">Marque</label>
                <input type="radio" name="filter" value="Prix" id="prix"/><label htmlFor="prix">Prix</label>
                <input type="radio" name="filter" value="Type" id="type"/><label htmlFor="type">Type</label>
            </div>
            <div className="container">
                <table className="table">
                    <thead className="thead">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                              <td><img src={hp_laptop} alt="" /></td>
                              <td>{product.price}</td>
                              <td>
                                <button>Add to cart</button>
                                <button>See Description</button>
                              </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}
export default Products;
