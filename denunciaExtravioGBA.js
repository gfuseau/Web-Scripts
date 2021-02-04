let dominio = 'AB123CD';
let datosAdicionales = "Solicito cedulas verdes y azules";

function addButton(ele) {
    let btn = document.createElement("button");
    btn.innerHTML = "--AUTOLLENAR--";
    btn.className = "fillBtn";
    btn.onclick = () => {
        main();
    }
    ele.insertBefore(document.createElement('br'), ele.childNodes[0]);
    ele.insertBefore(btn, ele.childNodes[0]);
}

function URL_esCorrecta() {
    let string = location.href;
    let convertedString = string.toLowerCase();

    if (convertedString.indexOf('certificado/extravio/nuevo') != -1) {
        return true;
    } else {
        alert("Tenés que estar en la página https://certificadosonline.gob.gba.gob.ar/certificado/extravio/nuevo"
        + "\n\nDonde dice: \"Denuncia por extravío\""
        );
        return false;
    }
}

function primerFormularioSuccess(dominio) {
    // 2
    let aDenunciar = document.getElementById('lost_certificate_lostDocument');
    aDenunciar.value = '1';

    // 3
    dominio = window.prompt("Ingresar dominio","Dominio");
    if (dominio == null) return false;
    let ingresarDominio = document.getElementById('lost_certificate_associatedAnswer');
    ingresarDominio.value = dominio;

    // 4
    let ingresarDatosAdicionales = document.getElementById("lost_certificate_additionalText");
    ingresarDatosAdicionales.value = datosAdicionales;

    // 5
    let tipoTramite = document.getElementById("lost_certificate_typeProcedure");
    tipoTramite.value = "19";

    // 6
    let ingresarEntidad = document.getElementById("lost_certificate_entity");
    ingresarEntidad.value = "DNRPA";

    // 7
    let s = "Ingresaste el dominio: " + dominio + "\nVerificá que sea correcto.";
    let confirmacion = confirm(s);
    if (!confirmacion) {
        console.log("no confirmado");
        location.reload();
        return false;
    }

    let botonContinuar = document.getElementById("btn-continuar");
    alert("si");
    botonContinuar.click();

    // 8
    //let botonConfirmar = document.getElementById("btn-confirm");
    //botonConfirmar.click();

    return true;
}

function main() {
    if (!URL_esCorrecta()) return;
    if (!primerFormularioSuccess(dominio)) {
        document.activeElement.blur();
        alert("a");
        //window.location = "https://certificadosonline.gob.gba.gob.ar/certificado/extravio/nuevo";
        alert("b");
        return;
    }
}

let asdf = document.getElementById("lbl-document");
addButton(asdf);
