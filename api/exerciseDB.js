import axios from "axios";

const baseURL = "https://exercisedb.p.rapidapi.com"

const apiCall = async (url)=>{
    try {
        const options = {
            method: 'GET',
            url,
            params: {
                limit: '10',
                offset: '0'
            },
            headers: {
                'x-rapidapi-key': "c111887eb8msh3734e33f5421631p1d0710jsncda5f6c7776b",
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }

        const res = await axios.request(options)
        // console.log("RESPONSE: "+res.data);
        return res.data
    } catch(err){
        console.log("ERROR: "+err.message)
    }
}

export const fetchExercisesByBodyPart = async (bodyPart) => {
    let data = await apiCall(`${baseURL}/exercises/bodyPart/${bodyPart}`)
    return data;
}