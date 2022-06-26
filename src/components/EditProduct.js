import {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link } from 'react-router-dom'

const EditProduct = () => {
    
    let [name, setName] = useState('')
    let [brand, setBrand] = useState('')
    let [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate ()

    //state validation
    const [validation, setValidation] = useState([]);

    const {id} = useParams()

    const updateProduct = async (e) => {
        e.preventDefault()
        if(name==='') name = null
        if(!isNaN(name)&&name!=null) name = 0
        if(brand==='') brand = null
        if(!isNaN(brand)&&brand!=null) brand = 0
        if(!isNaN(price)) price = parseInt(price)
        await axios.put(`http://localhost:3000/products/${id}`, {
            name: name,
            brand: brand,
            price: price,
            description: description,
        })
        .then(() => {
            //redirect
            navigate('/')
            
        })
        .catch((error) => {
            //assign validation on state
            setValidation(error.response.data);
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res) => {
            setName(res.data.name)
            setBrand(res.data.brand)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch((err) => console.log("err", err));
        // getProductbyId()
    }, [id])

    // const getProductbyId = async () => {
    //     const response = await axios.get(`http://localhost:3000/products/${id}`)
    //     setName(response.data.name)
    //     setBrand(response.data.brand)
    //     setPrice(response.data.price)
    //     setDescription(response.data.description)
    // }

  return (
    <div className='mt-6'>
        {
            validation.length > 0 &&
            <article className="message is-danger">
                <div className="message-header">
                    <p>Error</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body ">
                { validation.map((data, index) => (
                    <li key={index}>{ `${data.field} : ${data.message}` }</li>
                ))}
                </div>
            </article>
        }
        <form onSubmit={updateProduct}>
            <div className='field'>
                <label className='label'>Nama</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Text input" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='label'>Brand</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Text input" 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='label'>Price</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Text input" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='label'>Description</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Text input" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='field mt-5'>
                <div className="columns">
                    <div className="column">
                        <Link to='/' className='button is-light mb-4'>Back</Link>
                    </div>
                    <div className="column" align='right'>
                        <button className='button is-info'>Update</button>
                    </div>
                </div>       
            </div>
            {/* {name} - {brand} - {description} */}
        </form>
    </div>
  )
}

export default EditProduct