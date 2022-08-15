import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light'>Ingrese una tarea</Form.Label>
                <Form.Control type="text" placeholder="Tarea..." />
            </Form.Group>
            <Button variant="light" type="submit">
                Guardar
            </Button>
        </Form>
    );
};

export default Formulario;