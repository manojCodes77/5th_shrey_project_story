let arr = [
    {
        dp: "https://images.unsplash.com/photo-1614426007375-904fd4934df9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1534679949574-9c91880cf453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/flagged/photo-1628336358297-50dfd92155c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    }
];

let clutter = "";
arr.forEach(function (element, index) {
    clutter += `<div class="story">
    <img id="${index}" src="${element.dp}" alt="">
</div>`;
});

document.querySelector(".stories").innerHTML = clutter;

document.querySelector(".stories").addEventListener("click", function (event) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[event.target.id].story})`;

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none";
        // document.querySelector("body").style.backgroundImage = "none";
    }, 3000);
});

document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});