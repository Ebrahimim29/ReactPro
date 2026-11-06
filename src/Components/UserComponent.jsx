import { useEffect, useState } from "react";

const UserComponent = () => {

    const [age, setAge] = useState(20);

    useEffect(() => {
        // Mount
        console.log("Send A Request To The Server");
        
        return () => {
            // UnMount
            console.log("Hoping To Meet You");            
        }
    }, []);

    useEffect(() => {
        // Updating
        console.log(age);        
        if (age === 30) {
            console.log("Age Is 30");            
        }
    }, [age])

    return (
        <div className="flex flex-col justify-center items-center bg-amber-300">
            <h1 className="text-red-400">UserComponet</h1>
            <button className="text-green-400 p-2 bg-gray-500 rounded-2xl"
            onClick={()=>setAge((prev) => prev + 1)}>
                CahngeAge
            </button>
            <ul>
                <li>Name: Mohammad</li>
                <li>Age: {age}</li>
                <li>Email: Ebrahimim29@gmail.com</li>
            </ul>
        </div>
    );
};

export default UserComponent;