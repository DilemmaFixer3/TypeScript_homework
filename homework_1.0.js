// 1) створити інтерфейс на основі цього объекта:
//
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }
//
var object = { mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00", launch_site: { site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40" },
    links: { article_link: null, video_link: "https://youtu/J442-ti-Dhg" },
    rocket: { rocket_name: "Falcon 9", first_stage: { cores: [{ flight: 7, core: { reuse_count: 6,
                        status: "unknown" } }] }, second_stage: { payloads: [{ payload_type_1: "Satellite1",
                    payload_mass_kg_1: 15400, payload_mass_lbs_1: 33951.2 }, { payload_type_2: "Satellite2",
                    payload_mass_kg_2: 16300, payload_mass_lbs_2: 37381.2 }] } } };
var user = { name: "Max", age: 18, gender: "male" };
//------------------------------------------------------
// function sum(a,b){
//     return a+b
// }
function sum(a, b) {
    return a + b;
}
//-------------------------------------------------------
// function showSum(a,b){
//     console.log(a + b);
// }
function showSum(a, b) {
    console.log(a + b);
}
//-------------------------------------------------------
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
