
export const loggedUserStyle = (role : string)  => {
    switch(role){
        case 'USER':
            return { color: 'black'};
        case 'MODERATOR':
            return { color: 'green'};
        case 'ADMIN':
            return { color: 'blue'};
    }
};