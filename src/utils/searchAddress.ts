import { defaultAddress, IDefaultAddress } from "./defaultAddress";

import { api } from "../services";

export async function searchAddress(
  inputValue: string,
  setAddress: React.Dispatch<React.SetStateAction<IDefaultAddress>>
) {
  api
    .getAddress(inputValue)
    .then((response) => response.json())
    .then((data) => setAddress(data))
    .catch((_) => setAddress(defaultAddress));
}
