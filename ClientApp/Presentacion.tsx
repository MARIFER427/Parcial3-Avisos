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

    const formatoFecha = (fecha: string | undefined) => {
        if(fecha){
            const formato = new Intl.DateTimeFormat("es-MX", {year: "numeric", month: "2-digit", day: "2-digit"});
        const dt = new Date(fecha);

        return formato.format(dt);
        }
       return undefined;
    }

    // vista
    return (
        <>
           <div className="display-4 text-center">{equipo?.Escuela} </div>
           <div className="h1 text-center mt-4">{equipo?.Carrera} </div>
           <div className="h1 text-center mt-4">{equipo?.DatosSemestre} </div>
           <div className="h1 text-center">{equipo?.Grupo} </div>
           <div className="h1 text-center mt-4">Integrantes</div>
           <div className="h3 text-center text-info">{equipo?.Integrante1} </div>
           <div className="h3 text-center text-info">{equipo?.Integrante2} </div>
           <div className="h1 text-center mt-4">Pagina del CBTis</div>
           <div className="h3 text-center">{equipo?.Proyecto} </div>
           <div className="h4 text-center mt-4">{formatoFecha(equipo?.Fecha)} </div>
        </>
    )
}


export default Presentacion;