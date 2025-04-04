// import { InstagramLogo } from "@phosphor-icons/react";
import { Container, Copyright, SocialMedia } from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Copyright>
        <p>© {currentYear} Philipe Ferreira - Desenvolvedor Web 👨🏽‍💻 </p>
        <p>Todos os direitos reservados.</p>
      </Copyright>
{/* 
      <SocialMedia>
        <a
          href="https://www.instagram.com/_philipeferreiraa/"
          target="_blank"
        >
          <InstagramLogo size={24} />
        </a>
      </SocialMedia> */}
    </Container>
  );
}
