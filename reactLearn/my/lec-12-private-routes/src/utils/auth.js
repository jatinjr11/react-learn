export const isAuthenticated = () => {
  // check if user is authenticated
  // if yes return true
  // if no return false
  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("token") ? true : false);
  
  return localStorage.getItem("token") ? true : false;
}