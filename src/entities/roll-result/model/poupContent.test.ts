import { describe, it, expect } from 'vitest'
import popupContentReducer from './poupContent'

const defaultState = { values: '', description: '', total: 0, type: 'simple' }

describe('popupContentReducer', () => {
    it('returns the default state when no state is provided', () => {
        expect(popupContentReducer(undefined, { type: '@@INIT' })).toEqual(defaultState)
    })

    it('replaces state with the payload on SET_POPUP_CONTENT', () => {
        const payload = { values: '(6)', description: '1k6', total: 6, type: 'win' }
        expect(popupContentReducer(defaultState, { type: 'SET_POPUP_CONTENT', payload })).toBe(payload)
    })

    it('returns the current state unchanged for an unknown action', () => {
        const current = { values: '(1)', description: '1k6', total: 1, type: 'loss' }
        expect(popupContentReducer(current, { type: 'SOME_OTHER_ACTION' })).toBe(current)
    })
})
