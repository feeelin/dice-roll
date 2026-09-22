import { describe, it, expect } from 'vitest'
import popupReducer from './popup.js'

describe('popupReducer', () => {
    it('returns true on SHOW_POPUP', () => {
        expect(popupReducer(false, { type: 'SHOW_POPUP' })).toBe(true)
    })

    it('returns false on HIDE_POPUP', () => {
        expect(popupReducer(true, { type: 'HIDE_POPUP' })).toBe(false)
    })

    it('returns false for an unknown action, regardless of current state (see bugreport.md: state is not preserved)', () => {
        expect(popupReducer(true, { type: 'SOME_OTHER_ACTION' })).toBe(false)
    })

    it('returns false when initialized with no state', () => {
        expect(popupReducer(undefined, { type: '@@INIT' })).toBe(false)
    })
})
