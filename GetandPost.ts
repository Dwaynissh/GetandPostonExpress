import express, {Application, Request, Response} from "express"

const port: number = 5000;

const app: Application = express()

app.use(express.json());

const dummyData = [
    {
        id: 1,
        name: "Prince",
        gmail: "prince@gmail.com"
    },
    {
        id: 2,
        name: "Habeeb",
        gmail: "habeeb@gmail.com"
    },
    {
        id: 3,
        name: "Francis",
        gmail: "francis@gmail.com"
    },
    {
        id: 4,
        name: "Stanley",
        gmail: "stanley@gmail.com"
    },
    {
        id: 5,
        name: "Sean",
        gmail: "sean@gmail.com"
    }
]

// Default GET

app.get("/",(req: Request, res: Response)=>{
    res.send("My First Express Server");
})

// GET Method

app.get("/get-all", (req: Request, res: Response)=>{
    res.send(dummyData)
});

// Post Method
app.post("/add",(req:Request, res:Response)=>{
    let newuser = req.body
    dummyData.push(newuser)
    res.json(dummyData)
})

app.listen(port,()=>{
    console.log("");
    console.log("Server is listening to port", port);
})