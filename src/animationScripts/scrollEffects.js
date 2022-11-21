import { revealPrev, revealNext } from "../components/Body/scenes/Intro/stages/stage1/Stage1";

// scrollEffects.js
const NO_EVENT = 0;
const EVENT_OCCURRED = 1;
let sectionIndex = -1;

let animations = [
    {
        sectionID: 'INITIAL_SCENE',
        triggerPos: 70,
        animationElems: {
            intro_stage0__mainMessage: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'EXAMPLE_DASHBOARDS',
        triggerPos: 200,
        animationElems: {
            intro_stage1__desktopDashboard: {
                prev: { classesToAdd: ['desktopDashboardTransition', 'releaseTop'], classesToRemove: ['reveal', 'fix'] },
                next: { classesToAdd: ['reveal', 'fix'], classesToRemove: ['releaseTop'] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'EXAMPLE_DASHBOARDS',
        triggerPos: 180,
        animationElems: {
            intro_stage1__mobileDashboard: {
                prev: { classesToAdd: ['mobileDashboardTransition'], classesToRemove: [] },
                next: { classesToAdd: [], classesToRemove: ['mobileDashboardTransition'] }
            },
            intro_stage1__desktopDashboard: {
                prev: { classesToAdd: ['desktopDashboardTransition'], classesToRemove: [] },
                next: { classesToAdd: [], classesToRemove: ['desktopDashboardTransition'] }
            }
        },
        scriptElems: {
            intro_stage1__desktopDashboard: {
                prev: { functions: [revealPrev] },
                next: { functions: [revealNext] }
            }
        }
    },
    {
        sectionID: 'EXAMPLE_DASHBOARDS',
        triggerPos: 140,
        animationElems: {},
        scriptElems: {
            intro_stage1__desktopDashboard: {
                prev: { functions: [revealPrev] },
                next: { functions: [revealNext] }
            }
        }
    },
    {
        sectionID: 'EXAMPLE_DASHBOARDS',
        triggerPos: 100,
        animationElems: {
            intro_stage1__mobileDashboard: {
                prev: { classesToAdd: ['fix'], classesToRemove: ['releaseBottom'] },
                next: { classesToAdd: ['releaseBottom'], classesToRemove: ['showMobileSlowly', 'fix'] }
            },
            intro_stage1__desktopDashboard: {
                prev: { classesToAdd: ['fix'], classesToRemove: ['releaseBottom'] },
                next: { classesToAdd: ['releaseBottom'], classesToRemove: ['fix'] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'COMPANY_BANNERS',
        triggerPos: 150,
        animationElems: {
            companyBanners__mainMessage: {
                prev: { classesToAdd: [], classesToRemove: ['reveal'] },
                next: { classesToAdd: ['reveal'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'EDITOR',
        triggerPos: 140,
        animationElems: {
            editor__mainMessage: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            },
            editor__img: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'DASHBOARD_BUILDER',
        triggerPos: 140,
        animationElems: {
            dashboardBuilder__mainMessage: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            },
            dashboardBuilder__img: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'MASTER_PANEL',
        triggerPos: 140,
        animationElems: {
            masterPanel__mainMessage: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            },
            masterPanel__img: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'QUOTES',
        triggerPos: 140,
        animationElems: {
            quotes__panel: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
    {
        sectionID: 'SIGNUP',
        triggerPos: 140,
        animationElems: {
            signUp__panel: {
                prev: { classesToAdd: [], classesToRemove: ['active'] },
                next: { classesToAdd: ['active'], classesToRemove: [] }
            }
        },
        scriptElems: {}
    },
];

function choreograph() {
    console.log(sectionIndex);
    if (applyPrevTriggers() == NO_EVENT) {
        applyNextTriggers();
    }
}

function applyPrevTriggers() {
    if (sectionIndex > -1) {
        let currentPos = getDistanceOfWindowToEndpoint(sectionIndex);
        let triggerPos = getDistanceOfTriggerToEndpoint(sectionIndex);
        if (triggerPos < currentPos) {
            applyAnimations(sectionIndex, 'prev');
            applyScripts(sectionIndex, 'prev');
            applyPrevTriggers(sectionIndex--);
            return EVENT_OCCURRED;
        }
    }
    return NO_EVENT;
}

function applyNextTriggers() {
    if (sectionIndex < animations.length - 1 && animations.length > 0) {
        let currentPos = getDistanceOfWindowToEndpoint(sectionIndex + 1);
        let triggerPos = getDistanceOfTriggerToEndpoint(sectionIndex + 1);
        if (triggerPos > currentPos) {
            applyAnimations(sectionIndex + 1, 'next');
            applyScripts(sectionIndex + 1, 'next');
            applyNextTriggers(sectionIndex++);
            return EVENT_OCCURRED;
        }
    }
    return NO_EVENT;
}

function getDistanceOfWindowToEndpoint(sectionIndex) {
    let endpoint = document.querySelector(`#${animations[sectionIndex].sectionID}`);
    return endpoint.getBoundingClientRect().top;
}

function getDistanceOfTriggerToEndpoint(sectionIndex) {
    let windowHeight = window.innerHeight;
    return animations[sectionIndex].triggerPos * windowHeight / 100;
}

function applyAnimations(sectionIndex, direction) {
    for (let [elemID, classApplications] of Object.entries(animations[sectionIndex].animationElems)) {
        let elem = document.querySelector(`#${elemID}`);
        addClassesToElem(elem, classApplications[direction].classesToAdd);
        removeClassesFromElem(elem, classApplications[direction].classesToRemove);
    }
}

function addClassesToElem(elem, classesToAdd) {
    for (let name of classesToAdd) {
        elem.classList.add(name);
    }
}

function removeClassesFromElem(elem, classesToRemove) {
    for (let name of classesToRemove) {
        elem.classList.remove(name);
    }
}

function applyScripts(sectionIndex, direction) {
    for (let [elemID, functionApplications] of Object.entries(animations[sectionIndex].scriptElems)) {
        callFunctions(elemID, animations[sectionIndex].sectionID, functionApplications[direction].functions);
    }
}

function callFunctions(elemID, endpointID, functions) {
    for (let i = 0; i < functions.length; ++i) {
        console.log('applying script');
        functions[i](elemID, endpointID);
    }
}

export { choreograph };