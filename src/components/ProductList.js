import { React, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import {} from 'material-icons'

const ProductList = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:3000/products')
        setProduct(response.data)
    }

    const processDelete = async (id) => {
        await axios.delete(`http://localhost:3000/products/${id}`)
        getProducts()
    }

    const deleteProduct = async (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
            });
            processDelete(id)
        } else {
            swal("Your imaginary file is safe!");
        }
        });
    }

    const intToIdr = (price) => {		
        var	reverse = price.toString().split('').reverse().join(''),
            ribuan 	= reverse.match(/\d{1,3}/g);
            ribuan	= ribuan.join('.').split('').reverse().join('');
        // Cetak hasil
        return(ribuan)
    }

  return (
      <div>
        <Link to='/add' className='button is-primary mt-6'>Add New</Link>
        <table className="table is-hoverable is-fullwidth mt-5">
          <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { products.map((product, index) => (
                <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>Rp.{intToIdr(product.price)}</td>
                    <td>{product.description}</td>
                    <td>
                        <Link to={`/edit/${product.id}`} className='button is-small is-info mr-2'>
                            <span className='material-icons-outlined'>edit</span>
                        </Link>
                        <button onClick={() => deleteProduct(product.id)} className='button is-small is-danger'>
                            <span className='material-icons'>delete</span>
                        </button>
                    </td>
                </tr>
            )) }
          </tbody>
        </table>
        
    </div>
  )
}

export default ProductList