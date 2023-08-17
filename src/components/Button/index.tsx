import { ButtonHTMLAttributes } from "react";
import Spinner from "../Spinner";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "md" | "lg";
  full?: boolean;
  variant?: "outline" | "dark";
}

export default function Button({
  loading,
  size,
  variant,
  full = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={loading}
      type="button"
      size={size}
      full={full}
      variant={variant}
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </Container>
  );
}
