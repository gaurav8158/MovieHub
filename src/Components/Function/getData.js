import axios from "axios";

export const getData = async (setMovieList) => {
    axios
        .get("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => {
            // console.log(res.data);
            setMovieList(res.data);
        })
        .catch((error) => console.log(error));
        return;
}
