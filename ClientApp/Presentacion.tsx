import { useEffect, useState } from "react";

type Equipo = {
   "Id": string,
    "Escuela": string,
    "Carrera":string,
    "Grupo": string,
    "DatosSemestre":string,
    "Proyecto": string,
    "Integrante1": string,
    "Integrante2": string,
    "Fecha": string
}



const Presentacion = () => {
    const [equipo, setEquipo] = useState<Equipo>();

    // manejo de datos
    const cargarDatos = async() => {
        const resp = await fetch("/mi-proyecto/presentacion");
        if(resp.ok) {
            const datos = await resp.json();
            console.log(datos);
            setEquipo(datos);
        }
    }

    useEffect(()=>{
        cargarDatos();
    }, []);

    // vista
    return (
        <>
           <div className="display-4">CBTis No.105</div>
           <div className="h1">Integrantes</div>
           <div className="h2">Maria Fernanda Demeza Bermudez</div>
           <div className="h2">Maria Fernanda Rios Hernandez</div>
           <div className="h1">Pagina del CBTis</div>
        </>
    )
}

export default Presentacion;