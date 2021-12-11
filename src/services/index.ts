export const api = {
  getAddress: async (cep: string) => {
    return fetch(`https://viacep.com.br/ws/${cep}/json/unicode/`);
  },
};
