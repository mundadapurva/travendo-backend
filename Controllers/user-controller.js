import User from '../model/userSchema.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if (user) {
            
            return response.status(200).send({
                user,
            });
        } else {
            return response.status(401).send({
                error: 'Invalid Details'
            });
        }

    } catch (error) {
        response.json('Error: ', error.message);
    }
}

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).send({ message: 'User already exist' });
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).send({
            user: newUser,
        });

    } catch (error) {
        response.status(500).send('Error: ', error.message);
    }
}