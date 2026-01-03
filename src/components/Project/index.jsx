import { GithubLogo, Rocket, LockSimple } from "@phosphor-icons/react"; 
import { Container, Header, Icons, Preview, Tags, BadgePrivado } from "./styles"; 
import { Tag } from "../../components/Tag";

export function Project({ title, repo, demo, description, path, tags }) {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>        

        <Icons>
          {/* Se houver repo, mostra o link do GitHub. Se for null, mostra o cadeado */}
          {repo ? (
            <a
              href={`https://github.com/philipef-dev/${repo}`}
              target="_blank"
              title="Repositório"
              rel="noreferrer"
            >
              <GithubLogo size={24} />
            </a>
          ) : (
            <BadgePrivado title="O código-fonte deste projeto é privado para proteção de propriedade intelectual.">
              <LockSimple size={24} />
            </BadgePrivado>
          )}

          <a href={demo} target="_blank" title="Visualizar Projeto (Deploy)" rel="noreferrer">
            <Rocket size={24} />
          </a>
        </Icons>
      </Header>

      <p>{description}</p>

      {/* Só renderiza a imagem se houver um path (útil para serviços que às vezes não têm print) */}
      {path && (
        <Preview>
          <img src={path} alt={`Screenshot do projeto ${title}`} />
        </Preview>
      )}

      <Tags>
        {tags.map((tag, tagIndex) => (
          <Tag key={tagIndex} title={tag} />
        ))}
      </Tags>
    </Container>
  );
}