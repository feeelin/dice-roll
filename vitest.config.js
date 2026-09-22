import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'node',
        include: ['src/utils/**/*.test.js', 'src/store/**/*.test.js'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'json-summary'],
            include: ['src/utils/**/*.js', 'src/store/reducers/**/*.js'],
            thresholds: {
                lines: 100,
                statements: 100,
                functions: 100,
                branches: 100,
            },
        },
    },
})
