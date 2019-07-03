module.exports = (main) => {
    main.get('/', (req, res) => {
        res.sendFile('/home/tonystark/Desktop/JS/LinkedIn_Jobs/LinkedIn/form.html')
    })
}