import { API_KEY as CAT_API_KEY } from "./config.js";
import * as Helper from './helper.js';
import * as AxiosAPI from './axios-script.js';

// Step 0: Store your API key here for reference and easy access.
const API_KEY = CAT_API_KEY;
const BASE_URL = "https://api.thecatapi.com/v1";

const isUsingAxios = false;
let favorites = [];

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

/*
* @method GET
* @description get list of breeds from API
*/
async function initialLoad() {
    try {
        // Fetching the breeds from the cat API
        const response = await fetch(`${BASE_URL}/breeds`);
        const breeds = await response.json();

        console.log(`$$$$ breeds: ${breeds.length}`);
        // Creating new options for each breed
        Helper.setBreedsOptions(breeds);
        setData(breeds[0].id);
    } catch (e) {
        console.error(e);
    }
}

// execute immediately
if (isUsingAxios) {
    AxiosAPI.initialLoad();
} else {
    await getFavorites();
    initialLoad();
}

/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using fetch().
 *  - Make sure your request is receiving multiple array items!
 *  - Check the API documentation if you're only getting a single object.
 * - For each object in the response array, create a new element for the carousel.
 * 
 * - Append each of these new elements to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump element.
 * 
 * 
 * - Be creative with how you create DOM elements and HTML.
 * - Feel free to edit index.html and styles.css to suit your needs, but be careful!
 * - Remember that functionality comes first, but user experience and design are important.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */

/*
* @method GET
* @param {string} id - breed id to get data from API
* @description get breed data by id
*/
async function getBreedDataByID(id) {
    try {
        const response = await fetch(`${BASE_URL}/breeds/${id}`, {
            headers: {
                "x-api-key": API_KEY
            }
        });

        const breed = await response.json();
        console.log(`breed: ${breed.name} ${breed.id}   ${breed.description}`);
        Helper.setInfoDump(breed);
    } catch (e) {
        console.error(e);
    }
}

/*
* @method GET
* @param {string} id - breed id to get images from API
* @param {number} limit - limit of images to get
* @description get breed images by id
*/

async function getBreedImagesByID(id, limit = 20) {
    try {
        const response = await fetch(`${BASE_URL}/images/search?breed_ids=${id}&limit=${limit}`, {
            headers: {
                "x-api-key": API_KEY
            }
        });

        const breedImages = await response.json();
        console.log(`number of images: ${breedImages.length}`);
        Helper.setImages(breedImages);
        console.log(`#################set favorites: ${favorites.length}`);
        Helper.setFavorites(favorites);
    } catch (e) {
        console.error(e);
    }
}

breedSelect.addEventListener("change", () => {
    console.log(`selected breed: ${breedSelect.value}`);
    setData(breedSelect.value);
});

function setData(breedID) {
    getBreedDataByID(breedID);
    getBreedImagesByID(breedID);
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
 check if the image is already in the favourites list call removeFavourite
 else call setFavourite
*/
export function favourite(imgId) {
    console.log(`=====================> favourite image id: ${imgId}`);
    const obj = favorites.find(fav => fav.imgId === imgId);
    if (obj !== undefined && obj !== null) {
        if (isUsingAxios) {
            AxiosAPI.removeFavourite(obj);
        } else {
            removeFavourite(obj);
        }
    } else {
        if (isUsingAxios) {
            AxiosAPI.favourite(imgId);
        } else {
            setFavourite(imgId);
        }
    }
}

// ********************** using fetch *********************\\
/**
 * @method POST
 * @param {string} imgId - image id to favourite_id in API
 * @description set favourite image 
 */
async function setFavourite(imgId) {
    try {
        const response = await fetch(`${BASE_URL}/favourites`, {
            method: 'POST',
            headers: {
                "x-api-key": API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image_id: imgId
            })
        });

        const result = await response.json();
        Helper.setFavoriteColor(true, imgId);
        favorites.push({
            id: response.id,
            imgId: imgId
        });
        console.log(`Set Favourite response: ${JSON.stringify(result)}`);
    } catch (error) {
        console.log(`Set Favourite error :${error}`);
    }
}

/**
 * @method delete
 * @param {string} imgId - favourite id to delete
 * @description remove favourite image 
 */
async function removeFavourite(favoriteObj) {
    try {
        const response = await fetch(`${BASE_URL}/favourites/${favoriteObj.id}`, {
            method: 'DELETE',
            headers: {
                "x-api-key": API_KEY,
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();
        Helper.setFavoriteColor(false, favoriteObj.imgId);
        favorites = favorites.filter(fav => fav.imgId !== favoriteObj.imgId);
        console.log(`Remove Favourite response: ${JSON.stringify(result)}`);
    } catch (error) {
        console.log(`Remove Favourite error :${error}`);
    }
}

/**
 * @method GET
 * @description get list of favourites 
 */
async function getFavorites() {
    try {
        console.log('*********************** Get favorites ***********************');
        const response = await fetch(`${BASE_URL}/favourites`, {
            method: 'GET',
            headers: {
                "x-api-key": API_KEY
            }
        });
        console.log(`heeeeeeereeee in favorites`);
        const result = await response.json();
        favorites = result.map(fav => {
            return {
                id: fav.id,
                imgId: fav.image_id
            };
        });
        // show the favorites in the console
        console.log(`favorites: ${JSON.stringify(favorites)}`);
    } catch (e) {
        console.error(e);
    }
}

/**
 * 10. Test your site, thoroughly!
 * - What happens when you try to load the Malayan breed?
 *  - If this is working, good job! If not, look for the reason why and fix it!
 * - Test other breeds as well. Not every breed has the same data available, so
 *   your code should account for this.
 */
