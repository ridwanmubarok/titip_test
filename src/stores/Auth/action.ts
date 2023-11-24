import { API_POST_LOGIN } from "@/services/api"
import Client from "@/services/client"


export const LoginUser = async(credential: Ilogin) : Promise<IresLogin> => {
    const _FormData = new FormData();
    _FormData.append('email',credential.email)
    _FormData.append('password',credential.password)
    const result = await Client.post(
        API_POST_LOGIN,
        _FormData
        
      );
      return result.data as IresLogin;
}