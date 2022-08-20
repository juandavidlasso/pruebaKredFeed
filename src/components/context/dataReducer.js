import {RAZON_SOCIAL,NUMERO_COMERCIAL,NACIONALIDAD,FECHA_CONSTITUCION,RFC,REGIMEN_FISCAL,INDUSTRIA,TELEFONO,EMAIL,
        PAIS,ESTADO,CIUDAD,COLONIA,CODIGO_POSTAL,CALLE,NUMERO_EXTERIOR,NUMERO_INTERIOR,
        NOMBRE_RL,GENERO_RL,FECHA_NACIMIENTO_RL,ENTIDAD_FEDERATIVA_RL,PAIS_NACIMIENTO_RL,NACIONALIDAD_RL,CURP_RL,RFC_RL,ESTADO_CIVIL_RL,EMAIL_RL,TELEFONO_RL,DOCUMENTO_RL,
        CLABE, BANCO, DOMICILIO_LEGAL } from './types'

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case RAZON_SOCIAL:
            return {
                ...state,
                razonSocial: action.payload
            }
        case NUMERO_COMERCIAL:
            return {
                ...state,
                nombreComercial: action.payload
            }
        case NACIONALIDAD:
            return {
                ...state,
                nacionalidad: action.payload
            }
        case FECHA_CONSTITUCION:
            return {
                ...state,
                fechaConstitucion: action.payload
            }
        case RFC:
            return {
                ...state,
                rfc: action.payload
            }
        case REGIMEN_FISCAL:
            return {
                ...state,
                regimenFiscal: action.payload
            }
        case INDUSTRIA:
            return {
                ...state,
                industria: action.payload
            }
        case TELEFONO:
            return {
                ...state,
                telefono: action.payload
            }
        case EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case PAIS:
            return {
                ...state,
                pais: action.payload
            }
        case ESTADO:
            return {
                ...state,
                estado: action.payload
            }
        case CIUDAD:
            return {
                ...state,
                ciudad: action.payload
            }
        case COLONIA:
            return {
                ...state,
                colonia: action.payload
            }
        case CODIGO_POSTAL:
            return {
                ...state,
                codigoPostal: action.payload
            }
        case CALLE:
            return {
                ...state,
                calle: action.payload
            }
        case NUMERO_EXTERIOR:
            return {
                ...state,
                numeroExterior: action.payload
            }
        case NUMERO_INTERIOR:
            return {
                ...state,
                numeroInterior: action.payload
            }
        case NOMBRE_RL:
            return {
                ...state,
                nombre: action.payload
            }
        case GENERO_RL:
            return {
                ...state,
                genero: action.payload
            }
        case FECHA_NACIMIENTO_RL:
            return {
                ...state,
                fechaNacimiento: action.payload
            }
        case ENTIDAD_FEDERATIVA_RL:
            return {
                ...state,
                entidadFederativa: action.payload
            }
        case PAIS_NACIMIENTO_RL:
            return {
                ...state,
                paisNacimiento: action.payload
            }
        case NACIONALIDAD_RL:
            return {
                ...state,
                nacionalidadRL: action.payload
            }
        case CURP_RL:
            return {
                ...state,
                curp: action.payload
            }
        case RFC_RL:
            return {
                ...state,
                rfcRL: action.payload
            }
        case ESTADO_CIVIL_RL:
            return {
                ...state,
                estadoCivil: action.payload
            }
        case EMAIL_RL:
            return {
                ...state,
                correo: action.payload
            }
        case TELEFONO_RL:
            return {
                ...state,
                telefonoRL: action.payload
            }
        case DOCUMENTO_RL:
            return {
                ...state,
                documentoRL: action.payload
            }
        case CLABE:
            return {
                ...state,
                clabe: action.payload
            }
        case BANCO:
            return {
                ...state,
                banco: action.payload
            }
        case DOMICILIO_LEGAL:
            return {
                ...state,
                domicilioLegal: action.payload
            }
        default:
            return state
    }
}
