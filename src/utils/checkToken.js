async function checkToken () {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");
    console.log("TokenWeb", token);
    console.log("isAdmin", isAdmin);

    const response = await fetch('http://localhost:8080/verify', {
            method: 'POST',
            body:{},
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "token" : `${token}`,
                "isAdmin" : `${isAdmin}`,
            }
        })

    if (response.status === 400) {
        localStorage.removeItem("token")
        localStorage.removeItem("isAdmin")
        return false
    }

    if (response.status === 200) {
        const data = await response.json()
        localStorage.setItem("isAdmin", data.isAdmin)
        return true
    }
}

export default checkToken