
export const loggedUserStyle = (role : string)  => {
    switch(role){
        case 'USER':
            return { color: '#fff', backgroundColor: 'rgb(25, 103, 248)', borderRadius: '6px', padding: '3px', marginLeft: '3px'};
        case 'MODERATOR':
            return { color: '#fff', backgroundColor: 'rgb(250, 33, 5)', borderRadius: '10px', padding: '3px', marginLeft: '3px'};
        case 'ADMIN':
            return { color: '#fff', backgroundColor: 'rgb(33, 166, 10)', borderRadius: '10px', padding: '3px', marginLeft: '3px'};
    }
};

export const loggedUserHeaderStyle = ( role : string) =>  {
    switch(role){
        case 'USER':
            return { color: '#fff', backgroundColor: 'rgb(25, 103, 248)', borderRadius: '6px', padding: '3px', marginLeft: '3px'};
        case 'MODERATOR':
            return { color: '#fff', backgroundColor: 'rgb(250, 33, 5)', borderRadius: '10px', padding: '3px', marginLeft: '3px'};
        case 'ADMIN':
            return { color: '#fff', backgroundColor: 'rgb(33, 166, 10)', borderRadius: '10px', padding: '3px', marginLeft: '3px'};
    }
}