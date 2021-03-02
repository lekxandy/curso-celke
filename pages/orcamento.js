import {
  Jumbotron,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Head from "next/head";

export default function Orcamento() {
  return (
    <>
      <Head>
        <title>Orçamento</title>
        <meta name="description" content="Orçamentos"/>
      </Head>
      <Jumbotron fluid className="descr-top">
        <style>{`.descr-top{
              background-color: #050c3d;
              color: #fff;
              margin-bottom: 0 !important;
              padding: 40px 0;
             
          }`}</style>
        <Container className="text-center">
          <h1 className="display-4">Orçamento</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="form-orcamento">
        <style>{`.form-orcamento{
              paddin: 80px 0;
              background-color: #fff;
              margin-bottom: 0 !important;
          }`}</style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                placeholder="Preencha com o nome completo"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Preencha com seu email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="fone">Fone</Label>
              <Input type="number" name="fone" placeholder="(xx) xxxxx-xxxx" min="11111111111"/>
            </FormGroup>
            <FormGroup>
              <Label for="whatsapp">Whatsapp</Label>
              <Input
                type="number"
                name="whatsapp"
                placeholder="(xx) xxxxx-xxxx"
                min="11111111111"
              />
            </FormGroup>
            <FormGroup>
              <Label for="projeto">Projeto</Label>
              <Input
                type="textarea"
                name="projeto"
                placeholder="Descrição do projeto"
                rows="10"
              />
            </FormGroup>

            <Button type="submit" outline color="primary">
              Solicitar orçamento
            </Button>
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
}
