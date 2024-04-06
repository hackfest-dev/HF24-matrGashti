//to add an item every time the button is clicked
//should give error if that quantity of food isnt available on spot
//the dropdown should be dynamic and should show the food items available


import {useState} from 'react';
export default function AddItem(e){
    const [formData, setFormData] = useState();
    function handleChange(){
        e.preventDefault();
        console.log(e.target.value);
    }
    return(
        <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" onChange={handleChange}>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                         >
                            <MenuItem value={10}>Roti</MenuItem>
                            <MenuItem value={20}>Chapathi</MenuItem>
                            <MenuItem value={30}>Biriyani</MenuItem>
                            </Select>
                </FormControl>
        </div>
    )
}