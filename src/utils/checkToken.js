async function checkToken () {
    const token = localStorage.getItem("token");
    console.log(token)

    const response = await fetch('http://localhost:8080/verify', {
            method: 'POST',
            body:{},
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "token" : `${token}`
            }
        })

    if (response.status === 400) {
        return false
    }

    if (response.status === 200) {
        const data = await response.json()
        localStorage.setItem("isAdmin", data.isAdmin)
        return true
    }
}

export default checkToken