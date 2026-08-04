interface BugReport{
id:number;
title: string;
severity: string;
stepsToReproduce: string[]
}

const bugReport1: BugReport={
    id: 1,
    title:"title",
    severity: "High",
    stepsToReproduce: ["step", "step1"]
};

const bugReport2: BugReport={
    id: 2,
    title:"title",
    severity: "High",
    stepsToReproduce: ["step", "step1"]
};

const bugReport3: BugReport={
    id: 1,
    title:"title",
    severity: "High",
    stepsToReproduce: ["step", "step1"]
}