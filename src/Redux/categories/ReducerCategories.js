const initialState = {
    categories: [
        { name: 'Electronics', description: 'Here you can find a lot of Electronic products' },
        { name: 'Food', description: 'Here you can find a lot of food choices' }
    ],
    activeCategory: {},
}

export  function ReducerCategories(state = initialState, action) {

    const { payload, type } = action;

    switch (type) {
        case 'ChangeActive':
            let modified = {};

            state.categories.forEach(item => {
                if (item.name === payload) {
                    modified = item;
                }
            });
            return {
                categories: state.categories,
                activeCategory: modified
            };
        default:
            return state;
    }
}


export function changeSelected(name) {
    return {
        type: 'ChangeActive',
        payload: name
    }
}