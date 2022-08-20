import React, { useState, useContext, useEffect } from 'react'
import { Grid, Typography, Box, TextField } from '@mui/material'
// Context
import DataContext from '../context/dataContext'

const BankForm = ({isValid, messageValidate}) => {

    // State
    const [bankData, setBankData] = useState({
        clabe: '',
        banco: ''
    })

    // Context
    const dataContext = useContext(DataContext)
    const { agregarClabe, agregarBanco } = dataContext

    // Input change
    const handleChange = (e) => {
        setBankData({
            ...bankData,
            [e.target.name]: e.target.value
        })
    }

    // Destructure
    const {clabe, banco} = bankData

    // Add Data
    useEffect(() => {
        agregarClabe(clabe)
        agregarBanco(banco)
        // eslint-disable-next-line
    }, [clabe, banco])

    return (
        <Grid item xs={12} ms={12} md={12} xl={12} lg={12} p={2}>
            <Typography variant='h6' sx={{ color: '#1B4F72', fontWeight: 'bold'}}>Cuenta bancaria</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
            >
                <TextField error={!clabe && isValid ? true : false} id={!clabe && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!clabe && isValid ? messageValidate : null} label="CLABE" variant="outlined" size='small' name='clabe' value={clabe} onChange={handleChange} />
                <TextField error={!banco && isValid ? true : false} id={!banco && isValid ? 'outlined-error-helper-text' : 'outlined-basic'} helperText={!banco && isValid ? messageValidate : null} label="Banco" variant="outlined" size='small' name='banco' value={banco} onChange={handleChange} />
            </Box>
        </Grid>
    );
}
 
export default BankForm;