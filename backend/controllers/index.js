import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const signUpController = async (req, res) => {
    
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        });
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
      }
      
}

const loginController = async (req, res) => {
    
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          return res.status(400).send({ message: 'Invalid credentials' });
        }
    
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
          return res.status(400).send({ message: 'Invalid credentials' });
        }
    
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ accessToken });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
      }
      
}

export {
    loginController,
    signUpController
}