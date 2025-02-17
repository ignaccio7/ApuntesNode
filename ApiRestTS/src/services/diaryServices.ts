import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types.d'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, weather, date, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
