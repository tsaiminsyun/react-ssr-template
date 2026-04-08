import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Action, AppState } from './types'

export const initState = Object.freeze<AppState>({ locale: 'zh_TW' })

export default (state: AppState = initState, action: Action): AppState =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SET_LOCALE: {
        draft.locale = action.locale
        return
      }
    }
  })
