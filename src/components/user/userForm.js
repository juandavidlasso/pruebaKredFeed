import React, { useState, useContext, useEffect } from 'react'
import { Grid, Typography, Box, TextField } from '@mui/material'
// Date
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// Context
import DataContext from '../context/dataContext'

const UserForm = ({isValid, messageValidate}) => {

    // State
    const [userData, setUserData] = useState({
        razonSocial: '',
        nombreComercial: '',
        nacionalidad: '',
        fechaConstitucion: '',
        rfc: '',
        regimenFiscal: '',
        industria: '',
        telefono: '',
        email: ''
    })

    // Context
    const dataContext = useContext(DataContext)
    const { agregarRazonSocial,
        agregarNombreComercial,
        agregarNacionalidad,
        agregarFechaConstitucion,
        agregarRfc,
        agregarRegimenFiscal,
        agregarIndustria,
        agregarTelefono,
        agregarEmail } = dataContext

    // Input change
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    // Date change
    const dateChange = (newDate) => {
        setUserData({
            ...userData,
            fechaConstitucion: newDate
        })
    }

    // Destructure
    const {razonSocial,nombreComercial,nacionalidad,fechaConstitucion,rfc,regimenFiscal,industria,telefono,email} = userData

    // Add Data
    useEffect(() => {
        agregarRazonSocial(razonSocial)
        agregarNombreComercial(nombreComercial)
        agregarNacionalidad(nacionalidad)
        agregarFechaConstitucion(fechaConstitucion)
        agregarRfc(rfc)
        agregarRegimenFiscal(regimenFiscal)
        agregarIndustria(industria)
        agregarTelefono(Number(telefono))
        agregarEmail(email)
        // eslint-disable-next-line
    }, [razonSocial,nombreComercial,nacionalidad,fechaConstitucion,rfc,regimenFiscal,industria,telefono,email])


    return (
        <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
            <Typography variant='h6' sx={{ color: '#1B4F72', fontWeight: 'bold'}}>Datos personales</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
            >
                <TextField error={!razonSocial && isValid ? true : false} id={!razonSocial && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Razón social" variant="outlined" size='small' name='razonSocial' helperText={!razonSocial && isValid ? messageValidate : null} value={razonSocial} onChange={handleChange} />
                <TextField error={!nombreComercial && isValid ? true : false} id={!nombreComercial && isValid ? 'outlined-error-helper-text' : 'outlined-basic'}label="Nombre comercial" variant="outlined" size='small' name='nombreComercial' helperText={!nombreComercial && isValid ?messageValidate : null} value={nombreComercial} onChange={handleChange} />
                <TextField error={!nacionalidad && isValid ? true : false} id={!nacionalidad && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Nacionalidad" variant="outlined" size='small' name='nacionalidad' helperText={!nacionalidad && isValid ? messageValidate : null} value={nacionalidad} onChange={handleChange} />
                <TextField error={!rfc && isValid ? true : false} id={!rfc && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="RFC" variant="outlined" size='small' name='rfc' helperText={!rfc && isValid ? messageValidate : null} value={rfc} onChange={handleChange} />
                <TextField error={!regimenFiscal && isValid ? true : false} id={!regimenFiscal && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Régimen fiscal" variant="outlined" size='small' name='regimenFiscal' helperText={!regimenFiscal && isValid ? messageValidate : null} value={regimenFiscal} onChange={handleChange} />
                <TextField error={!industria && isValid ? true : false} id={!industria && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Industria" variant="outlined" size='small' name='industria' helperText={!industria && isValid ? messageValidate : null} value={industria} onChange={handleChange} />
                <TextField error={!telefono && isValid ? true : false} id={!telefono && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Número telefónico" variant="outlined" size='small' name='telefono' helperText={!telefono && isValid ? messageValidate : null} value={telefono} onChange={handleChange} />
                <TextField error={!email && isValid ? true : false} id={!email && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Correo electrónico" variant="outlined" size='small' name='email' helperText={!email && isValid ? messageValidate : null} value={email} onChange={handleChange} />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Fecha constitución"
                        value={fechaConstitucion}
                        onChange={(newValue) => dateChange(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </Grid>
    );
}
 
export default UserForm;