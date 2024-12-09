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

                      {cell=='07:00'? <hr class="hr-text-aamu" data-content="07:00"></hr> : ""}

                      <h6> {index==1? cell :"" } </h6>

                      <h1>

                      {cell=='12:00'? <hr class="hr-text" data-content="12:00"></hr> : ""}
                
                      {cell=='18:00'? <hr class="hr-text" data-content="18:00"></hr> : ""}

                      {index==2 && (cell=="NaN") ? <i class="bi bi-cloud harmaa" title={cell}></i>:""}

                      {index==2 && ((cell>=0 && cell<=10 )) ? <i class="bi bi-cloud-drizzle harmaa" title={cell}></i>:""}

                      {index==2 && ((cell>10 && cell<20)) ? <i class="bi bi-cloud-rain harmaa" title={cell}></i>:""}

                      {index==2 && (cell<20) ? <i class="bi bi-cloud-rain-heavy -fullharmaa" title={cell}></i>:""}    

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