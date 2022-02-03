export const yesterday = {
    foodLog: {
        breakfast: [
            {
                name: 'eggs',
                amount: 2,
                description: 'fried in olive oil'
            }, 
            {
                name: 'toast',
                amount: 1,
                description: '1 slice, whole wheat bread'
            }, 
            {
                name: 'coffee',
                amount: 3,
                description: 'black coffee, 6oz cup'
            }
        ],
        lunch: [
            {
                name: 'sandwich',
                amount: 1,
                description: 'ham, cheese, tomatoes, pickles, lettuce, mayo'
            },
            {
                name: 'carrots',
                amount: 25,
                description: 'baby carrots'
            }
        ],
        dinner: [
            {
                name: 'pasta',
                amount: 1.5,
                description: 'red sauce pasta with meatballs'
            }, 
            {
                name: 'garlic bread',
                amount: 1,
                description: '1 slice, butter, garlic'
            }, 
            {
                name: 'salad',
                amount: 1,
                description: 'arugula, toasted almonds, honey mustard dressing, goat cheese, radish'
            },
            {
                name: 'beer',
                amount: 1,
                description: 'some ipa, fine'
            }
        ],
        snack: [
            {
                name: 'girl scout cooking',
                amount: 2,
                description: 'samoas'
            }
        ]
    },
    calories: {
        calories: 2150,
        goal: 2000
    },
    marcos: {
        carbs: 150,
        carbsGoal: 100,
        fats: 150,
        fatsGoal: 100,
        protein: 150,
        proteinGoal: 100,
    },
    water: {
        water: 100,
        goal: 120
    },
    fasting: {
        fasting: 16,
        goal: 16
    },
    weight: { 
        weight: 200,
        weighIn: true,
        goal: 180
    },
    steps: {
        steps: 7500,
        goal: 10000
    },
    exercise: [
        {
            type: 'running',
            duration: '24m 13s'
        },
        {
            type: 'walking',
            duration: '32m 30s'
        }
    ],
    sleep: {
        sleep: 8.25,
        goal: 8
    }
}

export const blankDay = {
    foodLog: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: []
    },
    calories: {
        calories: 0,
        goal: 2000
    },
    marcos: {
        carbs: 0,
        carbsGoal: 100,
        fats: 0,
        fatsGoal: 100,
        protein: 0,
        proteinGoal: 100,
    },
    water: {
        water: 0,
        goal: 120
    },
    fasting: {
        fasting: 0,
        goal: 16
    },
    weight: { 
        weight: 0,
        weighIn: false,
        goal: 180
    },
    steps: {
        steps: 0,
        goal: 10000
    },
    exercise: [],
    sleep: {
        sleep: 0,
        goal: 8
    }
}