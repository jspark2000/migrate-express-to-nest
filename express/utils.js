import fs from 'fs'

const JSON_FILE_PATH = './board.json'

export const getBoardData = () => {
  const data = fs.readFileSync(JSON_FILE_PATH, 'utf-8')
  const jsonData = JSON.parse(data)

  return jsonData
}

export const saveBoardData = (data) => {
  sortPostsById(data)
  fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(data))
}

export const sortPostsById = (data, ascending = true) => {
  ascending
    ? data.sort((a, b) => {
        return a.id - b.id
      })
    : data.sort((a, b) => {
        return b.id - a.id
      })
}
