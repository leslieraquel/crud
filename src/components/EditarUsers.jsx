import React from 'react'
import { useForm } from 'react-hook-form'

const EditarUsers=(props)=>{

    console.log(props.currentUser);

    const {handleSubmit,setValue}=useForm(
       {
           defaultValues:props.currentUser
       })
        
        setValue('id', props.currentUser.id);
        setValue('nombre', props.currentUser.nombre);
       setValue('cedula', props.currentUser.cedula);
       setValue('telefono', props.currentUser.telefono);
        setValue('email', props.currentUser.email);
       

    
    const onSubmit = (data,e)=>{
        e.preventDefault();
        console.log(data)
        e.target.reset()
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <button className="btn btn-outline-success" type="submit">Editar</button>
            </div>
        </div>
    </div>

    </form>

    );
}
export default EditarUsers;