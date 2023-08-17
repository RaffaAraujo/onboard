import { FormEvent } from "react";

export function formatCpf(cpf: string) {
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function maskCpf(e: FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  e.currentTarget.value = value;
  return e;
}

export function maskCpfPartial(e: FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");

  e.currentTarget.value = value;
  return e;
}

export function maskCpfComplete(e: string | null | undefined) {
  let value = e;

  if (value) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d{3})$/, "$1.$2.");

    e = value;
    return e;
  }
}
