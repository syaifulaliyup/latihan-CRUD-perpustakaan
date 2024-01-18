import React from 'react';
import Table from 'react-bootstrap/Table';

const Table1 = ({bukus, editData, hapusData}) => {

    

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Peminjam</th>
                    <th>Nama Buku</th>
                    <th>Tanggal Pinjam</th>
                    <th>Tanggal Kembali</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {bukus.map((buku, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{buku.namaPeminjam}</td>
                            <td>{buku.namaBuku}</td>
                            <td>{buku.tanggalPinjam}</td>
                            <td>{buku.tanggalKembali}</td>
                            <td>
                                <button className='btn btn-warning mr-1' onClick={() => editData(buku.id)}>Edit</button>
                                <button className='btn btn-warming mr-1' onClick={() => hapusData(buku.id)}>Hapus</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    );
}

export default Table1;