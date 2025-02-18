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

const API_KEY = CAT_API_KEY;
const BASE_URL = "https://api.thecatapi.com/v1";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["x-api-key"] = API_KEY;
axios.defaults.onDownloadProgress = updateProgress;

/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 
 * 7. As a final element of progress indication, add the following to your axios interceptors:
 * - In your request interceptor, set the body element's cursor style to "progress."
 * - In your response interceptor, remove the progress cursor style from the body element.
 */
//**************** interceptors ******************** */
axios.interceptors.request.use(request => {
    request.metadata = request.metadata || {};
    request.metadata.startTime = new Date().getTime();

    // progressBar.style.width = '0%';
    // document.body.style.cursor = 'progress';

    return request;
});

axios.interceptors.response.use(response => {
    const elapsedTime = new Date().getTime() - response.config.metadata.startTime;
    console.log(`Request Time ${elapsedTime}ms`);

    // progressBar.style.width = '100%';
    // document.body.style.cursor = 'default';

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

/**
 * @method GET
 * @param {string} id - breed id
 * @description get breed data by id
 */
export async function getBreedDataBID(id) {
    try {
        const response = await axios.get(`/breeds/${id}`);
        const breed = response.data;

        Helper.setInfoDump(breed);
    } catch (e) {
        console.error(e);
    }
}

/**
 * @method GET
 * @param {string} id - breed id
 * @param {number} limit - number of images to return
 * @description get breed images by id
 */
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

/**
 * 6. Next, we'll create a progress bar to indicate the request is in progress.
 * - The progressBar element has already been created for you.
 * 
 *  - You need only to modify its "width" style property to align with the request progress.
 * - In your request interceptor, set the width of the progressBar element to 0%.
 *  - This is to reset the progress with each request.
 * - Research the axios onDownloadProgress config option.
 * - Create a function "updateProgress" that receives a ProgressEvent object.
 *  - Pass this function to the axios onDownloadProgress config option in your event handler.
 * - console.log your ProgressEvent object within updateProgess, and familiarize yourself with its structure.
 *  - Update the progress of the request using the properties you are given.
 * - Note that we are not downloading a lot of data, so onDownloadProgress will likely only fire
 *   once or twice per request to this API. This is still a concept worth familiarizing yourself
 *   with for future projects.
 */

function updateProgress(progressEvent) {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    progressBar.style.width = `${percentCompleted}%`;
}


/**
 * 9. Test your favourite() function by creating a getFavourites() function.
 * - Use Axios to get all of your favourites from the cat API.
 * - Clear the carousel and display your favourites when the button is clicked.
 *  - You will have to bind this event listener to getFavouritesBtn yourself.
 *  - Hint: you already have all of the logic built for building a carousel.
 *    If that isn't in its own function, maybe it should be so you don't have to
 *    repeat yourself in this section.
 */

/**
 * @method GET
 * @description get all favourites
 * 
 */
export async function getFavourites() {
    try {
        const response = await axios.get('/favourites');
        const favourites = response.data;
        console.log(`favourites: ${favourites}`);
        Helper.setImages(favourites);
    } catch (e) {
        console.error(e);
    }
}

/**
 * 8. To practice posting data, we'll create a system to "favourite" certain images.
 * - The skeleton of this function has already been created for you.
 * - This function is used within Carousel.js to add the event listener as items are created.
 *  - This is why we use the export keyword for this function.
 * - Post to the cat API's favourites endpoint with the given ID.
 * - The API documentation gives examples of this functionality using fetch(); use Axios!
 * - Add additional logic to this function such that if the image is already favourited,
 *   you delete that favourite using the API, giving this function "toggle" functionality.
 * - You can call this function by clicking on the heart at the top right of any image.
 */
/**
 * @method POST
 * @param {string} imgId - image id to favourite_id in API
 * @description favourite image
 */
export async function favourite(imgId) {
    try {
        const response = await axios.post('/favourites', {
            favourite_id: imgId
        });
        console.log(`Set Favourite response:${response.data}`);
    } catch (error) {
        console.log(`Set Favourite error :${error}`);
    }
}