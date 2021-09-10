import React,{useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuid4} from 'uuid';
import AgregarUsers from './components/AgregarUsers.jsx';
import EditarUsers from './components/EditarUsers.jsx';

function App(){
   
  const usersData=[
    {id:uuid4(),nombre:"leslie",cedula:"1751542489",telefono:"0985211323",email:"raquellezs@hotmail.com"},
    {id:uuid4(),nombre:"leslie",cedula:"1751542489",telefono:"0985211323",email:"raquellezs@hotmail.com"},
    {id:uuid4(),nombre:"leslie",cedula:"1751542489",telefono:"0985211323",email:"raquellezs@hotmail.com"}
  ]
  const [users,setUsers]=useState(usersData);
  //agregar usuarios
  const agregarUsuarios=(user)=>{
    user.id=uuid4();
    setUsers([
      ...users,
      user

    ])

  }
  //eliminar Usuarios
  const eliminarUsuarios=(id)=>{
    const arrayFiltrado=users.filter(user=>user.id !== id);
    setUsers(arrayFiltrado);
    
  

  }

  const[editar,setEditar]=useState(false);
  
  const [currentUser,setCurrentUser]=useState({
          id: "null",
          nombre:"",
          cedula:"",
          telefono:"",
          email:""
  });
  const editRow=(user)=>{
    setEditar(true);
    setCurrentUser({
      id: user.nombre,
      nombre:user.name,
      cedula:user.cedula,
      telefono:user.telefono,
      email:user.email
    })
  }

// const handleSubmit = async e => {
  //  e.preventDefault();
//} 


  return (
    <div className="container mt-5">
      {
        editar ? (
          <div>
              <h2>Editar Usuarios</h2>
              <EditarUsers 
              currentUser={currentUser}/>
          </div>
        ) : (
          <div>
          <AgregarUsers agregarUsuarios={agregarUsuarios}/>
          </div>
        )
      }
      
      <div>
        <UserTable users={users} 
                   eliminarUsuarios={eliminarUsuarios} 
                   //setEditar={setEditar}
                   editRow={editRow}/>
      </div>
    
  </div>
  
  );
}

export default App;
