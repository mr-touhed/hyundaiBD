import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


export const ShowAlert = (status, message) =>{
    Swal.fire({
        title: status ? "Wow" :"Opss",
        text: message,
        icon: status ? 'success' :'error',
        confirmButtonText: status ?'Cool' : "Try Again"
      })
}