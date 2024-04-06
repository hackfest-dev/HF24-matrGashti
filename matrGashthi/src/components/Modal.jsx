import React,{useState} from 'react'
import './Modal.css'

export const Modal = ({closeModal, onSubmit, defaultValue}) => {

  const [formState, setFormState] = useState(defaultValue || {
    menuitem:'',
    quantity:'',
  });

  const [errors,setErrors] = useState("")

  const validateForm = () => {
    if(formState.menuitem && formState.quantity){
        setErrors("");
        return true;
    }
    else{
        let errorfields = [];
        for(const [key,value] of Object.entries(formState)){
            if(!value) {
                errorfields.push(key)
            }
        }
        setErrors(errorfields.join(","));
        return false;
    }
  }

  const handleChange = (e) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    onSubmit(formState)

    closeModal();
  };

  return (
    <div className='modal-container'
     onClick={(e)=>{
        if(e.target.className === "modal-container") closeModal();
     }}
    >
        <div className='modal'>
            <form>
                <div className='form-group'>
                    <label htmlFor='menuitem'>Menu Item</label>
                    <input name='menuitem' value={formState.menuitem} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='quantity'>Quantity</label>
                    <input name='quantity' value={formState.quantity} onChange={handleChange}/>
                </div>
                {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}
