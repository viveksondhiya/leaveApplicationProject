import UserModel from "./userModel";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUser(req, res);

    case "POST":
      return await createUser(req, res);

    case "PUT":
      return await updateUser(req, res);

    case "DELETE":
      return await deleteUser(req, res);

    default:
      return res.status(400).send("Method not allowed");
  }
}

async function getUser(req, res) {
  try {
    const { userId } = req.query;
    console.log("inside uid")
    const user = await UserModel.getUserById(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function createUser(req, res) {
  try {
    const { username, email, password ,phone} = req.body;
 
    const user=await UserModel.createUser(username, email, password,phone);
 
    return res.status(201).send("User created successfully");
  } catch (error) { 
    return res.status(500).json({ message: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { username, email,phone,totalLeave } = req.body;
    const { userId } = req.query;
    //console.log("body api/users ",req.body)
    const updated=await UserModel.updateUserById(userId, username, email,phone,totalLeave);
 
    return res.status(200).send("User updated successfully");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    await UserModel.deleteUserById(userId);
    return res.status(200).send("User deleted successfully");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
