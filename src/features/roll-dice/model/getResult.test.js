import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('../../../shared/lib/getRandomInt.js', () => ({
    default: vi.fn(),
}))

import getRandomInt from '../../../shared/lib/getRandomInt.js'
import getResult from './getResult.js'

const emptyDices = () => ({
    '20': 0, '12': 0, '10': 0, '100': 0, '8': 0, '6': 0, '4': 0, '2': 0,
})

describe('getResult', () => {
    let dispatch

    beforeEach(() => {
        dispatch = vi.fn()
        getRandomInt.mockReset()
    })

    it('does not dispatch anything when no dice are selected', () => {
        getResult(emptyDices(), dispatch)
        expect(dispatch).not.toHaveBeenCalled()
    })

    it('dispatches a "win" result when every rolled die shows its maximum value', () => {
        const dices = { ...emptyDices(), '6': 1 }
        getRandomInt.mockReturnValueOnce(6)

        getResult(dices, dispatch)

        expect(getRandomInt).toHaveBeenCalledWith(1, 6)
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_POPUP_CONTENT',
            payload: {
                values: '(6)',
                description: '1k6',
                total: 6,
                type: 'win',
            },
        })
        expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'CLEAR_DICES_COUNT' })
        expect(dispatch).toHaveBeenCalledTimes(2)
    })

    it('dispatches a "loss" result when every rolled die shows its minimum value (1)', () => {
        const dices = { ...emptyDices(), '6': 1 }
        getRandomInt.mockReturnValueOnce(1)

        getResult(dices, dispatch)

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_POPUP_CONTENT',
            payload: {
                values: '(1)',
                description: '1k6',
                total: 1,
                type: 'loss',
            },
        })
    })

    it('dispatches a "simple" result when the total is neither the min nor the max', () => {
        const dices = { ...emptyDices(), '6': 2 }
        getRandomInt.mockReturnValueOnce(3).mockReturnValueOnce(5)

        getResult(dices, dispatch)

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_POPUP_CONTENT',
            payload: {
                values: '(3 + 5)',
                description: '2k6',
                total: 8,
                type: 'simple',
            },
        })
    })

    it('formats values and description across multiple dice types, in ascending key order', () => {
        const dices = { ...emptyDices(), '6': 1, '4': 1 }
        // numeric-key iteration order is 4, 6 (ascending), not insertion order
        getRandomInt.mockReturnValueOnce(3).mockReturnValueOnce(2)

        getResult(dices, dispatch)

        expect(getRandomInt).toHaveBeenNthCalledWith(1, 1, 4)
        expect(getRandomInt).toHaveBeenNthCalledWith(2, 1, 6)
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_POPUP_CONTENT',
            payload: {
                values: '(3) + (2)',
                description: '1k4 + 1k6',
                total: 5,
                type: 'simple',
            },
        })
    })

    it('ignores a dice type with a negative count instead of producing a malformed result (bugreport.md #4 fix)', () => {
        const dices = { ...emptyDices(), '6': 1, '10': -1 }
        getRandomInt.mockReturnValueOnce(4)

        getResult(dices, dispatch)

        expect(getRandomInt).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_POPUP_CONTENT',
            payload: {
                values: '(4)',
                description: '1k6',
                total: 4,
                type: 'simple',
            },
        })
    })

    it('skips dice types with a zero count', () => {
        const dices = { ...emptyDices(), '6': 1, '10': 0 }
        getRandomInt.mockReturnValueOnce(4)

        getResult(dices, dispatch)

        expect(getRandomInt).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_POPUP_CONTENT',
            payload: {
                values: '(4)',
                description: '1k6',
                total: 4,
                type: 'simple',
            },
        })
    })
})
