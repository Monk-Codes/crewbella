function btn() {
    document.getElementById("quote").innerHTML =fetch("https://py.crewbella.com/user/api/profile/chiragbalani").then(res=>res.json())
            .then(res=>{
                const mydata = res.basic;
                document.getElementById('res').innerHTML=`${mydata.name}-${mydata.dob}-Visits:${mydata.visits}`
            })
}
btn()