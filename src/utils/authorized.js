import RenderAuthorized from '../components/authorized'

const getAuthority = () => localStorage.getItem('authority') || 'admin'

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority())
}

export { reloadAuthorized }
export default Authorized
