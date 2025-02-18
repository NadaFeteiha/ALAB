import * as Helper from './helper.js';
import { API_KEY as CAT_API_KEY } from "./config.js";

/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */

/**
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */

/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 */

const API_KEY = CAT_API_KEY;
const BASE_URL = "https://api.thecatapi.com/v1";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["x-api-key"] = API_KEY;

//**************** interceptors ******************** */
axios.interceptors.request.use(request => {
    request.metadata = request.metadata || {};
    request.metadata.startTime = new Date().getTime();
    return request;
});

axios.interceptors.response.use(response => {
    const elapsedTime = new Date().getTime() - response.config.metadata.startTime;
    console.log(`Request Time ${elapsedTime}ms`);
    return response;
});


/**
 * @method GET 
 * @description get list of breeds 
 */
export async function initialLoad() {
    try {
        console.log('begin request');
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