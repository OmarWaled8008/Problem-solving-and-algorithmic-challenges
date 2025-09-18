function friend(friends) {
  let arr = [];
  for (const friend of friends) {
    if (friend.length === 4) {
      arr[arr.length] = friend;
    }
  }
  return arr;
}
const input = ["Ryan", "Kieran", "Jason", "Yous"];
console.log(friend(input));
