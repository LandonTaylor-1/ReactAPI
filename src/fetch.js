export default getBeers = () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beers => {
        console.log('Beers', beers)
    }) 
}