export const addPhoto = imageURL => ({
    type: "ADD_PHOTO",
    payload: {
        imageURL
    }
});

export const hasVotedAction = (id) => ({
    type: "HAS_VOTED",
    payload: {
        id
    }
});

export const init = () => ({
    type: "INIT"
});
