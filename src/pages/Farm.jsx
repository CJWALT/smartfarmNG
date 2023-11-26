
import Button from '../components/Button';
import Header from '../components/Header'

const Farm = ()=>{ 
    return (
        <>
        <Header />
        <div className=''>
            <form>
            <div>
                <label htmlFor ='fname'>Name</label>
                <input type='text' name='nameofcrop' placeholder='Name of farm' id='fname' /> 
            </div>
            <div>
                <label htmlFor ='crop'>Crop</label>
                <select id='crop'>
                    <option> Yam </option>
                    <option> cucumber </option>
                    <option> Maize </option>
                    </select> 
                <small>Name to identify your crop</small>
            </div>
            <div>
                <label htmlFor ='country'>Country</label>
                <select id='country'>
                    <option>Nigeria</option>
                    <option>Burundi</option>
                    <option>Ghana</option>

                </select>
                <small>Country where farm is located</small> 
            </div>
            <div>
                <label htmlFor ='cropUse'>Crop Use</label>
                <select id='cropUse'>
                    <option value="eating">eating</option>
                    <option value="eating">farming</option>
                    <option value="eating">eating</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select what crop is for</small>
            </div>
            <div>
                <label htmlFor ='soilTex'>Soil Texture</label>
                <select id='soilTex'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            <div>
                <label htmlFor ='irr'>Irrigation</label>
                <select id='irr'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            <div>
                <label htmlFor ='soilPh'>Soil ph</label>
                <select id='soilPh'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            <div>
                <label htmlFor ='weaSea'>Weather Season</label>
                <select id='weaSea'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            <div>
                <label htmlFor ='weaHum'>Weather Humidity</label>
                <select id='weaHum'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            
            <div>
                <label htmlFor ='weaTemp'>Weather Temperature</label>
                <select id='weaTemp'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            
            <div>
                <label htmlFor ='weaPh'>Weather ph</label>
                <select id='weaPh'>
                    <option value="eating">loamy</option>
                    <option value="eating">furrow</option>
                    <option value="eating">sanding</option>
                    <option value="eating">eating</option>
                </select>
                <small>Select texture of soil</small>
            </div>
            
            <Button
            children='cancel'/>
            <Button 
            children='See Recommendation'/>

            </form>

            <div>
                <h4>
                    Would you prefer to locate your farm on the map?

                </h4>

                <div>
                    icon

                    <h5>Automatic detection </h5>

                    <p>Locate your farmland automatically on the map and get <br/>
                    recommendations with one click</p>

                    <Button 
                    children="See Recommendation"/>
                </div>
            </div>

        </div>
        <div>map</div>
        </>
    )
}

export default Farm;