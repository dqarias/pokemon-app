import axios from "axios";

export default class PokeApiService {

    constructor(){
        this.api = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/'
        })
    }

    getPokemon = async () => {
        try{
            const { data } = await this.api.get('pokemon');
            return data;
        }catch(error){
            return []
        }
    }
}