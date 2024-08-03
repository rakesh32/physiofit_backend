const User = require('../../models/user.model')

async function signUp(req) {
    try {
      const { name, age, email, category } = req.body;
      const user = new User({ name, age, email, category });
      await user.save();
      return user
    } catch (error) {
      console.error('Error creating user:', error);
      throw error
    }
}

async function userLogin (req) {
    try {
      console.log("user Called");
      const { email, password } = req.body;
      console.log(req.body)
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('No user found')
      }
  
      if (user.password !== password) {
        throw new Error('Invalid Password')
      }
      const result = {
        Login: true,
        _id: user._id
      }

    return result
  
    } catch (error) {
      console.error("Error during login:", error.message);
      throw error
    }
  }

  async function getUserById(req) {
    try {
      console.log("Fetching user details");
      const userId = req.params.id;
      const user = await User.findById(userId).select('name streak'); // Select only name and streak fields

      if (!user) {
        throw new Error('User not found')
      }
      return user
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      throw error
    }
  }

module.exports = {
    signUp,
    userLogin,
    getUserById
}