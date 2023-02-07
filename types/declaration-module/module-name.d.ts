declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    accessTokenExpires?: number;
    error?: unknown;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    sessionState?: string;
    accessTokenExpires?: number;
    exp?: number;
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
