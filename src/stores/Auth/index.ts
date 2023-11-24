import useHydrated from '@/hooks/useHydrated';
import {create} from 'zustand'
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { toast } from "react-toastify";
import { LoginUser } from './action';


interface AuthState {
    isLogin: boolean,
    token: iToken,
    user: Iuser,
    loading: Boolean,
    Login: (params: Ilogin) => Promise<IresLogin> | null;
}


export const useAuthStore = create<AuthState>()(
    persist(
        (set,get) => ({
            user: {
                email: '',
                id: 0,
                transporter_name: '',
                created_at: '',
                email_verified_at: '',
                updated_at: ''
            },
            isLogin: false,
            token: {
                access_token: '',
                token_type: ''
            },
            loading: false,
            Login: async (credentials) => {
                try {
                    const resLogin = await LoginUser(credentials);
                    console.log(resLogin);
                    if (resLogin) {
                        set(() => ({
                            token: {
                                access_token: resLogin?.access_token,
                                token_type: resLogin?.token_type
                            },
                            isLogin: true,
                            user: resLogin?.user
                        }));
                        return resLogin;
                    }else throw resLogin;
                } catch (error) {
                    toast.error("Check your User email and Password!");
                    throw error;
                }
            }
        }),
        {
            name: 'auth-state',
            partialize: ({ token,isLogin,user }) => ({
                token,
                isLogin,
                user
            }),
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

const useAuth: () => AuthState = () => {
    const store = useAuthStore();
    const isHydrated = useHydrated();
    return isHydrated ? store : {
        user: {
            email: '',
            id: 0,
            transporter_name: '',
            created_at: '',
            email_verified_at: '',
            updated_at: ''
        },
        isLogin: false,
        token: {
            access_token: '',
            token_type: ''
        },
        loading: false,
        Login: () => null,
    }
}

export default useAuth;