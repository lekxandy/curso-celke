import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Head from "next/head";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function Index() {
  return (
    <div>
      <Head>
        <title>Homes</title>
        <meta name="description" content="Home page"/>
      </Head>

      <Jumbotron fluid className="descr-top">
        <style>{`.descr-top{
              background-color: #050c3d;
              color: #fff;
              margin-bottom: 0 !important;
          }`}</style>
        <Container className="text-center">
          <h1 className="display-4">
            Temos a solução que a sua empresa precisa
          </h1>
          <p className="lead">Per aumento de cachacis, eu reclamis.</p>
          <p className="Lead">
            <a
              href="/orcamento"
              className="btn btn-outline-primary btn-lg mt-4"
            >
              Orçamento
            </a>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron className="servicos">
        <style>
          {`.servicos{
                  background-color: #fff;
                  margin-bottom: 0 !important;
              }
              .circulo{
                  width: 240px;
                  height: 240px;
                  background-color: #0a197d;
                  font-size: 12px;
                  color: #fff;
                  padding-top: 24px;
              }
              .centralizar{
                  margin: 0 auto !important;
                  float: none !important;
              }
              `}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pb-4">
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
              paradis?
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                  <FontAwesomeIcon icon="laptop-code"/>
              </div>
              <h2 className="mt-4 mb-4">Título 1</h2>
              <p>Toma um mé que o mundo vai girarzis! </p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
              <FontAwesomeIcon icon="mobile-alt"/>
              </div>
              <h2 className="mt-4 mb-4">Título 2</h2>
              <p>Todo mundo vê os porris que eu tomo </p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
              <FontAwesomeIcon icon="network-wired"/>
              </div>
              <h2 className="mt-4 mb-4">Título 3</h2>
              <p>mas ninguém vê os tombis que eu levo! </p>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}
