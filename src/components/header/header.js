import './header.css';

export const header = () => {
  return (
    
    <div className="header">
      <div className="lado">
       <h1 className="texto"> C J<span className="tex3">D f</span> </h1>

      </div>
      <div className="otro-lado">

        <button type="button" className="iconos  btn btn-outline-secondary">Certificados</button>
        <button type="button" className="iconos  btn btn-outline-secondary">Proyectos</button>
        <button type="button" className="iconos  btn btn-outline-secondary">about</button>
        <button type="button" className="iconos  btn btn-outline-secondary">contacto</button>
        
      </div>
 </div>
  )
}
export default header