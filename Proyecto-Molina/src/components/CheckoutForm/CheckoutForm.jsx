import { useState } from "react";
import './CheckoutForm.css';

const CheckoutForm = ({onConfirm}) =>{

    const [userData, setUserData] =useState({
        name:'',
        phone:'',
        email:''
    });

    const [error, setError]= useState('');
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleConfirm = (e) =>{
        e.preventDefault();
        if(!userData.name || !userData.email){
            setError("Por favor, debe ingresar los campos obligatorios *");
            return;
        }
        onConfirm(userData);
    }

    return (
        <div className="container mb-2 form__dates">
          <form onSubmit={handleConfirm} className="form__checkout">
    
            {/* Aquí comienza la sección del campo Nombre */}
            <label className="form__label">
              Nombre
              <input
                className="form"
                type="text"
                name="name"
                value={userData.name}
                required
                onChange={handleChange}
                placeholder="Ingrese nombre completo"
              />
            </label>
    
            {/* La sección del campo Teléfono */}
            <label className="form__label">
              Telefono
              <input
                className="form"
                type="text"
                name="phone"
                value={userData.phone}
                required
                onChange={handleChange}
                placeholder="Ingrese numero de telefono"
              />
            </label>
    
            {/* La sección del campo Email */}
            <label className="form__label">
              Email
              <input
                className="form"
                type="email"
                name="email"
                value={userData.email}
                required
                onChange={handleChange}
                placeholder="Ingrese su E-mail"
              />
            </label>
    
    
             {/* La sección del botón de CREAR ORDEN */}
            <div>
              <button type="submit" className="btn btn-primary button__order">
                Crear Orden
              </button>
            </div>
    
             {/* La sección para mostrar mensajes de error */}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      );
}

export default CheckoutForm;