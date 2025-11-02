function query(endpoint, options){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`http://localhost:3000/${endpoint}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then(resolve)
            .catch(reject);
        }, 1000);
});
}