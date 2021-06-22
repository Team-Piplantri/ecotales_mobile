import React from 'react'

const UserContext = React.createContext({
    isLoginContext: false,
    setLoginContext: () => {}
});

export default UserContext
