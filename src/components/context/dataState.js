import React, { useReducer } from 'react'
import DataReducer from './dataReducer'
import DataContext from './dataContext'
import {RAZON_SOCIAL,NUMERO_COMERCIAL,NACIONALIDAD,FECHA_CONSTITUCION,RFC,REGIMEN_FISCAL,INDUSTRIA,TELEFONO,EMAIL,
        PAIS,ESTADO,CIUDAD,COLONIA,CODIGO_POSTAL,CALLE,NUMERO_EXTERIOR,NUMERO_INTERIOR,
        NOMBRE_RL,GENERO_RL,FECHA_NACIMIENTO_RL,ENTIDAD_FEDERATIVA_RL,PAIS_NACIMIENTO_RL,NACIONALIDAD_RL,CURP_RL,RFC_RL,ESTADO_CIVIL_RL,EMAIL_RL,TELEFONO_RL,DOCUMENTO_RL,
        CLABE, BANCO, DOMICILIO_LEGAL } from './types'

const DataState = props => {
    const initialState = {
        razonSocial: '',
        nombreComercial: '',
        nacionalidad: '',
        fechaConstitucion: '',
        rfc: '',
        regimenFiscal: '',
        industria: '',
        telefono: '',
        email: '',
        pais: '',
        estado: '',
        ciudad: '',
        colonia: '',
        codigoPostal: '',
        calle: '',
        numeroExterior: '',
        numeroInterior: '',
        nombre: '',
        genero: '',
        fechaNacimiento: '',
        entidadFederativa: '',
        paisNacimiento: '',
        nacionalidadRL: '',
        curp: '',
        rfcRL: '',
        estadoCivil: '',
        correo: '',
        telefonoRL: '',
        documentoRL: '',
        clabe: '',
        banco: '',
        domicilioLegal: {
            paisRL: '',
            estadoRL: '',
            ciudadRL: '',
            coloniaRL: '',
            codigoPostalRL: '',
            calleRL: '',
            numeroExteriorRL: '',
            numeroInteriorRL: '',   
        }
    }

    const [ state, dispatch ] = useReducer(DataReducer, initialState)


    // User functions
    const agregarRazonSocial = razonSocU => {
        dispatch({
            type: RAZON_SOCIAL,
            payload: razonSocU
        })
    }

    const agregarNombreComercial = nombreComU => {
        dispatch({
            type: NUMERO_COMERCIAL,
            payload: nombreComU
        })
    }

    const agregarNacionalidad = nacionalidadU => {
        dispatch({
            type: NACIONALIDAD,
            payload: nacionalidadU
        })
    }

    const agregarFechaConstitucion = fechaConstiU => {
        dispatch({
            type: FECHA_CONSTITUCION,
            payload: fechaConstiU
        })
    }

    const agregarRfc = rfcU => {
        dispatch({
            type: RFC,
            payload: rfcU
        })
    }

    const agregarRegimenFiscal = regimenFiscU => {
        dispatch({
            type: REGIMEN_FISCAL,
            payload: regimenFiscU
        })
    }

    const agregarIndustria = industriaU => {
        dispatch({
            type: INDUSTRIA,
            payload: industriaU
        })
    }

    const agregarTelefono = telefonoU => {
        dispatch({
            type: TELEFONO,
            payload: telefonoU
        })
    }

    const agregarEmail = correoU => {
        dispatch({
            type: EMAIL,
            payload: correoU
        })
    }

    // Home functions
    const agregarPais = paisH => {
        dispatch({
            type: PAIS,
            payload: paisH
        })
    }

    const agregarEstado = estadoH => {
        dispatch({
            type: ESTADO,
            payload: estadoH
        })
    }

    const agregarCiudad = ciudadH => {
        dispatch({
            type: CIUDAD,
            payload: ciudadH
        })
    }

    const agregarColonia = coloniaH => {
        dispatch({
            type: COLONIA,
            payload: coloniaH
        })
    }

    const agregarCodigoPostal = codigoPostalH => {
        dispatch({
            type: CODIGO_POSTAL,
            payload: codigoPostalH
        })
    }

    const agregarCalle = CalleH => {
        dispatch({
            type: CALLE,
            payload: CalleH
        })
    }

    const agregarNumExterior = numExteriorH => {
        dispatch({
            type: NUMERO_EXTERIOR,
            payload: numExteriorH
        })
    }

    const agregarNumInterior = numInteriorH => {
        dispatch({
            type: NUMERO_INTERIOR,
            payload: numInteriorH
        })
    }

    // Legal functions
    const agregarNombre = nombreRL => {
        dispatch({
            type: NOMBRE_RL,
            payload: nombreRL
        })
    }
    const agregarGenero = generoRL => {
        dispatch({
            type: GENERO_RL,
            payload: generoRL
        })
    }
    const agregarFecNacimiento = fechaNacimientoRL => {
        dispatch({
            type: FECHA_NACIMIENTO_RL,
            payload: fechaNacimientoRL
        })
    }
    const agregarEntiFederativa = entidadFederativaRL => {
        dispatch({
            type: ENTIDAD_FEDERATIVA_RL,
            payload: entidadFederativaRL
        })
    }
    const agregarPaisNacimiento = paisNacimientoRL => {
        dispatch({
            type: PAIS_NACIMIENTO_RL,
            payload: paisNacimientoRL
        })
    }
    const agregarNacionalidadRL = nacionalidadRL => {
        dispatch({
            type: NACIONALIDAD_RL,
            payload: nacionalidadRL
        })
    }
    const agregarCurp = curpRL => {
        dispatch({
            type: CURP_RL,
            payload: curpRL
        })
    }
    const agregarRfcRL = rfcRL => {
        dispatch({
            type: RFC_RL,
            payload: rfcRL
        })
    }
    const agregarEstadoCivil = estadoCivilRL => {
        dispatch({
            type: ESTADO_CIVIL_RL,
            payload: estadoCivilRL
        })
    }
    const agregarCorreo = correoRL => {
        dispatch({
            type: EMAIL_RL,
            payload: correoRL
        })
    }
    const agregarTelefonoRL = telefonoRL => {
        dispatch({
            type: TELEFONO_RL,
            payload: telefonoRL
        })
    }
    const agregarDocumentoRL = documentoRL => {
        dispatch({
            type: DOCUMENTO_RL,
            payload: documentoRL
        })
    }

    // Bank functions
    const agregarClabe = clabeB => {
        dispatch({
            type: CLABE,
            payload: clabeB
        })
    }
    const agregarBanco = bancoB => {
        dispatch({
            type: BANCO,
            payload: bancoB
        })
    }
    const agregarDomicilioLegal = domicilioRL => {
        dispatch({
            type: DOMICILIO_LEGAL,
            payload: domicilioRL
        })
    }
  
    return (
        <DataContext.Provider
            value={{
                razonSocial: state.razonSocial,
                nombreComercial: state.nombreComercial,
                nacionalidad: state.nacionalidad,
                fechaConstitucion: state.fechaConstitucion,
                rfc: state.rfc,
                regimenFiscal: state.regimenFiscal,
                industria: state.industria,
                telefono: state.telefono,
                email: state.email,
                pais: state.pais,
                estado: state.estado,
                ciudad: state.ciudad,
                colonia: state.colonia,
                codigoPostal: state.codigoPostal,
                calle: state.calle,
                numeroExterior: state.numeroExterior,
                numeroInterior: state.numeroInterior,
                nombre: state.nombre,
                genero: state.genero,
                fechaNacimiento: state.fechaNacimiento,
                entidadFederativa: state.entidadFederativa,
                paisNacimiento: state.paisNacimiento,
                nacionalidadRL: state.nacionalidadRL,
                curp: state.curp,
                rfcRL: state.rfcRL,
                estadoCivil: state.estadoCivil,
                correo: state.correo,
                telefonoRL: state.telefonoRL,
                documentoRL: state.documentoRL,
                clabe: state.clabe,
                banco: state.banco,
                domicilioLegal: state.domicilioLegal,
                agregarRazonSocial,
                agregarNombreComercial,
                agregarNacionalidad,
                agregarFechaConstitucion,
                agregarRfc,
                agregarRegimenFiscal,
                agregarIndustria,
                agregarTelefono,
                agregarEmail,
                agregarPais,
                agregarEstado,
                agregarCiudad,
                agregarColonia,
                agregarCodigoPostal,
                agregarCalle,
                agregarNumExterior,
                agregarNumInterior,
                agregarNombre,
                agregarGenero,
                agregarFecNacimiento,
                agregarEntiFederativa,
                agregarPaisNacimiento,
                agregarNacionalidadRL,
                agregarCurp,
                agregarRfcRL,
                agregarEstadoCivil,
                agregarCorreo,
                agregarTelefonoRL,
                agregarDocumentoRL,
                agregarClabe,
                agregarBanco,
                agregarDomicilioLegal
            }}
        >
            {props.children}
        </DataContext.Provider>
    )  
}
  
export default DataState
