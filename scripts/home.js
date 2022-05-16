const token = localStorage.getItem('token') || ""
const url = "https://backend-with-firebase-admin.herokuapp.com/"
const tbody = document.getElementById('tbody')

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const users = await res.json()

    showUsers(users)
})

const showUsers = (users) => {
    tbody.innerHTML = ""
    users.forEach(user => {
        tbody.innerHTML += `
        <tr>
            <th>${user.id}</th>
            <th>${user.documento}</th>
            <th>${user.tipo_documento}</th>
            <th>${user.nombres}</th>
            <th>${user.apellidos}</th>
            <th>${user.correo}</th>
            <th>${user.telefono_celular}</th>
            <th>${user.genero}</th>
            <th>${user.fecha_nacimiento}</th>
            <th>${user.fecha_actualizacion}</th>
            <th>${user.fecha_creacion}</th> 
        </tr>
        `
    })
}
