import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";
import klo1 from "../kuvat/klo1.PNG";
import klo2 from "../kuvat/klo2.PNG";
import klo3 from "../kuvat/klo3.PNG";
import klo4 from "../kuvat/klo4.PNG";
import klo5 from "../kuvat/klo5.PNG";
import klo6 from "../kuvat/klo6.PNG";
import klo7 from "../kuvat/klo7.PNG";
import klo8 from "../kuvat/klo8.PNG";
import klo9 from "../kuvat/klo9.PNG";
import klo10 from "../kuvat/klo10.PNG";
import klo11 from "../kuvat/klo11.PNG";
import klo12 from "../kuvat/klo12.PNG";


const TuuliKomponentti = ({ data }) => {
    const rows = data.map(item => Object.values(item));

    return (

      <Container>

          {rows.map((row, index1) => (
            <Row>
                {row.map((cell, index) => 
                  <Col md="9">
                    <span align="center">

                      {/* 07:00 väliviiva */}
                      {cell==='07:00'? <hr className="hr-text-aamu" data-content="07:00"></hr> : ""}

                      {/* päivän nimi */}
                      <h6 className="tummanharmaa"> {index===1? cell :"" } </h6>

                      {/* kellonaika*/}
                      <span className="harmaa">{index===2 && (cell.endsWith("NaN")) ? cell.substring(0,5):"" }</span>
                      <h1 class="display-4">   
                      {/* sadeton pilvi*/}
                      {index===2 && (cell.endsWith("NaN")) ? <i className="bi bi-cloud-check-fill pinkki" title={cell}></i>:""}   
                      {/* ripsii*/}
                      {index===2 && ((cell>=0 && cell<=10 )) ? <i className="bi bi-cloud-drizzle-fill pinkki" title={cell}></i>:""}
                      {/* sataa*/}
                      {index===2 && ((cell>10 && cell<20)) ? <i className="bi bi-cloud-hail-fill pinkki" title={cell}></i>:""}
                      {/* sataa kaatamalla*/}
                      {index===2 && (cell<20) ? <i className="bi bi-cloud-rain-heavy-fill pinkki" title={cell}></i>:""}

                      {/* Otsikko päivämääräteksti*/}
                      {cell==='12:00'? <hr className="hr-text" data-content="12:00"></hr> : ""}

                      {index===2 && cell.substring(0,5)==='12:00'? <img src={klo12}></img> : ""}
                      {index===2 && cell.substring(0,5)==='13:00'? <img src={klo1}></img> : ""}
                      {index===2 && cell.substring(0,5)==='14:00'? <img src={klo2}></img> : ""}
                      {index===2 && cell.substring(0,5)==='15:00'? <img src={klo3}></img> : ""}
                      {index===2 && cell.substring(0,5)==='16:00'? <img src={klo4}></img> : ""}
                      {index===2 && cell.substring(0,5)==='17:00'? <img src={klo5}></img> : ""}
                      {index===2 && cell.substring(0,5)==='18:00'? <img src={klo6}></img> : ""}
                      {index===2 && cell.substring(0,5)==='19:00'? <img src={klo7}></img> : ""}
                      {index===2 && cell.substring(0,5)==='20:00'? <img src={klo8}></img> : ""}
                      {index===2 && cell.substring(0,5)==='21:00'? <img src={klo9}></img> : ""}
                      {index===2 && cell.substring(0,5)==='22:00'? <img src={klo10}></img> : ""}
                      {index===2 && cell.substring(0,5)==='23:00'? <img src={klo11}></img> : ""}
                      {index===2 && cell.substring(0,5)==='00:00'? <img src={klo12}></img> : ""}
                      {index===2 && cell.substring(0,5)==='01:00'? <img src={klo1}></img> : ""}
                      {index===2 && cell.substring(0,5)==='02:00'? <img src={klo2}></img> : ""}

                      {index===2 && cell.substring(0,5)==='07:00'? <img src={klo7}></img> : ""}
                      {index===2 && cell.substring(0,5)==='08:00'? <img src={klo8}></img> : ""}
                      {index===2 && cell.substring(0,5)==='09:00'? <img src={klo9}></img> : ""}
                      {index===2 && cell.substring(0,5)==='10:00'? <img src={klo10}></img> : ""}
                      {index===2 && cell.substring(0,5)==='11:00'? <img src={klo11}></img> : ""}

                      </h1>

                      {/* 18:00 väliviiva */}
                      {cell==='18:00'? <hr className="hr-text" data-content="18:00"></hr> : ""}

                    </span>

                  </Col>
              )}
          </Row>
          ))}
      </Container>

    );
  };
  
  export default TuuliKomponentti;