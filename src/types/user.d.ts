interface iToken{
    access_token: string,
    token_type: string
}

interface Iuser {
    id: Number,
    email: string,
    transporter_name: string,
    email_verified_at?: string,
    created_at?: string,
    updated_at?: string,
}

interface IresLogin extends iToken {
    user: Iuser
}

interface Ilogin {
    email: string,
    password: string
}