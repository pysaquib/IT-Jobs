module.exports = (job, knex) => {
    job.get('/', (req, res) => {
        var loc = req.query.location
        var job = req.query.job
        knex('Job')
        .distinct('*')
        .where('Location', 'like', loc+'%')
        .andWhere('Designation', 'like', job+"%")
        .then((data) => {
            return res.json(data)
        });
    });
};