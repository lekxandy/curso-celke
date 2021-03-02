import React from 'react';

import {Container, Jumbotron} from 'reactstrap';

const Rodape = () =>{
    return(
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #050d3d;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0 !important;
                    text-align: center;
                }`}
            </style>
            <Container>
                <h1 className="lead">Rodapé</h1>
            </Container>
        </Jumbotron>
    );
}

export default Rodape;