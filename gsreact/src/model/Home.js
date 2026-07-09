import React ,  { useState } from 'react'; 


const Home = () => { 
    const[value, setValue] = useState(0);
return (<div>
    <p>Counter</p>
    <button onClick={() => setValue(value + 1)}>{value}</button>
</div>
);
    
}
export default Home;    