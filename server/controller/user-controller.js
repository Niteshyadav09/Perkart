import User from '../model/user-schema.js';


export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ mesage: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if (user) {
            return response.status(200).json({ message: `${request.body.username} login successful` });
        } else {
            return response.status(401).json({ message: 'Invalid Login' });
        }
    } catch (error) {
        response.status(500).json({ message: `Error: ${error.message}` });
    }
};
