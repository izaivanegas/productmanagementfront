import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import productService from "../service/product.service"

const Home = ()=>{
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        init();
    });

    const init = () => {
        productService.getAllProducts().then(( res )=>{
                //console.log(res.data);
                setProductList(res.data);
            }
        ).catch((error)=>{
            console.log(error);
        })
    }

    const [msg,setMsg] = useState("");

    const deleteProduct = (id)=>{
        console.log("Clic.........")
        productService.deleteProduct(id).then((res)=>{
            setMsg("delete sucessfully");
            init();
            }
        ).catch((error)=>{console.log(error);});
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header fs-3 text-center">Products</div>
                        { msg && <p className="fs-4 text-center text-success">{msg}</p> }
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">ProductName</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    productList.map((p,num  )=>(
                                        <tr key={p.id}>
                                            <th scope="row">{num+1}</th>
                                            <td>{p.productName}</td>
                                            <td>{p.description}</td>
                                            <td>{p.price}</td>
                                            <td>{p.status}</td>
                                            <td>
                                                <Link to={'/editProduct/'+p.id} className="btn btn-sm btn-primary">Edit</Link>
                                                <button onClick={()=>deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
                                            </td>
                                        </tr>

                                        ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Home;