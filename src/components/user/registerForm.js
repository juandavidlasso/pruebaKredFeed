import React, { useState, useContext } from 'react'
import { Grid, Typography, Box, Divider, Button, Snackbar, Alert } from '@mui/material'
// Validations
import { validarEmail, validarNumero } from '../utils/js/validations'
import { toast } from 'react-toastify'
// Component
import UserForm from './userForm'
import LegalForm from './legalForm'
import BankForm from './bankForm'
import HomeForm from './homeForm'
import DataContext from '../context/dataContext'
import FileForm from './fileForm'
import ModalSuccess from './modalSuccess'

const RegisterForm = () => {

    // State
    const [isValid, setIsValid] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [messageValidate, setMessageValidate] = useState('')
    const [data, setData] = useState({})
    
    // Context
    const dataContext = useContext(DataContext)
    const {razonSocial,nombreComercial,nacionalidad,rfc,regimenFiscal,industria,telefono,email,
        pais,estado,ciudad,colonia,codigoPostal,calle,numeroExterior,numeroInterior,
        nombre,genero,entidadFederativa,paisNacimiento,nacionalidadRL,curp,rfcRL,estadoCivil,correo,telefonoRL,documentoRL,
        clabe, banco, fechaConstitucion, fechaNacimiento, domicilioLegal} = dataContext
    
    // Valid form
    const submitForm = async (e) => {
        e.preventDefault()

        setIsValid(true)

        // Empty fileds validate
        if (razonSocial.trim()===''||nombreComercial.trim()===''||nacionalidad.trim()===''||
            rfc.trim()===''||regimenFiscal.trim()===''||industria.trim()===''||email.trim()===''||
            pais.trim()===''||estado.trim()===''||ciudad.trim()===''||colonia.trim()===''||
            calle.trim()===''||numeroExterior.trim()===''||numeroInterior.trim()===''||nombre.trim()===''||
            genero.trim()===''||entidadFederativa.trim()===''||paisNacimiento.trim()===''||
            nacionalidadRL.trim()===''||curp.trim()===''||rfcRL.trim()===''||estadoCivil.trim()===''||
            correo.trim()===''||documentoRL.trim()===''||clabe.trim()===''||banco.trim()==='') {
            setMessageValidate('Dato obligatorio')
            return
        }

        // Empty fields home legal
        if (domicilioLegal.paisRL.trim()===''||domicilioLegal.estadoRL.trim()===''||domicilioLegal.ciudadRL.trim()===''||
        domicilioLegal.coloniaRL.trim()===''||domicilioLegal.codigoPostalRL.trim()===''||domicilioLegal.calleRL.trim()===''||
        domicilioLegal.numeroExteriorRL.trim()===''||domicilioLegal.numeroInteriorRL.trim()==='') {
            toast.error("Los datos del domicilio del representante legal son obligatorios", {
                theme: 'colored',
                closeOnClick: false,
                pauseOnHover: false
            })
            return
        }

        // Format fields postal code
        if (validarNumero(domicilioLegal.codigoPostalRL) === false) {
            toast.error("El código postal del domicilio del representante legal debe ser numérico", {
                theme: 'colored',
                closeOnClick: false,
                pauseOnHover: false
            })
            return
        }

        // Format email validate
        if(validarEmail(email) === false || validarEmail(correo) === false) {
            toast.error("El correo no tiene el formato correcto", {
                theme: 'colored',
                closeOnClick: false,
                pauseOnHover: false
            })
            return
        }

        // Format phone validate
        if(validarNumero(telefono) === false || validarNumero(telefonoRL) === false) {
            toast.error("El teléfono debe ser numérico", {
                theme: 'colored',
                closeOnClick: false,
                pauseOnHover: false
            })
            return
        }

        // Format postal code validate
        if(validarNumero(codigoPostal) === false) {
            toast.error("El código postal debe ser numérico", {
                theme: 'colored',
                closeOnClick: false,
                pauseOnHover: false
            })
            return
        }

        // Destructure
        const {paisRL,estadoRL,ciudadRL,coloniaRL,codigoPostalRL,calleRL,numeroExteriorRL,numeroInteriorRL} = domicilioLegal

        const props = {
            razonSocial:razonSocial,nombreComercial:nombreComercial,nacionalidad:nacionalidad,fechaConstitucion:fechaConstitucion,
            rfc:rfc,regimenFiscal:regimenFiscal,industria:industria,telefono:telefono,email:email,pais:pais,
            estado:estado,ciudad:ciudad,colonia:colonia,codigoPostal:codigoPostal,calle:calle,numeroExterior:numeroExterior,
            numeroInterior:numeroInterior,nombre:nombre,genero:genero,fechaNacimiento:fechaNacimiento,entidadFederativa:entidadFederativa,
            paisNacimiento:paisNacimiento,nacionalidadRL:nacionalidadRL,curp:curp,rfcRL:rfcRL,estadoCivil:estadoCivil,
            correo:correo,telefonoRL:telefonoRL,documentoRL:documentoRL,clabe:clabe,banco:banco,paisRL:paisRL,estadoRL:estadoRL,ciudadRL:ciudadRL,
            coloniaRL:coloniaRL,codigoPostalRL:codigoPostalRL,calleRL:calleRL,numeroExteriorRL:numeroExteriorRL,
            numeroInteriorRL:numeroInteriorRL
        }

        setData(props)
        
        setIsOpen(true)
    }


    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch">

            <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
                <Typography variant='h4' align='center' sx={{ color: '#212F3C', fontWeight: 'bold'}}>Registre los datos</Typography>
            </Grid>

            <UserForm isValid={isValid} messageValidate={messageValidate} />

            <Divider />

            <HomeForm isValid={isValid} messageValidate={messageValidate} />

            <Divider />

            <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
                <Typography variant='h6' sx={{ color: '#1B4F72', fontWeight: 'bold'}}>Comprobante domicilio</Typography>
                <FileForm />
            </Grid>


            <Divider />

            <LegalForm isValid={isValid} messageValidate={messageValidate} />

            <Divider />

            <BankForm isValid={isValid} messageValidate={messageValidate} />

            <Divider />

            <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" size="large" onClick={(e) => submitForm(e)}>
                        Registrar
                    </Button>
                </Box>
            </Grid>


            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={isOpen}
                autoHideDuration={6000}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Información registrada exitosamente
                </Alert>
            </Snackbar>


            <div>
                {isOpen && <ModalSuccess isOpen={isOpen} setIsOpen={setIsOpen} props={data} />}
            </div>

        </Grid>
    );
}
 
export default RegisterForm;