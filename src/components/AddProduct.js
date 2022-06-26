import {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
// import { toast } from 'bulma-toast'

const AddProduct = () => {
    
    //state
    let [name, setName] = useState('')
    let [brand, setBrand] = useState('')
    let [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    //state validation
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate ()

    const saveProduct = async (e) => {
        e.preventDefault()
        if(name==='') name = null
        if(!isNaN(name)&&name!=null) name = 0
        if(brand==='') brand = null
        if(!isNaN(brand)&&brand!=null) brand = 0
        if(!isNaN(price)) price = parseInt(price)
        // console.log(typeof price, price)
        await axios.post('http://localhost:3000/products', {
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
        <form onSubmit={saveProduct}>
            <div className='field'>
                <label className='label'>Name</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Input name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='label'>Brand</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Input brand" 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='label'>Price</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Input price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='field'>
                <label className='label'>Description</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Input description" 
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
                        <button className='button is-info'>Save</button>
                    </div>
                </div>       
            </div>
        </form>
    </div>
  )
}

export default AddProduct