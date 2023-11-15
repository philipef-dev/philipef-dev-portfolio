import { InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Container, Copyright, SocialMedia } from "./styles";

export function Footer() {
  return (
    <Container>
      <Copyright>
        <p>© 2023 Philipe Ferreira</p>
        <p>Todos os direitos reservados.</p>
      </Copyright>

      <SocialMedia>
        <a
          href="https://www.instagram.com/philipe_dev/"
          target="_blank"
        >
          <InstagramLogo size={24} />
        </a>        
      </SocialMedia>
    </Container>
  );
}
