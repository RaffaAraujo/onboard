import * as Dialog from "@radix-ui/react-dialog";
import { BiX } from "react-icons/bi";
import { Close, Content, Overlay, Title } from "./styles";

interface Props {
  title: string;
  isOpen: boolean;
  onOpenChange?(open: boolean): void;
  children: JSX.Element;
}

export default function Modal({
  children,
  onOpenChange,
  isOpen,
  title,
}: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>{title}</Title>
          {children}
          <Close>
            <button className="IconButton" aria-label="Close">
              <BiX size={30} color="#6C757D" />
            </button>
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
