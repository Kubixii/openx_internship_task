import { useContext, useEffect, useState } from 'react'

import React from 'react'
import { StoreContext } from '../../../store/StoreProvider';

const Users = () => {

    const { users } = useContext(StoreContext)
    const [usersLocation, setUsersLocation] = useState({})
    const [longestDistance, setLongestDistance] = useState({
        "user1": {
            "location": {
                "lat": "",
                "long": ""
            },
            "name": {
                "firstname": "",
                "lastname": ""
            }
        },
        "user2": {
            "location": {
                "lat": "",
                "long": ""
            },
            "name": {
                "firstname": "",
                "lastname": ""
            }
        },
        "distance": 0
    }
    )

    useEffect(() => {
        if (users !== false) {
            getUsersLocation()
            calculateDistance()
        }
    }, [users])

    const getUsersLocation = () => {
        const usersLocation = Object.keys(users).map(key => {
            return {
                "location": users[key].address.geolocation,
                "name": users[key].name
            }
        })
        setUsersLocation(usersLocation)
    }

    const calculateDistance = () => {
        const usersLocationArray = Array.from(usersLocation)
        let longestDistance = {
            "user1": {
                "location": {
                    "lat": "",
                    "long": ""
                },
                "name": {
                    "firstname": "",
                    "lastname": ""
                }
            },
            "user2": {
                "location": {
                    "lat": "",
                    "long": ""
                },
                "name": {
                    "firstname": "",
                    "lastname": ""
                }
            },
            "distance": 0
        }

        usersLocationArray.forEach(element => {

            usersLocationArray.forEach(element2 => {

                const lat1 = element.location.lat
                const lat2 = element2.location.lat
                const lon1 = element.location.long
                const lon2 = element2.location.long

                const R = 6371e3;
                const φ1 = lat1 * Math.PI / 180;
                const φ2 = lat2 * Math.PI / 180;
                const Δφ = (lat2 - lat1) * Math.PI / 180;
                const Δλ = (lon2 - lon1) * Math.PI / 180;

                const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                const d = R * c;
                if (longestDistance.distance < d) {
                    longestDistance.user1 = element
                    longestDistance.user2 = element2
                    longestDistance.distance = d
                }
            })
        });

        setLongestDistance(longestDistance)
    }

    return (
        <div>
            <h2>Longest distance is between users:</h2>
            <div><ul>
                <li>
                    <p>{longestDistance.user1.name.firstname + " " + longestDistance.user1.name.lastname}</p>
                </li>
                <li>
                    <p>{longestDistance.user2.name.firstname + " " + longestDistance.user2.name.lastname}</p>
                </li>
            </ul>
                <p> and is: {longestDistance.distance} m</p>
            </div>
        </div>
    );
}

export default Users;