let dominio = 'AB123CD';
let datosAdicionales = "Solicito cedulas verdes y azules";

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
    let botonContinuar = document.getElementById("btn-continuar");
    botonContinuar.click();

    // 8
    let s = "Ingresaste el dominio: " + dominio + "\nVerificá que sea correcto."
        + "\n\nSi es correcto apretá enter\nSi no es correcto, apretá ESC y volvé a empezar."; 
    let confirmacion = confirm(s);
    if (!confirmacion) {
        console.log("no confirmado");
        return false;
    }
    let botonConfirmar = document.getElementById("btn-confirm");
    botonConfirmar.click();

    return true;
}

// backup
function theDomHasLoaded(e) {
    console.log("2. " + location.href);
}

function main() {
    if (!URL_esCorrecta()) return;
    if (!primerFormularioSuccess(dominio)) {
        window.location = "https://certificadosonline.gob.gba.gob.ar/certificado/extravio/nuevo";
        return;
    }
    
    console.log("1. " + location.href);
    document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

}

main();
