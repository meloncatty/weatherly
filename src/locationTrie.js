import cities from './helpers/citiesObject.js'
import Trie from '../node_modules/@neko3/complete-me-last/scripts/Trie.js'

let trie = new Trie()
cities.data.forEach(city => trie.insert(city))


export default trie
