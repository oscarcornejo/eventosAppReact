import React, { Component } from 'react';
import axios from 'axios';

// SE CREA EL CONTEXT
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;


class EventosProvider extends Component {

    token = 'Agregar TOKEN de EventBrite API';
    ordenarFecha = 'date';

    state = {
        eventos: []
    }

    obtenerEventos = async(busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenarFecha}&token=${this.token}&locale=es_ES`;

        // CONSULTAR LA API CON LA URL
        const eventos = await axios(url);
        console.log(eventos);
        this.setState({
            eventos: eventos.data.events
        })
    }

    render() {
        return ( <
            EventosContext.Provider value = {
                {
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }
            } >
            { this.props.children } <
            /EventosContext.Provider>
        );
    }
}

export default EventosProvider;