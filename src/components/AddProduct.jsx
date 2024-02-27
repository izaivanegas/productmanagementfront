import React, {useState} from "react";
import productService from "../service/product.service";

const AddProduct = () => {
    const [product, setProduct] = useState(
        {
            productName: "",
            description: "", price: "", status: ""
        }
    );
    const [msg,setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value});
    }
    const ProductRegister = (e)=>{
        e.preventDefault();
        console.log(product)
        productService.saveProduct(product).then(()=>{
            console.log("Product saved sucessfully");
            setMsg("Product saved sucessfully");
            setProduct({
                productName: "",
                description: "", price: "", status: ""
            });
        }).catch((error)=>{console.log(error);
        setMsg("Error:"+error)
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">Add product</div>
                        {
                         msg && <p className="fs-4 text-center text-success">{msg}</p>
                        }
                        <div className="card-body">
                            <form onSubmit={(e)=>ProductRegister(e)}>
                                <div className="mb-3">
                                    <label>Enter product name</label>
                                    <input type="text" name="productName" className="form-control"
                                           onChange={(e) => handleChange(e)}
                                    value={product.productName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Enter product description</label>
                                    <input type="text" name="description" className="form-control"
                                    onChange={(e)=>handleChange(e)}
                                    value={product.description}/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter product price</label>
                                    <input type="text" name="price" className="form-control"
                                    onChange={(e)=>handleChange(e)}
                                    value={product.price}/>
                                </div>
                                <div className="mb-3">
                                    <label>Enter product status</label>
                                    <input type="text" name="status" className="form-control"
                                    onChange={(e)=>handleChange(e)}
                                    value={product.status}
                                    />
                                </div>
                                <button className="btn btn-primary col-md-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddProduct;