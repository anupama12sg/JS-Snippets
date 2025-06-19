const testimonials = [
    {
        name: "Emily Johnson",
        photoUrl: "https://plus.unsplash.com/premium_photo-1723914103780-be999591810e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8MHx8fDA%3D",
        text: "Apple's McBook is a must-have for anyone seeking an efficient & innovative solution. The sleek design & powerful performance sets it apart from the rest."
    },
    {
        name: "Sarah Reynolds",
        photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "iPhone exceeded all my expectations. The sleek design and advanced features make it a standout product."
    },
    {
        name: "Georgia Miller",
        photoUrl: "https://plus.unsplash.com/premium_photo-1723867331866-e112500178a4?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Since purchasing my new iPad from Apple, my productivity has soared. The sleek design and user-friendly interface make it a joy to use for both work and play. "
    }
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const userNameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx]
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    userNameEl.innerHTML = name;
    idx++
    if (idx === testimonials.length) {
        idx = 0;
    }
        setTimeout(() => {
            updateTestimonial()
        }, 5000)
}