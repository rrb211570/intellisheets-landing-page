
let sceneTriggers = {
    INITIAL_SCENE: [{ endpointID: 'INITIAL_SCENE', pos: 70, animationName: 'animation1' }],
    EXAMPLE_DASHBOARDS: [{ endpointID: 'EXAMPLE_DASHBOARDS', pos: 160, animationName: 'animation3' }],
    COMPANY_BANNERS: [{ endpointID: 'COMPANY_BANNERS', pos: 140, animationName: 'animation2' }],
    DASHBOARD_BUILDER: [{ endpointID: 'DASHBOARD_BUILDER', pos: 140, animationName: 'animation5' }],
    EDITOR: [{ endpointID: 'EDITOR', pos: 160, animationName: 'animation4' }],
    MASTER_PANEL: [{ endpointID: 'MASTER_PANEL', pos: 140, animationName: 'animation6' }],
    QUOTES: [{ endpointID: 'QUOTES', pos: 140, animationName: 'animation7' }],
    SIGNUP: [{ endpointID: 'SIGNUP', pos: 140, animationName: 'animation8' }],
};
let triggerPositions = [];

function populateTriggers(triggerPositions, sceneTriggers) {
    for (let triggerArr of Object.values(sceneTriggers)) {
        triggerPositions.push(...triggerArr);
    }
}
populateTriggers(triggerPositions, sceneTriggers);

let animations = new Map([
    ['animation1', {
        scene0_stage0__mainMessage: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation2', {
        scene0_stage1__mainMessage: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation3', {
        scene0_stage2__desktopDashboard: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation4', {
        scene1__mainMessage: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        },
        scene1__editor: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation5', {
        scene2__mainMessage: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        },
        scene2__builder: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation6', {
        scene3__mainMessage: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        },
        scene3__controlPanel: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation7', {
        scene4__quoteSlider: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }],
    ['animation8', {
        scene5__signUp: {
            prev: { classesToAdd: [], classesToRemove: ['active'] },
            next: { classesToAdd: ['active'], classesToRemove: [] }
        }
    }]
]);

const NO_EVENT = 0;
const EVENT_OCCURRED = 1;
let triggerPositionsIndex = -1;
function choreograph() {
    console.log(triggerPositionsIndex);
    if (applyPrevTriggers() == NO_EVENT) {
        applyNextTriggers();
    }
}

function applyPrevTriggers() {
    if (triggerPositionsIndex > -1) {
        let currentPos = getDistanceOfWindowToEndpoint(triggerPositionsIndex);
        let triggerPos = getDistanceOfTriggerToEndpoint(triggerPositionsIndex);
        if (triggerPos < currentPos) {
            applyAnimation(triggerPositionsIndex, 'prev');
            applyPrevTriggers(triggerPositionsIndex--);
            return EVENT_OCCURRED;
        } else return NO_EVENT;
    } else return NO_EVENT;
}

function applyNextTriggers() {
    if (triggerPositionsIndex < triggerPositions.length - 1 && triggerPositions.length > 0) {
        let currentPos = getDistanceOfWindowToEndpoint(triggerPositionsIndex + 1);
        let triggerPos = getDistanceOfTriggerToEndpoint(triggerPositionsIndex + 1);
        if (triggerPos > currentPos) {
            applyAnimation(triggerPositionsIndex + 1, 'next');
            applyNextTriggers(triggerPositionsIndex++);
            return EVENT_OCCURRED;
        } else return NO_EVENT;
    } else return NO_EVENT;
}

function getDistanceOfWindowToEndpoint(triggerPositionsIndex) {
    let endpoint = document.querySelector(`#${triggerPositions[triggerPositionsIndex].endpointID}`);
    return endpoint.getBoundingClientRect().top;
}

function getDistanceOfTriggerToEndpoint(triggerPositionsIndex) {
    let windowHeight = window.innerHeight;
    return triggerPositions[triggerPositionsIndex].pos * windowHeight / 100;
}

function applyAnimation(triggerPositionsIndex, direction) {
    let animationName = triggerPositions[triggerPositionsIndex].animationName;
    for (let [elemID, classApplications] of Object.entries(animations.get(animationName))) {
        let elem = document.querySelector(`#${elemID}`);
        for (let name of classApplications[direction].classesToAdd) {
            elem.classList.add(name);
        }
        for (let name of classApplications[direction].classesToRemove) {
            elem.classList.remove(name);
        }
    }
}

export { choreograph };