const useHttp = async() => {
    let url = 'http://'
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 'Content-Type': 'text/plain'},
            body: JSON.stringify(response.body)
        })

        if(response.status !== 200) {
            throw new Error('request failed')
        }
    } catch(err) {
        throw new Error(err)
    }
}

export default useHttp