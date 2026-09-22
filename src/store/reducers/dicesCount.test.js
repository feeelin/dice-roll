import { describe, it, expect } from 'vitest'
import dicesCountReducer from './dicesCount.js'

const zeroState = { '20': 0, '12': 0, '10': 0, '100': 0, '8': 0, '6': 0, '4': 0, '2': 0 }

describe('dicesCountReducer', () => {
    it('returns the default all-zero state when no state is provided', () => {
        expect(dicesCountReducer(undefined, { type: '@@INIT' })).toEqual(zeroState)
    })

    it('replaces state with the payload on SET_DICES_COUNT', () => {
        const payload = { ...zeroState, '6': 3 }
        expect(dicesCountReducer(zeroState, { type: 'SET_DICES_COUNT', payload })).toBe(payload)
    })

    it('resets to the all-zero state on CLEAR_DICES_COUNT', () => {
        const dirty = { ...zeroState, '6': 3, '20': 1 }
        expect(dicesCountReducer(dirty, { type: 'CLEAR_DICES_COUNT' })).toEqual(zeroState)
    })

    it('returns the current state unchanged for an unknown action', () => {
        const dirty = { ...zeroState, '6': 3 }
        expect(dicesCountReducer(dirty, { type: 'SOME_OTHER_ACTION' })).toBe(dirty)
    })
})
