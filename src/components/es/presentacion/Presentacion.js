import React, {useEffect} from "react";
import { Menu} from "../../es/menu/Menu";
import "./presentacion.css";
import { Footer } from "../footer/Footer";
import pages from "../../../images/presentacion/paginas-codice.jpg";
import cacao from "../../../images/presentacion/cacao.jpg";
import vectorCacao from "../../../images/presentacion/vector-cacao.jpg";
import pdfMoreno from "../../../documents/moreno_toscano.pdf"

export const Presentacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="view">
      <Menu />
      <div className="header-section">
        <p className="subtitle-section text-center">Presentación</p>
        <h1 className="section_titles text-center">El Códice Maya de México</h1>
        <h1 className="section_titles">Almanaque de Venus</h1>
        <p className="name-author">Alejandra Moreno Toscano</p>
      </div>
      <div className="paginas-codice">
        <img alt="pages" src={pages} />
      </div>
      <article className="article-white">
        <p className="dropcap">
          El día que los artesanos de las comunidades indígenas otomíes de San
          Pablito-Pahuatlán, en el estado de Puebla, eligieron el árbol de Amate
          del que extrajeron corteza de acuerdo al proceso utilizado por las
          culturas precolombinas de México y generaron el lienzo donde se
          imprimiría el facsímil del Códice Maya de México, los astrónomos
          confirmaron que había agua en la superficie iluminada de la Luna.
          Comenzó la escritura de los textos de investigación en diciembre de
          2020 cuando retornaba a la atmósfera terrestre la cápsula del Hayabusa
          2, luego de 18 meses de navegar en el espacio, con las muestras
          rocosas del asteroide Ryugu. Las muestras permitirán comprobar si los
          iones de hidrógeno que emite el Sol reaccionan con el oxígeno en las
          rocas y crean moléculas de agua. Con ello se resolverá el enigma de la
          formación del agua en nuestro planeta.
        </p>

        <br />
        <h3 className="section-subtitle top-line">
          El Códice Maya de México es el objeto legible conservado más antiguo
          de la civilización mesoamericana.
        </h3>

        <br />
        <p>
          Fue pintado sobre láminas de corteza de árboles de amate vivos entre
          1021 y 1154 d. C. Su contenido se refiere a la revolución sinódica del
          planeta Venus al que observamos a simple vista como Estrella de la
          Mañana o Estrella Vespertina. También se refiere a la posición de
          Venus con relación a la Luna y al Sol en cada una de las estaciones.
          En otras palabras, son láminas extraordinarias que registran
          sistemáticamente los movimientos del planeta Venus como fenómeno
          astronómico recurrente y observable. Agregamos a esta edición para
          subrayarlo el subtítulo Almanaque de Venus.
        </p>

        <br />
        <p>
          La Secretaría de Relaciones Exteriores, la Secretaría de Cultura del
          Gobierno de México, el Instituto Nacional de Antropología e Historia,
          la Biblioteca Nacional de Antropología e Historia y el proyecto de
          Diplomacia Cultural del gobierno de México, respaldaron la edición
          facsimilar del Códice Maya de México, Almanaque de Venus para
          reconocer la capacidad de los hombres de repensar el mundo
          que habitan: descifrarlo, codificarlo, documentarlo y entenderlo a
          partir de perspectivas diferentes. Hoy, cuando la ciencia y la
          tecnología están estrechamente vinculadas a proyectos espaciales,
          recordaremos que la civilización mesoamericana miró hacia los tres
          objetos más luminosos del cielo con rigor, coherencia en el cálculo y
          determinación de transmitir ese conocimiento a las generaciones por
          venir. 
        </p>

        <br />
        <p>
          Los distinguidos especialistas en antropología, epigrafía maya,
          semiótica, astronomía y matemáticas: Baltazar Brito Guadarrama, Erik
          Velásquez García, John B. Carlson y Ricardo F. Vila Freyer escribieron
          los ensayos que acompañan esta edición del Códice Maya de México.
          Almanaque de Venus, teniendo presentes a los lectores jóvenes y a
          estudiantes universitarios de disciplinas como matemáticas, astronomía
          o historia de la ciencia, especialmente a los jóvenes mexicanos que
          durante seis ocasiones han ganado las Olimpiadas en Matemáticas,
          convocadas por el CIMAT, para introducirlos al mundo de los escribas
          mayas observadores del firmamento.
        </p>
        <figure className="gallery-items-2">
          <img src={vectorCacao} alt="vector cacao" />
          <img src={cacao} alt="cacao" />
        </figure>
        <figcaption>
          Ciclo de 8 años de Venus, y un cacaotero abierto (semilla sagrada de
          los mayas).
        </figcaption>

        <br />
        <p>
          Los escribas mayas observadores del cielo que, alrededor del año 1100
          d.C. , sistematizaron y calcularon el tiempo que toma a dos planetas
          girar alrededor del Sol y a un satélite girar alrededor de la
          Tierra, y fueron capaces de precisar ciclos recurrentes y de derivar
          procesos culturales de ese movimiento planetario, realizaron una
          proeza científica y astronómica. Estamos ciertos de que la lectura de
          los ensayos que acompañan a esta edición, escritos desde perspectivas
          diferentes, pero analizando las mismas láminas pintadas por los sabios
          mayas, ayudarán a la comprensión clara de esa aportación científica.
        </p>

        <p>
          Visto desde la Tierra, en el mes de diciembre, cuando los días se
          acortan, Venus parece desafiar al sol. Al terminar el invierno, los
          días se alargan y el planeta entra en una nueva fase. Esa historia del
          ciclo sin fin que nos ha sido contada y vuelta a contar ha dejado
          huella cultural entre nosotros. Por la forma cíclica y recurrente como
          entendemos el mundo puede hoy constituir un aliciente para explorar el
          espacio como factor de desarrollo y bienestar. 
        </p>
      </article>
      <div className="read-more">
      <a
            href={pdfMoreno}
            download="moreno_toscano.pdf"
          >
            Leer más
      </a>
      </div>

      <Footer />
    </section>
  );
};
