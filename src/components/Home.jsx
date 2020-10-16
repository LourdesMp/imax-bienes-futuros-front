import React from 'react';
import Header from './Header';


const Home = () => (
    <section className="home">
        <Header/>
        <div className = "box-body"> 
            <div className= "presentation"> 
                <p className="title">Evaluación y Monitoreo de Proyectos</p>
                    <p className="paragraph">Evaluamos y Monitoreamos proyectos para asesorar promotores inmobiliarios, inversionistas, empresas e instituciones financieras brindando herramientas de analisis y seguimiento que permitan invertir  o financiar de forma segura; nuestro equipo es especialista 
                    en analizar la viabilidad del proyecto y en el control de los flujos, 
                    de tiempo, seguridad, calidad y costo del proyecto y obra
                    SERVICIOS 
                    Monitoreo de Proyectos (Supervisiones Financieras).
                    Estudios Técnico-Comerciales (Pre factibilidades, Viabilidades, Estudios de Situación, etc</p>
            </div>
        </div>
    </section>
);

export default Home;