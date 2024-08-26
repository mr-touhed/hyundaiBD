export const getDistrictList = async () =>{
    try {
        const response = await fetch('https://bdapis.com/api/v1.2/divisions');
        const list  = await response.json();
        return list.data
    } catch (error) {
        console.log(error.message);
    }
}
export const getCityList = async (district) =>{
    try {
        const response = await fetch(`https://bdapis.com/api/v1.2/division/${district}`);
        const list  = await response.json();
        return list.data
    } catch (error) {
        console.log(error.message);
    }
}