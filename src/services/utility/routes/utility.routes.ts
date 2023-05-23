// const utilityUrl = `${process.env.BASE_URL}/utilities`
const utilityBaseUrl = `http://localhost:4700/lead-api/utilities`


export const utilityUrl = {
    getUtilities:() => `${utilityBaseUrl}/`,
    addUtilities:() => `${utilityBaseUrl}/`,
    getInterSwitchUtilities:() => `${utilityBaseUrl}/data`,
}


//     UTILITIES: '/utilities',
//     GET_UTILITIES: "/utilities",
//     ADD_UTILITIES: "/utilities",
//     INTERSWITCH_UTILITIES: '/data',
