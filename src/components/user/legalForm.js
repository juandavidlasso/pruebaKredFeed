import React, { useState, useContext, useEffect } from 'react'
import { Grid, Typography, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper, FormHelperText } from '@mui/material'
// Date
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// Context
import DataContext from '../context/dataContext'

const LegalForm = ({isValid, messageValidate}) => {

    // State
    const [addForm, setAddForm] = useState(false)
    const [legalData, setLegalData] = useState({
        nombre: '',
        genero: '',
        fechaNacimiento: '',
        entidadFederativa: '',
        paisNacimiento: '',
        nacionalidad: '',
        curp: '',
        rfc: '',
        estadoCivil: '',
        email: '',
        telefono: '',
        documento: ''
    })
    // Home
    const [legalDataHome, setLegalDataHome] = useState({
        paisRL: '',
        estadoRL: '',
        ciudadRL: '',
        coloniaRL: '',
        codigoPostalRL: '',
        calleRL: '',
        numeroExteriorRL: '',
        numeroInteriorRL: ''
    })

    // Context
    const dataContext = useContext(DataContext)
    const { agregarNombre,
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
        agregarDomicilioLegal } = dataContext

    // Input change
    const handleChange = (e) => {
        setLegalData({
            ...legalData,
            [e.target.name]: e.target.value
        })
    }

    // Input home change
    const handleChangeHome = (e) => {
        setLegalDataHome({
            ...legalDataHome,
            [e.target.name]: e.target.value
        })
    }

    // Date change
    const dateChange = (newDate) => {
        setLegalData({
            ...legalData,
            fechaNacimiento: newDate
        })
    }

    // Destructure
    const {nombre,genero,fechaNacimiento,entidadFederativa,paisNacimiento,nacionalidad,curp,rfc,estadoCivil,email,telefono,documento} = legalData
    const {paisRL,estadoRL,ciudadRL,coloniaRL,codigoPostalRL,calleRL,numeroExteriorRL,numeroInteriorRL} = legalDataHome

    // Add Data
    useEffect(() => {
        agregarNombre(nombre)
        agregarGenero(genero)
        agregarFecNacimiento(fechaNacimiento)
        agregarEntiFederativa(entidadFederativa)
        agregarPaisNacimiento(paisNacimiento)
        agregarNacionalidadRL(nacionalidad)
        agregarCurp(curp)
        agregarRfcRL(rfc)
        agregarEstadoCivil(estadoCivil)
        agregarCorreo(email)
        agregarTelefonoRL(Number(telefono))
        agregarDocumentoRL(documento)
        agregarDomicilioLegal(legalDataHome)
        // eslint-disable-next-line
    }, [nombre,genero,fechaNacimiento,entidadFederativa,paisNacimiento,nacionalidad,curp,rfc,estadoCivil,email,telefono,documento,
        paisRL,estadoRL,ciudadRL,coloniaRL,codigoPostalRL,calleRL,numeroExteriorRL,numeroInteriorRL])

    return (
        <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
            <Typography variant='h6' sx={{ color: '#1B4F72', fontWeight: 'bold'}}>Representante legal</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
            >
                <TextField error={!nombre && isValid ? true : false} id={!nombre && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!nombre && isValid ? messageValidate : null} label="Nombre" variant="outlined" size='small' name='nombre' value={nombre} onChange={handleChange} />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" error={!genero && isValid ? true : false}>
                    <InputLabel id="demo-select-small">Género</InputLabel>
                    <Select
                        labelId={!genero && isValid ? 'demo-simple-select-error-label' : 'demo-select-small'}
                        label="Age"
                        name='genero'
                        value={genero} 
                        onChange={handleChange}
                        error={!genero && isValid ? true : false}
                        id={!genero && isValid ? 'demo-simple-select-error' : 'demo-select-small'}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='M'>Masculino</MenuItem>
                        <MenuItem value='F'>Femenino</MenuItem>
                        <MenuItem value='O'>Otro</MenuItem>
                    </Select>
                    {!genero && isValid ? <FormHelperText>{messageValidate}</FormHelperText> : null }
                </FormControl>
                <TextField error={!documento && isValid ? true : false} id={!documento && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!documento && isValid ? messageValidate : null} label="Documento identificación" variant="outlined" size='small' name='documento' value={documento} onChange={handleChange} />
                <TextField error={!entidadFederativa && isValid ? true : false} id={!entidadFederativa && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!entidadFederativa && isValid ? messageValidate : null} label="Entidad federativa nacimiento" variant="outlined" size='small' name='entidadFederativa' value={entidadFederativa} onChange={handleChange} />
                <TextField error={!paisNacimiento && isValid ? true : false} id={!paisNacimiento && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!paisNacimiento && isValid ? messageValidate : null} label="País nacimiento" variant="outlined" size='small' name='paisNacimiento' value={paisNacimiento} onChange={handleChange} />
                <TextField error={!nacionalidad && isValid ? true : false} id={!nacionalidad && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!nacionalidad && isValid ? messageValidate : null} label="Nacionalidad" variant="outlined" size='small' name='nacionalidad' value={nacionalidad} onChange={handleChange} />
                <TextField error={!curp && isValid ? true : false} id={!curp && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!curp && isValid ? messageValidate : null} label="CURP" variant="outlined" size='small' name='curp' value={curp} onChange={handleChange} />
                <TextField error={!rfc && isValid ? true : false} id={!rfc && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!rfc && isValid ? messageValidate : null} label="RFC" variant="outlined" size='small' name='rfc' value={rfc} onChange={handleChange} />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" error={!estadoCivil && isValid ? true : false}>
                    <InputLabel id="demo-select-small">Estado civil</InputLabel>
                    <Select
                        labelId={!estadoCivil && isValid ? 'demo-simple-select-error-label' : 'demo-select-small'}
                        label="Age"
                        name='estadoCivil'
                        value={estadoCivil}
                        onChange={handleChange}
                        error={!estadoCivil && isValid ? true : false}
                        id={!estadoCivil && isValid ? 'demo-simple-select-error' : 'demo-select-small'}
                    >
                        <MenuItem value='S'>Soltero</MenuItem>
                        <MenuItem value='C'>Casado</MenuItem>
                        <MenuItem value='U'>Unión libre</MenuItem>
                        <MenuItem value='D'>Divorciado</MenuItem>
                    </Select>
                    {!estadoCivil && isValid ? <FormHelperText>{messageValidate}</FormHelperText> : null }
                </FormControl>
                <TextField error={!email && isValid ? true : false} id={!email && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!email && isValid ? messageValidate : null} label="Correo electrónico" variant="outlined" size='small' name='email' value={email} onChange={handleChange} />
                <TextField error={!telefono && isValid ? true : false} id={!telefono && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!telefono && isValid ? messageValidate : null} label="Teléfono" variant="outlined" size='small' name='telefono' value={telefono} onChange={handleChange} />
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Fecha nacimiento"
                        value={fechaNacimiento}
                        onChange={(newValue) => dateChange(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button variant="outlined" size="small" onClick={() => setAddForm(true)}>
                    Agregar domicilio
                </Button>
            </Box>

            {addForm && (
                <Box>
                    <Paper variant="outlined">
                        <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
                            <Typography variant='h6' sx={{ color: '#1B4F72', fontWeight: 'bold'}}>Domicilio</Typography>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '29ch' },
                                }}
                            >
                                <TextField error={!paisRL && isValid ? true : false} id={!paisRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!paisRL && isValid ? messageValidate : null} label="País" variant="outlined" size='small' name='paisRL' value={paisRL} onChange={handleChangeHome} />
                                <TextField error={!estadoRL && isValid ? true : false} id={!estadoRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!estadoRL && isValid ? messageValidate : null} label="Entidad federativa o estado" variant="outlined" size='small' name='estadoRL' value={estadoRL} onChange={handleChangeHome} />
                                <TextField error={!ciudadRL && isValid ? true : false} id={!ciudadRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!ciudadRL && isValid ? messageValidate : null} label="Ciudad o población" variant="outlined" size='small' name='ciudadRL' value={ciudadRL} onChange={handleChangeHome} />
                                <TextField error={!coloniaRL && isValid ? true : false} id={!coloniaRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!coloniaRL && isValid ? messageValidate : null} label="Colonia o urbanización" variant="outlined" size='small' name='coloniaRL' value={coloniaRL} onChange={handleChangeHome} />
                                <TextField error={!codigoPostalRL && isValid ? true : false} id={!codigoPostalRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!codigoPostalRL && isValid ? messageValidate : null} label="Código postal" variant="outlined" size='small' name='codigoPostalRL' value={codigoPostalRL} onChange={handleChangeHome} />
                                <TextField error={!calleRL && isValid ? true : false} id={!calleRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!calleRL && isValid ? messageValidate : null} label="Calle o avenida" variant="outlined" size='small' name='calleRL' value={calleRL} onChange={handleChangeHome} />
                                <TextField error={!numeroExteriorRL && isValid ? true : false} id={!numeroExteriorRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!numeroExteriorRL && isValid ? messageValidate : null} label="Número exterior" variant="outlined" size='small' name='numeroExteriorRL' value={numeroExteriorRL} onChange={handleChangeHome} />
                                <TextField error={!numeroInteriorRL && isValid ? true : false} id={!numeroInteriorRL && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!numeroInteriorRL && isValid ? messageValidate : null} label="Número interior" variant="outlined" size='small' name='numeroInteriorRL' value={numeroInteriorRL} onChange={handleChangeHome} />
                                <Button variant="contained" color="error" size='small' onClick={() => setAddForm(false)}>
                                    Eliminar
                                </Button>
                            </Box>
        
                        </Grid>
                    </Paper>
                </Box>
            )}
            
        </Grid>
    );
}
 
export default LegalForm;