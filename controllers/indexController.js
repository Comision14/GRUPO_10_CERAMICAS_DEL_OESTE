module.exports = {
    index : (req, res) => {
        return res.render('index', {
            title : 'Home'
        })
    }
}