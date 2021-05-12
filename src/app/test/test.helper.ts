import { of } from "rxjs"

export class weatherServiceStub {
    getCitiesWeather(){
        return of({
            list: {
            "clouds": {"all": 0},
            "coord": {"lon": 37.6156, "lat": 55.7522},
            "dt": 1620716826,
            "id": 524901,
            "main": {
                "feels_like": 286.92,
                "humidity": 36,
                "pressure": 1027,
                "temp": 288.4,
                "temp_max": 289.15,
                "temp_min": 288.15
            },
            "name": "Moscow",
            "sys": {
                "country": "RU", 
                "timezone": 10800, 
                "sunrise": 1620696330, 
                "sunset": 1620753984
            },
            "visibility": 10000,
            "deg": 70,
            "speed": 7
        }
        })
    }
}

// export const mockWeather = [
//     {
//         "clouds": {"all": 0},
//         "coord": {"lon": 37.6156, "lat": 55.7522},
//         "dt": 1620716826,
//         "id": 524901,
//         "main": {
//             "feels_like": 286.92,
//             "humidity": 36,
//             "pressure": 1027,
//             "temp": 288.4,
//             "temp_max": 289.15,
//             "temp_min": 288.15
//         },
//         "name": "Moscow",
//         "sys": {
//             "country": "RU", 
//             "timezone": 10800, 
//             "sunrise": 1620696330, 
//             "sunset": 1620753984
//         },
//         "visibility": 10000,
//         "deg": 70,
//         "speed": 7
//     }
// ]