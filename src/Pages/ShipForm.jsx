import React, {useRef} from 'react';
import 'Styles/Form.css';

const ShipForm = () => {
    const myForm=useRef(null);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData = new FormData(myForm.current);
        const data={
            client_name: formData.get('client_name'),
            client_addres: formData.get('client_addres'),
            client_cel: formData.get('client_cel'),
        }
        console.log(data)
    }
    return (
        <form className='form' ref={myForm} action='/'>
            <label htmlform='name'>Nombre completo de quien recibe</label>
            <input type='text' id='name' name='client_name'/>
            <label htmlform='addres'>Dirección de entrega</label>
            <input type='text' id='addres' name='client_addres'/>
            <label htmlform='cel'>Celular</label>
            <input type='tel' id='cel' name='client_cel'/>
            <input type='submit' onClick={handleSubmit}/>
        </form>
    );
}

export default ShipForm;