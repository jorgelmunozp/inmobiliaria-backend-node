// DEV
const ip = 'localhost';
const puerto = '3000';
const urlApiApartamentos = 'http://'+ip+':'+puerto+'/apartamentos';
const urlApiCasas = 'http://'+ip+':'+puerto+'/casas';

// NON-PROD
// const urlApiApartamentos = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/apartamentos.json';
// const urlApiCasas = 'https://jorgelmunozp.github.io/inmobiliaria-backend-node/casas.json';

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
              <th> N° </th>
              <th> nombre </th>
              <th> categoria </th>
              <th> tipo </th>
              <th> <i class="fa fa-bed"></i> </th>
              <th> <i class="fa fa-bath"></i> </th>
              <th> <i class="fa fa-car"></i> </th>
              <th> area </th>
              <th> valor </th>
              <th> descripcion </th>
              <th> ciudad </th>
            </tr>
      `;

      let bodyApartamentos = [];
      for (const [i] of apartamentos.entries()) {
        bodyApartamentos[i] = `
          <tr>
            <td> ${apartamentos[i].id} </td>
            <td> ${apartamentos[i].apartamento.nombre} </td>
            <td> ${apartamentos[i].apartamento.categoria} </td>
            <td> ${apartamentos[i].apartamento.tipo} </td>
            <td> ${apartamentos[i].apartamento.habitaciones} </td>
            <td> ${apartamentos[i].apartamento.baños} </td>
            <td> ${apartamentos[i].apartamento.parqueaderos} </td>
            <td> ${apartamentos[i].apartamento.area} </td>
            <td> ${apartamentos[i].apartamento.valor} </td>
            <td> ${apartamentos[i].apartamento.descripcion} </td>
            <td> ${apartamentos[i].apartamento.ciudad} </td>
        </tr>  
      `};

      const footerApartamentos = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br>
      `;

      contenidoApartamentos.innerHTML = headerApartamentos + bodyApartamentos.join('') + footerApartamentos;
});

fetch(urlApiPacientes)                 //API REST para la simulación de la tabla tratamientos de la base de datos
  .then(response => response.json())
  .then(pacientes => {
      let contenidoPacientes = document.getElementById('contenidoPacientes');

      const headerPacientes = `
        <div class="columnaContenido">  
          <hr/>
          <h3> Pacientes Afiliados </h3>
          <hr/>
          <table border='1'>
            <tr>
              <th> Id </th>
              <th> Identificación </th>
              <th> Nombre </th>
              <th> Apellido </th>
              <th> Género </th>
              <th> Eps </th>
            </tr>  
        `;

        let bodyPacientes = [];
        for (const [i] of pacientes.entries()) {
          bodyPacientes[i] = `
            <tr>
              <td> ${pacientes[i].id} </td>
              <td> ${pacientes[i].paciente.identificacion} </td>
              <td> ${pacientes[i].paciente.nombre} </td>
              <td> ${pacientes[i].paciente.apellido} </td>
              <td> ${pacientes[i].paciente.genero} </td>
              <td> ${pacientes[i].paciente.eps} </td>
            </tr>
        `};

        const footerPacientes = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br><br></br>
        `;

        contenidoPacientes.innerHTML = headerPacientes + bodyPacientes.join('') + footerPacientes;
});

fetch(urlApiTratamientos)                 //API REST para la simulación de la tabla tratamientos de la base de datos
  .then(response => response.json())
  .then(tratamientos => {
      let contenidoTratamientos = document.getElementById('contenidoTratamientos');

      const headerTratamientos = `
        <div class="columnaContenido"> 
        <hr/>
        <h3> Tratamientos Autorizados </h3>
        <hr/>
        <table border='1'>
          <tr>
            <th> N° </th>
            <th> Tratamiento </th>
            <th> Consultorio </th>
            <th> Doctor </th>
          </tr>      
        `;

        let bodyTratamientos = [];
          for (const [i] of tratamientos.entries()) {
            bodyTratamientos[i] = `
              <tr>
                <td> ${tratamientos[i].id} </td>
                <td> ${tratamientos[i].tratamiento.nombre} </td>
                <td> ${tratamientos[i].tratamiento.consultorio} </td>
                <td> ${tratamientos[i].tratamiento.doctor} </td>
              </tr>
        `};

        const footerTratamientos = `
                </table>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br>
        `;

        contenidoTratamientos.innerHTML = headerTratamientos + bodyTratamientos.join('') + footerTratamientos; 
  });

fetch(urlApiDoctores)                 //API REST para la simulación de la tabla doctores de la base de datos
  .then(response => response.json())
  .then(doctores => {
      let contenidoDoctores = document.getElementById('contenidoDoctores');

      const headerDoctores =  `  
        <div class="columnaContenido"> 
          <hr/>
          <h3> Doctores Disponibles </h3>
          <hr/>
            <table border='1'>
              <tr>
                <th> Id </th>
                <th> Nombre </th>
                <th> Apellido </th>
                <th> Especialidad </th>
              </tr>       
          `;

          let bodyDoctores = [];
          for (const [i] of doctores.entries()) {
            bodyDoctores[i] = `
                  <tr>
                    <td> ${doctores[i].id} </td>
                    <td> ${doctores[i].doctor.nombre} </td>
                    <td> ${doctores[i].doctor.apellido} </td>
                    <td> ${doctores[i].doctor.especialidad} </td>
                  </tr>
          `};

          const footerDoctores = `  
                  </table>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
          `;

          contenidoDoctores.innerHTML = headerDoctores + bodyDoctores.join('') + footerDoctores;
  });

  fetch(urlApiConsultorios)                 //API REST para la simulación de la tabla tratamientos de la base de datos
    .then(response => response.json())
    .then(consultorios => {
        let contenidoConsultorios = document.getElementById('contenidoConsultorios');
  
        const headerConsultorios = ` 
        <div class="columnaContenido">  
        <hr/>
        <h3> Consultorios Disponibles </h3>
        <hr/>
        <table border='1'>
          <tr>
            <th> N° </th>
            <th> Número </th>
            <th> Consultorio </th>
          </tr>  
        `;

        let bodyConsultorios = [];
        for (const [i] of consultorios.entries()) {
          bodyConsultorios[i] = `
            <tr>
              <td> ${consultorios[i].id} </td>
              <td> ${consultorios[i].consultorio.numero} </td>
              <td> ${consultorios[i].consultorio.nombre} </td>
            </tr> 
        `};

        const footerConsultorios = ` 
              </table>
            </div>        
            <br></br><br></br><br></br><br></br><br></br><br></br>

        `;

        contenidoConsultorios.innerHTML = headerConsultorios + bodyConsultorios.join('') + footerConsultorios;
  });