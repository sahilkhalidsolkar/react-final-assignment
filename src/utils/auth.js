
export function isTokenAvailable() {
    let token = localStorage.getItem('token')
    console.log('token', token)

    return token ? true : false
}
export function removeAuthToken() {
    localStorage.removeItem('token')

}