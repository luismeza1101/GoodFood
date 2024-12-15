export const userIsRegistered = () =>{
    return localStorage.getItem('user') != null
}