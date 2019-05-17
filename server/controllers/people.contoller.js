//People Controller
module.exports = {
    addPerson: (req, res) => {
        //destructure the body of the request
        const {name, age, gender} = req.body
        //get db instance
        const db = req.app.get('db');
        //talk to the db to create the person
        db.add_person({name, age, gender})
            .then(dbResponse => {
                //send data back to client (front end)
                res.status(200).send(dbResponse);
            })
            .catch(error => {
                if(error) throw error;
            })
    }
}