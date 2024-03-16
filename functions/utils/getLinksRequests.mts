const makeGetRequest = function(name) {
  return `query {
    getAllAlbumLinks(_size: 600, album: "${name}") {
      data {
        _id,
        url,
        description
      }
    }
  }`
}

const videoQuery = `query {
  getAllAlbumLinks(_size: 600, album: "Videos") {
    data {
      _id,
      url,
      description,
      thumbnail
    }
  }
}`

const GET_CEREMONY_LINKS = makeGetRequest("Ceremony");
const GET_COUPLE_LINKS = makeGetRequest("Couple");
const GET_ENGAGEMENT_LINKS = makeGetRequest("Engagement");
const GET_FAMILY_LINKS = makeGetRequest("Family");
const GET_GETTING_READY_LINKS = makeGetRequest("GettingReady");
const GET_RECEPTION_LINKS = makeGetRequest("Reception");
const GET_VIDEOS_LINKS = videoQuery;
const ERROR_MESSAGE = 'Something went wrong'

export default {
  GET_CEREMONY_LINKS,
  GET_COUPLE_LINKS,
  GET_ENGAGEMENT_LINKS,
  GET_FAMILY_LINKS,
  GET_GETTING_READY_LINKS,
  GET_RECEPTION_LINKS,
  GET_VIDEOS_LINKS,
  ERROR_MESSAGE
}