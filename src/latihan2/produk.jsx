import React, { Component } from 'react';
import './produk.css'

class Produk extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock - 1
        })
        if (this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div className="box-produk">
                <h2 className="name-judul">{this.props.nama}</h2>
                <img src="https://asset.kompas.com/crops/RgC3AaQwCSYsuZRpCO9OSyRrE6s=/40x44:784x541/750x500/data/photo/2019/11/14/5dcca5e5d5a59.png" />
                <p>{this.props.harga}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default Produk;