import React, { Component } from 'react'
import FormulirB from '../CRUD/FormulirB'
import TableB from '../CRUD/TabelB'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bukus: [],
            nama: '',
            author: '',
            deskripsi: '',
            harga: '0',
            id: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === '') {
            this.setState({
                bukus: [
                    ...this.state.bukus,
                    {
                        id: this.state.bukus.length + 1,
                        nama: this.state.nama,
                        author: this.state.author,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga

                    },

                ],
            });
        } else {
            const updatedBooks = this.state.bukus
                .filter((buku) => buku.id !== this.state.id)
                .map((filterBuku) => {
                    return filterBuku
                });

            this.setState({
                bukus: [
                    ...updatedBooks,
                    {
                        id: this.state.bukus.length + 1,
                        nama: this.state.nama,
                        author: this.state.author,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    },
                ],
            });
        }
        this.setState({
            nama: '',
            author: '',
            deskripsi: '',
            harga: '0',
            id: '',
        });
    };

    editData = (id) => {
        console.log("id buku", id)
        const updatedBooks = this.state.bukus
            .filter((buku) => buku.id === id)
            .map((filterBuku) => {
                return filterBuku
            });

        this.setState({
            nama: updatedBooks[0].nama,
            author: updatedBooks[0].author,
            deskripsi: updatedBooks[0].deskripsi,
            harga: updatedBooks[0].harga,
            id: updatedBooks[0].id,
        });
    };

    hapusData = (id) => {
        const bukuBaru = this.state.bukus
            .filter((buku) => buku.id !== id)
            .map((filterBuku) => {
                return filterBuku
            })

        this.setState({
            bukus: bukuBaru
        })
    }
    render() {
        return (
            <div className='container-book mt-4'>

                <div className='tabel-book'>
                    <TableB bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
                </div>

                <div className='formulir-book'>
                    <FormulirB

                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}
