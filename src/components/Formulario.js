import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaTareas from './ListaTareas';

const Formulario = () => {

    let tareasLocalS = JSON.parse(localStorage.getItem("listaTareas")) || [];
    const [arregloTareas, setArregloTareas] = useState(tareasLocalS);
    const [tarea, setTarea] = useState("");

    useEffect(() => {
        localStorage.setItem("listaTareas", JSON.stringify(arregloTareas));
    }, [arregloTareas]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloTareas([...arregloTareas, tarea]);
        setTarea("");
    };

    const borrarTarea = (nombre) => {
        let arregloModificado = arregloTareas.filter((valor) => {
            return valor != nombre;
        });
        setArregloTareas(arregloModificado);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className='text-light'>Ingrese una tarea</Form.Label>
                    <Form.Control type="text" placeholder="Tarea..." onChange={(e) => setTarea(e.target.value.trimStart())} value={tarea} />
                </Form.Group>
                <Button variant="light" type="submit">
                    Guardar
                </Button>
            </Form>
            <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas>
        </div>
    );
};

export default Formulario;