const headerGen = document.getElementById("headerGen")
const header = (function(param) {return param[0].replace(/\n|\r/g, "");})`
<nav>
    <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/about/">ABOUT</a></li>
        <li><a href="/history/">HISTORY</a></li>
        <li><a href="/works/">WORKS</a></li>
        <li><a href="/members/">MEMBERS</a></li>
    </ul>
</nav>`
headerGen.insertAdjacentHTML("afterbegin", header)