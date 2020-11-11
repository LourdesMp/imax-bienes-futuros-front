// import React, { useState, useEffect } from 'react';
// import Header from '../Header';
// import { getTasaciones } from '../../controller/tasaciones';
// import { Link } from 'react-router-dom';



// const ListTasaciones = () => {

//     const [tasacion, setTasacion] = useState ({
//         DataTasaciones: [],
//         tasacionData : {
//             idTasacion: '',
//             nombreCliente: '',
//             dniCliente: '',
//             nombreConyugue: '',
//             dniConyugue: '',
//             tipodeCambio: '',
//             nombreProyecto: '',
//             direccionProyecto: '',
//             promotor: '',
//             banco: '',
//             departamento: '',
//             estacionamiento: '',
//             deposito:'',
//             valorVenta: '',
//             moneda: '',
//             valorMetroCuadrado: '',
//             valorComercial: '',
//             porcentajeRevision: ''
//         }
//     });

//     useEffect(() => {
//         getTasaciones().then((resp) => setTasacion ((prevState) => ({
//             ...prevState,
//             DataTasaciones: resp.DataTasaciones
            
//         })));
//         console.log(setTasacion)
//     }, []);


//     return(
//         <section className="form-profile">
//         <Header/>
//         <div className ="box-bodyList">
//             <div className="box-tasacion">
//                 <div className="head-list">
//                     <p className="title-list">Crear Tasación de Bien Futuro</p>
//                 </div>
//                 <div className="body-list">
//                     <div className="search-list">
//                         <div className="box-first">
//                             <label className="title-tasacion">Buscar por Tasacion: </label> 
//                             <div className="search-input"> <input className="nombre" type="text" placeholder="Nombres y apellidos" /> 
//                              </div>
//                         </div>
//                     </div> 
                    
                  
//                     <table className="table-list">
//                         <thead>
//                             <tr>
//                                 <th>Id Tasacion</th>
//                                 <th>Nombre del Cliente</th>
//                                 <th>Dni del Cliente</th>
//                                 <th>Nombre del Conyugue</th>
//                                 <th>Dni del Conyugue</th>
//                                 <th>Tipo de Cambio</th>
//                                 <th>Nombre del Proyecto</th>
//                                 <th>Dirección</th>
//                                 <th>Promotor</th>
//                                 <th>Banco</th>
//                                 <th>Departamento</th>
//                                 <th>Estacionamiento</th>
//                                 <th>Deposito</th>
//                                 <th>Valor de Venta</th>
//                                 <th>Moneda</th>
//                                 <th>Valor Metro Cuadrado</th>
//                                 <th>Valor Comercial</th>
//                                 <th>Porcentaje Revision</th>
//                                 <th>Matriz de Tasaciones</th>
//                                 <th>Formato</th>
//                             </tr>
//                         </thead>
                          
//                         <tbody>
//                         { 
//                             tasacion.DataTasaciones.length > 0

//                             ? tasacion.DataTasaciones.map((element) => (
//                                 <tr key={element.idTasacion}>
//                                     <td>{element.idTasacion}</td>
//                                     <td>{element.nombreCliente}</td>
//                                     <td>{element.dniCliente}</td>
//                                     <td>{element.nombreConyugue}</td>
//                                     <td>{element.dniConyugue}</td>
//                                     <td>{element.tipodeCambio}</td>
//                                     <td>{element.nombreProyecto}</td>
//                                     <td>{element.direccionProyecto}</td>
//                                     <td>{element.promotor}</td>
//                                     <td>{element.banco}</td>
//                                     <td>{element.departamento}</td>
//                                     <td>{element.estacionamiento}</td>
//                                     <td>{element.deposito}</td>
//                                     <td>{element.valorVenta}</td>
//                                     <td>{element.moneda}</td>
//                                     <td>{element.valorMetroCuadrado}</td>
//                                     <td>{element.valorComercial}</td>
//                                     <td>{element.porcentajeRevision}</td>
//                                     <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
//                                     <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
//                                 </tr>
//                             )): (
//                                 <tr>
//                                     <td>No hay proyectos agregados</td>
//                                 </tr>
//                             )
//                         }
//                         </tbody>
//                     </table>
                    
//                          <Link className="btn-newTasacion"  to="/home/newtasacion">Nueva Tasación</Link>
                    
//                 </div> 
        
//             </div>
//         </div>
//     </section>
//     )
// };


// export default ListTasaciones;