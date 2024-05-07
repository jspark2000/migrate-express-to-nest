import { Injectable } from '@nestjs/common'
import { promises as fsPromises } from 'fs'
import { JSON_FILE_PATH } from './constants'
import { join } from 'path'

@Injectable()
export class UtilService {
  async getBoardData() {
    const data = await fsPromises.readFile(
      join(__dirname, JSON_FILE_PATH),
      'utf-8'
    )
    const jsonData = JSON.parse(data)

    return jsonData
  }

  async saveBoardData(data) {
    this.sortPostsById(data)
    fsPromises.writeFile(join(__dirname, JSON_FILE_PATH), JSON.stringify(data))
  }

  sortPostsById(data, ascending = true) {
    ascending
      ? data.sort((a, b) => {
          return a.id - b.id
        })
      : data.sort((a, b) => {
          return b.id - a.id
        })
  }
}
