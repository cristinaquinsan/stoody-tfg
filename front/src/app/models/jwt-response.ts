export interface JwtResponseI {
    dataUser: {
        id: number,
        username: string,
        email: string,
        passwd: string,
        motherlang: string,
        studlangs: Array<String>
        accessToken: string,
        expiresIn: string
    }
}
