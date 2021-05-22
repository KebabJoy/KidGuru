function answerGiven(num, context) {
    addAction({
        type: "answer_given",
        number: num
    }, context);
}

function nextTask(num, context) {
    addAction({
        type: "next_task",
    }, context);
}

function animalGiven(anim, context) {
    addAction({
        type: "animal_given",
        animal: anim
    }, context);
}

function goToAnimals(context){
    addAction({
        type: "redirect",
        redirect: 2
    }, context);
}

function goToMathGuru(context){
    addAction({
        type: "redirect",
        redirect: 1
    }, context);
}

function deleteNote(id, context){
    addAction({
        type: "delete_note",
        id: id
    }, context);
}
