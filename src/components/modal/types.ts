import type { CSSProperties, VNodeChild, ComputedRef } from 'vue'

export interface IModalMethod {
  setVisible: (prop: boolean) => void
  setModalProps: (props: Partial<IModalProps>) => void
  setConfirm: () => void
}

export interface IReturnMethod {
  openModal: () => void
  closeModal: () => void
  changeModal: (props: Partial<IModalProps>) => void
  handleConfirm: () => void
}

export interface IModalProps {
  minHeight?: number
  /**
   * The modal dialog's title
   * @type any (string | slot)
   */
  title?: VNodeChild | JSX.Element
}
