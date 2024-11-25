import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateItem = () => {
    const param = useParams();
    const [mango, setMango] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/mangos/update/${param.id}`)
        .then(res => res.json())
        .then(data => setMango(data))
    },[param])

    const mangoUpdate =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updateData = {name, email}

        fetch(`http://localhost:5000/mangos/${param.id}` ,{
            method: "PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateData)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            e.target.reset();
            data.modifiedCount > 0 && alert("updated success")
        })
    }
    return (
        <div>
            <h3>Update id: {param.id}</h3>

            <form onSubmit={mangoUpdate}>
                <input type="text" name="name" id="" defaultValue={mango?.name} /> <br /> <br />
                <input type="email" name="email" id="" defaultValue={mango?.email} /> <br /> <br />
                <input type="submit" value="Update mango" />
            </form>
        </div>
    );
};

export default UpdateItem;