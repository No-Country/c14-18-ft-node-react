
export const dataCreate = () =>{
    const año = new Date().getFullYear();
    const mes = new Date().getMonth();
    const dia = new Date().getDay();
    const fecha = año+'-'+mes+'-'+dia;
    return fecha;
}