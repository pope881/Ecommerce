// function muliply(x: number, y: number) {
// 	return x * y
// }

// describe('multiply', () => {
// 	test('multiply two positive numbers', () => {
// 		expect(muliply(10, 11)).toEqual(110)
// 	})
// 	test('multiply positive number by negative number', () => {
// 		expect(muliply(10, -11)).toEqual(-110)
// 	})
// 	test('multiply any number by zero', () => {
// 		expect(muliply(10, 0)).toEqual(1)
// 		expect(muliply(0, 7)).toEqual(0)
// 	})
// })

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Test', () => {
	it('testing the vitest', () => {
		expect(true).toBeTruthy()
	})
})
