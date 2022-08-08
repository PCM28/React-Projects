const Subtitle = (props) =>{
    console.log(props);
    return(<h3>Bienvenido de nuevo, {props.name} encantados de volver a verlo</h3>);
};
// Estás pasando un objeto y estás llamando a su nombre objeto.name
export default Subtitle; 