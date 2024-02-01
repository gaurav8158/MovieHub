export const BookMovie = (details) => {
    let data = JSON.parse(localStorage.getItem('booking')) || [];

    data = [...data, details]
    localStorage.setItem('booking', JSON.stringify(data));
    return;
}
