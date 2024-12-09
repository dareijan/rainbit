import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";


const TuuliKomponentti = ({ data }) => {
    const rows = data.map(item => Object.values(item));

    return (

      <Container>

          {rows.map((row, index1) => (
            <Row>
                {row.map((cell, index) => 
                  <Col md="9">
                    <span align="center">

                      {cell==='07:00'? <hr className="hr-text-aamu" data-content="07:00"></hr> : ""}

                      <h6> {index===1? cell :"" } </h6>

                      <h1 className="harmaa">                      


                        {index===2 && (cell.endsWith("NaN")) ? cell.substring(0,5):"" }
                        {index===2 && (cell.endsWith("NaN")) ? <i className="bi bi-cloud violetti" title={cell}></i>:""}   

                        {index===2 && ((cell>=0 && cell<=10 )) ? <i className="bi bi-cloud-drizzle violetti" title={cell}></i>:""}

                        {index===2 && ((cell>10 && cell<20)) ? <i className="bi bi-cloud-rain violetti" title={cell}></i>:""}

                        {index===2 && (cell<20) ? <i className="bi bi-cloud-rain-heavy violetti" title={cell}></i>:""}    
                        {/* Otsikko päivämääräteksti*/}
                        {cell==='12:00'? <hr className="hr-text" data-content="12:00"></hr> : ""}

                        {index===2 && cell.substring(0,5)==='12:00'? <img height='30' width='30'  src='/klo12.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='13:00'? <img height='30' width='30'  src='/klo1.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='14:00'? <img height='30' width='30'  src='/klo2.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='15:00'? <img height='30' width='30'  src='/klo3.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='16:00'? <img height='30' width='30'  src='/klo4.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='17:00'? <img height='30' width='30'  src='/klo5.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='18:00'? <img height='30' width='30'  src='/klo6.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='19:00'? <img height='30' width='30'  src='/klo7.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='20:00'? <img height='30' width='30'  src='/klo8.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='21:00'? <img height='30' width='30'  src='/klo9.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='22:00'? <img height='30' width='30'  src='/klo10.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='23:00'? <img height='30' width='30'  src='/klo11.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='00:00'? <img height='30' width='30'  src='/klo12.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='01:00'? <img height='30' width='30'  src='/klo1.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='02:00'? <img height='30' width='30'  src='/klo2.png'></img> : ""}

                        {index===2 && cell.substring(0,5)==='07:00'? <img height='30' width='30'  src='/klo7.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='08:00'? <img height='30' width='30'  src='/klo8.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='09:00'? <img height='30' width='30'  src='/klo9.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='10:00'? <img height='30' width='30'  src='/klo10.png'></img> : ""}
                        {index===2 && cell.substring(0,5)==='11:00'? <img height='30' width='30'  src='/klo11.png'></img> : ""}

                        {/* Otsikko päivämääräteksti*/}
                        {cell==='18:00'? <hr className="hr-text" data-content="18:00"></hr> : ""}


                      </h1>

                    </span>

                  </Col>
              )}
          </Row>
          ))}
      </Container>

    );
  };
  
  export default TuuliKomponentti;