module.exports = {
    rules: {
        semi: ['error', 'always'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        htmlSingleAttributePerLine: 'off',
        'array-bracket-newline': 'off',
        'array-element-newline': 'off',
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'beside',
                multiline: 'beside',
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 10,
                },
                multiline: {
                    max: 10,
                },
            },
        ]
    }
};