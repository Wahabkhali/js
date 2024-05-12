function table(){
    let TABLE_NUM = document.querySelector("#TABLE_NUM");
    let ENDING_NUM = document.querySelector("#ENDING_NUM");
    let H3 = document.querySelector("#PRINT")
    if(TABLE_NUM.value === "" && ENDING_NUM.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "PLEASE PUT THE VALUE IN INPUT!",
          });
    }
else{
    for (let i = 1; i <= ENDING_NUM.value; i++) {
        H3.innerText += `${TABLE_NUM.value} X ${i} =  ${TABLE_NUM.value * i }\n `
     }
}
ENDING_NUM.value = "";
TABLE_NUM.value = "";
}
