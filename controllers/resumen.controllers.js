// Calling the conexion
const conexion = require('../database/database');
const fs = require("fs");
const path = require("path");

class resumen {
    
    // Show the resumen.
    showResumen(req,res){

    };

    // Add resumen.
    addResumen(req,res){

    }

    // Update Resumen
    updateResumen(req,res){

    }

    // Delete
    deleteResumen(req,res){

    }

    // Download
    downloadResumen(req,res){
        const urlFile = "../public/assets/resumen/Adriana_Resume.pdf";
        res.sendFile(path.join(__dirname, urlFile));
    }
}

module.exports = new resumen();