import { create } from 'zustand';

interface AuthState {
  status: 'Authenticated' | 'UnAuthenticated' | 'checking';
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAthStore = create<AuthState>()((set) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: (email: string, password: string) => {
    const l = password;
    console.log(l)
    set({
      status: 'Authenticated',
      token: 'ABC123',
      user: {
        name: 'Jhon Doe',
        email: email,
      },
    });
  },
  logout: () => {
    set({
      status: 'UnAuthenticated',
      token: undefined,
      user: undefined,
    });
  },
}));
