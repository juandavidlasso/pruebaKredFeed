import React from 'react'
import { Modal, Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
// Date
import moment from 'moment'

// Styles
const style = {
    position: 'absolute',
    top: '47%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid gray',
    boxShadow: 24,
    borderRadius: 2,
    p: 2,
};

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const ModalSuccess = ({isOpen, setIsOpen, props}) => {

    const {banco,calle,ciudad,clabe,codigoPostal,colonia,correo,curp,documentoRL,email,entidadFederativa,
        estado,estadoCivil,fechaConstitucion,fechaNacimiento,genero,industria,nacionalidad,nacionalidadRL,
        nombre,nombreComercial,numeroExterior,numeroInterior,pais,paisNacimiento,razonSocial,regimenFiscal,
        rfc,rfcRL,telefono,telefonoRL,paisRL,estadoRL,ciudadRL,coloniaRL,codigoPostalRL,calleRL,numeroExteriorRL,
        numeroInteriorRL} = props

    // State
    const handleClose = () => {
        setIsOpen(false)
        window.location.reload()
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Datos usuario
                            </Typography>
                            <Demo>
                                <List dense>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Razón social: ${razonSocial}`} /><ListItemText primary={`Nombre comercial: ${nombreComercial}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Nacionalidad: ${nacionalidad}`} /><ListItemText primary={`Rfc: ${rfc}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Régimen fiscal: ${regimenFiscal}`} /><ListItemText primary={`Industria: ${industria}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Teléfono: ${telefono}`} /><ListItemText primary={`Email: ${email}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Fecha constitución: ${moment(fechaConstitucion).format('YYYY-MM-DD')}`} /></ListItem>
                                </List>
                            </Demo>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Datos domicilio
                            </Typography>
                            <Demo>
                                <List dense>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`País: ${pais}`} /><ListItemText primary={`Estado: ${estado}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Ciudad: ${ciudad}`} /><ListItemText primary={`Colonia: ${colonia}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Código postal: ${codigoPostal}`} /><ListItemText primary={`Calle: ${calle}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Número exterior: ${numeroExterior}`} /><ListItemText primary={`Número interior: ${numeroInterior}`} /></ListItem>
                                </List>
                            </Demo>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Datos representante legal
                            </Typography>
                            <Demo>
                                <List dense>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Nombre: ${nombre}`} /><ListItemText primary={`Género: ${genero}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Identificación: ${documentoRL}`} /><ListItemText primary={`Entidad federativa: ${entidadFederativa}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`País nacimiento: ${paisNacimiento}`} /><ListItemText primary={`Nacionalidad: ${nacionalidadRL}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Curp: ${curp}`} /><ListItemText primary={`Rfc: ${rfcRL}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Estado civil: ${estadoCivil}`} /><ListItemText primary={`Correo: ${correo}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Teléfono: ${telefonoRL}`} /><ListItemText primary={`Fecha nacimiento: ${moment(fechaNacimiento).format('YYYY-MM-DD')}`} /></ListItem>
                                </List>
                            </Demo>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Datos Banco
                            </Typography>
                            <Demo>
                                <List dense>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Clabe: ${clabe}`} /><ListItemText primary={`Banco: ${banco}`} /></ListItem>
                                </List>
                            </Demo>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Datos domicilio representante legal
                            </Typography>
                            <Demo>
                                <List dense>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`País: ${paisRL}`} /><ListItemText primary={`Estado: ${estadoRL}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Ciudad: ${ciudadRL}`} /><ListItemText primary={`Colonia: ${coloniaRL}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Código postal: ${codigoPostalRL}`} /><ListItemText primary={`Calle: ${calleRL}`} /></ListItem>
                                    <ListItem sx={{ padding: 0, margin: 0, marginBottom: 0, marginTop: 0}}><ListItemText primary={`Número exterior: ${numeroExteriorRL}`} /><ListItemText primary={`Número interior: ${numeroInteriorRL}`} /></ListItem>
                                </List>
                            </Demo>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    );
}
 
export default ModalSuccess;