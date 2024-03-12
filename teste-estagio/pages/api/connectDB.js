import connect from "@/services/db"

export default async function handler(req, res) {
    const {db} = await connect()

    const user = {
        username: "david",
        senha: "123"
    }

    const response = await db.collection("users").findOne(user)


    res.status(200).json(response)
}