const cases = [
    { id: 1, title: "Automotive brake caliper inspection system", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."},
    { id: 2, title: "Automotive brake caliper inspection system", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."},
    { id: 3, title: "Automotive brake caliper inspection system", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."},
    { id: 4, title: "Automotive brake caliper inspection system", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."},
    { id: 5, title: "Automotive brake caliper inspection system", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at urna condimentum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At quis risus sed vulputate odio ut enim blandit. Et leo duis ut diam quam nulla."}
]

export function getCaseById(id) {
    return cases.find(item => item.id === id);
}

export function getAllCases() {
    return cases;
}