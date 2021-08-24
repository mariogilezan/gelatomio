import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  AboutFeature,
  AboutFeatures,
  AboutHeading,
  AboutImageContainer,
  AboutText,
  AboutWrapper,
  BoldText,
} from "./About.elements"

export default function AboutSection() {
  return (
    <AboutWrapper>
      <AboutHeading>O Nama</AboutHeading>
      <AboutText>
        Zanatsko poslastičarska radnja <BoldText>"Gelato"</BoldText> osnovana je
        juna 1999. godine. Osnivač Đorđe Guga je želeo da{" "}
        <BoldText>"Gelato"</BoldText> bude mesto gde ćete probati najbolji
        italijanski sladoled proizveden u Srbiji. Mnoštvo nesvakidašnjih ukusa
        do tada neprobanih u Vršcu, a napravljenih od prirodnih sirovina u
        saradnji sa "Pregel" italijanskom fabrikom za proizvodnju poslastica,
        obradovala je naše sugrađane.
      </AboutText>
      <AboutText>
        Sam naziv zanatske radnje govori o nameri pošto{" "}
        <BoldText>"Gelato"</BoldText> prevedeno sa italijanskog znači sladoled.
      </AboutText>
      <AboutText>
        Na zahtev cenjenih potrošača proširili smo naš asortiman i danas
        proizvodimo kolače i torte za svaku priliku a, neizostavni deo našeg
        asortimana i dalje je sladoled.
      </AboutText>
      <AboutText>
        <BoldText>"Gelato"</BoldText> je 2011. godine uveo{" "}
        <BoldText>sistem bezbednosti hrane HACCP</BoldText> i dobio sertifikat
        standarda kvaliteta.{" "}
      </AboutText>
      <AboutText>
        U našem maloprodajnom objektu možete odmah kupiti i poneti sve vrste
        sitnih kolača, komadne kolače (krempite, baklave, eklere, princes
        krofne, indijanere), torte na parče, šnit torte, sladoled na kugle i
        kilogram.
      </AboutText>
      <AboutText>
        Sve proizvode ćete dobiti upakovane u odgovarajuću ambalažu, a možete i
        da poručite ono što želite da pripremimo za Vas. Poručene torte
        isporučuju se gotovo upakovane sa spremnom{" "}
        <BoldText>deklaracijom.</BoldText>
      </AboutText>
      <AboutText>
        Mi se trudimo da udovoljimo i Vašim posebnim zahtevima! Kontaktirajte
        nas na vreme. Za sve informacije obratite se poslovođi objekta.{" "}
      </AboutText>
      <AboutFeatures>
        <AboutFeature>STANDARNO VISOK KVALITET</AboutFeature>
        <AboutFeature>ŠIROK ASORTIMAN</AboutFeature>
        <AboutFeature>UŠTEDA VAŠEG DRAGOCENOG VREMENA</AboutFeature>
        <AboutFeature>UVEK ODGOVARAMO NA ZAHTEV KLIJENTA</AboutFeature>
      </AboutFeatures>
      <AboutImageContainer>
        <StaticImage
          src="../../images/about.jpg"
          alt="about cake image"
          placeholder="blurred"
        />
      </AboutImageContainer>
    </AboutWrapper>
  )
}
