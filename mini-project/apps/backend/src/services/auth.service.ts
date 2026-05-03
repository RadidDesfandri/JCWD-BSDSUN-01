import prisma from '../lib/prisma';

const AuthService = {
  login: async (email: string, password: string) => {
    // Logic with prisma for login
    // TODO:
    /* 
        1. Periksa email apakah tersedia di database
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        2. Jika tersedia, periksa password apakah sesuai dengan password yang ada di database
        3. Jika sesuai, maka login berhasil dan buatkan token JWT
        4. Jika tidak sesuai, maka login gagal
    */

    return {
      id: 1,
      email: 'test@example.com',
      password: '123456',
    };
  },
};

export default AuthService;
