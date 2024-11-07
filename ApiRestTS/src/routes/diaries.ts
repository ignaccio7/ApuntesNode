// rutas de nuestra api
import { Router } from 'express'
import * as diaryServices from '../services/diaryServices'
import { toNewDiaryEntry } from '../utils'

const router = Router()

router.get('/', (_req, res) => {
  // res.send('Fetching all entry diaries ')
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  // res.send('Fetching all entry diaries ')
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.send('No se lo ah encontrado')
})

router.post('/', (req, res) => {
  // res.send('Saving a new diary')
  try {
    // const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
