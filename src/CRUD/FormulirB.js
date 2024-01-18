import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormulirB = ({ nama,author, deskripsi, harga, handleChange, handleSubmit,id }) => {
    return (
        <div className='mt-5'>
            <Row>
                <Col>
                    <h4>{id ? "edit data":"Tambah Data"}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 form-container" controlId="nama">
                            <Form.Label className='form-label'>Nama Buku</Form.Label>
                            <Form.Control
                                type="text"
                                name="nama"
                                value={nama}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3 form-container" controlId="author">
                            <Form.Label className='form-label'>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                value={author}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="deskripsi">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name='deskripsi'
                                value={deskripsi}
                                onChange={(event) => handleChange(event)} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="harga">
                            <Form.Label>Harga Buku</Form.Label>
                            <Form.Control
                                type="number"
                                name="harga"
                                value={harga}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>

    );
}

export default FormulirB;