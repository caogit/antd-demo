export enum EuploadType {
  SUCCESS = 'success',
  ERROR = 'error',
  UPLOADING = 'uploading',
  EMPYT = ''
}
export enum EuploadHandle {
  DELETE = '删除'
}

export interface ItableItem {
  thumbnail: string
  fileName: string
  fileSize: string
  uploadType: EuploadType
  fileHandle: EuploadHandle
  progress: number
}
