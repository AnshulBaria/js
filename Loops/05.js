// const Names = ["js","python","java","cpp"];
// Names.forEach(function(val){
//     console.log(val);
// })

const coding = ["js","python","java","cpp"];
coding.forEach((val)=>{
    // console.log(val);
})

function print(val){
    // console.log(val);
}
coding.forEach(print);

coding.forEach((val,index,array)=>{
    // console.log(`${index} : ${val} ${array}`);
})

const users = [
    {language:"javascript",
    languageFileExtension:".js"},
    {language:"java",
    languageFileExtension:".java"},
    {language:"python",
    languageFileExtension:".py"},
    ];
users.forEach((item)=>{
    console.log(item.language);
    console.log(item.languageFileExtension);
})

