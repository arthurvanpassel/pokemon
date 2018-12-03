export const getAll = () => {
    return fetch('http://localhost:1337/people').then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const get = (id) => {
    return fetch(`http://localhost:1337/people/${id}`).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const del = (id) => {
    return fetch(`http://localhost:1337/people/${id}`, {
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const update = (id, person) => {
    return fetch(`http://localhost:1337/people/${id}`, {
        method: 'PUT',
        body: JSON.stringify(person),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const add = (person) => {
    return fetch('http://localhost:1337/people/add', {
        method: 'POST',
        body: JSON.stringify(person),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
