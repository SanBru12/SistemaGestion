//#region Enviar email

function ValidarEnviarEmail() {

    let Nombre = document.getElementById("txtNombre").value;
    let Celular = document.getElementById("txtCelular").value;
    let NombreEvento = document.getElementById("txtNombreEvento").value;
    let Direccion = document.getElementById("txtDireccion").value;
    let Email = document.getElementById("txtEmail").value;
    let Redes = document.getElementById("txtRedes").value;
   

    if (Nombre == '') {

        swal("Error", "Por favor complete con su nombre", "warning");
        return;

    } else {

        if (Celular == '') {

            swal("Error", "Por favor complete con su teléfono", "warning");
            return;

        } else {

            if (NombreEvento == '') {

                swal("Error", "Por favor complete con el nombre de su evento", "warning");
                return;

            } else {

                if (Email == '') {

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