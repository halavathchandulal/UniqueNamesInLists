const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

function getUsersIsNotInTheList_2(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  return [...set1].filter((user) => !set2.has(user));
}

function getUsersIsNotInTheList_1(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  return [...set2].filter((user) => !set1.has(user));
}

function getTheUsersInBothLists_1_And_2(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  return [...set1].filter((user) => set2.has(user));
}

// Get the results
const uniqueUsersList1 = getUsersIsNotInTheList_2(list1, list2);
const uniqueUsersList2 = getUsersIsNotInTheList_1(list1, list2);
const intersectionUsers = getTheUsersInBothLists_1_And_2(list1, list2);

// Get the Output
console.log(uniqueUsersList1);
console.log(uniqueUsersList2);
console.log(intersectionUsers);
