import axios from "axios";

const SAVEDWORK_API_BASE_URL = "http://localhost:8080/api/savedworks";

class SavedWorkService {
  getSavedWorks() {
    return axios.get(SAVEDWORK_API_BASE_URL);
  }

  SaveWork(savedWork) {
    return axios.post(SAVEDWORK_API_BASE_URL, savedWork);
  }
}

const savedWorkService = new SavedWorkService();
export default savedWorkService;
