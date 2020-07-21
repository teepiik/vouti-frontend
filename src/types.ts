export type User = 'Nikke' | 'Jukka' | 'Teemu'

export interface Debt {
  _id: string
  date_origin: string
  date_paid: string
  debtor: User
  receiver: User
  debt_item: string
  comment?: string
  __v?: number
}
export interface Analytics {
  app?: string | undefined
  version?: string | undefined
  debug?: boolean | undefined
  plugins?: object | undefined
}
