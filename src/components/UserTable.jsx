import React from 'react'

const UserTable =(props)=>{
    console.log(props.users)

    return(
        <form className="row-sm-7">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cedula</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.users.map(user=>(
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.nombre}</td>
                                <td>{user.cedula}</td>
                                <td>{user.telefono}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-outline-primary" 
                                onClick={()=>{props.editRow(user)}}            
                                >Editar
                                </button> 
                                <button className="btn btn-outline-danger"
                                onClick={()=>{props.eliminarUsuarios(user.id)}}>Eliminar</button></td>
                            </tr>
                            ))
                        }

                        </tbody>
                    </table>
        </form>

    );
}
export default UserTable;