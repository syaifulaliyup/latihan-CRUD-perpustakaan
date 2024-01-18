import React, { Component } from 'react'
import Formulir from '../CRUD/Formulir'
import Table1 from '../CRUD/Tabel'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './LandingPage.css'

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bukus: [],
            namaPeminjam: '',
            namaBuku: '',
            tanggalPinjam: '',
            tanggalKembali: '',
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
                        namaPeminjam: this.state.namaPeminjam,
                        namaBuku: this.state.namaBuku,
                        tanggalPinjam: this.state.tanggalPinjam,
                        tanggalKembali: this.state.tanggalKembali

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
                        namaPeminjam: this.state.namaPeminjam,
                        namaBuku: this.state.namaBuku,
                        tanggalPinjam: this.state.tanggalPinjam,
                        tanggalKembali: this.state.tanggalKembali
                    },
                ],
            });
        }
        this.setState({
            namaPeminjam: '',
            namaBuku: '',
            tanggalPinjam: '',
            tanggalKembali: '',
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
            namaPeminjam: updatedBooks[0].namaPeminjam,
            namaBuku: updatedBooks[0].namaBuku,
            tanggalPinjam: updatedBooks[0].tanggalPinjam,
            tanggalKembali: updatedBooks[0].tanggalKembali,
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
            <div className='container-about'>
                <div className='tabel mt-4'>
                    <Table1 bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
                </div>

                <div className='formulir-peminjam'>
                    <Formulir
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
