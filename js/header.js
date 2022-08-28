const headerGen = document.getElementById("headerGen")
const header = (function(param) {return param[0].replace(/\n|\r/g, "");})`
<nav>
    <ul>
        <li><a href="../">HOME</a></li>
        <li><a href="../../commander/about/">ABOUT</a></li>
        <li><a href="../../commander/members/">MEMBERS</a></li>
        <li><a href="../../commander/works/">WORKS</a></li>
        <li><a href="../../commander/history/">HISTORY</a></li>
    </ul>
</nav>`
headerGen.insertAdjacentHTML("afterbegin", header)