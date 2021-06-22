import React from 'react'

const UserContext = React.createContext({
    isLogin: true,
    setLogin: () => {}
});

export default UserContext
