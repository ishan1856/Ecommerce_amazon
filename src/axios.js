import axios from 'axios'

const instance=axios.create({
    bseURL:' http://127.0.0.1:5001/clone-c303f/us-central1/api'   //THE API (CLOUD FUNCTION) URL
});


export default instance;