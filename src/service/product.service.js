import axios from "axios";


const API_URL = "http://localhost:8081/products"


class ProductService{
    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product);
    }

    getAllProducts(){
        return axios.get(API_URL+"/all");
    }

    getProductById(id){
        return axios.get(API_URL+"/"+id);
    }

    deleteProduct(id){
        return axios.delete(API_URL+"/delete/"+id);
    }

    editProduct(product){
        return axios.put(API_URL+"/editProduct/"+product.id,product);
    }

}

export default new  ProductService;