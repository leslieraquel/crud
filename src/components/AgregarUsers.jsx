import React from 'react'
import { useForm } from 'react-hook-form'

const AgregarUsers=(props)=>{

    const {handleSubmit}=useForm();

    const onSubmit = (data,e)=>{
        e.preventDefault();
        console.log(data)
        props.agregarUsuarios(data)
        e.target.reset()
        
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Formulario</h1>
        <div className="col-sm-3">
        <div className="card"> 
            <div className="card-body">
                <input 
                className="form-control"
                placeholder="ID"
                type="text"
                name="id"/>
                
            </div>
            <div className="card-body">
                <input
                className="form-control"
                placeholder="Nombre"
                type="text"
                name="nombre"
                onChange={handleSubmit}/>
            </div>
            
            <div className="card-body">
                <input 
                className="form-control"
                placeholder="Cedula"
                type="text"
                name="cedula"
             />
               

            </div>
            <div className="card-body">
                <input 
                className="form-control"
                placeholder="Telefono"
                type="text"
                name="telefono"
             />
                

            </div>
            <div className="card-body">
                <input 
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                />

            </div>
            <div className="card-body">
                <button className="btn btn-outline-success" type="submit">Registrar</button>
            </div>
        </div>
    </div>

    </form>

    );
}
export default AgregarUsers;