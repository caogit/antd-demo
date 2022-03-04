export interface IDescriptionItem {
  label: string
  value: string | number
  contentStyle?: any
}

type IDescriptionKeys = 'descriptionItem'
type IDescriptionRecord = Record<IDescriptionKeys, IDescriptionItem[]>

export interface IDescription extends IDescriptionRecord {
  title?: string
  otherOptions?: any
}
