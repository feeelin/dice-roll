import { describe, it, expect, vi, afterEach } from 'vitest'
import getRandomInt from './getRandomInt.js'

describe('getRandomInt', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('returns min when Math.random returns 0', () => {
        vi.spyOn(Math, 'random').mockReturnValue(0)
        expect(getRandomInt(1, 6)).toBe(1)
    })

    it('returns max when Math.random returns just under 1', () => {
        vi.spyOn(Math, 'random').mockReturnValue(0.999999999)
        expect(getRandomInt(1, 6)).toBe(6)
    })

    it('returns a mid-range value for a mid-range random draw', () => {
        vi.spyOn(Math, 'random').mockReturnValue(0.5)
        expect(getRandomInt(1, 6)).toBe(4)
    })

    it('returns the single possible value when min equals max', () => {
        vi.spyOn(Math, 'random').mockReturnValue(0.7)
        expect(getRandomInt(5, 5)).toBe(5)
    })

    it('rounds non-integer bounds with Math.ceil(min) / Math.floor(max)', () => {
        vi.spyOn(Math, 'random').mockReturnValue(0)
        expect(getRandomInt(1.2, 6.8)).toBe(2)
    })

    it('produces only values within [min, max] across many draws with real randomness', () => {
        for (let i = 0; i < 200; i++) {
            const result = getRandomInt(1, 20)
            expect(result).toBeGreaterThanOrEqual(1)
            expect(result).toBeLessThanOrEqual(20)
            expect(Number.isInteger(result)).toBe(true)
        }
    })
})
