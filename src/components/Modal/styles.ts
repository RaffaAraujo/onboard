import * as Dialog from "@radix-ui/react-dialog";
import { shade } from "polished";

import styled, { keyframes } from "styled-components";

const overlayShow = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const contentShow = keyframes`
   from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  max-height: 95vh;
  overflow-y: auto;
  padding: 20px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: var(--gray-800);

  @media screen and (max-width: 600px) {
    width: 95vw;
    padding: 12px;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
    border-radius: 0.5rem;
    background-color: hsl(220, 8%, 76%);

    &-thumb {
      background-color: hsl(220, 8%, 64%);
      border-radius: 0.5rem;

      &:hover {
        background-color: hsl(220, 8%, 54%);
      }
    }
  }
  .DialogContent:focus {
    outline: none;
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: var(--text-small-xl);
  font-weight: var(--weight-bold);
  color: var(--gray-300);
  margin: 0 0 14px;
`;

export const Close = styled(Dialog.Close).attrs({ asChild: true })`
  font-family: inherit;
  border-radius: 6px;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: var(--gray-900);
  top: 10px;
  right: 10px;

  &:hover {
    svg {
      path {
        fill: var(--gray-400);
      }
    }
    background-color: ${shade(0.1, "#101828")};
  }
  &:focus {
    box-shadow: 0 0 0 2px var(--gray-500);
  }
`;
