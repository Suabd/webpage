function cityStateAddress(City, state){
    let address = `${City}, ${state.toUpperCase()}` // wi -> Wi
    return address
}

console.log(cityStateAddress('Minneapolis', ' mn'))
let address = cityStateAddress('Seatle', 'Wa')
console.log(address)

function isMinnesotaZip(code) {
    // All MNN Zip are between these: 55001 and 56763 
    if (code >= 55001 && code <= 56763) {
        return true
} else {
    return false
 }
}

function valiGPA(gpa){
    if(gpa >= 0 && gpa <= 4){
        return true
    } else{
        return false
    }
}
console.log(valiGPA(3))
console.log(valiGPA(5))


console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55000))
