import Swal from "sweetalert2";


export const swalEliminar = ({ children }) => {
    Swal.fire({
        title: '¡Espera Un Momento!',
        text: children,
        icon: 'warning', // Puedes usar 'error', 'warning', 'info' o 'question'success
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {

            console.log('Boton')
            // Swal.fire(
            //     'Eliminado!',
            //     'Tu archivo ha sido eliminado.',
            //     'success'
            // )
        }
    });
}

// Swal.fire({
//     title: '¿Estás seguro?',
//     text: "No podrás revertir esto",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Sí, eliminarlo!',
//     cancelButtonText: 'Cancelar'
// }).then((result) => {
//     if (result.isConfirmed) {
//         Swal.fire(
//             'Eliminado!',
//             'Tu archivo ha sido eliminado.',
//             'success'
//         )
//     }
// });



//Alerta con temporizador:


// Swal.fire({
//     title: 'Cerrando en 3 segundos',
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   });