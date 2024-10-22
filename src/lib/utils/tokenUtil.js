import jwt from 'jsonwebtoken'

// function to check if token is expired
export const isTokenExpired = (token) => {
    if(!token) return true;
    const {exp} = jwt.decode(token)
    return Date.now() >= exp * 1000
}