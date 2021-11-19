import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import KisilerServis from "../service/KisilerServis";

const Kayit = () => {
  const [kisi, setKisi] = useState({ ad: "", soyad: "", yas: "" });

  const { ad, soyad, yas } = kisi;

  const degistir = (evet) => {
    const { name, value } = evet.target;
    setKisi(() => {
      return {
        ...kisi,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    KisilerServis.kisiEkle(kisi).then((res) => console.log(res));
  };

  return (
    <Container>
      <Form className="m-4">
        <Form.Group className="mb-3" controlId="ad">
          <Form.Label>Ad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adinizi giriniz"
            value={ad}
            name="ad"
            onChange={degistir}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="soyad">
          <Form.Label>Soyad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Soyadinizi giriniz"
            value={soyad}
            name="soyad"
            onChange={degistir}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="yas">
          <Form.Label>Yas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Yasinizi giriniz"
            value={yas}
            name="yas"
            onChange={degistir}
          />
        </Form.Group>
        <div className="mt-3 text-center">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Kaydet
          </Button>

          <Button variant="danger" type="reset" classname="ms-2">
            Temizle
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Kayit;
