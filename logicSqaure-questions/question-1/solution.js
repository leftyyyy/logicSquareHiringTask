import CAFE_DATA from './cafe.data';
import PLACE_DATA from './place.data';
const cafeData = {
    cafe_collections: CAFE_DATA
};
const placeData = {
	place_collections: PLACE_DATA
};
//give input here
var string = "z";

function findCaliforniaCafes(string) {
    var res = [];
    const { cafe_collections } = cafeData;
		const { place_collections } = placeData;
		let stringArr = [];
		cafe_collections.map(i => {
			if(i.name.toLocaleLowerCase().includes(string.toLocaleLowerCase())){
				stringArr.push(i)
			}
		});
		stringArr.forEach( _ => {
			let obj = place_collections.find(o => o.id === _.place_id);
			obj.name = _.name;
			delete obj.id;
			res.push(obj);
		})
    return res
}
console.log(findCaliforniaCafes(string));