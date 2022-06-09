// code your solution here
function superbowlWin (array) {
    const result =array.find (array =>(array.result=== 'W'));
    if (result === undefined) {
        return undefined;
    }
else {
    return result.year
}
}