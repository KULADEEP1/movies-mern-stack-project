import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";

const personDetail = async (req, res) => {
  try {
    const { personId } = req.params;
    const person = await tmdbApi.personDetail({ personId });
    console.log(personId);
    responseHandler.ok(res, person);
  } catch {
    // console.log("hello")
    responseHandler.error(res);
  }
};

const personMedias = async (req, res) => {
  try {
    const { personId } = req.params;
    const medias = await tmdbApi.personMedias({ personId });
    responseHandler.ok(res, medias);
  } catch {
    responseHandler.error(res);
  }
};

export default { personDetail, personMedias };
