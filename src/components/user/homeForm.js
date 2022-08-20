import React, { useState, useContext, useEffect } from 'react'
import { Box, Grid, Typography, TextField } from '@mui/material'
// Context
import DataContext from '../context/dataContext'

const HomeForm = ({isValid, messageValidate}) => {

    // State
    const [homeData, setHomeData] = useState({
        pais: '',
        estado: '',
        ciudad: '',
        colonia: '',
        codigoPostal: '',
        calle: '',
        numeroExterior: '',
        numeroInterior: ''
    })

    // Context
    const dataContext = useContext(DataContext)
    const { agregarPais,
        agregarEstado,
        agregarCiudad,
        agregarColonia,
        agregarCodigoPostal,
        agregarCalle,
        agregarNumExterior,
        agregarNumInterior } = dataContext

    // Input change
    const handleChange = (e) => {
        setHomeData({
            ...homeData,
            [e.target.name]: e.target.value
        })
    }

    // Destructure
    const {pais,estado,ciudad,colonia,codigoPostal,calle,numeroExterior,numeroInterior} = homeData

    // Add Data
    useEffect(() => {
        agregarPais(pais)
        agregarEstado(estado)
        agregarCiudad(ciudad)
        agregarColonia(colonia)
        agregarCodigoPostal(Number(codigoPostal))
        agregarCalle(calle)
        agregarNumExterior(numeroExterior)
        agregarNumInterior(numeroInterior)
        // eslint-disable-next-line
    }, [pais,estado,ciudad,colonia,codigoPostal,calle,numeroExterior,numeroInterior])

    return (
        <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
            <Typography variant='h6' sx={{ color: '#1B4F72', fontWeight: 'bold'}}>Domicilio</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
            >
                <TextField error={!pais && isValid ? true : false} id={!pais && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="País" variant="outlined" size='small' name='pais' value={pais} onChange={handleChange} helperText={!pais && isValid ? messageValidate : null} />
                <TextField error={!estado && isValid ? true : false} id={!estado && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Entidad federativa o estado" variant="outlined" size='small' name='estado' value={estado} onChange={handleChange} helperText={!estado && isValid ? messageValidate : null} />
                <TextField error={!ciudad && isValid ? true : false} id={!ciudad && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Ciudad o población" variant="outlined" size='small' name='ciudad' value={ciudad} onChange={handleChange} helperText={!ciudad && isValid ? messageValidate : null} />
                <TextField error={!colonia && isValid ? true : false} id={!colonia && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Colonia o urbanización" variant="outlined" size='small' name='colonia' value={colonia} onChange={handleChange} helperText={!colonia && isValid ? messageValidate : null} />
                <TextField error={!codigoPostal && isValid ? true : false} id={!codigoPostal && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Código postal" variant="outlined" size='small' name='codigoPostal' value={codigoPostal} onChange={handleChange} helperText={!codigoPostal && isValid ? messageValidate : null} />
                <TextField error={!calle && isValid ? true : false} id={!calle && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Calle o avenida" variant="outlined" size='small' name='calle' value={calle} onChange={handleChange} helperText={!calle && isValid ? messageValidate : null} />
                <TextField error={!numeroExterior && isValid ? true : false} id={!numeroExterior && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Número exterior" variant="outlined" size='small' name='numeroExterior' value={numeroExterior} onChange={handleChange} helperText={!numeroExterior && isValid ? messageValidate : null} />
                <TextField error={!numeroInterior && isValid ? true : false} id={!numeroInterior && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} label="Número interior" variant="outlined" size='small' name='numeroInterior' value={numeroInterior} onChange={handleChange} helperText={!numeroInterior && isValid ? messageValidate : null} />
            </Box>
        </Grid>
    );
}
 
export default HomeForm;