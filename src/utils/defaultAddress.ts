export interface IDefaultAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const defaultAddress: IDefaultAddress = {
  cep: "",
  logradouro: "",
  complemento: "",
  bairro: "",
  localidade: "",
  uf: "",
  ibge: "",
  gia: "",
  ddd: "",
  siafi: "",
};
