// DEV
// const ip = 'localhost';
// const puerto = '3000';
// const urlApiInmuebles = 'http://' + ip + ':' + puerto + '/inmuebles';

// NON-PROD
const urlApiInmuebles = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/inmuebles.json';

// PROD
// const urlApiInmuebles = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/inmuebles';

const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const formatterMiles = new Intl.NumberFormat('es-CO', {   //Formato miles para cantidades
  style: 'decimal',
  minimumFractionDigits: 0
});

fetch(urlApiInmuebles)                 //API REST para la simulación de la tabla Apartamentos de la base de datos
  .then(response => response.json())
  .then(inmuebles => {
      let contenidoApartamentos = document.getElementById('contenidoApartamentos');

      const headerApartamentos = `
        <div class="columnaContenido">
          <hr/>
          <h3> Apartamentos </h3>
          <hr/>
          <table border='1'>
            <tr>
              <th> n° </th>
              <th> <i class="fa fa-camera"></i> </th>
              <th> nombre </th>
              <th> categoría </th>
              <th> tipo </th>
              <th> <i class="fa fa-bed"></i> </th>
              <th> <i class="fa fa-bath"></i> </th>
              <th> <i class="fa fa-car"></i> </th>
              <th> área </th>
              <th> valor </th>
              <th> descripción </th>
              <th> ciudad </th>
              <th> Zona/Barrio </th>
              <th> Estrato </th>
              <th> Estado </th>
            </tr>
      `;

      let bodyApartamentos = [];
      for (const [i] of inmuebles.entries()) {
        if(inmuebles[i].detalle.categoria === 'Apartamento') {
          bodyApartamentos[i] = `
            <tr>
              <td> ${inmuebles[i].id} </td>
              <td> <input type="image" src="/assets/inmuebles/${inmuebles[i].detalle.imagen}" class="imageInmueble" /> </td>
              <td> ${inmuebles[i].detalle.nombre} </td>
              <td> ${inmuebles[i].detalle.categoria} </td>
              <td> ${inmuebles[i].detalle.tipo} </td>
              <td> ${inmuebles[i].detalle.habitaciones} </td>
              <td> ${inmuebles[i].detalle.baños} </td>
              <td> ${inmuebles[i].detalle.parqueaderos} </td>
              <td> ${inmuebles[i].detalle.area}&nbsp;m<sup>2</sup></td>
              <td class='precio'> ${formatterPeso.format(inmuebles[i].detalle.valor)} </td>
              <td> ${inmuebles[i].detalle.descripcion} </td>
              <td> ${inmuebles[i].detalle.ciudad} </td>
              <td> ${inmuebles[i].detalle.sector} </td>
              <td> ${inmuebles[i].detalle.estrato} </td>
              <td> ${inmuebles[i].detalle.estado} </td>
            </tr>  
        `};
      }

      const footerApartamentos = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br>
      `;

      contenidoApartamentos.innerHTML = headerApartamentos + bodyApartamentos.join('') + footerApartamentos;
});

fetch(urlApiInmuebles)                 //API REST para la simulación de la tabla Inmuebles de la base de datos
  .then(response => response.json())
  .then(inmuebles => {
      let contenidoCasas = document.getElementById('contenidoCasas');

      const headerCasas = `
        <div class="columnaContenido">  
          <hr/>
          <h3> Casas </h3>
          <hr/>
          <table border='1'>
            <tr>
              <th> n° </th>
              <th> <i class="fa fa-camera"></i> </th>
              <th> nombre </th>
              <th> categoría </th>
              <th> tipo </th>
              <th> <i class="fa fa-bed"></i> </th>
              <th> <i class="fa fa-bath"></i> </th>
              <th> <i class="fa fa-car"></i> </th>
              <th> área </th>
              <th> valor </th>
              <th> descripción </th>
              <th> ciudad </th>
              <th> Zona/Barrio </th>
              <th> Estrato </th>
              <th> Estado </th>
            </tr>  
        `;

        let bodyCasas = [];
        for (const [i] of inmuebles.entries()) {
          if(inmuebles[i].detalle.categoria === 'Casa') {
            bodyCasas[i] = `
              <tr>
              <td> ${inmuebles[i].id} </td>
              <td> <input type="image" src="/assets/inmuebles/${inmuebles[i].detalle.imagen}" class="imageInmueble" /> </td>
              <td> ${inmuebles[i].detalle.nombre} </td>
              <td> ${inmuebles[i].detalle.categoria} </td>
              <td> ${inmuebles[i].detalle.tipo} </td>
              <td> ${inmuebles[i].detalle.habitaciones} </td>
              <td> ${inmuebles[i].detalle.baños} </td>
              <td> ${inmuebles[i].detalle.parqueaderos} </td>
              <td> ${inmuebles[i].detalle.area}&nbsp;m<sup>2</sup></td>
              <td class='precio'> ${formatterPeso.format(inmuebles[i].detalle.valor)} </td>
              <td> ${inmuebles[i].detalle.descripcion} </td>
              <td> ${inmuebles[i].detalle.ciudad} </td>
              <td> ${inmuebles[i].detalle.sector} </td>
              <td> ${inmuebles[i].detalle.estrato} </td>
              <td> ${inmuebles[i].detalle.estado} </td>
              </tr>
         `};
        }

        const footerCasas = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br><br></br>
        `;

        contenidoCasas.innerHTML = headerCasas + bodyCasas.join('') + footerCasas;
});