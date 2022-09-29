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
    
    var chkPrecios = $('#ChekPrecios').prop('checked');
    var chkStock = $('#ChekStock').prop('checked');
    var chkCaja = $('#ChekCaja').prop('checked');
    var chkCtacte = $('#ChekCtaCtes').prop('checked');
    var chkGastos = $('#ChekControlGastos').prop('checked');
    var chkFacturacion = $('#ChekFacturacion').prop('checked');
    var chkVinculoSitema = $('#ChekVinculacionSistemas').prop('checked');
    var chkVentas = $('#ChekVentas').prop('checked');
    var chkAccesRemoto= $('#ChekAccesoRemoto').prop('checked');
    let Detalles = document.getElementById("txtDescripcion").value;
    //-*------------------------------------------------------------------------------------------


if (chkStock == true) 
{
    
    let chkStockText = document.getElementById("ChekStock").value;
    
    
    console.log(chkStockText);
} 

if (chkPrecios==true)
    {
        let ChekPreciosText= document.getElementById("ChekPrecios").value;
        console.log(ChekPreciosText);
    }
    
 if (chkCaja==true) {
    let chkCajaText = document.getElementById("ChekCaja").value;
    console.log(chkCajaText);

 }  
 
 if (chkCtacte== true){
        let chkCtacteText = document.getElementById("ChekCtaCtes").value;
        console.log(chkCtacteText);
    }

if (chkGastos==true){
    let chkGastosText = document.getElementById("ChekControlGastos").value;
    console.log(chkGastosText);
}
if (chkFacturacion==true){
    let chkFacturacionText = document.getElementById("ChekFacturacion").value;
    console.log(chkFacturacionText);
}
if (chkVinculoSitema==true) {
    let chkVinculoSitemaText = document.getElementById("ChekVinculacionSistemas").value;
    console.log(chkVinculoSitemaText);
}  
if (chkVentas==true){
    let chkVentasText = document.getElementById("ChekVentas").value;
    console.log(chkVentasText);

}
if (chkAccesRemoto== true) {
    let chkAccesRemotoText = document.getElementById("ChekAccesoRemoto").value;
    console.log(chkAccesRemotoText);
}
//Validacion de campos Textos

    

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

                                        swal("Error", "Por favor comentanos alguna expectativa que tengas", "warning");
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
                                                Email,
                                                NombreEmpresa,
                                                Rubro,
                                                Sucursales,
                                                Localidad,
                                                chkStockText,
                                                ChekPreciosText,
                                                chkCajaText,
                                                chkCtacteText,
                                                chkGastosText,
                                                chkFacturacionText,
                                                chkVinculoSitemaText,
                                                chkVentasText,
                                            };D

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
                //campos

                swal("Datos enviados", "Nos pondremos en contacto a la brevedad", "success");
                document.getElementById("txtNombre").value = '';
                document.getElementById("txtCelular").value = '';
                document.getElementById("txtEmail").value = '';
                document.getElementById("txtNombreEvento").value = '';
                document.getElementById("txtRubro").value = '';
                document.getElementById("txtCantSucursales").value = '';
                document.getElementById("txtLocalidad").value = '';
                document.getElementById("txtDescripcion").value = '';

                //Checkbox 
                chkStockText = document.getElementById("ChekStock").value = false;
                ChekPreciosText= document.getElementById("ChekPrecios").value = false;
                chkCajaText = document.getElementById("ChekCaja").value = false;
                chkCtacteText = document.getElementById("ChekCtaCtes").value = false;
                chkGastosText = document.getElementById("ChekControlGastos").value = false;
                chkFacturacionText = document.getElementById("ChekFacturacion").value = false;
                chkVinculoSitemaText = document.getElementById("ChekVinculacionSistemas").value = false;
                chkVentasText = document.getElementById("ChekVentas").value = false;
                chkAccesRemotoText = document.getElementById("ChekAccesoRemoto").value = false;
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