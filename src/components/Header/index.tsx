import { BiChevronLeft, BiLogOut } from "react-icons/bi";
import logoImg from "../../assets/logotipo.png";
import { Container, ButtonIcons, ButtonLink } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

interface HeaderProps {
  isLogo?: boolean;
}

export default function Header({ isLogo }: HeaderProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleOnNavigateBack = () => {
    navigate(-1);
  };

  const handleOnSignOut = () => {
    signOut();
    const externalUrl = "https://www.copart.com.br/";
    window.location.href = externalUrl;
  };

  return (
    <Container>
      {isLogo ? (
        <img src={logoImg} alt="logo" />
      ) : (
        <ButtonIcons onClick={handleOnNavigateBack}>
          <BiChevronLeft size={22} color="#FFFFFF" />
        </ButtonIcons>
      )}

      <ButtonLink onClick={handleOnSignOut}>
        <BiLogOut size={22} color="#FFFFFF" /> Sair
      </ButtonLink>
    </Container>
  );
}
