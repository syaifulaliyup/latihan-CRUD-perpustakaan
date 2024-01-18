import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style.css'

const Formulir = ({ namaPeminjam,namaBuku, tanggalPinjam,tanggalKembali,handleChange,handleSubmit,id }) => {
    return (
        <div className='mt-5 form-head-book'>
            <Row className='form-subhead-form'>
                <Col>
                    <h4>{id ? "edit data":"Kartu Peminjaman"}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 form-container" controlId="namaPeminjam">
                            <Form.Label className='form-label'>Nama Peminjam</Form.Label>
                            <Form.Control className='form-isi'
                                type="text"
                                name="namaPeminjam"
                                value={namaPeminjam}
                                onChange={(event) => handleChange(event)} 
                                md="4"/>
                        </Form.Group>

                        <Form.Group className="mb-3 form-container" controlId="namaBuku">
                            <Form.Label className='form-label'>Nama Buku</Form.Label>
                            <Form.Control className='form-isi'
                                type="text"
                                name="namaBuku"
                                value={namaBuku}
                                onChange={(event) => handleChange(event)} 
                                md="4"/>
                        </Form.Group>

                        <Form.Group className=" mb-3 form-container" controlId="tanggalPinjam">
                            <Form.Label>Tanggal Pinjam</Form.Label>
                            <Form.Control
                                type="date"
                                name="tanggalPinjam"
                                value={tanggalPinjam}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className=" mb-3 form-container" controlId="tanggalKembali">
                            <Form.Label>Tanggal Kembali</Form.Label>
                            <Form.Control
                                type="date"
                                name="tanggalKembali"
                                value={tanggalKembali}
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

export default Formulir;