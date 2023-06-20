const cases = [
    {
        id: 1,
        src: "/case1.jpeg",
        title: "Automotive brake caliper inspection system",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."
    },
    { 
        id: 2,
        src: "/case1.jpeg",
        title: "Automotive brake caliper inspection system",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."
    },
    {
        id: 3,
        src: "/case1.jpeg",
        title: "Automotive brake caliper inspection system",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."
    },
    {
        id: 4,
        src: "/case1.jpeg",
        title: "Automotive brake caliper inspection system",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."
    },
    {
        id: 5,
        src: "/case1.jpeg",
        title: "Automotive brake caliper inspection system",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."
    },
    {
        id: 6,
        src: "/case1.jpeg",
        title: "Automotive brake can system",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."
    }
]

export function getCaseById(id) {
    return cases.find(item => item.id == id);
}

export function getAllCases() {
    return cases;
}