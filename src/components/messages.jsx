import 'toastr/build/toastr.css'
import { VALIDATION } from '../util/enum.js'
import toastr from 'toastr'


const Message =  (type, msg) => {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "900",
        "timeOut": "2000",
        "extendedTimeOut": "000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "positionClass": "toast-bottom-right",
    }
    if(type == VALIDATION.NON_AUTHORIZED)
        toastr["info"](msg, 'Não Autorizado')
    if(type == VALIDATION.ERROR ){
        toastr['error'](msg,'Falha');
    }
    else if(type == VALIDATION.ERROR_FIELD){
        toastr['error'](msg, "Campo incorreto.");
    }
    else if(type == VALIDATION.SUCCESS){
        toastr['success'](msg, "Sucesso!");
    }
}
	
export default Message;

