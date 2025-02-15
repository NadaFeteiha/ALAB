import * as Helper from './helper.js';
import { API_KEY as CAT_API_KEY } from "./config.js";

/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */
const API_KEY = CAT_API_KEY;
const BASE_URL = "https://api.thecatapi.com/v1";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["x-api-key"] = API_KEY;

export async function initialLoad() {
    try {
        console.log('Start Axios');
        const response = await axios.get('/breeds');
        const breeds = response.data.map(breed => {
            return {
                id: breed.id,
                name: breed.name,
            };
        });

        console.log(`Data axios ====>> ${breeds}`);

        Helper.setBreedsOptions(breeds);
        setData(breeds[0].id);
    } catch (error) {
        console.error('Error loading breeds:', error);
    }
}

export async function getBreedDataBID(id) {
    try {
        const response = await axios.get(`/breeds/${id}`);
        const breed = response.data;

        Helper.setInfoDump(breed);
    } catch (e) {
        console.error(e);
    }
}


export async function getBreedImagesByID(id, limit = 20) {
    try {
        const response = await axios.get(`/images/search?breed_ids=${id}&limit=${limit}`);
        const breedImages = response.data;
        Helper.setImages(breedImages);
    } catch (e) {
        console.error(e);
    }
}


function setData(breedID) {
    getBreedDataBID(breedID);
    getBreedImagesByID(breedID);
}