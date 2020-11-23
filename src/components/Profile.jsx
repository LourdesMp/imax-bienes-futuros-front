import React from 'react';
import Header from './Header';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import  {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {

    const dispatch = useDispatch();
    // const [email, setEmail] = useState("");
    const [profile, setProfile] = useState({
        DataProfile: [],
        profileData: {
            nombre: "",
            email: "",
            passwordNew: "",
            passwordConfir:""

        }
    });

    const handleProfileChange = (e) => {
        const input = e.target.name;
        const data = e.target.value;
        // setProfile((prevState) => ({
        //   ...prevState,
        //   profileData: {
        //     ...profile.profileData,
        //     [input]: data,
        //   },
        // }));
      };

    const {
        isLoading,
        isSuccess,
        isError,
        data,
        error
    } = useSelector ( state => state.authReducer.user);

    // useEffect(() => {
    //     if(isSuccess){
    //       setEmail(data.email)
    //     }
    // }, [isSuccess])
    useEffect(() => {
        if(isSuccess){
          setProfile((prevState)=>({
              ...prevState,
              profileData:{
                  ...profile.profileData,
                  email: data.email
              }
          }))
        }
    }, [isSuccess])

   
    return(
    <section className="form-profile">
        <Header/>
        <div className ="box-body">
            <div className="box-profile">
                <p className="title">Perfil del usuario</p>
                <div className="box-user"> <label>Nombre: </label> <input className="user" name="nombre" type="text" required/>  </div> 
                <div className="box-user"> <label>Email: </label> <input className="user"  readonly="readonly" value={profile.profileData.email} type="email" required onChange={handleProfileChange} />  </div>  
                <div className="box-user"> <label>Password Nueva: </label> <input className="user"  type="password"  required/>  </div>   
                <div className="box-user"> <label>Confirmar Password: </label> <input className="user" type="password"  required/>  </div>          
                <div className="box-btn">
                <button className= "btn-guardar"> Guardar</button>
                <button className= "btn-cancelar"> <Link className="btn-cancelarLink"to="/home">Cancelar</Link> </button>
                </div>
            </div>
        </div>
    </section>
    
)};

export default Profile;