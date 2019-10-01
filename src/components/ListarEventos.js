import React from 'react';
import { EventosConsumer } from '../context/EventosContext';
import Evento from './Evento';

const ListarEventos = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true" >
            <EventosConsumer>
                {
                    (value) => {
                        if (value.eventos.length === 0) {
                            return (
                                <div style={{width: '100%'}}>
                                    <div className="uk-card uk-card-default">

                                        <div className="uk-card-body">
                                            <div className="uk-container" >
                                                <fieldset className="uk-fieldset uk-margin">
                                                    <legend className="uk-legend uk-text-center">
                                                        Encuentra tu evento más cercano
                                                    </legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return value.eventos.map( (evento, index) => {
                                return (
                                    <Evento key={index} evento={evento} />
                                )
                            })
                        }
                        
                    }
                }
            </EventosConsumer>
        </div>
     );
}
 
export default ListarEventos;