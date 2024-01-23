import { getFullData } from  "./apiCalls";

jest.mock('axios');


describe('fetchData', () => {
    it('fetches successfully data from OpenWeather API', async()=>{

        const result = await getFullData("Paris");
        expect(result).toHaveProperty('weather')
    })
})