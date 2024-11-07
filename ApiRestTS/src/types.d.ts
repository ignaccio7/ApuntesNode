// export type Visibility = 'great' | 'good' | 'ok' | 'poor'
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// comentamos esta parte y lo pasamos a enums ya que no nos permitia validar cuando tratamos de registrar
// export enum Weather {
//   Sunny = 'sunny',
//   Rainy = 'rainy',
//   Cloudy = 'clody',
//   Windy = 'windy',
//   Stormy = 'stormy'
// }

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// este pick para tener un nuevo tipo sin la propiedad de comment sin necesidad de crear una nueva interface
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id', 'date', 'weather', 'visibility'>
// otra forma de hacer lo mismo pero mejor
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
