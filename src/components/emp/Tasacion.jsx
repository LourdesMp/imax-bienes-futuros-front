import React, {useState}from 'react';
import Header from '../Header';
import { postTasacion } from '../../controller/tasaciones'
import { Link } from 'react-router-dom';

const Tasacion = () => {
    
    const [tasacion, setTasacion] = useState ({
        DataTasaciones: [],
        tasacionList : {
            idTasacion: '',
            nombreCliente: '',
            dniCliente: '',
            nombreConyugue: '',
            dniConyugue: '',
            tipodeCambio: '',
            nombreProyecto: '',
            direccionProyecto: '',
            promotor: '',
            banco: '',
            departamento: '112',
            estacionamiento: '112',
            deposito:'',
            valorVenta: '',
            moneda: 'Soles',
            valorMetroCuadrado: '',
            valorComercial: '',
            porcentajeRevision: ''  
        }
    });

    const [error, setError] = useState({
                valorVenta: false,
                moneda: false,
                valorMetroCuadrado: false,
                valorComercial: false,
                porcentajeRevision: false

      });

      const handleInputChange = (e) => {
        const input = e.target.name;
        const data = e.target.value;
        setTasacion((prevState) => ({
          ...prevState,
          tasacionList: {
            ...tasacion.tasacionList,
            [input]: data,
          },
        }));
      };

      const handleRequestTasacion = () => {
        const validName =tasacion.tasacionList.nombreCliente.trim() === '';
    
        if (validName) {
          alert(validName)
          if (validName) setError((prevState) => ({ ...prevState, nombreCliente: true }));
          else setError((prevState) => ({ ...prevState, nombreCliente: false }));
        } else {
          const tasacionObj = {

            idTasacion: tasacion.tasacionList.idTasacion,
            nombreCliente: tasacion.tasacionList.nombreCliente,
            dniCliente: tasacion.tasacionList.dniCliente,
            nombreConyugue: tasacion.tasacionList.nombreConyugue,
            dniConyugue: tasacion.tasacionList.dniConyugue,
            tipodeCambio: tasacion.tasacionList.tipodeCambio,
            nombreProyecto: tasacion.tasacionList.nombreProyecto,
            direccionProyecto: tasacion.tasacionList.direccionProyecto,
            promotor: tasacion.tasacionList.promotor,
            banco: tasacion.tasacionList.banco,
            departamento: tasacion.tasacionList.departamento,
            estacionamiento: tasacion.tasacionList.estacionamiento,
            deposito: tasacion.tasacionList.deposito,
            valorVenta: tasacion.tasacionList.valorVenta,
            moneda: tasacion.tasacionList.moneda,
            valorMetroCuadrado: tasacion.tasacionList.valorMetroCuadrado,
            valorComercial: tasacion.tasacionList.valorComercial,
            porcentajeRevision: tasacion.tasacionList.porcentajeRevision
          };
          console.log(tasacionObj)
          postTasacion(tasacionObj).then((resp) => {
            setTasacion((prevState) => ({
              ...prevState,
              DataTasaciones: [...tasacion.DataTasaciones, resp],
            }));
          }).catch((err) => {
            setError(err);
          });
      
      };
    };
    



    return(
    <section className="form-profile">
        <Header/>
        <div className ="box-bodyList">
            <div className="box-tasacion">
                <div className="head-list">
                    <p className="title-list">Crear Tasación de Bien Futuro</p>
                </div>
                <div className="body-list">
                    <div className="box-second">
                        <div className="box-date">
                            <label className="title-tasacion">Datos Informe : </label> 
                            <div className="input-date"> <label>Id Tasacion: </label> 
                                    <input className={error.idTasacion ? 'idTasacion error' : 'idTasacion '}  type="text"
                                    placeholder={error.idTasacion ? 'Campo requerido' : ''} name="idTasacion"
                                    defaultValue={tasacion.tasacionList.idTasacion} onChange={handleInputChange} /> 
                            </div>
                        </div>
                        <div className="box-date">                   
                            <label className="title-tasacion">Datos del Cliente: </label> 
                            <div className={error.nombreCliente ? 'nombreCliente error' : 'nombreCliente'} > 
                            <input className={error.nombreCliente ? 'nombreCliente error' : 'nombreCliente'} type="text" 
                            placeholder={error.nombreCliente ? 'Campo requerido' : 'Nombres y apellidos'} name="nombreCliente"
                            defaultValue={tasacion.tasacionList.nombreCliente} onChange={handleInputChange} /> 

                            <input className={error.dniCliente ? 'dniCliente error' : 'dniCliente'}  type="number" name="dniCliente"
                            placeholder={error.dniCliente ? 'Campo requerido' : 'DNI'} 
                            defaultValue={tasacion.tasacionList.dniCliente} onChange={handleInputChange}/> </div>
                        </div>

                        <div className="box-date">
                            <label className="title-tasacion">Datos del Conyugue: </label> 
                            <div className="input-date"> 
                            <input className={error.nombreConyugue ? 'nombreConyugue error' : 'nombreConyugue'}  type="text"
                            placeholder={error.nombreConyugue? 'Campo requerido' : 'Nombres y apellidos'}  name="nombreConyugue" 
                            defaultValue={tasacion.tasacionList.nombreConyugue}  onChange={handleInputChange}/> 

                            <input className={error.dniConyugue ? 'dniConyugue error' : 'dniConyugue'}  
                            placeholder={error.dniConyugue? 'Campo requerido' : 'DNI'} type="number" name="dniConyugue"
                            defaultValue={tasacion.tasacionList.dniConyugue} onChange={handleInputChange}/> </div>
                        </div>
                    </div>

                    <div className="box-second">
                        <div className="search-input"> <label>Perito: </label>
                            <input className={error.nombreProyecto ? 'nombreProyecto error' : 'nombreProyecto'}  type="text" 
                             placeholder={error.nombreProyecto ? 'Campo requerido' : ''} name="nombreProyecto"
                            defaultValue={tasacion.tasacionList.nombreProyecto} onChange={handleInputChange} /> 
                        </div>
                        <div className="search-input"> <label>Fecha de inspección: </label> 
                            <input className={error.direccionProyecto ? 'direccionProyecto error' : 'direccionProyecto '}  type="text" 
                             placeholder={error.direccionProyecto ? 'Campo requerido' : ''}  name="direccionProyecto"
                            defaultValue={tasacion.tasacionList.direccionProyecto} onChange={handleInputChange}/> 
                        </div>
                        <div className="search-input"> <label>Tipo de Cambio: </label>
                            <input className={error.tipodeCambio ? 'tipodeCambio error' : 'tipodeCambio'}  type="text" 
                                    placeholder={error.tipodeCambio? 'Campo requerido' : ''}  name="tipodeCambio"
                                    defaultValue={tasacion.tasacionList.tipodeCambio} onChange={handleInputChange}/> 
                        </div>
                    </div>

                    <div className="datos-inmueble">
                        <div className="box-add">
                            <label className="title-tasacion">Datos del Inmueble a Tasar: </label> 
                            <button className="btn-add" >Agregar</button>
                        </div>
                        <div className="box-second">
                          
                            <div className="input-tasacion"> <label>Departamentos: </label> 
                                <select className="select-modal" name="departamento"
                                defaultValue={tasacion.tasacionList.departamento} onChange={handleInputChange}required >
                                    <option value="112">112</option>
                                    <option value="113">113</option>
                                    <option value="114">114</option>
                                </select> 
                            </div>

                            <div className="input-tasacion"> <label>Estacionamientos: </label> 
                                <select className="select-modal" name="estacionamiento"
                                defaultValue={tasacion.tasacionList.estacionamiento} onChange={handleInputChange}required >
                                    <option value="112">112</option>
                                    <option value="113">113</option>
                                    <option value="114">114</option>
                                </select>
                            </div>

                            <div className="input-tasacion"> <label>Depósitos: </label> 
                                <input className="deposito" type="number" name="deposito" 
                                defaultValue={tasacion.tasacionList.deposito} onChange={handleInputChange}/> 
                            </div>
                            <div className="input-tasacion"> <label>Valor de Venta: </label> 
                                <input className={error.valorVenta ? 'valorVenta error' : 'valorVenta '}  type="number"
                                  placeholder={error.valorVenta ? 'Campo requerido' : ''} name="valorVenta"
                                defaultValue={tasacion.tasacionList.valorVenta} onChange={handleInputChange} /> 
                            </div>
                        </div>

                        <div className="box-second">
                            <div className="input-tasacion"> <label>Factor de Cálculo: </label> 
                                <input className={error.porcentajeRevision ? 'porcentajeRevision error' : 'porcentajeRevision '}  type="number" 
                                placeholder={error.porcentajeRevision ? 'Campo requerido' : ''}name="porcentajeRevision"
                                 defaultValue={tasacion.tasacionList.porcentajeRevision} onChange={handleInputChange} />
                             </div>
                            <div className="input-tasacion"> <label>Moneda: </label> 
                                <select className="select-modal" name="moneda"
                                defaultValue={tasacion.tasacionList.moneda} onChange={handleInputChange} required >
                                    <option value="soles"> Soles</option>
                                    <option value="dolares">Dólares</option>    
                                    </select> 
                            </div>
                        </div>
                    </div>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Unidad</th>
                                <th>Número</th>
                                <th>Nivel</th>
                                <th>Moneda</th>
                                <th>Valor Venta</th>
                                <th>Area Ocupada</th>
                                <th>Area Techada</th>
                                <th>Valor Comercial</th>
                            </tr>
                        </thead>
                          
                        <tbody>
                    
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                           
                        </tbody>
                    </table>
                    <div className="box-btn"> 
                        <button className="btn-guardarT" onClick={handleRequestTasacion}>Guardar Tasacion </button>
                        <button className="btn-cancelar"><Link className="btn-cancelarLink"to="/home/proyectos">Cancelar</Link> </button>
                    </div>
                </div> 
        
            </div>
        </div>
    </section>
    
)
}
export default Tasacion;