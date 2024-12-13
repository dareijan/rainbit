import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";
import Alert from "react-bootstrap/Alert";

import TuuliKomponentti from './komponentit/TuuliKomponentti'
import TuuliKomponenttiEnnustus from './komponentit/TuuliKomponenttiEnnustus'

const apibase =   'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::edited::weather::scandinavia::point::timevaluepair&place=Jyväskylä&parameters=Precipitation1h'

//#endregion
//const apibase =   'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::edited::weather::scandinavia::point::timevaluepair&place=Jyväskylä&parameters=PrecipitationAmount'
export default function App() {  

  
  const [saadata_1, setTuntiData1] = useState([]);

  const [state, setState] = useState({
    data: [],
    limit: 5,
    activePage: 1,
    saadata1: []
    //jostain syystä funktion sisällä nämä näkyy sitten katoaa kun piirtäminen alkaa
  });  

  useEffect(() => {

    const paivamaara = new Date();
    paivamaara.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' });
    const vuosi = paivamaara.getFullYear();
    const kuukausi = String(paivamaara.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const paiva = String(paivamaara.getDate()).padStart(2, '0');
    const tunti = String(paivamaara.getHours()).padStart(2, '0');
    const paivays = vuosi + "-" + kuukausi + "-" + paiva + "T" + tunti + ":00:00Z"

    //useita axios requesteja tapahtuu, joten estetään se
    if(state.data.length <= 0) {
      axios
      .get((apibase+"&starttime="+paivays)).then((result) => {

        var poissuljettavat_yön_ajat = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00"];

        let parser = new DOMParser();
        let parsedxml = parser.parseFromString(result.data, "text/xml");
        var lkm=0;
        parsedxml.querySelectorAll('MeasurementTVP').forEach((measurementTVPObjektit) => {

          let value = measurementTVPObjektit.querySelector('value').textContent;
          let time = measurementTVPObjektit.querySelector('time').textContent;

          var kokonainenaika = time.split(/T/);
          var kellonaika = kokonainenaika[1].split(/:/);
          var kellonaika0 = kellonaika[0];
          var kellonaika1 = kellonaika[1];
          var uusiaika = kellonaika0 + ":" + kellonaika1;

          var huomenna = 0;
          var paivamaarateksti = '';
          if(state.saadata1.length <= 20) {

            if (poissuljettavat_yön_ajat.indexOf(uusiaika) < 0) {  
              lkm++;
              
              //päätellään milloin pitää piirtää huomisteksti
              if(uusiaika === '07:00' && huomenna === 0) {
                const viikonpaiva = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];
                const paiva = new Date(kokonainenaika[0]);
                paivamaarateksti = viikonpaiva[paiva.getDay()];
                //paivamaarateksti = kokonainenaika[0];
                huomenna = 1;
              }
              if (lkm <= 20) {
                value = uusiaika +"-"+value;
                setState({saadata1: state.saadata1.push({uusiaika, paivamaarateksti, value})});
                setState({data: state.data.push({uusiaika, paivamaarateksti, value})});              
              }           
            }
            paivamaarateksti = '';
          }
        });
        // ei näin setState({data: state.saadata_1});
        setState((prev) => ({
          ...prev,
          data: state.saadata1
        }));

        setTuntiData1(state.saadata1);
                
      })
      .catch((error) => console.log(error));
    }
  }, [state.data]);


    return (
    <div>
        <Container>
          <Row>
            <Col md="9">
              <br />
              <div align="center">           
              <h6 className="violetti">Rainbit - sataako Jyväskylässä</h6> 
              </div>          
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="9">
              <br />
              <div align="left">     
              <Alert key="light" variant="light" width="60%">
                <i className="bi bi-cloud-check-fill lila" title="ei sada">  ei sada</i>
                <br />
                <i className="bi bi-cloud-drizzle-fill lila" title="ei sada">  mahdollisesti vähäistä sadetta </i>
                <br />
                <i className="bi bi-cloud-hail-fill lila" title="ei sada"> sadetta</i>
                <br />
                <i className="bi bi-cloud-rain-heavy-fill lila" title="ei sada">  kaatosadetta</i>
              </Alert>
              </div>      
            </Col>
          </Row>
        </Container>              
      <TuuliKomponentti data={state.data} />
      <TuuliKomponenttiEnnustus data={state.data} />

    </div>
  );
};
