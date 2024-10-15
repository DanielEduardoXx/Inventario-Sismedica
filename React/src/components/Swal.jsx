import Swal from "sweetalert2";

export const swalEliminar = (id, entidad, eliminarFila) => {
    Swal.fire({
        title: '¡Espera Un Momento!',
        text: `¿Seguro que quieres eliminar ${entidad} con identificador: ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed && typeof eliminarFila === "function") {  // Verifica que eliminarFila sea una función
            eliminarFila(id);  // Ejecuta la función solo si es válida
        } else {
            console.error("eliminarFila no es una función válida", eliminarFila); // Error de consola si no es función
        }
    });
};

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