import useHydrated from '@/hooks/useHydrated';
import {create} from 'zustand'
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { toast } from "react-toastify";
import { LoginUser } from './action';
import Cookies from 'js-cookie';

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
                    set(() => ({
                        loading: true
                    }));
                    const resLogin = await LoginUser(credentials);
                    if (resLogin) {
                        set(() => ({
                            token: {
                                access_token: resLogin?.access_token,
                                token_type: resLogin?.token_type
                            },
                            isLogin: true,
                            user: resLogin?.user
                        }));
                        window.localStorage.setItem("access_token", resLogin?.access_token);
                        Cookies.set('isLoggedIn','true');
                        Cookies.set('access_token',resLogin?.access_token);
                        return resLogin;
                    }else throw resLogin;
                } catch (error) {
                    set(() => ({
                        loading: false
                    }));
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