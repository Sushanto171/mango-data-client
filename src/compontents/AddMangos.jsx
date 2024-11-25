const AddMangos = () => {
    const mangoAdd =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const mangos = { name, email};
        // console.log(mangos);

        fetch("http://localhost:5000/mangos", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(mangos)
        }).then(res => res.json())
        .then(data => {
            data.insertedId && alert("item added successfully") 
            data.insertedId && form.reset();
            console.log(data)})
    }
    return (
        <div>
            <form onSubmit={mangoAdd}>
                <input type="text" name="name" id="" /> <br /> <br />
                <input type="email" name="email" id="" /> <br /> <br />
                <input type="submit" value="Add mango" />
            </form>
        </div>
    );
};

export default AddMangos;