import { useContext, useEffect, useState } from 'react'

import React from 'react'

const USERS_ENDPOINT = './users';

const Users = () => {




    useEffect(() => {
        // fetchData(USERS_ENDPOINT)

        return () => {
            // fetchData(null)
        }
    }, [])



    return (
        <div>
            {/* {fetchedData?.toString()} */}
        </div>
    );
}

export default Users;