// DEV
// const ip = 'localhost';
// const puerto = '3000';
// const urlApiApartamentos = 'http://'+ip+':'+puerto+'/apartamentos';
// const urlApiCasas = 'http://'+ip+':'+puerto+'/casas';

// NON-PROD
const urlApiApartamentos = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/apartamentos.json';
const urlApiCasas = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/casas.json';

// PROD
// const urlApiApartamentos = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/apartamentos';
// const urlApiCasas = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/casas';

const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const formatterMiles = new Intl.NumberFormat('es-CO', {   //Formato miles para cantidades
  style: 'decimal',
  minimumFractionDigits: 0
});

fetch(urlApiApartamentos)                 //API REST para la simulación de la tabla tratamientos de la base de datos
  .then(response => response.json())
  .then(apartamentos => {
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
              <th> tipo </th>
              <th> <i class="fa fa-bed"></i> </th>
              <th> <i class="fa fa-bath"></i> </th>
              <th> <i class="fa fa-car"></i> </th>
              <th> área </th>
              <th> valor </th>
              <th> descripción </th>
              <th> ciudad </th>
            </tr>
      `;

      let bodyApartamentos = [];
      for (const [i] of apartamentos.entries()) {
        bodyApartamentos[i] = `
          <tr>
            <td> ${apartamentos[i].id} </td>
            <td> ${apartamentos[i].detalle.imagen} </td>
            <td> ${apartamentos[i].detalle.nombre} </td>
            <td> ${apartamentos[i].detalle.tipo} </td>
            <td> ${apartamentos[i].detalle.habitaciones} </td>
            <td> ${apartamentos[i].detalle.baños} </td>
            <td> ${apartamentos[i].detalle.parqueaderos} </td>
            <td> ${apartamentos[i].detalle.area} </td>
            <td class='precio'> ${apartamentos[i].detalle.valor} </td>
            <td> ${apartamentos[i].detalle.descripcion} </td>
            <td> ${apartamentos[i].detalle.ciudad} </td>
        </tr>  
      `};

      const footerApartamentos = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br>
      `;

      contenidoApartamentos.innerHTML = headerApartamentos + bodyApartamentos.join('') + footerApartamentos;
});

fetch(urlApiCasas)                 //API REST para la simulación de la tabla tratamientos de la base de datos
  .then(response => response.json())
  .then(casas => {
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
              <th> tipo </th>
              <th> <i class="fa fa-bed"></i> </th>
              <th> <i class="fa fa-bath"></i> </th>
              <th> <i class="fa fa-car"></i> </th>
              <th> área </th>
              <th> valor </th>
              <th> descripción </th>
              <th> ciudad </th>
            </tr>  
        `;

        let bodyCasas = [];
        for (const [i] of casas.entries()) {
          bodyCasas[i] = `
            <tr>
            <td> ${casas[i].id} </td>
            <td> ${casas[i].detalle.imagen} </td>
            <td> ${casas[i].detalle.nombre} </td>
            <td> ${casas[i].detalle.tipo} </td>
            <td> ${casas[i].detalle.habitaciones} </td>
            <td> ${casas[i].detalle.baños} </td>
            <td> ${casas[i].detalle.parqueaderos} </td>
            <td> ${casas[i].detalle.area} </td>
            <td class='precio'> ${casas[i].detalle.valor} </td>
            <td> ${casas[i].detalle.descripcion} </td>
            <td> ${casas[i].detalle.ciudad} </td>
            </tr>
        `};

        const footerCasas = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br><br></br>
        `;

        contenidoCasas.innerHTML = headerCasas + bodyCasas.join('') + footerCasas;
});