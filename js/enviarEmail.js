//#region Enviar email

function ValidarEnviarEmail() {

    let Nombre = document.getElementById("txtNombre").value;
    let Celular = document.getElementById("txtCelular").value;
    let Email = document.getElementById("txtEmail").value;
    let NombreEmpresa = document.getElementById("txtNombreEvento").value;
    let Rubro = document.getElementById("txtRubro").value;
    let Sucursales = document.getElementById("txtCantSucursales").value;
    let Localidad = document.getElementById("txtLocalidad").value;
//Chekeds
    
    var chkStock = $('#ChekStock').prop('checked');
    if (chkStock == true) {

       let chkStockText = document.getElementById("ChekStock").value;

  
}else{
        
}
var chkPrecios = $('#ChekPrecios').prop('checked');
if (ChekPrecios==true){
    
    let ChekPreciosText= document.getElementById("ChekPrecios").value;
    console.log(chkStockText);
    console.log(ChekPreciosText);
    }
    let chkCaja = document.getElementById("ChekCaja").value;
    let chkCtacte = document.getElementById("ChekCtaCtes").value;
    let chkGastos = document.getElementById("ChekControlGastos").value;
    let chkFacturacion = document.getElementById("ChekFacturacion").value;
    let chkVinculoSitema = document.getElementById("ChekVinculacionSistemas").value;
    let chkVentas = document.getElementById("ChekVentas").value;
    let chkAccesRemoto= document.getElementById("ChekAccesoRemoto").value;
// Detalles
    let Detalles = document.getElementById("txtDescripcion").value;
   

    if (Nombre == '') {

        swal("Error", "Por favor complete con su nombre", "warning");
        return;

    } else {

        if (Celular == '') {

            swal("Error", "Por favor complete con su teléfono", "warning");
            return;

        } else {

            if (Email == '') {

                swal("Error", "Por favor complete con el nombre de su evento", "warning");
                return;

            } else {

                if (NombreEmpresa == '') {

                    swal("Error", "Por favor complete con su email", "warning");
                    return;

                } else {

                    if (Rubro == '') {

                        swal("Error", "Por favor complete con el rubro de la empresa", "warning");
                        return;

                        } else {

                            if (Sucursales == '') {

                            swal("Error", "Por favor indique la cantidad de sucursales", "warning");
                          return;

                             } else {

                                if (Localidad == '') {

                                    swal("Error", "Por favor indique la localidad de la empresa", "warning");
                                    return;

                                } else {

                                    if (Detalles == '') {

                                        swal("Error", "Por favor complete con su email", "warning");
                                        return;

                                 
                                    } else {

                   

                                        swal({
                                        title: "¿Desea enviar sus datos para que nos pongamos en contacto con usted?",
                                        type: "question",
                                        showCancelButton: true,
                                        cancelButtonText: 'CANCELAR',
                                        reverseButtons: true,
                                        confirmButtonText: 'ACEPTAR',
                                        confirmButtonColor: '#39b2c7',
                                        closeOnConfirm: false,
                                        showLoaderOnConfirm: true,
                                        allowOutsideClick: false,
                                        preConfirm: function () {

                                            let datos = {
                                                Nombre,
                                                Celular,
                                                NombreEvento,
                                                Direccion,
                                                Email,
                                                Redes
                                            };

                                            EnviarEmail(datos);
                                        }
                                    });
                               }
                                
                            }
                        }
                            
                    }
                
                }

            }

        }
    }

}

function EnviarEmail(datos) {


    let json = { cadena: JSON.stringify(datos) }

    $.ajax({
        type: 'POST',
        url: 'frmInicio.aspx/EnviarEmail',
        data: JSON.stringify(json),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = $.parseJSON(data.d);
            var status = json.Status;

            if (status == 200) {

                swal("Datos enviados", "Nos pondremos en contacto a la brevedad", "success");
                document.getElementById("txtNombre").value = '';
                document.getElementById("txtCelular").value = '';
                document.getElementById("txtNombreEvento").value = '';
                document.getElementById("txtDireccion").value = '';
                document.getElementById("txtEmail").value = '';
                document.getElementById("txtRedes").value = '';

            } else {

                swal("Algo salió mal", "Intente nuevamente", "warning");

            }


        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);

        },
        beforeSend: function () {


        },
        complete: function () {



        }
    })

}

//#endregion