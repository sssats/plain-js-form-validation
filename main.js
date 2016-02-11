function ready() {
    var currentStep = document.getElementsByClassName('active')[0];
    var currentStepNumber = parseInt(document.getElementsByClassName('active')[0].getAttribute('data-step-id'));

    document.getElementById('main').addEventListener('focusin', function (ev) {
        var target = ev.target;
        target.parentElement.classList.add('focused');
    });

    document.getElementById('main').addEventListener('focusout', function (ev) {
        var target = ev.target;
        target.parentElement.classList.remove('focused');

    });

    document.getElementById('main').addEventListener('click', function (ev) {
        var target = ev.target;
        if (target.className.indexOf('submit') === -1) return false;


        var steps = document.getElementsByClassName('step');

        for (var i = 0; i < steps.length; i++) {
            if (steps[i].getAttribute('data-step-id') == currentStepNumber + 1) {
                currentStep.classList.remove('active');
                steps[i].classList.add('active');
                currentStep = steps[i];
                currentStepNumber++;
                break;
            }
        }

    });


}

document.addEventListener("DOMContentLoaded", ready);