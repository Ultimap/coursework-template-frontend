

const Profile = () => {
    const jwt = localStorage.getItem('jwt');
    fetch('http://192.168.0.107:8000/auth/me', {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            // Обработка ошибок
        });
    return ( 
        <></>
     );
}
 
export default Profile;
