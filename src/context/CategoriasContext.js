import React, { Component } from 'react';
import axios from 'axios';

// SE CREA EL CONTEXT
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'Agregar TOKEN de EventBrite API';

    state = {
        categorias: []
    }

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = async() => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        // CONSULTAR LA API CON LA URL
        let categorias = await axios.get(url);
        console.log(categorias.data.categories);

        this.setState({
            categorias: categorias.data.categories
        })
    }

    render() {
        return ( <
            CategoriasContext.Provider value = {
                {
                    categorias: this.state.categorias
                }
            } >

            { this.props.children }

            <
            /CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;